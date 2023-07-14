import React from 'react';

function Note({ day, note }) {
    return (
        <div className='bg-slate-300 shadow-md shadow-black p-8 rounded-2xl text-2xl font-sans cursor-pointer hover:bg-slate-400'>
            {day}: {note}
        </div>
    );
}

export default Note;