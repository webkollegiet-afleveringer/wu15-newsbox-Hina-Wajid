import { Link } from 'react-router-dom'
import './navigation_links.scss'
export default function NavigationLink() {
    return (
        <nav>
            <ul className='nav__ul__links'>
                <li><Link to="/" ><img src="/iconoir_home.svg" alt="Home" /><p>Home</p></Link></li>
                <li><Link to="/archive/" ><img src="/feather_bookmark.svg" alt="Archive" /><p>Archive</p></Link></li>
                <li><Link to="/popular/" ><img src="/feather_star.svg" alt="Popular" /><p>Popular</p></Link></li>
                <li><Link to="/settings/" ><img src="/feather_settings.svg" alt="Settings" /><p>Settings</p></Link></li>
            </ul>

        </nav>




    )
}



