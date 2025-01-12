
import {create} from 'zustand'
import axios from '@/lib/axios'


export const useUserStore = create((set,_get)=>({


  // variable
  user:true,
  isLoading:false,
  isError:false,
  role:"teacher",

  // function

  //TODO: Implement the function like :- login,signup,logout, checkAuth (which is checking the user is there or not)

   signup:async({username,email,password,role})=>{
      try {
        set({isLoading:true})
        await axios.post('/auth/register',{name:username,email,password,type:role})
      } catch (error) {
        set({isError:true})
         console.log("Error SignUp :",error)
      }finally{
         set({isLoading:false})
      }
   },

     login:async({email,password})=>{
       try {
        set({isLoading:true})
          const response= await axios.post('/auth/login',{email,password})
          set({user:response})

       } catch (error) {
        set({isError:true})
         console.log("Error Login :",error)
       } finally{
         set({isLoading:false})
       }
     },
}))

