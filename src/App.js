import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import NotFound from './pages/NotFound';

import './scss/app.scss';
import Cart from './pages/Cart';
import HomeContainer from './pages/Home/HomeContainer';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
