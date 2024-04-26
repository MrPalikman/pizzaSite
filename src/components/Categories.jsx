import { useState } from 'react';

function Categories({ onClickCategory, value }) {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
  return (
    <div class="categories">
      <ul>
        {categories.map((el, index) => (
          <li onClick={() => onClickCategory(index)} className={value === index ? 'active' : ''}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;

// {categories.map((el,index) => (
//   <li onClick={() => onClickCategory(index)}className={activeIndex === index ? 'active' : ''}>{el}</li>
// ))
//   }

// const [activeIndex, setActiveIndex] = useState(0)
//   const onClickCategory =(el)=>{
//     setActiveIndex(el)
//   }
