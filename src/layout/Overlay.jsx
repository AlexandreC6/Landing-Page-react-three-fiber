import React from 'react'
import './style.css'

export default function Overlay() {
  return (
    <container className='container'>
      <section className='top-left'>
        <h1>Landing
          <br />
          Page -
        </h1>
        <p>In React & React Three Fiber</p>
      </section>
      <div className="bottom-left">
        A runtime deconstrution
      </div>
      <div className="bottom-right">
        Inspiration and ideas
        <br />
        Fundamentals
        <br />
        Finding models
        <br />
        Preparing them for the web
        <br />
        Displaying and changing models
        <br />
        Animation fundamentals
        <br />
        Effects and making things look good
        <br />
        Performance and time to load
        <br />
      </div>
    </container>
  )
}
