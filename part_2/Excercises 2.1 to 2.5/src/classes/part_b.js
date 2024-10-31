import { useState } from 'react'
import Note from "./Components/Note"

const App = ({notes}) => {
  
// const [notess, setNotes] = useState({notes})

    return (
      <div>
        <h1>Notes</h1>
          <ul>
            {notes.map(note => 
             <Note key={note.id} content={note.content}/> 
             )}
          </ul>

      </div>
    )
  }
  
  export default App