import React , { useState } from 'react'



function App() {
  const[marioVoto,setMarioVoto]=useState(3)
  const[luigiVoto,setLuigiVoto]=useState(3)

  function marioVotoChange(event) {
    const value = parseInt(event.target.value);
    setMarioVoto(value);
  }

  function luigiVotoChange(event) {
    const value = parseInt(event.target.value);
    setLuigiVoto(value);
  }
  let res=""
  if (marioVoto > luigiVoto) {
    res="Mario Rossi è in vantaggio"
  }
  else if (marioVoto< luigiVoto) {
    res="Luigi Verdi è in vantaggio"
  }
  else
  res="Mario Rossi e Luigi Verdi sono pari"

  return (
    <section className='flex flex-col items-center justify-center gap-10 my-4'>
      <div >
        <h1 className='text-7xl bg-gray-700 p-4 rounded-lg my-10 text-white font-serif font-bold' >Voti Studenti</h1>
      <span  className='text-2xl p-4 rounded-lg mx-10' >Mario Rossi:</span>
      <input className='border border-black rounded-lg mx-8 hover:bg-slate-400 p-8'
          type="number"
          min="1"
          max="10"
          value={marioVoto}
          onChange={marioVotoChange}
        />
      </div>
      <div>
        <label className='text-2xl p-4 rounded-lg mx-10'>Luigi Verdi:</label>
        <input className='border border-black rounded-lg mx-6 hover:bg-slate-200 p-8'
          type="number"
          min="1"
          max="10"
          value={luigiVoto}
          onChange={luigiVotoChange}
        />
      </div>
      <div className='bg-sky-400 rounded-md shadow-black shadow-md p-4 text-3xl my-8'>
        {res}
      </div>
   
    </section>
  )
}

export default App
