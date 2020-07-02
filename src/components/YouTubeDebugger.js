// Code YouTubeDebugger Component Here
import React, { Component} from 'react'

class YoutubeDebugger extends Component {
  constructor() {
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

  updateBitrate = () => {
    this.setState(prevState => {
      return {
        settings: {
          ...prevState.settings,
          bitrate: 12
        }
      }
    })
  }

  updateResolution = () => {
    this.setState(prevState => {
      return {
        settings: {
          ...prevState.settings,
          video: {
            ...prevState.settings.video,
            resolution: '720p'
          }
        }
      }
    })
  }

  render() {
    return (
      <div className="youtube-debugger">
        <p>Bitrate: {this.state.settings.bitrate}</p>
        <button className="bitrate" onClick={this.updateBitrate}>Set Bitrate To 12</button>
        <p>Resolution: {this.state.settings.video.resolution}</p>
        <button className="resolution" onClick={this.updateResolution}>Lower Resolution</button>
      </div>
    )
  }
}

export default YoutubeDebugger
