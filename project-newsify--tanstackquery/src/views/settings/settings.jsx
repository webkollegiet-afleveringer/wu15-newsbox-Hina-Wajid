import { Link } from 'react-router-dom'
import './settings.scss'
import NewsifyLogo from '../../components/newsify-logo/newsify-logo'
import FooterHome from '../../components/footer-home/footer-home'
import HeadlineCatagory from '../../components/headline__category/headline-category'

const showEuro = localStorage.getItem("euro" || "true");  /* if default value is not there, then use "true" instead of null*/
const showHealth = localStorage.getItem("health" || "true");
const showSports = localStorage.getItem("sports" || "true");
const showBusiness = localStorage.getItem("business" || "true");
const showTravel = localStorage.getItem("travel" || "true");

/* whenever user click on check- an event is triggered, which is receive in function as event*/
function inputHandler(event) {

    console.log(event.target.checked); /* this will give true if check,  or false, if not checked  */
    console.log(event.target.dataset.category); /* this will  tell what is it in the attribute data-category */
    localStorage.setItem(event.target.dataset.category, event.target.checked);


}



export default function Settings() {
    return (
        <>
            <main>

                <div className='flex-display'><HeadlineCatagory section_name={"Europe"} /><input type='checkbox' data-category="euro" onInput={inputHandler} defaultChecked={showEuro === "true"} /></div>
                <div className='flex-display'><HeadlineCatagory section_name={"Health"} /><input type='checkbox' data-category="health" onInput={inputHandler} defaultChecked={showHealth === "true"} /></div>
                <div className='flex-display'><HeadlineCatagory section_name={"Sports"} /><input type='checkbox' data-category="sports" onInput={inputHandler} defaultChecked={showSports === "true"} /></div>
                <div className='flex-display'><HeadlineCatagory section_name={"Business"} /><input type='checkbox' data-category="business" onInput={inputHandler} defaultChecked={showBusiness === "true"} /></div>
                <div className='flex-display'><HeadlineCatagory section_name={"Travel"} /><input type='checkbox' data-category="travel" onInput={inputHandler} defaultChecked={showTravel === "true"} /></div>




            </main >

        </>
    )
}
/* event function har event ojekt som parameter-
 jab event trigger hota hai tu sirf aik cheez jatee hai function mein, 
 jis ka naam event hai,
 wow object hai jis mein information hoti hain different cheezon ki */
{/* <input type='checkbox' onClick={() => addtoLocalStorage("health")} /> */ }