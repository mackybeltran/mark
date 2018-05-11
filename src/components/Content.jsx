import React, { PureComponent } from 'react';
import './Content.scss';
import VariableBox from './VariableBox.jsx';

class Content extends PureComponent {

    render() {
        return <div className='Content'>
            <div className='_secondary-nav'>
                <div className='_content-header-container'>
                    <div className='_content-header _about'>
                        <div className='_content-header-overlay _about-overlay'>
                            <a href='#VariableBox' className='_content-title' onClick={() => this.props._handleCurrentContentChange('about')}>ABOUT
                            </a>
                        </div>
                    </div>
                </div>
                <div className='_content-header-container'>
                    <div className='_content-header _photos'>
                        <div className='_content-header-overlay _photos-overlay'>
                            <a href='#VariableBox' className='_content-title' onClick={() => this.props._handleCurrentContentChange('photos')}>PHOTOS
                            </a>
                        </div>
                    </div>
                </div>
                <div className='_content-header-container'>
                    <div className='_content-header _videos'>
                        <div className='_content-header-overlay _videos-overlay'>
                            <a href='#VariableBox'className='_content-title' onClick={() => this.props._handleCurrentContentChange('videos')}>VIDEOS
                            </a>
                        </div>
                    </div>
                </div>
                <div className='_content-header-container'>
                    <div className='_content-header _services'>
                        <div className='_content-header-overlay _services-overlay'>
                            <a href='#VariableBox' className='_content-title' onClick={() => this.props._handleCurrentContentChange('services')}>SERVICES
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <VariableBox currentContent={this.props.currentContent}
                        copy={this.props.copy}
                        photo={this.props.currentPhotoLocation}
                        photoForward={this.props.photoForward}
                        photoBack={this.props.photoBack}
                        photoLabel={this.props.photoLabel}
                        videoForward={this.props.videoForward}
                        videoBack={this.props.videoBack}
                        video={this.props.video}
                        closeupCopy={this.props.closeupCopy}
                        parlourCopy={this.props.parlourCopy}/>
        </div>
    }

}

export default Content
