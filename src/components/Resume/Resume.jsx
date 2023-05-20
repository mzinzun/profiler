import {useEffect,useState} from 'react';
import './Resume.css';

function Resume(props){
    useEffect(()=>{
        console.log('Resume Component is Loaded');
        props.setOpacity(.7);
    
      },[]);
    return (
        <>
            <h1>Resume Page</h1>
        </>
        
    )
}

export default Resume;
