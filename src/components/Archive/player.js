import React from "react"
import { Icon } from "@mdi/react"
import {
  mdiPause,
  mdiPlay,
  mdiRewind10,
  mdiFastForward10,
  mdiRewind30,
  mdiFastForward30,
} from "@mdi/js"
import { format, addSeconds } from "date-fns"
import Spinner from "react-spinner-material"
import {
  PlayerWrapper,
  DurationInfo,
  TimeButton,
  TimeButtons,
  PlayerSectionCenter,
  PlayerSectionLeft,
  PlayButton,
  Slider,
  SliderTime,
  PlayerSectionRight,
} from "./player.styles"
import VolumeBars from "./volumeBars"

const formatSeconds = (sec) => format(addSeconds(new Date(0), sec), "mm:ss")

class NewPlayer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      isPlaying: false,
      currentTime: 0,
      currentTimePercent: 0,
      episodeDuration: 0,
      currentVolume: 0.6,
    }

    this.triggerPlayer = this.triggerPlayer.bind(this)
    this.onButtonJump = this.onButtonJump.bind(this)
    this.onPlay = this.onPlay.bind(this)
    this.onPause = this.onPause.bind(this)
    this.onSliderJump = this.onSliderJump.bind(this)
  }

  triggerPlayer() {
    this.state.isPlaying ? this.audioRef.pause() : this.audioRef.play()
    this.setState((prevState) => {
      return {
        isPlaying: !prevState.isPlaying,
      }
    })
  }

  onPlay() {
    this.playingInterval = setInterval(() => {
      this.setState({
        currentTime: this.audioRef.currentTime,
        currentTimePercent:
          (this.audioRef.currentTime / this.audioRef.duration) * 100,
      })
      if (this.audioRef.currentTime >= this.audioRef.duration) {
        this.setState({ isPlaying: false })
        clearInterval(this.playingInterval)
      }
    })
  }

  onPause() {
    clearInterval(this.playingInterval)
  }

  onButtonJump(t) {
    if (this.audioRef.duration) {
      this.audioRef.currentTime = this.state.currentTime + t
      this.setState({
        currentTime: this.audioRef.currentTime,
        currentTimePercent:
          (this.audioRef.currentTime / this.audioRef.duration) * 100,
      })
    }
  }

  onSliderJump(e) {
    if (this.audioRef.duration) {
      this.audioRef.currentTime =
        (e.nativeEvent.offsetX / this.sliderRef.clientWidth) *
        this.audioRef.duration
      this.setState({
        currentTime: this.audioRef.currentTime,
        currentTimePercent:
          (this.audioRef.currentTime / this.audioRef.duration) * 100,
      })
    }
  }

  render() {
    const {
      isLoading,
      isPlaying,
      currentTime,
      episodeDuration,
      currentTimePercent,
      currentVolume,
    } = this.state

    return (
      <PlayerWrapper>
        <PlayerSectionLeft>
          <PlayButton onClick={this.triggerPlayer}>
            {isLoading ? (
              <Spinner color="#1d1f2d" radius={30} />
            ) : (
              <Icon path={isPlaying ? mdiPause : mdiPlay} />
            )}
          </PlayButton>
          <DurationInfo>
            {formatSeconds(currentTime)}/{formatSeconds(episodeDuration)}
          </DurationInfo>
        </PlayerSectionLeft>
        <PlayerSectionCenter>
          <Slider ref={(x) => (this.sliderRef = x)} onClick={this.onSliderJump}>
            <SliderTime style={{ width: `${currentTimePercent}%` }} />
          </Slider>
          <TimeButtons>
            <TimeButton
              path={mdiRewind30}
              size={1}
              onClick={() => this.onButtonJump(-30)}
            />
            <TimeButton
              path={mdiRewind10}
              size={1}
              onClick={() => this.onButtonJump(-10)}
            />
            <TimeButton
              path={mdiFastForward10}
              size={1}
              onClick={() => this.onButtonJump(10)}
            />
            <TimeButton
              path={mdiFastForward30}
              size={1}
              onClick={() => this.onButtonJump(30)}
            />
          </TimeButtons>
          <audio
            ref={(x) => (this.audioRef = x)}
            src={this.props.url}
            preload="metadata"
            onPlay={this.onPlay}
            onPause={this.onPause}
            onLoadedMetadata={(e) =>
              this.setState({
                episodeDuration: e.target.duration,
                isLoading: false,
              })
            }
          />
        </PlayerSectionCenter>
        <PlayerSectionRight>
          <VolumeBars
            volume={currentVolume}
            setVolume={(vol) => {
              this.audioRef.volume = vol
              this.setState({ currentVolume: vol })
            }}
          />
        </PlayerSectionRight>
      </PlayerWrapper>
    )
  }
}

export default NewPlayer
