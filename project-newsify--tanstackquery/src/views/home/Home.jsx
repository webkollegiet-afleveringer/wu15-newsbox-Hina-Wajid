import FooterHome from '../../components/footer-home/footer-home'
import HeaderHome from '../../components/header-home/header-home'
import DropDownDetail from '../../components/drop-down-section/drop-down-detail'
import './home.scss'
/* customed hook */
import useFetchData from '../../hooks/useFetchData'
import useCachedFetch from '../../hooks/use-cachedfetch'
import { useQuery } from '@tanstack/react-query';
import useCachedQuery from '../../hooks/use-cached-query'

export default function Home() {

    const showEuro = localStorage.getItem("euro") || "true";  /* if default value is not there, then use "true" instead of null*/
    const showHealth = localStorage.getItem("health") || "true";
    const showSports = localStorage.getItem("sports") || "true";
    const showBusiness = localStorage.getItem("business") || "true";
    const showTravel = localStorage.getItem("travel") || "true";


    const { data: sportsData, isPending: isPendingSports, error: errorSports }
        = showSports === "true" ? useCachedQuery("sports") : { data: null, isPending: null, error: null };

    const { data: businessData, isPending: isPendingBusiness, error: businessError }
        = showBusiness === "true" ? useCachedQuery("business") : { data: null, isPending: null, error: null };

    const { data: healthData, isPending: isPendingHealth, error: healthError }
        = showHealth == "true" ? useCachedQuery("health") : { data: null, isPending: null, error: null };

    const { data: travelData, isPending: isPendingTravel, error: travelError }
        = showTravel == "true" ? useCachedQuery("travel") : { data: null, isPending: null, error: null };

    const { data: europeData, isPending: isPendingEurope, error: europeError }
        = showEuro == "true" ? useCachedQuery("euro") : { data: null, isPending: null, error: null };



    // sportsData && console.log(sportsData);

    // return isPendingSports ? <p>Loading...</p> : (
    return (
        <>
            <main>
                {showSports === "true" && (!isPendingSports && <DropDownDetail articles={sportsData?.results} category="Sports" />)}
                {showBusiness === "true" && (!isPendingBusiness && <DropDownDetail articles={businessData?.results} category="Business" />)}
                {showHealth === "true" && (!isPendingHealth && <DropDownDetail articles={healthData?.results} category="Health" />)}
                {showTravel == "true" && (!isPendingTravel && <DropDownDetail articles={travelData?.results} category="Travel" />)}
                {showEuro == "true" && (!isPendingEurope && <DropDownDetail articles={europeData?.results} category="Europe" />)}
            </main>
        </>
    )
}

// { sportsData && <DropDownSection articles={sportsData?.results} /> }
// {businessData && <DropDownSection articles={businessData?.results} />}
// { healthData && <DropDownSection articles={healthData?.results} /> }
// { travelData && <DropDownSection articles={travelData?.results} /> }
// { europeData && <DropDownSection articles={europeData?.results} /> }

