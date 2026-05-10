
import DropDownDetail from '../../components/drop-down-section/drop-down-detail'
import FooterHome from '../../components/footer-home/footer-home'
import HeaderHome from '../../components/header-home/header-home'
import './home.scss'
/* customed hook */
import useFetchData from '../../hooks/useFetchData'
import useCachedFetch from '../../hooks/use-cachedfetch'
import useCachedQuery from '../../hooks/use-cached-query'

export default function Home() {

    /* we are using a custom hook useCachedQuery which has a TanStack Query*/
    const { data: sportsData, isPending: isPendingSports, errorSports } = useCachedQuery("sports");
    const { data: businessData, isPending: isPendingBusiness, error: businessError } = useCachedQuery("business");
    const { data: healthData, isPending: isPendingHealth, error: healthError } = useCachedQuery("health");
    const { data: travelData, isPending: isPendingTravel, error: travelError } = useCachedQuery("travel");
    const { data: europeData, isPending: isPendingEurope, error: europeError } = useCachedQuery("euro");
    // sportsData && console.log(sportsData);

    // return isPendingSports ? <p>Loading...</p> : (
    return (
        <>
            <main>
                {!isPendingSports && <DropDownDetail articles={sportsData?.results} category="Sports" />}
                {!isPendingBusiness && <DropDownDetail articles={businessData?.results} category="Business" />}
                {!isPendingHealth && <DropDownDetail articles={healthData?.results} category="Health" />}
                {!isPendingTravel && <DropDownDetail articles={travelData?.results} category="Travel" />}
                {!isPendingEurope && <DropDownDetail articles={europeData?.results} category="Europe" />}
            </main>
        </>
    )
}

// { sportsData && <DropDownSection articles={sportsData?.results} /> }
// {businessData && <DropDownSection articles={businessData?.results} />}
// { healthData && <DropDownSection articles={healthData?.results} /> }
// { travelData && <DropDownSection articles={travelData?.results} /> }
// { europeData && <DropDownSection articles={europeData?.results} /> }

