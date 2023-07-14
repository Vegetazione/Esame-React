import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './componentApp2/Header'
import CharacterList from './componentApp2/CharacterList'
import CharacterInfo from './componentApp2/CharacterInfo'
import NotFound from './componentApp2/NotFound'
function App2() {
  return (
    <>
    <Router>
        <Header />

        <Routes>
            <Route path='/' element={<CharacterList  />} />
            <Route path='/char/:charname' element={<CharacterInfo />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </Router>
</>
  )
}

export default App2