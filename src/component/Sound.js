import React from 'react'

const Sound = (props) => {

    return (
        <div>
            <button onClick={props.handlePlayStop}>Play / Pause</button>
        </div>
    )
}

export default Sound;