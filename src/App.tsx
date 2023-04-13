import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import Counter from './pages/Counter';

function App() {
  return (
    <div className="App">
      <main className="main_wrap">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
