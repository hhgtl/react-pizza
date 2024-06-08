import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import Sort from './components/Sort/Sort';
import './scss/app.scss';
import { useEffect, useState } from 'react';

function App() {
  const [pizzasData, setPizzasData] = useState([]);
  useEffect(() => {
    fetch('https://666438f6932baf9032aa655c.mockapi.io/react-pizza')
      .then((res) => res.json())
      .then((data) => {
        setPizzasData(data);
      });
  }, []);
  console.log(pizzasData);
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzasData.map((item) => (
                <PizzaBlock key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
