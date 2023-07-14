import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { slugify } from './utility';
import personaggi from './Personaggi'; 

function CharacterInfo() {
    const {charname}= useParams()
    const persFiltrato= personaggi.filter(el => slugify(el.name) ===charname) //blog vedere

    if (persFiltrato.length== 0) {
        return <div>Personaggio non trovato</div>
    }

    const pers=persFiltrato[0]


  return (
    <section className='w-1/2 m-auto rounded-3xl p-8   '>
        <div className='"flex flex-col items-center text-center  my-8   p-8 bg-slate-300  "'>
        <h1 className="text-red-700 font-serif text-6xl font-extrabold" >CharacterInfo </h1>
    <h2 className='text-4xl font-bold p-4 my-8'>{pers.name}</h2>
    <img className=' mx-auto ' src={pers.image} alt={pers.name} />
    <p className='text-2xl font-bold p-4 my-8'>{pers.text}</p>
    <div>
        <Link to ="/"> 
        <button className='bg-emerald-500 hover:bg-emerald-700 shadow-md shadow-black text-white font-xl p-6 my-8 rounded-lg' >Torna alla Home</button>
         </Link>
    </div>
        </div>
    
    </section>
  )
}

export default CharacterInfo