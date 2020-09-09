import React, {useRef, useState, useEffect} from 'react';

const { tableau } = window;

function TableauBoard() {

    const ref = useRef(null);
    const url = "https://prod-useast-a.online.tableau.com/t/kanniappasadasivanpraveenatbahcom/views/PMDashboard/ResourceManagement?:origin=card_share_link&:embed=n";

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

export default TableauBoard;