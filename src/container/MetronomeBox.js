import React, {Component} from 'react'
import Sound from '../component/Sound'
import Controls from '../component/Controls';

class MetronomeBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sound: "metronome_click_sound.mp3",
            intervalID: null,
            bpm: 200,
            clickerStatus: false
        }
        this.handlePlayStop = this.handlePlayStop.bind(this);
        this.handleBpmChange = this.handleBpmChange.bind(this);
    }
    

    handleBpmChange(bpm) {
        this.setState({bpm: bpm})
        this.metronomePause();
    }

    handlePlayStop() {
        document.getElementsByClassName("ticker")[0].style.animationDuration = `${120 / this.state.bpm }s`;
        if(this.state.intervalID === null) {
            this.metronomeStart();
        } else {
            this.metronomePause();
        }
        // console.log(document.getElementsByClassName("ticker"));
        
    }


    metronomeStart() {
        const audioObj = new Audio(this.state.sound);

        function myCallback(audioObj) {
            audioObj.play();
        }

        const tempo = 60 / this.state.bpm * 1000;
    

        let intervalID = window.setInterval(myCallback, tempo, audioObj)
        this.setState({intervalID: intervalID})
        this.setState({clickerStatus: true});
        // document.getElementsByClassName("on")[0].style.animationPlayState = `running`;
        
    }

    metronomePause() {
        // document.getElementsByClassName("on")[0].style.animationPlayState = `paused`;
        clearInterval(this.state.intervalID);
        this.setState({intervalID: null})
        this.setState({clickerStatus: false})
    }


    render() {
        return (
            
           <div className="page">
               <div className="container">
                   <main className="metronome"><Controls clickerStatus={this.state.clickerStatus} bpm={this.state.bpm} onTempoChange={this.handleBpmChange}/></main>
                    <Sound  handlePlayStop={this.handlePlayStop}/>
                    
               </div>
                <div className="value">
                    <h1>{this.state.bpm}</h1>
                </div>
           </div>
           )
    }
}

export default MetronomeBox;