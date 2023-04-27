import React from 'react'
import './Hero.css';

function Hero() {
  function handleClick() {
  window.open('http://localhost:3001/', '_blank');
}
  return (
    <section id="hero">
    <div class="hero container">
      <div>
        <h1>Hello, <span></span></h1>
        <h1>We Are <span></span></h1>
        <h1>NGOConnect<span></span></h1>
        <a href="" type="button" class="cta" onClick={handleClick}><span></span><span></span><span></span><span></span>Find NGOs</a>
      </div>
    </div>
    
  </section>
  )
}
export default Hero