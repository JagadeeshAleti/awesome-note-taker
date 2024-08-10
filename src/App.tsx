import './App.css'
import ColorPalette from './components/commmon/ColorPallete/ColorPalette'
import CreateNote from './components/CreateNote/CreateNote'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header />
      <CreateNote />
      <ColorPalette handleColorSelect={() => { }} styles={{}} />
    </>
  )
}

export default App
