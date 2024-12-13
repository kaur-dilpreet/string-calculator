import { JSX } from "react";
import "./Header.scss";

const Header = (): JSX.Element => {
    return (
        <div className="app-header app-container">
            <img src="https://cdn.prod.website-files.com/6626410e05635d300b393781/6626470cbc8d6debaaa5adeb_Incubyte%20Logo.svg" alt="logo" className="app-logo" />
        </div>
    );
};

export default Header;