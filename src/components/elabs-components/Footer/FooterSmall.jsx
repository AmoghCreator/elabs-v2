import React from "react";
import "./FooterSmall.css";
const links = {
    mail: "elabs.electronics@kiit.ac.in",
    address: "https://goo.gl/maps/2A8t73UmbAkwb9jH7",
    insta: "https://www.instagram.com/elabs.kiit/",
    github: "https://github.com/Kiit-Elabs",
    facebook: "https://www.facebook.com/kiitelabs",
    linkedin: "https://www.linkedin.com/company/kiit-elabs/",
    youtube: "https://www.youtube.com/c/ELabsKIIT",
    discord: "https://discord.gg/8MjM3ss5Pp",
    phone: "+91 99382 82421",
};
const mailHandler = () => {
    window.open(`mailto:${links.mail}`);
};
const addressHandler = () => {
    window.open(`${links.address}`);
};
const instaHandler = () => {
    window.open(`${links.insta}`);
};
const githubHandler = () => {
    window.open(`${links.github}`);
};
const fbHandler = () => {
    window.open(`${links.facebook}`);
};
const linkedinHandler = () => {
    window.open(`${links.linkedin}`);
};
const youtubeHandler = () => {
    window.open(`${links.youtube}`);
};
const discordHandler = () => {
    window.open(`${links.discord}`);
};
const phoneHandler = () => {
    window.open(`tel:${links.phone}`);
};
function FooterSmall() {
    return (
        <div className="footer-container">
            <div className="copyright">
                <div className="copyright-content">
                    <i class="far fa-copyright"></i>
                    <span>&nbsp;E Labs | {new Date().getFullYear()}</span>
                </div>
            </div>
            <div className="made-by">
                Made with <span className="coffee">☕</span> and{" "}
                <span className="heart">❤ </span>
                by E Labs Web Team
            </div>
            <div className="footer-socials">
                <div className="footer-address" onClick={addressHandler}>
                    <i class="fas fa-map-marker-alt"></i>
                </div>
                <div className="footer-phone" onClick={phoneHandler}>
                    <i class="fas fa-phone-alt"></i>
                </div>
                <div className="footer-email" onClick={mailHandler}>
                    <i class="fas fa-at"></i>
                </div>
                <div className="footer-discord" onClick={discordHandler}>
                    <i class="fab fa-discord"></i>
                </div>
                <div className="footer-linkedin" onClick={linkedinHandler}>
                    <i class="fab fa-linkedin"></i>
                </div>
                <div className="footer-github" onClick={githubHandler}>
                    <i class="fab fa-github"></i>
                </div>
                <div className="footer-insta" onClick={instaHandler}>
                    <i class="fab fa-instagram"></i>
                </div>
                <div className="footer-youtube" onClick={youtubeHandler}>
                    <i class="fab fa-youtube"></i>
                </div>
                <div className="footer-fb" onClick={fbHandler}>
                    <i class="fab fa-facebook-square"></i>
                </div>
            </div>
        </div>
    );
}

export default FooterSmall;
