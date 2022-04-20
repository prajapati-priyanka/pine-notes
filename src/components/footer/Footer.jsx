import {BsLinkedin}  from "react-icons/bs";
import {BsGithub}  from "react-icons/bs";
import {BsTwitter}  from "react-icons/bs";
import "./Footer.css"

const Footer = () =>{
    return (
        <footer className="footer-content text-center">
            <h4 className="footer-title lg-text ">Made by Priyanka Prajapati</h4>
            <p className="footer-text md-text">You can connect with me on:</p>
            <div className="footer-links header-links lg-text">
                <ul>
                    <li><a href="https://github.com/prajapati-priyanka"> <BsLinkedin /></a></li>
                    <li> <a href="https://www.linkedin.com/in/priyanka-prajapati-853098146/"> <BsGithub /> </a></li>
                    <li> <a href="https://www.linkedin.com/in/priyanka-prajapati-853098146/"> <BsTwitter /> </a></li>
                </ul>
            </div>
        </footer>
    )
}

export {Footer}