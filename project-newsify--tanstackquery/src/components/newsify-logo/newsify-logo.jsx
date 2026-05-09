import { Link } from 'react-router-dom'
import './newsify-logo.scss'

export default function NewsifyLogo() {
    return (
        <>

            <div className="logo-container">
                <Link to="/" >
                    <div className='flex-display'>
                        <img src="/newsify_logo_3.svg" alt="newsify logo" />
                        <h1>Newsify</h1> </div>
                </Link>
            </div>

        </>
    )
}

