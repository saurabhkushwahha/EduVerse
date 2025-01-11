import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {

  const [formData,setFormData]=useState({
    username:"",
    email:"",
    role:'',
    password:"",
  })

  const handleSubmit=(e)=>{
    e.preventDefault()
    //TODO:
     console.log(formData)
  }
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">SignUp</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                id="username"
                type="text"
                placeholder="username"
                required
                onChange={(e)=>setFormData({...formData, [e.target.id]:e.target.value})}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                onChange={(e)=>setFormData({...formData, [e.target.id]:e.target.value})}
                />
              </div>
               <div className="grid gap-2">
                <Label htmlFor="role">Role</Label>
                <select
                  id="role"
                  className="block w-full  px-3 py-2 border  dark:bg-white dark:text-gray-800 rounded-md shadow-sm  sm:text-sm"
                  onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
                  required
                >
                  <option value="" disabled selected>
                    Select your role
                  </option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                </select>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required
                onChange={(e)=>setFormData({...formData, [e.target.id]:e.target.value})}
                />
              </div>
              <Button type="submit" className="w-full">
                SignUp
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
