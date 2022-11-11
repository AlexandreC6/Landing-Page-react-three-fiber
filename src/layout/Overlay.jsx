import React from 'react'
import './style.css'

export default function Overlay() {
  return (
    <container className='container'>
      <section className='top-left'>
        <h1>Nike</h1>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fnike%2Fnike_PNG11.png&f=1&nofb=1&ipt=4ed2d37c477722cede2b8c99afcb731501c221044d48e3fd59858f87ec511c94&ipo=images" alt="logo nike" />
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
