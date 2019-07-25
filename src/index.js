import React, { Component } from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll'

import Style from 'style-it';

export class MimBurger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hamburgerDataState: [],
        }
    }

    validateHamburgerData(data) {
        if (data !== undefined) {
            if ((data !== null)) {
                if (data.length !== 0) {
                    return data
                }
            }
        }
    }
    validateImageData(imgUrl) {
        if ((imgUrl !== null) || (imgUrl !== undefined)) {
            return imgUrl
        }
    }

    whenValidated(data, imgUrl) {
        return this.validateHamburgerData(data) || this.validateImageData(imgUrl)
    }

    componentDidMount() {
        let { hamburgerData, circleImg } = this.props

        if (this.whenValidated(hamburgerData, circleImg)) {
            this.setState({
                circleImgState: circleImg,
            })
        }
    }
    handleLinkChange = () => {
        document.getElementById("nav_toggle").checked = false
    }




    render() {
        let { hamburgerData } = this.props
        if (hamburgerData) {
            return Style.it(
                `              
                .navigation {
                    top: 90vh;
                    position: fixed;
                    left: 1.5vw;
                    z-index: 3000;
                  }
                  .navigation_checkbox {
                    display: none;
                    z-index: 2500;
                  }
                  .navigation_button {
                    display: flex;
                    height: 3.5rem;
                    width: 3.5rem;
                    border-radius: 50%;
                    background: -webkit-radial-gradient(
                      circle,
                      #42acff 0,
                      rgba(66, 172, 255, 0.2) 90%
                    );
                    background: radial-gradient(circle, #42acff 0, rgba(66, 172, 255, 0.2) 90%);
                    position: fixed;
                    z-index: 2500;
                    box-shadow: 0.25rem 0.25rem 1rem rgba(0, 0, 0, 0.1);
                    cursor: pointer;
                    justify-content: center;
                  }
                  .navigation_button span {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                  }
                  .navigation_background {
                    height: 3.5rem;
                    width: 3.5rem;
                    border-radius: 50%;
                    background: -webkit-radial-gradient(
                      circle,
                      #fff 0,
                      #f1f1ff 15%,
                      rgba(241, 241, 255, 0.8) 18%
                    );
                    background: radial-gradient(
                      circle,
                      #fff 0,
                      #f1f1ff 15%,
                      rgba(241, 241, 255, 0.8) 18%
                    );
                    z-index: 2000;
                    -webkit-transition: -webkit-transform 0.5s;
                    transition: -webkit-transform 0.5s;
                    transition: transform 0.5s;
                    transition: transform 0.5s, -webkit-transform 0.5s;
                  }
                  .navigation_nav {
                    height: 100vh;
                    z-index: 150;
                    opacity: 0;
                    width: 0;
                    -webkit-transition: all 0.15s;
                    transition: all 0.15s;
                  }
                  .navigation_list {
                    -webkit-perspective: 150rem;
                    perspective: 150rem;
                    position: relative;
                    bottom: 25vh;
                    left: 22vw;
                    -webkit-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%);
                    z-index: 200;
                  }
                  .navigation_item {
                    display: inline-block;
                    padding: 25px;
                    margin: 5%;
                    text-transform: uppercase;
                    font-size: 18px;
                    background-size: 240%;
                    background-image: -webkit-linear-gradient(330deg, #fff, #fff 50%, #f0f0ff 0);
                    background-image: linear-gradient(120deg, #fff, #fff 50%, #f0f0ff 0);
                    -webkit-transition: all 0.3s ease;
                    transition: all 0.3s ease;
                    border-radius: 4%;
                    font-weight: 900;
                  }
                  .navigation_item:hover {
                    background-position: 100%;
                    color: #fe6b8b;
                    background-color: #000;
                    box-shadow: 10px 10px 5px 3px rgba(0, 0, 0, 0.4);
                  }
                  .navigation_link {
                    font-weight: 100;
                    text-transform: uppercase;
                    font-size: 25px;
                    color: rgba(0, 0, 0, 0.72);
                  }
                  .navigation_checkbox:checked ~ .navigation_background {
                    -webkit-transform: scale(20);
                    transform: scale(20);
                  }
                  .navigation_checkbox:checked ~ .navigation_nav {
                    opacity: 1;
                    width: 100%;
                  }
                  .flex-navbar-hamburger-container {
                    cursor: pointer;
                  }
                  .navigation_list {
                    display: flex;
                    flex-direction: column;
                    top: -45%;
                  }
                  @media (min-width: 1281px) {
                    .navigation_list {
                      left: 10vw;
                      bottom: 16vh;
                    }
                  }
                  @media (min-width: 768px) and (max-width: 1440px) {
                    .background-img {
                      width: 40%;
                    }
                    .navigation_list {
                      left: 10vw;
                      bottom: 20vh;
                    }
                  }
                  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
                    .background-img {
                      width: 30%;
                    }
                  }
                  @media (min-width: 481px) and (max-width: 767px) {
                    .background-img {
                      width: 45%;
                    }
                    .header-main {
                      font-size: 75px;
                    }
                    .third-page {
                      -webkit-clip-path: ellipse(60% 100% at 51% 100%);
                      clip-path: ellipse(60% 100% at 51% 100%);
                    }
                  }
                  @media (min-width: 320px) and (max-width: 480px) {
                    .background-img {
                      width: 65%;
                    }
                    .header-main {
                      font-size: 75px;
                    }
                    .navigation_list {
                      left: 40vw;
                    }
                  }
            `,
                < div className="flex-navbar-hamburger-container" >
                    <div className="navigation">
                        <input type="checkbox" className="navigation_checkbox" id="nav_toggle"></input>
                        <label htmlFor="nav_toggle" className="navigation_button" >
                            <span>
                                {
                                    this.skipCircleImgState ? <img className="navigation_img" src={this.state.circleImgState}>
                                    </img> : null
                                }

                            </span>
                        </label>
                        <div className="navigation_background" >{'\u00A0'}</div>

                        <nav className="navigation_nav">
                            <ul className="navigation_list">
                                {hamburgerData.map((item, index) => {
                                    return (
                                        <AnchorLink
                                            offset='0'
                                            onClick={this.handleLinkChange}
                                            href={item.href}
                                            className="navigation_link"
                                            key={index}

                                        >
                                            <li className="navigation_item">
                                                {item.title}
                                            </li>
                                        </AnchorLink>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                </div >
            )
        }
        if (this.state.hamburgerDataState.length === 0) {
            return (
                <div>
                    <h3> !! Hamburger Alert !! Your Not Passing Right Parameters</h3>
                </div>
            )
        }
    }
}