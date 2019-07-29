import React, { Component } from 'react'
import axios from 'axios'
import 'normalize.css/normalize.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../styles/albumlist.css'



class AlbumList extends Component {
    state = {
        albums: []
        }
        componentWillMount() {
            axios.get("/api/albums").then(resp => {
                this.setState({
                    albums: resp.data
                })
            })
          }


    render() {
        return (
            <div className="album-page">
                <header className="album-header">
                    <h1>My Travel Albums</h1>
                </header>
                <div className="albumBox">
                    {this.state.albums.map(item => (
                        <Link to={`/album/${item.id}`}><div className="albumContainer">
                            <img className="albumcovers" src={item.coverPhoto}></img>
                            <h3 className="albumName">{item.name}</h3>
                            </div></Link>
                    ))}
                </div>
            </div>
        )
    }
}

export default AlbumList