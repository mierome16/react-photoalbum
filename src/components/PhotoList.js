import React, { Component } from 'react'
import axios from 'axios'
import 'normalize.css/normalize.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class PhotoList extends Component {
    state = {
        photos: []
        }
        componentWillMount() {
            axios.get("/api/photos").then(resp => {
                this.setState({
                    photos: resp.data
                })
            })
          }
    render() {
        return (
            <>
            </>
        )
    }
}

export default PhotoList