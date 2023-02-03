import './css/App.css'
import Header from './components/NoteComponents/Header'
import Notes from './components/NoteComponents/Notes'

function App() {
  return (
    <div style={{ position: 'absolute', left: '50%', top: '0%', transform: 'translate(-50%, 0%)' }}>
      <div className="main">
        <Header />
        <Notes />
      </div>
    </div>
  )
}

export default App
