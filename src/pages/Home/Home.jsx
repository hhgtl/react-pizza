import Categories from '../../components/Categories/Categories';
import PizzaBlock from '../../components/PizzaBlock/PizzaBlock';
import PizzaBlockSkeleton from '../../components/PizzaBlock/PizzaBlockSkeleton';
import Sort from '../../components/Sort/Sort';

const Home = ({ getCategoriesIndex, getSortCategories, isLoadingPizza, pizzasData }) => {
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
