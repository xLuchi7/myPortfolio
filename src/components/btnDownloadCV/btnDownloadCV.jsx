import React from "react";
import './style.css';
import { saveAs } from 'file-saver';
import pdfCV from "../../images/JeanRoa_EN.pdf"

const BtnDownloadCV = () => {
    const handleDownload = () => {
        //const fileURL = '../../images/JeanRoa_EN.pdf'
        saveAs(pdfCV, "Luciano Sessarego CV")
    }
    
    return(
        <button className="btnDownloadCV" onClick={handleDownload}>Download CV</button>
    )
}

export default BtnDownloadCV