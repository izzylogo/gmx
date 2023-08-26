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
      <News
        topic="News"
        img1={"https://i0.gmx.net/image/658/38566658,pd=2,h=360,w=630/haiti.jpg"}
        title1="Haiti"
        head="Escalation of violence: Residents flee Carrefour"
        detail="Carrefour, a neighborhood in the Haitian capital Port-au-Prince, is hit by gang attacks again. Residents are being forced to evacuate their homes as violence continues to escalate in the neighborhood."
      
        img2="https://i0.gmx.net/image/454/38565454,pd=2,h=170,w=300/donald-trump.jpg"
        title2="US Policy"
        head2="Prisoner Trump and the police photo: How the outlaw image uses him"
      />
      <News
        topic="Entertainment"
        img1={"https://i0.gmx.net/image/290/38566290,pd=1,h=360,w=630/helene-fischer-tour-rausch.jpg"}
        title1="Bat"
        head="After injury and cancellation of the concert: Helene Fischer is back"
        detail="The shock was great when Helene Fischer had to cancel a concert two months ago because of an injury. In Cologne she is now returning to the stage - with a lot of energy, acrobatics and feeling."
      
        img2="https://i0.gmx.net/image/684/38565684,pd=1,h=170,w=300/octavian.jpg"
        title2="Music"
        head2={`Girl on the Horse" conquers the top of the charts`}
      />
      <News
        topic="Sports"
        img1={"https://i0.gmx.net/image/056/38566056,pd=2,h=360,w=630/rb-leipzig-vfb-stuttgart.jpg"}
        title1="Bundesliga"
        head="After a deficit: Leipzig humiliates favorite opponents Stuttgart"
        detail="VfB Stuttgart is RB Leipzig's favorite opponent. But against the Swabians it was tough for a long time. Only in the second half did RB show their class and win 5:1."
      
        img2="https://i0.gmx.net/image/578/38565578,pd=2,h=170,w=300/luis-rubiales.jpg"
        title2="women soccer"
        head2={`Spain's soccer players are on strike - Jenni Hermoso: I didn't agree to the kiss`}
      />
    </div>
  )
}

export default App
