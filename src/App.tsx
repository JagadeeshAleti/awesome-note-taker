import './App.css'
import ColorPalette from './components/commmon/ColorPallete/ColorPalette'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header />
      <ColorPalette handleColorSelect={() => { }} styles={{}} />
    </>
  )
}

export default App
