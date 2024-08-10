import './App.css'
import ColorPalette from './components/commmon/ColorPallete/ColorPalette'
import CreateNote from './components/CreateNote/CreateNote'
import Header from './components/Header/Header'
import Notes from './components/NoteDisplayer/NotesDisplayer'

function App() {

  return (
    <>
      <Header />
      <CreateNote />
      <Notes
        id={1}
        title={"Music"}
        content=
        {"Music has been an integral part of human culture for centuries. It has the power to evoke emotions and memories, transcending language barriers."}
        color={"#ADD8E6"}
        image={"https://img.freepik.com/free-photo/volumetric-musical-background-with-treble-clef-notes-generative-ai_169016-29576.jpg"}
        pinned={false}
      />
      <Notes
        id={1}
        title={"Music"}
        content=
        {"Music has been an integral part of human culture for centuries. It has the power to evoke emotions and memories, transcending language barriers."}
        color={"#ADD8E6"}
        image={"https://img.freepik.com/free-photo/volumetric-musical-background-with-treble-clef-notes-generative-ai_169016-29576.jpg"}
        pinned={false}
      />
      <ColorPalette handleColorSelect={() => { }} styles={{}} />

    </>
  )
}

export default App
