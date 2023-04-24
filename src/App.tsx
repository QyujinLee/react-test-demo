import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import Counter from './pages/Counter';
import OrderPage from './pages/OrderPage/OrderPage';

function App() {
  return (
    <div className="App">
      <main className="main_wrap">
        <BrowserRouter>
          <NavBar />
          <div className="page_wrap">
            <Routes>
              <Route path="/counter" element={<Counter />} />
              <Route path="/shop" element={<OrderPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
