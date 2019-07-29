import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../styles/photogallery.css'

class PhotoGallery extends Component {
    state = {
        albumName: '',
        photos: [],
        albums: []
    }
    
    componentDidMount() {
        let id = this.props.match.params.id
        axios.get(`/api/albums/${id}?_embed=photos`).then(resp => {
            console.log(resp.data)
            this.setState({
                photos: resp.data.photos,
                albumName: resp.data.name,
            })
        
        })
        axios.get("/api/albums").then(resp => {
            this.setState({
                albums: resp.data
            })
        })
    }

    componentWillReceiveProps(newProps) {
        const id = newProps.match.params.id
        axios.get(`/api/albums/${id}?_embed=photos`).then(resp => {
            console.log(resp.data)
            this.setState({
                photos: resp.data.photos,
                albumName: resp.data.name,
            })
        
        })
    }



    render() {
        return (
            <div className="pgpage">
                <header className="pgheader">
                    <Link to='/'><button className="toAlbums">Back to Albums</button></Link>
                    <h3>{this.state.albumName}</h3> 
                </header>
                <div className="pgbody">
                    <aside className="albumNav">
                        <ul className="albumList">
                        {this.state.albums.map(item => (
                            <Link to={`/album/${item.id}`}><li className="albumgrow">{item.name}</li></Link>
                            ))}
                        </ul>
                        </aside>

                
                    <div className="photoContainer">
                    <main>
                        <ul className="photoList">
                        {this.state.photos.map(item => (
                           <Link to={`/photo/${item.id}`}><li><img src={item.imgURL}></img><p>{item.name}</p></li></Link>
                            ))}
                        </ul>
                    </main>
                    </div>
                    </div>


            </div>
        )
    }
}

export default PhotoGallery