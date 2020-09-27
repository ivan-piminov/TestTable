import React from "react";

const ModeSelector = (props) => {
    const smallData = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
    const bigData = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
    return (
        <div style={{display: 'flex', justifyContent: 'center', paddingTop: '30%'}}>
            <button onClick={() => props.onSelect(bigData)} className="btn btn-success mr-5">Big Data</button>
            <button onClick={() => props.onSelect(smallData)} className="btn btn-success">Small Data</button>
        </div>
    )
};
export default ModeSelector;