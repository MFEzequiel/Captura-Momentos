import { Route, Routes } from 'react-router-dom'
import { Main } from './components/Main'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Nosotros } from './components/Nosotros'
import { Contact } from './components/Contact'
import './css/App.css'
import { Footer } from './components/Footer'

function App () {
  return (
    <>
      <Header />
      <Main>
        <section className='main-section'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </section>
      </Main>
      <Footer />
    </>
  )
}

export default App
