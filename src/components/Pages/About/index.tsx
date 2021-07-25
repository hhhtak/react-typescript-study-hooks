import * as React from 'react'
import './About.css'

const About: React.FC = () => {
  const fixedHeaderObserve = () => {
    const headerElement = document.querySelector('#target-header')
    const targetElement = document.querySelector('.js-header-observer')

    if (!headerElement || !targetElement) return

    const observeHandler = (entries: any) => {
      headerElement.setAttribute(
        'data-active',
        String(!entries[0].isIntersecting),
      )
    }

    const headerObserver = new window.IntersectionObserver(observeHandler)
    headerObserver.observe(targetElement)
  }

  document.addEventListener('DOMContentLoaded', fixedHeaderObserve, false)

  return (
    <div>
      <header id="target-header" className="global-header" data-active="false">
        <div>
          <h1 className="logo">Intersection Observer API</h1>
        </div>
      </header>
      <main className="main">
        <div className="contents">
          <div className="contents-item js-header-observer"></div>
          <div className="contents-item"></div>
          <div className="contents-item"></div>
          <div className="contents-item"></div>
          <div className="contents-item"></div>
          <div className="contents-item"></div>
          <div className="contents-item"></div>
          <div className="contents-item"></div>
          <div className="contents-item"></div>
          <div className="contents-item"></div>
          <div className="contents-item"></div>
          <div className="contents-item"></div>
        </div>
      </main>
    </div>
  )
}

export default About
