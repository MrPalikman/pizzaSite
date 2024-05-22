
import { createSlice } from '@reduxjs/toolkit';
// начальное состояние
const initialState = {
  categoryId: 1,
  sort: { name: 'попопулярности', sortProperty: 'rating' }
}
//часть глобального состояния приложения, которым можно управлять отдельно.
const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers:{
    setCategoryId(state,action){   //action: Это просто объект, который содержит информацию о том,
                                // какое действие должно быть выполнено в хранилище. Обычно это объект
                                // с двумя свойствами: type (строка, определяющая тип действия) и
                                // payload (любые данные, необходимые для выполнения действия).

      state.categoryId = action.payload

    },
    setSort(state, action){
      state.sort = action.payload
      //state.sort изменяет свое первоначальное состояние на то которое придет в action.payload
    }
  }
})

// export const { setCategoryId } = filterSlice.actions
// export default filterSlice.reducer

export const { setCategoryId, setSort } = filterSlice.actions;
export default filterSlice.reducer;