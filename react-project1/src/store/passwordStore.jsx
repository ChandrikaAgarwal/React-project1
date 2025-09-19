import {create} from 'zustand'

export const usePasswordStore=create((set,get)=>({
    passwordList:[], count:0, searchTerm:'', debouncedTerm:'', filteredPasswords:[],

    addPassword:(password)=>set((state)=>({
        passwordList:[...state.passwordList,{...password,id:Date.now()}]
    })),

    setFilteredPasswords:(list)=>set(()=>({filteredPasswords:list})),

    countPasswords:()=> get().passwordList.length,

    setSearchTerm:(term)=>set(()=>({searchTerm:term})),
    setDebouncedTerm:(term)=>set(()=>({debouncedTerm:term}))
}))