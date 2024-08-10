import './App.css'
import CreateNote from './components/CreateNote/CreateNote'
import Header from './components/Header/Header'
import NotesDisplayer from './components/NoteDisplayer/NotesDisplayer'
import { notes } from './Data/Data'

function App() {

  return (
    <>
      <Header />
      <CreateNote />
      {
        <>
        <NotesDisplayer notes={notes} notesType=''/>
        <NotesDisplayer notes={notes} notesType='PINNED'/>
        <NotesDisplayer notes={notes} notesType='OTHERES'/>
        </>
      }

    </>
  )
}

export default App
