import { Button } from "@/components/ui/button"
import { Card, CardContent,  CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, GraduationCap } from 'lucide-react'

export default function StudentDashboard() {
  return (
    <div className="flex-1 space-y-4 p-3 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Student Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button>My Courses</Button>
          <Button variant="outline">Browse Courses</Button>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 ">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-4 pb-2">
                <CardTitle className="text-sm font-medium">
                  Courses Enrolled
                </CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Completed Courses
                </CardTitle>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
              </CardContent>
            </Card>

          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-10">
              <CardHeader>
                <CardTitle>Current Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-full flex-1">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">Web Development Bootcamp</div>
                          <div className="text-sm text-muted-foreground">75%</div>
                        </div>
                        <Progress value={75} className="mt-2" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-full flex-1">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">Data Science Fundamentals</div>
                          <div className="text-sm text-muted-foreground">40%</div>
                        </div>
                        <Progress value={40} className="mt-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

