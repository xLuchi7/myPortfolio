import React from "react";
import { useEffect } from "react";
//import { useState } from "react";
import './style.css';

const Navbar = ({isMobile}) =>{

    useEffect(() => {
        const homeIconButton = document.getElementById('navbarHomeIcon');
        const aboutMeIconButton = document.getElementById('navbarAboutMeIcon');
        const myProjectsIconButton = document.getElementById('navbarMyProjectsIcon');
        const contactMeIconButton = document.getElementById('navbarContactMeIcon');

        if(homeIconButton && aboutMeIconButton && myProjectsIconButton && contactMeIconButton){
            homeIconButton.addEventListener('click', () => {
                scrollToSection('home');
            });
            aboutMeIconButton.addEventListener('click', () => {
                scrollToSection('aboutMe');
            });
            myProjectsIconButton.addEventListener('click', () => {
                scrollToSection('myProjects');
            });
            contactMeIconButton.addEventListener('click', () => {
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
        const homeIconButton = document.getElementById('navbarHomeIcon');
        const aboutMeIconButton = document.getElementById('navbarAboutMeIcon');
        const myProjectsIconButton = document.getElementById('navbarMyProjectsIcon');
        const contactMeIconButton = document.getElementById('navbarContactMeIcon');

        if(aboutMeIconButton){
            window.addEventListener("scroll", () => {
                highlightActiveButton();
            })
        }

        function highlightActiveButton(){
            const scrollY = window.scrollY

            const sectionButtonMap = {
                'home': homeIconButton,
                'aboutMe': aboutMeIconButton,
                'myProjects': myProjectsIconButton,
                'contactMe': contactMeIconButton,
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
                        button.style.fill = "#007bff"
                    } else {
                        // Remove the active-button class if it's not in view
                        //button.className.remove('active-button')
                        button.style.fill = "white"
                    }
                }
            }

        }
    })

    if(isMobile){
        return(
            // <div className="toDisplaySidebar">
            // {/* <div onClick={toggleSidebar} className="toDisplaySidebar"> */}
            //     <div className="btnDisplaySidebar">
            //         <div className="shortLine"></div>
            //         <div className="shortLine"></div>
            //         <div className="shortLine"></div>
            //     </div>
            // </div>
            <div className="navbarContainer">
                <svg id="navbarHomeIcon" xmlns="http://www.w3.org/2000/svg" width="32" height="30" fill="white" className="bi bi-house-door-fill navbarIcon" viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
                </svg>
                <svg id="navbarAboutMeIcon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-person-lines-fill navbarIcon" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                </svg>
                <svg id="navbarMyProjectsIcon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-archive-fill navbarIcon" viewBox="0 0 16 16">
                    <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
                </svg>
                <svg id="navbarContactMeIcon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-envelope-check-fill navbarIcon" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z"/>
                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
                </svg>
            </div>
        )
    }else{
        return null
    }
} 

export default Navbar