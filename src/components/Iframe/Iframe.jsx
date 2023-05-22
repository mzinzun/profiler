import {useEffect,useState} from 'react';

function Iframe(props){
    useEffect(()=>{
        console.log('Iframe Component is Loaded');    
      },[]);
    if (!props.source) {
        return <div>Loading...</div>;
    }

    // const src = props.source;    
    console.log('src',props.source) ;
    return (
        // basic bootstrap classes. you can change with yours.
        <div >
                <iframe src={props.source}></iframe>
                <h1>resume goes here</h1>
        </div>
    );
};

export default Iframe;