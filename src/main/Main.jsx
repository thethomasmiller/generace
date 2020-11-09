import React from 'react'
import './Main.css'
import Header from '../header/Header'
import Nav from '../nav/Nav'
import AudioPlayer from '../audioplayer/AudioPlayer'

export default function Main() {
  return (
    <div className = 'main'>
      <Header />
      <Nav />
      <AudioPlayer />
      <AudioPlayer />
      <AudioPlayer/>
    </div>
  )
}
