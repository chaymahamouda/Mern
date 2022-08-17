import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

export const getgames = createAsyncThunk("game/get", async () => {
  try {
    let result= axios.get("http://localhost:5000/game/");
    return result;
    
  } catch (error) {
    console.log(error)
    
  }

});
export const addgame = createAsyncThunk("game/add", async (game) => {
  try {
    let result= axios.post("http://localhost:5000/game/add",game);
    return result;
    
  } catch (error) {
    console.log(error)
    
  }

});

export const deletegame = createAsyncThunk("game/delete", async (id) => {
  try {
    let result= axios.delete(`http://localhost:5000/game/${id}`);
    return result;
    
  } catch (error) {
    console.log(error)
    
  }

});

export const updategame = createAsyncThunk("game/update", async ({id,game}) => {
  try {
    let result= axios.put(`http://localhost:5000/game/${id}`,game);
    return result;
    
  } catch (error) {
    console.log(error)
    
  }

});
const initialState = {
 games:null,
 status:null,
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  extraReducers:{
  [getgames.pending]:(state)=>{
    state.status = "pending";

  },
  [getgames.fulfilled]:(state,action)=>{
    state.status = "fulfilled";
    state.games = action.payload.data.games;
    
  },
  [getgames.rejected]:(state)=>{
    state.status = "rejected";
    
  },

  [addgame.pending]:(state)=>{
    state.status = "pending";

  },
  [addgame.fulfilled]:(state)=>{
    state.status = "fulfilled";
   
    
  },
  [addgame.rejected]:(state)=>{
    state.status = "rejected";
    
  },

  [deletegame.pending]:(state)=>{
    state.status = "pending";

  },
  [deletegame.fulfilled]:(state)=>{
    state.status = "fulfilled";
   
    
  },
  [deletegame.rejected]:(state)=>{
    state.status = "rejected";
    
  },
  [updategame.pending]:(state)=>{
    state.status = "pending";

  },
  [updategame.fulfilled]:(state)=>{
    state.status = "fulfilled";
   
    
  },
  [updategame.rejected]:(state)=>{
    state.status = "rejected";
    
  },
},
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = gameSlice.actions

export default gameSlice.reducer;