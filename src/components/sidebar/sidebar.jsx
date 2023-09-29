import React from "react";
import { useEffect } from "react";
//import { useState } from "react";
import './style.css';

const Sidebar = ({isMobile}) =>{
   
    useEffect(() => {
        const homeButton = document.getElementById('homeButton');
        const aboutMeButton = document.getElementById('aboutMeButton');
        const myProjectsButton = document.getElementById('myProjectsButton');
        const contactMeButton = document.getElementById('contactMeButton');

        if(homeButton && aboutMeButton && myProjectsButton && contactMeButton){
            homeButton.addEventListener('click', () => {
                scrollToSection('home');
            });
            aboutMeButton.addEventListener('click', () => {
                scrollToSection('aboutMe');
            });
            myProjectsButton.addEventListener('click', () => {
                scrollToSection('myProjects');
            });
            contactMeButton.addEventListener('click', () => {
                scrollToSection('contactMe');
            });
        }
    })

    function scrollToSection(sectionId) {
        const targetSection = document.getElementById(sectionId);
      
        if (targetSection) {
          // Calculate the position to scroll to
          const offset = targetSection.offsetTop;
      
          // Scroll smoothly to the target section
          window.scrollTo({
            top: offset,
            behavior: 'smooth'
          });
        }
    }

    useEffect(() => {
        const btnHome = document.getElementById('homeButton');
        const btnAboutMe = document.getElementById('aboutMeButton');
        const btnMyProjects = document.getElementById('myProjectsButton');
        const btnContactMe = document.getElementById('contactMeButton');

        if(btnAboutMe){
            window.addEventListener("scroll", () => {
                highlightActiveButton();
            })
        }

        function highlightActiveButton(){
            const scrollY = window.scrollY

            const sectionButtonMap = {
                'home': btnHome,
                'aboutMe': btnAboutMe,
                'myProjects': btnMyProjects,
                'contactMe': btnContactMe,
            }

            for (const sectionId in sectionButtonMap) {
                const targetSection = document.getElementById(sectionId);
                const button = sectionButtonMap[sectionId];
            
                if (targetSection) {
                // Check if the current section is in view
                const sectionTop = targetSection.offsetTop;
                const sectionBottom = sectionTop + targetSection.clientHeight;
            
                if (scrollY >= sectionTop && scrollY < sectionBottom) {
                    // Add the active-button class to the button if it's in view
                    //button.className.add('active-button')
                    button.style.backgroundColor = "#007bff"
                } else {
                    // Remove the active-button class if it's not in view
                    //button.className.remove('active-button')
                    button.style.backgroundColor = "rgb(39, 38, 38)"
                }
                }
            }

        }
    })

    if(isMobile){
        return null
    }else{
        return(
            // <div id="sidebar" className="sidebar" style={{
            //     transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)'
            // }}>
            <div className="sidebar" id="sidebar">
                <h3 className="headLine">Luciano Sessarego</h3>
                <div className="line"></div>
                <div className="shortcutsContainer">
                    <div id="homeButton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="white" className="bi bi-house-door-fill houseIcon" viewBox="0 0 16 16">
                            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
                        </svg>
                        <p className="homeText">Home</p>
                    </div>
                    <div id="aboutMeButton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-person-lines-fill aboutMeIcon" viewBox="0 0 16 16">
                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                        </svg>
                        <p className="aboutMeText">About Me</p>
                    </div>
                    <div id="myProjectsButton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-archive-fill projectsIcon" viewBox="0 0 16 16">
                            <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
                        </svg>
                        <p className="projectsText">My Projects</p>
                    </div>
                    <div id="contactMeButton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-envelope-check-fill contactMeIcon" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z"/>
                            <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
                        </svg>
                        <p className="contactMeText">Contact Me</p>
                    </div>
                </div>
                <div className="mediaLinksContainer">
                    <div className="line2"></div>
                    <a className="aGithubIcon" href="https://github.com/xLuchi7" target="blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </a>
                    <a className="aLinkedinIcon" href="https://www.linkedin.com/in/luciano-sessarego-103667252/" target="blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                    </a>
                </div>
            </div>
        )
    }
}

export default Sidebar;