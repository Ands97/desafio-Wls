import { TodoProvider, TodoContext } from './contexts/todoContext';
import { Header } from './components/Header'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';

function App() {


  return (
    <div className="App">
      <TodoProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </TodoProvider>
    </div>
  )
}

export default App
