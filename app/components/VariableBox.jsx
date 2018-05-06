import './VariableBox.scss';
import React, { PureComponent } from 'react';


class VariableBox extends PureComponent {
    constructor(props) {
        super(props);
        this._handleServicesChange = this._handleServicesChange.bind(this);


        this.state = {
            activeServices: 'closeup'
        }
    }

    _handleServicesChange(service) {
        this.setState({activeServices: service})
    }



    render() {


        switch(this.props.currentContent) {
            case 'about':
                return <div id='VariableBox'>
                    <div className='_about-content'>{this.props.copy.about}
                    </div>
                </div>
        break;
            case 'photos':
                return <div id='VariableBox'>
                    <div className='_photo-content'>
                        <div className='_carousel-controls _back' onClick={() => this.props.photoBack()}> &lt;
                        </div>
                        <img src={this.props.photo}/>
                        <div className='_carousel-controls _forward' onClick={() => this.props.photoForward()}>&gt;
                        </div>
                    </div>
                    <div className='_photo-label'>{this.props.photoLabel}
                    </div>
                </div>
        break;
            case 'videos':
                return <div id='VariableBox'>
                    <div className='_video-content'>
                        <div className='_carousel-controls _back' onClick={() => this.props.videoBack()}> &lt;
                        </div>
                        <video controls src={this.props.video}>
                        </video>
                        <div className='_carousel-controls _forward' onClick={() => this.props.videoForward()}>&gt;
                        </div>
                    </div>
                </div>
        break;
            case 'services':
                return <div id='VariableBox'>
                    <div className='_services-content'>
                        <div className='_services-selector'>
                            <div className={this.state.activeServices === 'closeup' ? '_services-header-active' : '_services-header'}
                                onClick={() => this._handleServicesChange('closeup')}>
                                Closeup Show
                            </div>
                            <div className={this.state.activeServices === 'parlour' ? '_services-header-active' : '_services-header'}
                                onClick={() => this._handleServicesChange('parlour')}>
                                Parlour Show
                            </div>
                        </div>
                        <div className='_services-copy'>
                        {this.state.activeServices === 'closeup' ? this.props.closeupCopy : this.props.parlourCopy}
                        </div>
                    </div>
                </div>
        break;
        default:
            return <div>
            </div>


        }
    }
}

export default VariableBox
