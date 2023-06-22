import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Home.css"
function Home()  {
 return <div className="home">
    <div className="about">
        <h2>Hey, My name is Kabeer</h2>
        <div className="prompt">
        <p>I'm a Full Stack Web developer</p>
        <GitHubIcon/>
        <InstagramIcon />
        <FacebookIcon />
        <YouTubeIcon />
        <TwitterIcon />
        <LinkedInIcon />
        </div>
    </div>
    <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
            <li className="item">
                <h2>Front-End</h2>
                <span>React Js,HTML,Vanilla Js,CSS,Redux,Angular,Tailwind Css</span>
            </li>
            <li className="item">
                <h2>Back-End</h2>
                <span>Node Js,MongoDB,ExpressJS</span>
            </li>
            <li className="item">
                <h2>Languages</h2>
                <span>Javascript,Python,TypeScript,Rust</span>
            </li>
        </ol>
        </div>
 </div>
}
export default Home;