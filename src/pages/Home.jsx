import Categories from '../components/Categories/Categories';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import PizzaBlockSkeleton from '../components/PizzaBlock/PizzaBlockSkeleton';
import Sort from '../components/Sort/Sort';

import { useCallback, useEffect, useState } from 'react';

const Home = ({ searchValue }) => {
  const [pizzasData, setPizzasData] = useState([]);
  const [isLoadingPizza, setIsLoadingPizza] = useState(true);

  const [categoriesAndSortParameters, setCategoriesAndSortParameters] = useState({
    selectId: 0,
    categoriesId: 0,
  });

  const getCategoriesIndex = (selectId) => {
    // Колл-бек функція, яка отримує id категорії, і записує в categoriesAndSortParameters для відловлювання useEfect
    setCategoriesAndSortParameters({ ...categoriesAndSortParameters, selectId });
    setIsLoadingPizza(true);
  };
  const getSortCategories = (categoriesId) => {
    // Колл-бек функція, яка отримує id типу сортування,  і записує в categoriesAndSortParameters для відловлювання useEfect
    setCategoriesAndSortParameters({ ...categoriesAndSortParameters, categoriesId });
    setIsLoadingPizza(true);
  };

  const sortByTypeAndSortByCaregorie = useCallback(
    (data) => {
      // Функція для сортування масиву по категорії, і типу
      let sortPizzaByCategorie;
      categoriesAndSortParameters.selectId === 0 // Якщо selectId присвоєний 0, то повертати весь масив без фільтрації по категорії
        ? (sortPizzaByCategorie = data)
        : (sortPizzaByCategorie = data.filter(
            // Фільтруємо по числовому значенню selectId, значення дорівнюють індексу масиву (Всі, Мясні, Вегетеріанські...) з категоріями в компоненті Categories
            (item) => item.category === categoriesAndSortParameters.selectId,
          ));
      // Сортуємо по типу(Популярності,ціні,алфавіту)
      if (categoriesAndSortParameters.categoriesId === 0) {
        // Сортування по популярності
        sortPizzaByCategorie.sort((a, b) => b.rating - a.rating);
      } else if (categoriesAndSortParameters.categoriesId === 1) {
        // Сортування по ціні
        sortPizzaByCategorie.sort((a, b) => b.price - a.price);
      } else if (categoriesAndSortParameters.categoriesId === 2) {
        // Сортування по алфавіту
        sortPizzaByCategorie.sort((a, b) => a.title.localeCompare(b.title));
      }
      debugger;
      setPizzasData(
        searchValue.length === 0
          ? sortPizzaByCategorie
          : sortPizzaByCategorie.filter((item) =>
              item.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
            ),
      );
    },
    [categoriesAndSortParameters.categoriesId, categoriesAndSortParameters.selectId, searchValue],
  );
  useEffect(() => {
    fetch('https://666438f6932baf9032aa655c.mockapi.io/react-pizza')
      .then((res) => res.json())
      .then((data) => {
        sortByTypeAndSortByCaregorie(data); // Сортування по категоріям і типу
        setIsLoadingPizza(false);
      });
    window.scrollTo(0, 0);
  }, [
    categoriesAndSortParameters.categoriesId,
    categoriesAndSortParameters.selectId,
    sortByTypeAndSortByCaregorie,
  ]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories getCategoriesIndex={getCategoriesIndex} />
        <Sort getSortCategories={getSortCategories} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoadingPizza
          ? [...new Array(6)].map((_, i) => <PizzaBlockSkeleton key={i} />)
          : pizzasData.map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default Home;
