import React from 'react';
import Home from './Home';
import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCategoriesIndex,
  getSortCategories,
  setIsLoadingPizza,
  setPizzasData,
} from '../../redux/slice/homeSlice';

const HomeContainer = () => {
  const { pizzasData, isLoadingPizza, selectId, categoriesId } = useSelector((state) => state.home);
  const searchValue = useSelector((state) => state.search.searchValue);

  const dispatch = useDispatch();

  const sortByTypeAndSortByCaregorie = useCallback(
    (data) => {
      // Функція для сортування масиву по категорії, і типу
      let sortPizzaByCategorie;
      selectId === 0 // Якщо selectId присвоєний 0, то повертати весь масив без фільтрації по категорії
        ? (sortPizzaByCategorie = data)
        : (sortPizzaByCategorie = data.filter(
            // Фільтруємо по числовому значенню selectId, значення дорівнюють індексу масиву (Всі, Мясні, Вегетеріанські...) з категоріями в компоненті Categories
            (item) => item.category === selectId,
          ));
      // Сортуємо по типу(Популярності,ціні,алфавіту)
      if (categoriesId === 0) {
        // Сортування по популярності
        sortPizzaByCategorie.sort((a, b) => b.rating - a.rating);
      } else if (categoriesId === 1) {
        // Сортування по ціні
        sortPizzaByCategorie.sort((a, b) => b.price - a.price);
      } else if (categoriesId === 2) {
        // Сортування по алфавіту
        sortPizzaByCategorie.sort((a, b) => a.title.localeCompare(b.title));
      }
      dispatch(
        setPizzasData(
          searchValue.length === 0
            ? sortPizzaByCategorie
            : sortPizzaByCategorie.filter((item) =>
                item.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
              ),
        ),
      );
    },
    [categoriesId, selectId, searchValue, dispatch],
  );
  useEffect(() => {
    fetch('https://666438f6932baf9032aa655c.mockapi.io/react-pizza')
      .then((res) => res.json())
      .then((data) => {
        sortByTypeAndSortByCaregorie(data); // Сортування по категоріям і типу
        dispatch(setIsLoadingPizza(false));
      });
    window.scrollTo(0, 0);
  }, [categoriesId, selectId, sortByTypeAndSortByCaregorie, dispatch]);

  return (
    <Home
      getCategoriesIndex={(selectId) => dispatch(getCategoriesIndex({ selectId }))}
      getSortCategories={(categoriesId) => dispatch(getSortCategories({ categoriesId }))}
      isLoadingPizza={isLoadingPizza}
      pizzasData={pizzasData}
    />
  );
};

export default HomeContainer;
