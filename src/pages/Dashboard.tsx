import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Code, 
  Brain, 
  Users, 
  Trophy, 
  Clock, 
  TrendingUp, 
  Target,
  Play,
  Calendar,
  Star,
  ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
  const user = {
    name: "Alex Johnson",
    college: "MIT",
    year: "3rd Year",
    branch: "Computer Science",
    level: "Intermediate",
    streak: 12,
    totalPoints: 2450
  };

  const weeklyProgress = [
    { day: "Mon", hours: 2.5 },
    { day: "Tue", hours: 3.2 },
    { day: "Wed", hours: 1.8 },
    { day: "Thu", hours: 4.1 },
    { day: "Fri", hours: 2.9 },
    { day: "Sat", hours: 3.7 },
    { day: "Sun", hours: 2.3 },
  ];

  const upcomingEvents = [
    { title: "Mock Interview", time: "Today, 3:00 PM", type: "interview" },
    { title: "DSA Quiz", time: "Tomorrow, 10:00 AM", type: "quiz" },
    { title: "System Design Workshop", time: "Dec 25, 2:00 PM", type: "workshop" },
  ];

  const recentActivity = [
    { action: "Completed", subject: "Array Problems", score: 85, time: "2 hours ago" },
    { action: "Started", subject: "Database Quiz", score: null, time: "4 hours ago" },
    { action: "Completed", subject: "Mock Interview", score: 92, time: "1 day ago" },
  ];

  const features = [
    {
      title: "Study Materials",
      description: "Comprehensive notes and resources",
      icon: BookOpen,
      progress: 65,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      href: "/study"
    },
    {
      title: "Coding Practice",
      description: "DSA problems and solutions",
      icon: Code,
      progress: 42,
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      href: "/coding"
    },
    {
      title: "Quizzes & Tests",
      description: "Aptitude and technical assessments",
      icon: Brain,
      progress: 78,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      href: "/quizzes"
    },
    {
      title: "Interview Prep",
      description: "Mock interviews and feedback",
      icon: Users,
      progress: 33,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      href: "/interview"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Welcome back, {user.name}! 👋</h1>
              <p className="mt-1 text-muted-foreground">
                {user.college} • {user.year} • {user.branch}
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center space-x-4">
              <Badge variant="secondary" className="px-3 py-1">
                <Trophy className="w-4 h-4 mr-1" />
                {user.totalPoints} Points
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                <Target className="w-4 h-4 mr-1" />
                {user.streak} Day Streak
              </Badge>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">This Week</p>
                  <p className="text-2xl font-bold text-foreground">20.5h</p>
                </div>
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div className="mt-2">
                <Progress value={68} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">68% of weekly goal</p>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Problems Solved</p>
                  <p className="text-2xl font-bold text-foreground">247</p>
                </div>
                <Code className="w-8 h-8 text-secondary" />
              </div>
              <div className="mt-2 flex items-center text-sm">
                <TrendingUp className="w-4 h-4 text-success mr-1" />
                <span className="text-success">+15 this week</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Quiz Average</p>
                  <p className="text-2xl font-bold text-foreground">84%</p>
                </div>
                <Brain className="w-8 h-8 text-warning" />
              </div>
              <div className="mt-2 flex items-center text-sm">
                <Star className="w-4 h-4 text-warning mr-1" />
                <span className="text-muted-foreground">Excellent performance</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Mock Interviews</p>
                  <p className="text-2xl font-bold text-foreground">8</p>
                </div>
                <Users className="w-8 h-8 text-destructive" />
              </div>
              <div className="mt-2 flex items-center text-sm">
                <Badge variant="outline" className="text-xs">
                  Next: Today 3PM
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Learning Modules */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Learning Modules
                </CardTitle>
                <CardDescription>
                  Continue your preparation journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <Card key={index} className="card-feature hover:scale-105 transition-transform cursor-pointer">
                      <CardContent className="p-4">
                        <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-3`}>
                          <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                        </div>
                        <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">{feature.progress}%</span>
                          </div>
                          <Progress value={feature.progress} className="h-2" />
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="w-full mt-3 text-primary hover:bg-primary/10"
                        >
                          Continue
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest learning progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.action === "Completed" ? "bg-success" : "bg-warning"
                        }`} />
                        <div>
                          <p className="font-medium text-foreground">
                            {activity.action} {activity.subject}
                          </p>
                          <p className="text-sm text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                      {activity.score && (
                        <Badge variant="secondary">{activity.score}%</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full btn-hero">
                  <Play className="w-4 h-4 mr-2" />
                  Start Daily Challenge
                </Button>
                <Button variant="outline" className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Mock Interview
                </Button>
                <Button variant="outline" className="w-full">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Progress Report
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="p-3 rounded-lg border border-border">
                      <p className="font-medium text-foreground">{event.title}</p>
                      <p className="text-sm text-muted-foreground">{event.time}</p>
                      <Badge variant="outline" className="mt-2 text-xs">
                        {event.type}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Weekly Progress Chart */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Weekly Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {weeklyProgress.map((day, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground w-12">{day.day}</span>
                      <div className="flex-1 mx-3">
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-primary rounded-full transition-all duration-300"
                            style={{ width: `${(day.hours / 5) * 100}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-sm font-medium w-8 text-right">{day.hours}h</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;