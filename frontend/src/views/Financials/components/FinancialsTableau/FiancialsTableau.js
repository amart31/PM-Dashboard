import React, {useRef, useEffect} from 'react';

const { tableau } = window;



function FinancialsTableau() {
    const ref = useRef(null);

    const url = "https://prod-useast-a.online.tableau.com/t/kanniappasadasivanpraveenatbahcom/views/Financials/Sheet1?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link";

    function initViz() {
        new tableau.Viz(ref.current, url)
    }

    useEffect(() => {
        initViz();
    },[])
    return (
        <div> 
            <div ref={ref}>
        
            </div>
        </div>
    );

}

export default FinancialsTableau;