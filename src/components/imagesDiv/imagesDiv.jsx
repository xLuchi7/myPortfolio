import React from "react";
import './style.css';
import imgHtml from "../../images/html1.png"
import imgCss from "../../images/css1.png"
import imgJavascript from "../../images/javascript1.png"
import imgReact from "../../images/react1.png"
import imgNode from "../../images/node1.png"
import imgSQL from "../../images/sql1.png"
import imgCmasMas from "../../images/c++1.png"
import imgMongoDB from "../../images/mongo1.png"

const ImagesDiv = () => {
    return(
        <div className="divImagesSkills">
            <img className="images" src={imgHtml} alt="html logo" />
            <img className="images" src={imgCss} alt="html logo" />
            <img className="images" src={imgJavascript} alt="html logo" />
            <img className="images" src={imgReact} alt="html logo" />
            <img className="images" src={imgNode} alt="html logo" />
            <img className="images" src={imgCmasMas} alt="c++ logo" />
            <img className="images" src={imgMongoDB} alt="mongoDB logo" />
            <img className="images" src={imgSQL} alt="html logo" />
        </div>
    )
}
  
export default ImagesDiv;

