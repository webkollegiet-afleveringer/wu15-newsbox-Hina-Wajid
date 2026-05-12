import { Link, useLocation } from "react-router";
import NewsifyLogo from '../newsify-logo/newsify-logo'
import './header-home.scss'
import { useEffect } from "react";

import HeroHeadlineSettings from "../header_settings.jsx/hero_headline-settings";
import SearchBar from "../search-bar/search-bar";
/* useLocation returns current pathname from url, you can render specific component for each path  */
export default function HeaderHome() {
    const location = useLocation();
    return (
        <header>
            <NewsifyLogo />
            {
                location.pathname === "/" && <SearchBar />

            }
            {
                location.pathname === "/settings/" &&
                <HeroHeadlineSettings />

            }
        </header>


    )
}
