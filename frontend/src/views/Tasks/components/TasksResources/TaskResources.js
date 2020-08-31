import React, {useRef, useEffect} from 'react';

const { tableau } = window;


function TasksResources() {

    const ref = useRef(null);
    const url = "https://public.tableau.com/views/PMDashboard_15973367163060/ResourceManagement2?:language=en&:display_count=y&:origin=viz_share_link:showVizHome=no&:embed=true";

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

export default TasksResources;