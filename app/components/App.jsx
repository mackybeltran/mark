import React, { PureComponent } from 'react';
import firebase from 'firebase';
import './App.scss';
import Header from './Header.jsx';
import Content from './Content.jsx'
import Footer from './Footer.jsx'

class App extends PureComponent {
    constructor(props) {
        super(props);
        this._handleCurrentContentChange = this._handleCurrentContentChange.bind(this);
        this._handlePhotoForward = this._handlePhotoForward.bind(this);
        this._handlePhotoBack = this._handlePhotoBack.bind(this);
        this._handleVideoForward = this._handleVideoForward.bind(this);
        this._handleVideoBack = this._handleVideoBack.bind(this);
        this.state = {
            currentContent: 'about',
            copy: {},
            photos: '',
            currentPhoto: 0,
            currentPhotoLocation: '',
            currentPhotoLabel: '',
            currentVideo: 0,
            currentVideoLocation: ''
        }
    }

    getData = () => {
        const rootRef = firebase.database().ref('data');
        return rootRef.once('value')
            .then((response) => response.val())
            .then((data) => {
                this.setState({copy: data.copy,
                               photos: data.photos,
                               currentPhotoLocation: data.photos[0].location,
                               currentPhotoLabel: data.photos[0].label,
                               videos: data.videos,
                               currentVideoLocation: data.videos[0].location,
                               closeupCopy: data.copy.services.closeup_show_copy,
                               parlourCopy: data.copy.services.parlour_show_copy
                })
            })
    }

    componentWillMount() {
        this.getData()
    }

    _handleCurrentContentChange(content) {
        this.setState({currentContent: content})
    }

    _handlePhotoForward() {
        this.state.currentPhoto < this.state.photos.length - 1 ? this.setState({currentPhotoLocation: this.state.photos[this.state.currentPhoto + 1].location,
            currentPhotoLabel: this.state.photos[this.state.currentPhoto + 1].label, currentPhoto: this.state.currentPhoto + 1}) :
            this.setState({currentPhotoLocation: this.state.photos[0].location, currentPhotoLabel: this.state.photos[0].label, currentPhoto: 0})

    }

    _handlePhotoBack() {
        this.state.currentPhoto === 0 ? this.setState({currentPhotoLocation: this.state.photos[this.state.photos.length - 1].location,
            currentPhotoLabel: this.state.photos[this.state.photos.length - 1].label, currentPhoto: this.state.photos.length -1}) :
            this.setState({currentPhotoLocation: this.state.photos[this.state.currentPhoto - 1].location,
            currentPhotoLabel: this.state.photos[this.state.currentPhoto -1].label, currentPhoto: this.state.currentPhoto - 1})
    }

    _handleVideoForward() {
        this.state.currentVideo < this.state.videos.length - 1 ? this.setState({currentVideoLocation: this.state.videos[this.state.currentVideo + 1].location,
            currentVideo: this.state.currentVideo + 1}) :
            this.setState({currentVideoLocation: this.state.videos[0].location, currentVideo: 0})
    }

    _handleVideoBack() {
        this.state.currentVideo === 0 ? this.setState({currentVideoLocation: this.state.videos[this.state.videos.length - 1].location,
            currentVideo: this.state.videos.length -1}) :
            this.setState({currentVideoLocation: this.state.videos[this.state.currentVideo - 1].location,
            currentVideo: this.state.currentVideo - 1})
    }

    render() {
        return <div className='app'>
            <div className='_layout'>
                <Header _handleCurrentContentChange={this._handleCurrentContentChange}/>
                <Content currentContent={this.state.currentContent}
                    _handleCurrentContentChange={this._handleCurrentContentChange}
                    copy={this.state.copy}
                    currentPhotoLocation={this.state.currentPhotoLocation}
                    photoForward={this._handlePhotoForward}
                    photoBack={this._handlePhotoBack}
                    photoLabel={this.state.currentPhotoLabel}
                    videoForward={this._handleVideoForward}
                    videoBack={this._handleVideoBack}
                    video={this.state.currentVideoLocation}
                    closeupCopy={this.state.closeupCopy}
                    parlourCopy={this.state.parlourCopy}/>
                <Footer/>
            </div>
        </div>
    }
}

export default App;
