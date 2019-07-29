import React, { Component } from 'react'
import axios from 'axios'
import 'normalize.css/normalize.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../styles/singlephoto.css'

class SinglePhoto extends Component {
    state = {
        photos: []
    }

    componentDidMount() {
        let id = this.props.match.params.id
        axios.get(`/api/photos/${id}`).then(resp => {
            console.log(resp.data)
            this.setState({
                photos: resp.data
            })
        })
    }
    goBack = () => {
        this.props.history.goBack()
    }
    render() {
        return (
            <div className="onePhoto">
                <header className="opHeader">
                <button onClick={this.goBack}>Back to Photos</button>
                    <h3>{this.state.photos.name}</h3>
                </header>
            <div className="imageHolder">
                <img src={this.state.photos.imgURL}></img>
            </div>
            </div>
        )
    }
}

export default SinglePhoto