import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { ClientDataRedux, ClientRedux } from '../lib/DataSet/Redux';
import { reactLocalStorage } from 'reactjs-localstorage';

import { AuthRequest } from '../lib/DataSet/Auth';


const initialState: ClientRedux =  {
    ClientData: null,
    ClientToken: null,
    isLogin: false,
    type: "All"
} 

const clientSlice = createSlice({
  name: 'clinet',
  initialState,
  reducers: {
    setClientLogin: (state, action: PayloadAction<AuthRequest>) => {
        state.isLogin = true;
        state.ClientData = action.payload
        state.ClientToken= action.payload.token
        state.type = action.payload.type
    },
    setClinetData: (state, action: PayloadAction<ClientDataRedux>) => {
      state.ClientData = action.payload
      state.type = action.payload.type
      reactLocalStorage.setObject('ClientData', action.payload);
    },
    setClientToken: (state, action: PayloadAction<string>) => {
      state.ClientToken= action.payload
      reactLocalStorage.set("token", action.payload);
    },
    logoutClient: (state) => {
      state.ClientData = null;
      state.ClientToken = null;
      state.isLogin= false
    },
  },
});

export const { setClinetData, logoutClient, setClientLogin, setClientToken } = clientSlice.actions;
export default clientSlice.reducer;
