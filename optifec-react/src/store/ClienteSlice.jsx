import { createSlice } from "@reduxjs/toolkit";

const ClienteSlice = createSlice({
    name:"cliente",
    initialState:{
        clientes: []
    },
    reducers:{
        selectClientes(){
            return console.log("selecionando clientes")
        },
    }
})

export const {selectClientes} = ClienteSlice.actions //exporta as ações do objeto
export default ClienteSlice.reducer //exporta o objeto