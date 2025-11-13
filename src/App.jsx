import { useState } from 'react';
import './App.css'

function Astagfirullah() {
    return (
    <button className="button-counter" onClick={ZikrButton}>
        <p className="line-one-arabic">أستغفر الله</p>
        <span className="line-one-english">"I ask God for forgiveness"</span>
    </button>
    )
}

function Count() {
    return (
        <p>Count</p>
    )
}

function App() {
  return (
    <>
      <Astagfirullah />
      <Count />
    </>
  )
}

export default App
