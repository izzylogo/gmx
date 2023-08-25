import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Form, Hero, Navbar, News, Update } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="wrap">
      <Navbar/>
      <Hero/>
      <Form/>
      <Update/>
      <News/>
      <News/>
      <News/>
    </div>
  )
}

export default App
