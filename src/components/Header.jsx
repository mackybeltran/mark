import React, { PureComponent } from 'react';
import './Header.scss';
import Navbar from './Navbar.jsx';



class Header extends PureComponent {
    constructor(props) {
        super(props);

        this._handleHeaderScroll = this._handleHeaderScroll.bind(this);
        this._handleResize = this._handleResize.bind(this);
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleVideoChange = this._handleVideoChange.bind(this);
        this._handlePopupVisibility = this._handlePopupVisibility.bind(this);
        this._handleLosePopupFocus = this._handleLosePopupFocus.bind(this);
        this._handleFixedPopupVisibility = this._handleFixedPopupVisibility.bind(this);

        this.state = {
            pageScrolled: false,
            noPlayIcon: false,
            image: true,
            popupMenuOn: false,
            fixedPopupMenuOn: false,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this._handleHeaderScroll);
        window.addEventListener('resize', this._handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._handleHeaderScroll);
        window.removeEventListener('resize', this._handleResize);
    }

    _handleHeaderScroll() {
        window.scrollY <= 60 ? this.setState({pageScrolled: false, noPlayIcon: false, fixedPopupMenuOn: false}) : this.setState({pageScrolled: true, noPlayIcon: true, popupMenuOn: false});
    }

    _handleImageChange() {
        this.setState({image: false, popupMenuOn: false})
    }

    _handleVideoChange() {
        this.setState({image: true})
    }

    _handlePopupVisibility() {
        this.state.popupMenuOn ? this.setState({popupMenuOn: false}) : this.setState({popupMenuOn: true})
    }

    _handleLosePopupFocus() {
        this.setState({popupMenuOn: false, fixedpopupMenuOn: false})
    }

    _handleFixedPopupVisibility() {
        this.state.fixedPopupMenuOn ? this.setState({fixedPopupMenuOn: false}) : this.setState({fixedPopupMenuOn: true})
    }

    _handleResize(){
        if (window.outerWidth > 900) {this.setState({fixedPopupMenuOn: false})}


    }

    render() {

        const videoLocation = 'https://firebasestorage.googleapis.com/v0/b/magicmark-223cc.appspot.com/o/videos%2FSuper%20FINAL%20Magic%20Mark%20Demoreel.mp4?alt=media&token=6b013984-6822-4b93-9446-964c3a26bfe5'
        const closeButton = <svg className='_close-button' onClick={this._handleVideoChange} viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"/></svg>
        const playButton = <svg className={this.state.noPlayIcon ? '_noPlay-icon' : '_play-icon'}
                            onClick={this._handleImageChange} viewBox="0 0 512 512"><path d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"/></svg>

        return <div className='Header'>
                <Navbar pageScrolled={this.state.pageScrolled}
                        image={this.state.image}
                        _handlePopupVisibility={this._handlePopupVisibility}
                        _handleFixedPopupVisibility={this._handleFixedPopupVisibility}
                        popupMenuOn={this.state.popupMenuOn}
                        _handleCurrentContentChange={this.props._handleCurrentContentChange}
                        currentContent={this.props.currentContent}
                        fixedPopupMenuOn={this.state.fixedPopupMenuOn}/>

                    { this.state.image  ?
                    <div className='_image-container' onClick={this._handleLosePopupFocus}>
                        {playButton}

                    </div> :
                    <div className='_video-container'>
                        {closeButton}
                        <video autoPlay controls>
                            <source src={videoLocation} type='video/mp4'/>
                        </video>
                    </div>
                    }
            </div>
    }
}

export default Header
