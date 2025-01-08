import { SunIcon,MoonIcon } from 'lucide-react'
import {useEffect, useState} from 'react'
import { Button } from '../ui/button'

function ButtonTheme() {
  const [theme,setTheme]=useState(localStorage.getItem('theme') || 'light')
   useEffect(()=>{
    document.documentElement.classList.add(theme)
   },[theme])
  const toogleTheme=(e)=>{
    const newTheme= theme=='light' ? "dark" : "light";
    document.documentElement.classList.remove(theme)
    document.documentElement.classList.add(newTheme)
    localStorage.setItem('theme',newTheme)
    setTheme(newTheme)
  }
  return (
    <Button className='rounded-full fixed px-3 py-4 top-2 right-4 ' onClick={toogleTheme}>
      { theme=='light' ? <MoonIcon/> : <SunIcon/>}
    </Button>
  )
}

export default ButtonTheme