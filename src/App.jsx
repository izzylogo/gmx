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
        head="Eskalation der Gewalt: Bewohner fliehen aus Carrefour"
        detail="Carrefour, ein Viertel in der haitianischen Hauptstadt Port-au-Prince, wird erneut von Bandenangriffen heimgesucht. Die Bewohner sind gezwungen, ihre Häuser zu verlassen, während die Gewalt im Viertel weiter eskaliert."
      
        img2="https://i0.gmx.net/image/454/38565454,pd=2,h=170,w=300/donald-trump.jpg"
        title2="US-Politik"
        head2="Häftling Trump und das Polizeifoto: Wie ihm das Gesetzlosen-Image nutzt"
      />
      <News
        topic="Unterhaltung"
        img1={"https://i0.gmx.net/image/290/38566290,pd=1,h=360,w=630/helene-fischer-tour-rausch.jpg"}
        title1="Schlager"
        head="Nach Verletzung und Konzertabbruch: Helene Fischer meldet sich zurück"
        detail="Der Schrecken war groß, als Helene Fischer vor zwei Monaten wegen einer Verletzung ein Konzert abbrechen musste. In Köln kehrt sie nun auf die Bühne zurück - mit viel Energie, Akrobatik und Gefühl."
      
        img2="https://i0.gmx.net/image/684/38565684,pd=1,h=170,w=300/octavian.jpg"
        title2="Music"
        head2={`Girl on the Horse" conquers the top of the charts`}
      />
      <News
        topic="Sports"
        img1={"https://i0.gmx.net/image/056/38566056,pd=2,h=360,w=630/rb-leipzig-vfb-stuttgart.jpg"}
        title1="Bundesliga"
        head="Nach Rückstand: Leipzig demütigt Lieblingsgegner Stuttgart"
        detail="Der VfB Stuttgart ist der Lieblingsgegner von RB Leipzig. Doch gegen die Schwaben war es lange zäh. Erst in der zweiten Halbzeit zeigte RB seine Klasse und gewann 5:1."
      
        img2="https://i0.gmx.net/image/578/38565578,pd=2,h=170,w=300/luis-rubiales.jpg"
        title2="Frauenfußball"
        head2={`Spaniens Fußballerinnen streiken - Jenni Hermoso: Habe dem Kuss nicht zugestimmt`}
      />
    </div>
  )
}

export default App
