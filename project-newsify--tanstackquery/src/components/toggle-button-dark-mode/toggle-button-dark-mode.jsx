import './toggle-button-dark-mode.scss'
export default function ButtonToggleDarkMode() {

    function handleDarkMode(event) {

        document.body.style.backgroundColor = document.body.style.backgroundColor === "black" ? "white" : "black";
        document.body.style.color = document.body.style.backgroundColor === "black" ? "white" : "black";
    };

    return (
        <>
            <button className='button_toggle_DarkMode' onClick={handleDarkMode}>Toggle Dark Mode</button>
        </>
    )
}