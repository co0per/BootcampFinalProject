import React from 'react'
import {DebounceInput} from 'react-debounce-input'

const API = 'AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA'
const result = 20;

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10

let partialURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet&order=date&maxResults=${result}`

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
            result: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        // We handle input change
        let searchString = this.state.searchString;
        searchString = e.target.value;
        this.setState({
            searchString: searchString
        });

        // Then, we complete de URL and make the Promise.
        // When it is done, we clear the URL so we can do another search
        let finalURL = partialURL + "&q=" + searchString;
        fetch(finalURL)
          .then((response) => response.json())
          .then((responseJson) => {
            //const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
            //const resultyt = responseJson.items.map((obj) => "https://www.youtube.com/watch?v="+obj.id.videoId);
            const resultyt = responseJson.items.map((item) => {
                 return {
                    id: item.id.videoId,
                    link: "https://www.youtube.com/watch?v="+item.id.videoId,
                    title: item.snippet.title,
                    description: item.snippet.description
                 }
            });
            this.props.onChange(resultyt); //not sure about this
            //console.log(resultyt);
            finalURL = '';
          })
          .catch((error) => {
            console.error(error);
          });
    }

    render() {
        return (
            <label>
                <span>Search:</span>
                <DebounceInput
                    placeholder="Example: The Call of Ktulu"
                    className="input-field"
                    name="search"
                    type="text"
                    debounceTimeout={1200}
                    value={this.state.searchString}
                    onChange={this.handleInputChange}
                />
            </label>
        )
    }
}

export default Input;