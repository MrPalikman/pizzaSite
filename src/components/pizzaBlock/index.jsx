import { useState } from "react"

function PizzaBlock({...obj}){

  const [pizzaCount, setPizzaCount] = useState(0)
  const [activType, setActiveType] = useState(0)
  const [pizzaSize, setPizzaSize] = useState(0)

  const onClick = () =>{
    setPizzaCount(pizzaCount +5)
  }
  const onClickType = (e) =>{
    setActiveType(e)
  }
  const onClickSize = (e) =>{
    setPizzaSize(e)
  }
  const pizzaTypes = ['Тонкое', 'Традиционное']
  return(

    
      <div class="pizza-block">
                <img
                  class="pizza-block__image"
                  src={obj.imageUrl}
                  alt="Pizza"
                />
                <h4 class="pizza-block__title">{obj.title}</h4>
                <div class="pizza-block__selector">
                  <ul>
                    {
                    obj.types.map((el,index) => (
                      <li onClick={()=> onClickType(index)} className={activType === index ? 'active' : ''}>{pizzaTypes[el]} </li>
                    ))
                     }


                  </ul>
                  <ul>
                    {
                      obj.sizes.map((e, index) =>(
                        <li onClick={()=>onClickSize(index)} className={pizzaSize === index?'active':''}>{e} см.  </li>
                      ))
                    }                                       
                  </ul>
                </div>
                <div class="pizza-block__bottom">
                  <div class="pizza-block__price">от {obj.price} ₽</div>
                  <div class="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <button onClick={onClick}>добавить</button>
                    <i>{pizzaCount}</i>
                  </div>
                </div>
      </div>

    
  )
}

export default PizzaBlock
