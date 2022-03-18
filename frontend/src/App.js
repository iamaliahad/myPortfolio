import React from 'react'

import { About, Work, Header, Footer, Testimonial, Skills } from './container'

import { Navbar } from './components'


function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App