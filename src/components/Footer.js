import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
       <a href="#" target="_"> <GitHubIcon /> </a>
        <InstagramIcon />
        <FacebookIcon />
        <YouTubeIcon />
        <TwitterIcon />
        <LinkedInIcon />
      </div>
      <p>&copy; 2023 Kabeer.com</p>
    </div>
  );
}

export default Footer;
