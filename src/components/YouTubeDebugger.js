// Code YouTubeDebugger Component Here

import React from 'react'


class YouTubeDebugger extends React.Component {
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

    bitrateHandler = () => {
        this.setState(previousState => {
            return {
                settings: {
                    ...previousState.settings,
                    bitrate: previousState.settings.bitrate + 4
                }
            }
        })
    }

    resolutionHandler = () => {
        this.setState(previousState => {
            return {
                settings: {
                    ...previousState.settings,
                    video: {
                        resolution: '720p'
                    }
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.bitrateHandler}></button>
                <button className='resolution' onClick={this.resolutionHandler}></button>
            </div>
        )
    }

}

export default YouTubeDebugger
