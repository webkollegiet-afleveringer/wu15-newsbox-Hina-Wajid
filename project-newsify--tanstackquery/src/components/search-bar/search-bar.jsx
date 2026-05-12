import './search-bar.scss'
export default function SearchBar() {
    return (
        <>
            <form className="search-form" action="#">
                <div className="search-wrap">
                    <input type="search" name="search-news" id="search-news" placeholder="Search news" />
                </div>
            </form>
        </>
    )

}
