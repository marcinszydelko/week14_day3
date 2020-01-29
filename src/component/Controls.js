import React from 'react';

const Controls = (props) => {

    function handleTempoChange(e) {
        props.onTempoChange(e.target.value)
    }

    return (
        <div className="clickingAnimator" >
            <input className={"ticker " + (props.clickerStatus ? 'on' : 'off')} type="range" min="40" max="250" default="120" onChange={handleTempoChange} />
        </div>
    )
}

export default Controls;