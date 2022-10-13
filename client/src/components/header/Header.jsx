import React from 'react'
import './header.css'
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">BlogStore</span>
        <p className="headerSubtitle">A captivating website based on blogging which helps in gathering knowledge of the world.</p>

      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/6535171/pexels-photo-6535171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="Header Image"
      />
    </div >
  )
}