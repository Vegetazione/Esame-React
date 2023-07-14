import React from 'react'
import personaggi from './Personaggi'
import { slugify } from './utility'
import { Link } from 'react-router-dom'

function CharacterList() {
  return (
    <section className='w-1/2 m-auto shadow-lg shadow-black '>
    <div className="flex flex-col items-center justify-center my-8  gap-8    p-8 bg-slate-100  rounded-xl">
 {personaggi.map((character,index) =>
 (
    <div className='bg-sky-200 bg-opacity-90 p-8 rounded-xl shadow-md shadow-black' key={index}>
        <h1 className='text-2xl text-black font-bold'>{character.name}</h1>
        <img className='my-8 w-52 h-auto' src={character.image} alt={character.name} />
        <Link to={`/char/${slugify(character.name)}`}> <p className='text-center font-bold text-xl text-slate-700' >More info</p> </Link>

    </div>
 )
 )}

    </div>
    </section>
  )
}

export default CharacterList