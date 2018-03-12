import React from 'react'
import {DebounceInput} from 'react-debounce-input'
import axios from 'axios'

const API = 'AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA'
const result = 20;

let partialURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet&order=date&maxResults=${result}`

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
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
        const notEmpty = this.inputIsNotEmpty();
        if(notEmpty){
            axios.get(finalURL)
                .then((response) => {
                    const result = response.data.items.map((item) => {
                        if(item.snippet.thumbnails) {
                            return {
                                id: item.id.videoId,
                                title: item.snippet.title,
                                description: item.snippet.description,
                                img: item.snippet.thumbnails.default.url
                            }
                        } else {
                            return {
                                id: item.id.videoId,
                                title: item.snippet.title,
                                description: item.snippet.description,
                                img: 'https://s3.ap-south-1.amazonaws.com/iquppo-image-upload/assets/uploads/1514528162892/IQ_SK_KNR_198-05.png'
                            }
                        }
                    });
                    const filteredResult = result.filter((video) => {
                            return video.id !== undefined;
                    });
                    this.props.onChange(filteredResult);
                    finalURL = '';
                })
                .catch((err) => {
                console.log(err);
                })
        }
    }

    inputIsNotEmpty() {
        const searchString = this.state.searchString;
        return (
            searchString.length > 0
        )
    }

    render() {
        return (
            <label>
                <span className="syncopate forInput">Search:</span>
                <DebounceInput
                    placeholder="Example: The Call of Ktulu"
                    className="input-field"
                    name="search"
                    type="text"
                    debounceTimeout={1200}
                    value={this.state.searchString}
                    onChange={this.handleInputChange}
                />
                <button
                  onClick={this.props.onClick} >
                  VIEW FAVORITES
                </button>
            </label>
        )
    }
}

export default Input;
