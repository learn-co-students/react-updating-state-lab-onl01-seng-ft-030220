// Code YouTubeDebugger Component Here
import React, { Component, Fragment } from 'react'

class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  changeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  changeResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <Fragment>
      <button className="bitrate" onClick={this.changeBitrate}>Change Bitrate</button>
      <button className="resolution" onClick={this.changeResolution}>Change Resolution</button>
      </Fragment>
    )
  }
}

export default YouTubeDebugger
