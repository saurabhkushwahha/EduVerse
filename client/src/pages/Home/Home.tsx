import TeacherDashboard from "./TeacherDashboard"
import { useUserStore } from "@/store/useUserStore"
import { useNavigate } from "react-router-dom"
import StudentDashboard from "./StudentDashboard"


export default function Home(){
  const navigate=useNavigate()

  const {user ,role}=useUserStore()
  if(!user){
    navigate("/")
  }
  else if(user && role=="teacher"){
     return <TeacherDashboard/>
  }
  else{
     return <StudentDashboard/>
  }

}