import { Link, useLocation } from "react-router";
import NewsifyLogo from '../newsify-logo/newsify-logo'
import './header-home.scss'
import { useEffect } from "react";

import HeroHeadlineSettings from "../header_settings.jsx/hero_headline-settings";

export default function HeaderHome() {
    const location = useLocation();
    return (
        <header>
            <NewsifyLogo />
            {
                location.pathname === "/" &&
                <form className="search-form" action="#">
                    <div className="search-wrap">
                        <input type="search" name="search-news" id="search-news" placeholder="Search news" />
                    </div>
                </form>
            }
            {
                location.pathname === "/settings/" &&
                <HeroHeadlineSettings />

            }
        </header>


    )
}
