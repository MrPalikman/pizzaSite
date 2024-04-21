import { useState } from "react"

function Categories(){

  const [activeIndex, setActiveIndex] = useState(0)
  const onClickCategory =(el)=>{
    setActiveIndex(el)
  }
  const categories = ["Все","Мясные","Вегетарианские", "Гриль", "Острые", "Закрытые"]
  return(
    <div class="categories">
    <ul>
      {categories.map((el,index) => (
        <li onClick={() => onClickCategory(index)}className={activeIndex === index ? 'active' : ''}>{el}</li>
      )) 
        }
      
    </ul>
  </div>
  )
}

export default Categories