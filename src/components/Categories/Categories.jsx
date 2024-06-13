import { useState } from 'react';

const Categories = ({ getCategoriesIndex }) => {
  const [selectCategorie, setSelectCategorie] = useState(0);
  let categories = ['Всі', 'Мясні', 'Вегетаріанська', 'Гриль', 'Гострі'];
  const setAndPushSelectCategorie = (index) => {
    // Колл бек функція яка, відправляє в компонент Home вибрану категорію і індекс для сортировки
    setSelectCategorie(index);
    getCategoriesIndex(index);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => (
          <li
            key={i}
            onClick={() => setAndPushSelectCategorie(i)}
            className={i === selectCategorie ? 'active' : ''}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
