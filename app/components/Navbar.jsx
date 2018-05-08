import React, { PureComponent } from 'react';
import './Navbar.scss'



class Navbar extends PureComponent {
    render() {
        const menuSvg = <svg onClick={this.props._handlePopupVisibility} viewBox="0 0 32 32" width="32px"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
        const facebookSvg = <svg viewBox="0 0 448 512"><path d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"/></svg>
        const instagramSvg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
        const emailSvg = <svg viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"/></svg>
        const contactSvg = <svg viewBox="0 0 448 512"><path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM94 416c-7.033 0-13.057-4.873-14.616-11.627l-14.998-65a15 15 0 0 1 8.707-17.16l69.998-29.999a15 15 0 0 1 17.518 4.289l30.997 37.885c48.944-22.963 88.297-62.858 110.781-110.78l-37.886-30.997a15.001 15.001 0 0 1-4.289-17.518l30-69.998a15 15 0 0 1 17.16-8.707l65 14.998A14.997 14.997 0 0 1 384 126c0 160.292-129.945 290-290 290z"/></svg>
        const fixedMenuSvg = <svg onClick={this.props._handleFixedPopupVisibility} viewBox="0 0 32 32" width="32px"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
        console.log(this.props.fixedPopupMenuOn)
        return <div className='Navbar'> {this.props.pageScrolled ?
            <div className='_navbar-fixed'>
                <div className='_navbar-fixed-menu-icon'>
                    {fixedMenuSvg}
                </div>
                <div className='_navbar-fixed-title'>
                    MAGIC MARK
                </div>
                <div className={'_navbar-fixed-menu-selections'} >
                    <a href='#VariableBox' className='_navbar-fixed-menu-items' onClick={() => this.props._handleCurrentContentChange('about')}>ABOUT
                    </a>
                    <a href='#VariableBox' className='_navbar-fixed-menu-items' onClick={() => this.props._handleCurrentContentChange('photos')}>PHOTOS
                    </a>
                    <a href='#VariableBox' className='_navbar-fixed-menu-items' onClick={() => this.props._handleCurrentContentChange('videos')}>VIDEOS
                    </a>
                    <a href='#VariableBox' className='_navbar-fixed-menu-items' onClick={() => this.props._handleCurrentContentChange('services')}>SERVICES
                    </a>
                </div>
            </div> :
            <div className={this.props.image ? '_navbar' : '_navbar-none'}>
                <div className='_menu-icon'> {menuSvg}
                </div>
                <div className='_title'> MAGIC MARK
                </div>
                <div className='_icons'>
                    {facebookSvg}
                    {instagramSvg}
                    {emailSvg}
                    {contactSvg}
                </div>
            </div>
        }
        <div className={this.props.popupMenuOn ? '_popup-menu' : '_popup-menu-none'}>
            <div className='_menu-item'>
                <a href='#VariableBox' onClick={() => this.props._handleCurrentContentChange('about')}> ABOUT
                </a>
            </div>
            <div className='_menu-item'>
                <a href='#VariableBox'  onClick={() => this.props._handleCurrentContentChange('photos')}> PHOTOS
                </a>
            </div>
            <div className='_menu-item'>
                <a href='#VariableBox' onClick={() => this.props._handleCurrentContentChange('videos')}> VIDEOS
                </a>
            </div>
            <div className='_menu-item'>
                <a href='#VariableBox' onClick={() => this.props._handleCurrentContentChange('services')}> SERVICES
                </a>
            </div>

        </div>
        <div className={this.props.fixedPopupMenuOn ? '_fixed-popup-menu' : '_fixed-popup-menu-none'}>
            <div className='_fixed-menu-item'>
                <a href='#VariableBox' onClick={() => this.props._handleCurrentContentChange('about')}> ABOUT
                </a>
            </div>
            <div className='_fixed-menu-item'>
                <a href='#VariableBox'  onClick={() => this.props._handleCurrentContentChange('photos')}> PHOTOS
                </a>
            </div>
            <div className='_fixed-menu-item'>
                <a href='#VariableBox' onClick={() => this.props._handleCurrentContentChange('videos')}> VIDEOS
                </a>
            </div>
            <div className='_fixed-menu-item'>
                <a href='#VariableBox' onClick={() => this.props._handleCurrentContentChange('services')}> SERVICES
                </a>
            </div>

        </div>
    </div>
    }
}

export default Navbar




