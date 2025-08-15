import React from "react";
import './style.css';
import Sidebar from "../../components/sidebar/sidebar";
//import imgHtml from '../../../static/images/html1.png'
import ImagesDiv from "../../components/imagesDiv/imagesDiv";
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import img4 from '../../images/img4.png'
import mym1 from '../../images/mym1.png'
import mym2 from '../../images/mym2.png'
import mym3 from '../../images/mym3.png'
import utnSVG from '../../images/UTN4.png'
import reactSVG from '../../images/reactjs.svg'
import nodeSVG from '../../images/nodejs2.png'
import javascriptSVG from '../../images/javascript.svg'
import htmlSVG from '../../images/html.svg'
import cssSVG from '../../images/css.svg'
import { useState, useEffect} from "react";
import Navbar from "../../components/navbar/navbar";
import reactCertificate from '../../images/certificadoReact.png'
import javascriptCertificate from '../../images/certificadoJavascript.png'
import backendCertificate from '../../images/certificadoBackend.png'
import webDevCertificate from '../../images/certificadoDesarrolloWeb.png'
import DivContactMe from "../../components/divContactMe/divContactMe"
import BtnDownloadCV from "../../components/btnDownloadCV/btnDownloadCV";

const Home = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 931);

    const handleOpenCertificateClick = (certificateName) => {
        window.open(certificateName, "_blank")
    }

    useEffect(() => {
        // Function to update the state when the window resizes
        const handleResize = () => {
          setIsMobile(window.innerWidth < 931)
        };
    
        // Add a window resize event listener
        window.addEventListener('resize', handleResize)
    
        // Remove the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        }

        //OPEN CERTIFICATE
    }, [])

    return(
        <div>
            <Navbar isMobile={isMobile}/>
            {/* <Navbar /> */}
            <div className="mainContainer">
                <Sidebar isMobile={isMobile}/>
                {/* <Sidebar /> */}
                <div className="scrollPage" id="scrollPage">
                    <section id="home">
                        <div className="homeContent">
                            <h5 className="helloText">Hello, my name is</h5>
                            <h1>Luciano Sessarego</h1>
                            <h6>Fullstack Web Developer & Programmer</h6>
                            <div className="pHomeText">
                            <p>
                                I design and develop modern, responsive websites and applications to meet the needs of each client.
                            </p>
                            </div>
                            <BtnDownloadCV />
                            <a className="aGithubIcon2" href="https://github.com/xLuchi7" target="blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                            </a>
                            <a className="aLinkedinIcon2" href="https://www.linkedin.com/in/luciano-sessarego-103667252/" target="blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                </svg>
                            </a>
                        </div>
                    </section>
                    <section id="aboutMe">
                        <div className="aboutMeContent">
                            <h1 className="aboutMeTitle">About Me</h1>
                            <div className="aboutMeDescription">
                                <div className="aboutMeTextContainer">
                                    <p className="aboutMeTextDescription">
                                        I am a 22-year-old Argentinian Software Developer. I graduated as a Programmer at UTN and I am currently working at Time Solution as a Fullstack Developer, using ASP.NET MVC (JavaScript for the frontend and C# for the backend) and SQL.
                                        I develop customized management systems and dashboards for different clients, I also manage multiple freelance projects such as an e-commerce platform built with React, C#, and SQL.
                                        I have solid foundations in Object-Oriented Programming, strong experience in SQL database design, and knowledge of NoSQL databases such as MongoDB.
                                        I am fluent in English, a native Spanish speaker, and have an advanced level of Portuguese.
                                        I am currently seeking a part-time job opportunity to continue growing professionally.
                                    </p>
                                </div>
                                <p className="myStackTitle">My Stack</p>
                                <ImagesDiv />
                                <h3 className="educationTitle">Education</h3>

                                <div className="divUTNEducation">
                                    <div className="verticalLine"></div>
                                    <div className="divUTNEducationDetails">
                                        <h5 className="h5UTNTitle">UTN Programming Degree</h5>
                                        <img className="utnSVG" src={utnSVG} alt="utn svg" />
                                        <a className="aUTNOpenCertificate" onClick={() => handleOpenCertificateClick()}>Open Certificate</a>
                                    </div>
                                </div>
                                <div className="divReactEducation">
                                    <div className="verticalLine"></div>
                                    <div className="divReactEducationDetails">
                                        <h5 className="h5reactTitle">ReactJS Certificate in Coderhouse</h5>
                                        <img className="reactSVG" src={reactSVG} alt="react svg" />
                                        <a className="aReactOpenCertificate" onClick={() => handleOpenCertificateClick(reactCertificate)}>Open Certificate</a>
                                    </div>
                                </div>
                                <div className="divBackendEducation">
                                    <div className="verticalLine"></div>
                                    <div className="divBackendEducationDetails">
                                        <h5 className="h5backendTitle">Backend Certificate in Coderhouse</h5>
                                        <img className="nodeSVG backendSVGMarginTop" src={nodeSVG} alt="node svg" />
                                        <a className="aNodeOpenCertificate backendSVGMarginTop" onClick={() => handleOpenCertificateClick(backendCertificate)}>Open Certificate</a>
                                    </div>
                                </div>
                                <div className="divjavascriptEducation">
                                    <div className="verticalLine"></div>
                                    <div className="divJavascriptEducationDetails">
                                        <h5 className="h5javascriptTitle">Javascript Certificate in Coderhouse</h5>
                                        <img className="javascriptSVG javascriptSVGMarginTop" src={javascriptSVG} alt="javascript svg" />
                                        <a className="aJavascriptOpenCertificate javascriptSVGMarginTop" onClick={() => handleOpenCertificateClick(javascriptCertificate)}>Open Certificate</a>
                                    </div>
                                </div>
                                <div className="divWebDevEducation">
                                    <div className="verticalLine"></div>
                                    <div className="divWebDevEducationDetails">
                                        <h5 className="h5webDevTitle">Web Dev Certificate in Coderhouse</h5>
                                        <img className="htmlSVG webDevSVGMarginTop" src={htmlSVG} alt="html svg" />
                                        <img className="cssSVG webDevSVGMarginTop" src={cssSVG} alt="css svg" />
                                        <a className="aWebDevOpenCertificate webDevSVGMarginTop" onClick={() => handleOpenCertificateClick(webDevCertificate)}>Open Certificate</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="myProjects">
                        <div className="myProjectsContent">
                            <h1 className="myProjectsTitle">My Experience</h1>
                            <div>
                                <p>
                                    I have been working at <strong>Time Solution</strong> for 2 years, here I am responsible for 
                                    gathering client requirements, designing systems, and developing both the 
                                    frontend and backend as well as the database. During my time here, I have built 
                                    multiple websites and software applications, mainly focused on management systems 
                                    and dashboards. I also implemented integrations with <strong>Mercado Pago</strong> and <strong>AFIP</strong>, 
                                    allowing clients to handle online payments directly within the system.
                                </p>
                                <p>
                                    In addition to my full-time work, I also develop freelance projects. Some examples 
                                    include:
                                </p>
                                <ul>
                                    <li>An e-commerce platform for customizable clothing built with React, C#, and SQL.</li>
                                    <li>A website to track wallet movements during the launch of a token.</li>
                                </ul>

                                <div id="carouselExampleDark" className="carousel carousel-white slide">                                    
                                    <div className="carousel-inner">
                                        <div className="carousel-item active" data-bs-interval="10000">
                                            <img src={img1} className="d-block w-100" alt="..."/>
                                        </div>
                                        <div className="carousel-item" data-bs-interval="2000">
                                            <img src={img2} className="d-block w-100" alt="..."/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={img3} className="d-block w-100" alt="..."/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={img4} className="d-block w-100" alt="..."/>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                    <div className="carousel-indicators" style={{marginLeft: 120}}>
                                        <button type="button" data-bs-target="#carouselExampleWhite" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleWhite" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleWhite" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        <button type="button" data-bs-target="#carouselExampleWhite" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    </div>
                                </div>
                            </div>
                            {/* <div id="mymProject">                               
                                <p className="ventaGamerLink">Muñoz Marchesi Motos:</p>
                                <p className="ventaGamerDesc">Muñoz Marchesi Motos is a management system combined with great dashboards that gives exact, dinamic and clear information 
                                to the client. I developed the 100% of this project that can create buy orders, make payments, import the traceability of motorcycles and much more. In the
                                dashboards the information displayed is dynamic, if you uncheck a "Proveedor" (supplier) the "Ordenes de Compra" (pending purchase orders) will only display 
                                de pending purchase orders from the suppliers that are checked. </p>
                                <div id="carouselExampleDark" className="carousel carousel-dark slide">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active" data-bs-interval="10000">
                                            <img src={mym1} className="d-block w-100" alt="..."/>
                                        </div>
                                        <div className="carousel-item" data-bs-interval="2000">
                                            <img src={mym2} className="d-block w-100" alt="..."/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={mym3} className="d-block w-100" alt="..."/>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div> */}

                            {/* <div className="ventaGamerProject">
                                <p className="ventaGamerLink">An Ecommerce Project: <a href="https://venta-gamer.netlify.app/" target="_blank"> https://venta-gamer.netlify.app</a></p>
                                <p className="ventaGamerDesc">This is a full responsive, fully functional and modern website i developed. Its a classic Ecommerce Web Site where you can Buy
                                the products listed by the client.
                                </p>
                                <div id="carouselExampleDark2" className="carousel carousel-dark slide">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleDark2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleDark2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleDark2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active" data-bs-interval="10000">
                                            <img src={img1} className="d-block w-100" alt="..."/>
                                        </div>
                                        <div className="carousel-item" data-bs-interval="2000">
                                            <img src={img2} className="d-block w-100" alt="..."/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={img3} className="d-block w-100" alt="..."/>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark2" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark2" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>                             */}
                        </div>
                    </section>
                    <section id="contactMe">
                        <DivContactMe />
                    </section>   
                </div>
            </div>
        </div>
    )
}

export default Home