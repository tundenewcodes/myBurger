import { createSlice } from '@reduxjs/toolkit'
const burgerInitialState = {
  ingredients: { salad: 0, cheese: 0, meat: 0, bacon: 0 },
  ingredientPrices: {
    salad: 300,
    bacon: 389,
    cheese: 500,
    meat: 650,
    },
  totalPrice: 600,
  purchase: false,
  order : []
}
const ingredientSlice = createSlice({
  name: 'burger',
  initialState: burgerInitialState,
  reducers: {
    addIngredient(state, action) {
      const type = action.payload
          const oldCount = state.ingredients[ type ]
          const newCount = oldCount + 1;
          const updatedCount = { ...state.ingredients }
          updatedCount[ type ] = newCount
          state.ingredients = updatedCount
          const price = state.totalPrice
          
          const addedPrice = state.ingredientPrices[type] + price
      state.totalPrice = addedPrice
       const ingState = state.ingredients
       const sum = Object.keys(ingState)
         .map((ingKey) => ingState[ingKey])
         .reduce((prev, currEl) => {
           return prev + currEl
         }, [])
       state.purchase = sum > 0
      
    },
    orderItems( state, action ) {
      const mydata = action.payload
  state.order= [mydata]
  // what if i put state.push = action.payload  in checkout
},

    removeIngredients(state, action) {
      const type = action.payload
      const oldCount = state.ingredients[ type ]
       if (oldCount <= 0) {
         return
       }
      const newCount = oldCount - 1
      
        const updatedCount = { ...state.ingredients }
        updatedCount[ type ] = newCount
        state.ingredients = updatedCount
        const price = state.totalPrice
        const priceToRemove = state.ingredientPrices[type]
        const newPrice = price - priceToRemove
      state.totalPrice = newPrice
       const ingState = state.ingredients
       const sum = Object.keys(ingState)
         .map((ingKey) => ingState[ingKey])
         .reduce((prev, currEl) => {
           return prev + currEl
         }, [])
       state.purchase = sum > 0
      
    },
    // makeOrder(state) {
     
    // }
  },
})

export const ingredientsActions  =  ingredientSlice.actions
export default ingredientSlice