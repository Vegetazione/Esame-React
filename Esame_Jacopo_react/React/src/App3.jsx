import React, { useEffect, useState } from 'react';

import Note from './componentApp3/Note';

function App3() {
  const [notes, setNotes] = useState(Array(31).fill({}));

  const [day, setDay] = useState(""); //data
  const [sel, setSel] = useState(""); //nota sel
  
  useEffect(() => {
    setNotes([
      { day: 7, note: "imparare Svelte" },
      { day: 10, note: "creare Vite 2.0" },
      { day: 16, note: "sistemare cicalino" },
      { day: 22, note: "abolire le campane" },
      { day: 30, note: "meeting con la gang di Michele" }
    ]);
  }, []);

  function dayChange(e) {
    setDay(e.target.value);
  }

  function noteChange(e) {
    setSel(e.target.value);
  }

  const inserisciNote = () => {
    if (day && sel) {
      const esistenteNota = notes.filter((note) => note.day === Number(day));
      if (esistenteNota.length > 0) {
        const nuovaNotes = notes.map((note) =>
          note.day === parseInt(day)
            ? { ...note, note: sel }
            : note
        );
        setNotes(nuovaNotes);
      }
      else {
        const newNote = { day: parseInt(day), note: sel };
        setNotes([...notes, newNote]);
      }
    }
  };

  const sortedNotes = [...notes].sort((a, b) => a.day - b.day);
 

  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <h2 className='text-6xl font-sans text-extrabold p-4 m-4'>Calendario</h2>
      <div>
        <label className='text-2xl font-sans text-bold mx-16'>Giorno:</label>
        <input className='text-2xl font-sans text-bold border rounded-md hover:bg-cyan-600 border-black p-4 mx-12' type="number" min="1" max="31" value={day} onChange={dayChange} />
      </div>
      <div>
        <label className='text-2xl font-sans text-bold'>Inserisci Nuova Nota:</label>
        <input className='text-2xl font-sans text-bold border rounded-md hover:bg-cyan-400 border-black p-4 m-4' type="text" value={sel} onChange={noteChange} />
      </div>
      <button className='bg-emerald-500 hover:bg-emerald-700 rounded-xl p-8 font-sans text-white shadow-md shadow-black' onClick={inserisciNote}>Inserisci nota</button>

     
      <h3 className='text-2xl font-sans text-bold'>Note salvate:</h3>
      <div className='border border-black rounded-xl bg-emerald-400 p-8 flex flex-col gap-8'>
        {sortedNotes.map((note, index) => (
          <Note key={index} day={note.day} note={note.note} />
        ))}
      </div>
    </div>

      
  
  );
}

export default App3;