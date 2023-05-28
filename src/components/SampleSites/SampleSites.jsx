import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import site1 from "./fontawesome.png";
import site2 from "./mikesRemodel.png";
import site3 from "./capstone.png";
import site4 from "./zincom.png";

function SampleSites(props){
    useEffect(()=>{
        console.log('SampleSites component has loaded');
    })
    return (
        <h1>Sample Sites</h1>
    )
};
export default SampleSites;