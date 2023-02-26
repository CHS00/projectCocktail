import { configureStore, createSlice } from '@reduxjs/toolkit'

let pickedArr = createSlice({
  name:"pickedArr",
  initialState:[],
  reducers:{
    addArr(state,action){
      if (state.some((value)=>value.id===action.payload.id)) {
        alert("목록에 이미 있는 술은 추가할 수 없습니다.")
      }else if(state.length>=7){
        alert("재료는 7개 이상 추가할 수 없습니다. \n")
      }else{
        state.push(action.payload);
      }
    },
    deleteArr(state, action){
      let num = state.findIndex((value)=>value.id===action.payload);
      state.splice(num,1)
    },
  }
})

export const { addArr, deleteArr } = pickedArr.actions ;

export default configureStore({
  reducer: { 
    pickedArr : pickedArr.reducer
  }
}) 