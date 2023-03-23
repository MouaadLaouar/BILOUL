import './App.scss'
import NavBar from './components/NavBar/NavBar'
import SectionFive from './components/SectionFive/SectionFive'
import SectionFour from './components/SectionFour/SectionFour'
import SectionOne from './components/SectionOne/SectionOne'
import SectionSeven from './components/SectionSeven/SectionSeven'
import SectionSix from './components/SectionSix/SectionSix'
import SectionThree from './components/SectionThree/SectionThree'
import SectionTwo from './components/SectionTwo/SectionTwo'

function App() {
  

  return (
    <div className="App">
      <section id='Section-One'>
        <NavBar />
        <SectionOne />
      </section>

      <section id='Section-Two'>
        <SectionTwo />
      </section>

      <section id='Section-Three'>
        <SectionThree />
      </section>

      <section id='Section-Four'>
        <SectionFour />
      </section>

      <section id='Section-Five'>
        <SectionFive />
      </section>

      <section id='Section-six'>
        <SectionSix />
      </section>

      <section id='Section-Seven'>
        <SectionSeven />
      </section>
    </div>
  )
}

export default App
