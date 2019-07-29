import React, { Component } from 'react'
import axios from 'axios'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// import components
import AlbumList from './AlbumList'
import PhotoList from './PhotoList'
import SinglePhoto from './SinglePhoto'
import PhotoGallery from './PhotoGallery'


class App extends React.Component {
  componentDidMount() {
    axios.get("/api/albums/photos").then(resp => {
      console.log(resp.data)
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={AlbumList}></Route>
          <Route path="/album/:id" component={PhotoGallery}></Route>
          <Route path="/photo/:id" component={SinglePhoto}></Route>
        </div>
      </Router>
    )
  }
}

export default App