import {useEffect,useState} from 'react';
import './Bio.css';
import Home from "../Home";

function Bio(props){
    useEffect(()=>{
        console.log('Bio Component Loaded');
        props.setOpacity(.2);


    },[]);
    return (
        <>
            <h1>The Bio Page</h1>
        </>
    )
}
export default Bio;