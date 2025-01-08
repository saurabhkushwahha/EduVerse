
import {create} from 'zustand'

export const useUserStore = create((set,_get)=>({


  // variable
  user:true,
  isLoading:false,
  isError:false,


  // function

  //TODO: Implement the function like :- login,signup,logout, checkAuth (which is checking the user is there or not)

}))

