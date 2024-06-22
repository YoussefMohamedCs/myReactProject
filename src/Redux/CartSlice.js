import {createSlice} from "@reduxjs/toolkit"
export const cartSlice = createSlice({
    initialState:[] ,
    name : "cartSlice" , 
    reducers:{
        addProduct:(state , action)=>{
            const indexOffinded = state.findIndex((item)=> item.id === action.payload.id)
            if(indexOffinded >= 0){
                
            }else{
                state.push(action.payload)
            }


        }  ,
        increaseProduct:(state , action )=>{
            const indexOffinded = state.findIndex((item)=> item.id === action.payload.id)
            state[indexOffinded].count++;

        } ,
        decreaseProduct : (state , action)=>{
            const indexOffinded = state.findIndex((item)=> item.id === action.payload.id)
            if(state[indexOffinded].count === 1 ){

            }else{
                state[indexOffinded].count--;
            } 
           
        } ,
        deleteProduct : (state , action)=>{
            return state.filter((item)=> item.id !== action.payload.id)

        }
        

    }
})


export const {addProduct , increaseProduct , decreaseProduct , deleteProduct} = cartSlice.actions;
export default cartSlice.reducer;

