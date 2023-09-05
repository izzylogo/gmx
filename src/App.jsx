import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Footer, Form, Hero, Navbar, News, Update } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="wrap">
      <Navbar />
      <Hero />
      <Form />
      <Update />
      <News
        topic="News"
        img1={
          'https://i0.gmx.net/image/242/38595242,pd=8,h=360,w=630/friedrich-merz.webp'
        }
        title1="Politik"
        head="Merz giftet gegen die Grünen und schließt Koalition mit ihnen aus"
        detail="Der CDU-Vorsitzende Friedrich Merz hat in seiner Rede auf dem Volksfest Gillamoos scharf gegen die Regierung geschossen - und die Grünen als Koalitionspartner für die Union ausgeschlossen."
        img2="https://i0.gmx.net/image/800/38594800,pd=3,h=170,w=300/xi-jinping.webp"
        title2="Politik"
        head2="Entscheidung birgt politischen Sprengstoff: Xi Jinping reist nicht zu G20-Gipfel"
      />
      <News
        topic="Unterhaltung"
        img1={
          'https://i0.gmx.net/image/860/38597860,pd=2,h=360,w=630/kourtney-kardashian-travis-barker.webp'
        }
        title1="Stars"
        head="Travis Barker unterbricht Tour: Kourtney Kardashian war wohl im Krankenhaus"
        detail="Der hochschwangeren Kourtney Kardashian soll es nach einem angeblichen Krankenhausaufenthalt besser gehen. Ihr Mann, Travis Barker, hatte zuvor seine Tour mit Blink-182 unterbrechen müssen."
        img2="https://i0.gmx.net/image/944/38597944,pd=1,h=170,w=300/herzogin-meghan.webp"
        title2="Royals"
        head2={`Herzogin Meghan soll an "großem neuen Projekt" arbeiten`}
      />
      <News
        topic="Sports"
        img1={
          'https://i0.gmx.net/image/082/38595082,pd=3,h=360,w=630/min-jae-kim.webp'
        }
        title1="Bayern München"
        head="Bayern-Star Kim: Inspiriert von Stallone und Beckenbauer"
        detail="Auf dem Weg zum Top-Spieler orientierte sich Bayerns Neuzugang Min-jae Kim an der Spielweise von Franz Beckenbauer und wandte zudem Trainingsmethoden aus einem bekannten Hollywood-Film an."
        img2="https://i0.gmx.net/image/718/38595718,pd=4,h=170,w=300.webp"
        title2="England"
        head2={`Lucas Paqueta und der mögliche Wettskandal in England: "Das wäre Wahnsinn"`}
      />
      <Footer />
    </div>
  )
}

export default App
