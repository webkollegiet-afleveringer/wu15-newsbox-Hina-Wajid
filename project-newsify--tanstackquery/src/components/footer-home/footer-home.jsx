import { NavLink } from 'react-router-dom'
import './footer-home.scss'
import HomeIcon from '../icons/home-icon'
import StarIcon from '../icons/star-icon'
import SettingsIcon from '../icons/settings-icon'
import BookmarkIcon from '../icons/bookmark-icon'

export default function FooterHome() {
    const color = "#404040"
    return (
        <footer>
            <nav className="primaryNavigation">
                <ul className="primaryNavigation__menu">
                    <li className="primaryNavigation__menuItem">
                        <NavLink to="/" className={({ isActive }) => isActive ? "primaryNavigation__menuLink--active" : "primaryNavigation__menuLink"}>
                            <HomeIcon color={color} />
                            Home
                        </NavLink>
                    </li >
                    <li className="primaryNavigation__menuItem"><NavLink to="/archive/" className={({ isActive }) => isActive ? "primaryNavigation__menuLink--active" : "primaryNavigation__menuLink"}>
                        <BookmarkIcon color={color} />
                        Archive
                    </NavLink>
                    </li>
                    <li className="primaryNavigation__menuItem">
                        <NavLink to="/popular/" className={({ isActive }) => isActive ? "primaryNavigation__menuLink--active" : "primaryNavigation__menuLink"}>
                            <StarIcon color={color} />
                            Popular
                        </NavLink>
                    </li>
                    <li className="primaryNavigation__menuItem">
                        <NavLink to="/settings/" className={({ isActive }) => isActive ? "primaryNavigation__menuLink--active" : "primaryNavigation__menuLink"}>
                            <SettingsIcon color={color} />
                            Settings
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </footer>
    )
}
