import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import Sort from './components/Sort/Sort';
import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <div class="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 class="content__title">Все пиццы</h2>
            <div class="content__items">
              <PizzaBlock title="Пепероні" price={130} />
              <PizzaBlock title="Чілі" price={405} />
              <PizzaBlock title="Маргарита" price={300} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
