import { JSX } from "react";
import "./Footer.scss";

const Footer = (): JSX.Element => {
    return (
        <div className="app-footer">
            <div className="app-container">
                © 2024 Incubyte. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;