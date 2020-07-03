import React, { Component } from 'react'

class YouTubeDebugger extends Component{
    constructor(){
        super()
        this.state = {
            errors: [],
                user: null,
                settings: {
                  bitrate: 8,
                  video: {
                    resolution: '1080p'
                  }
                
            }
        }


        
    }

  handleBitrateClick = () => {
    this.setState ({
       settings: {
           ...this.state.settings,
           bitrate: this.state.settings.bitrate + 4
       }
    })
  
}



  handleResClick = () => {
    this.setState({
        settings: {
            ...this.state.settings,
            video: {
                resolution: '720p'
            }
        }
    })
}

    render(){
        return(
            <div>
            <button className='bitrate' onClick={this.handleBitrateClick}></button>
            <button className='resolution' onClick={this.handleResClick}></button>
            </div>
        )
    }





}

export default YouTubeDebugger
