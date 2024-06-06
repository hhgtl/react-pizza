import { useState } from 'react';

const Categories = () => {
  const [selectCategorie, setSelectCategorie] = useState(0);
  let categories = ['Всі', 'Мясні', 'Вегетаріанська', 'Гриль', 'Гострі', 'Закриті'];
  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => (
          <li
            key={i}
            onClick={() => setSelectCategorie(i)}
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
