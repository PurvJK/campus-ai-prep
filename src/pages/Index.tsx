import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BookOpen, 
  Code, 
  Brain, 
  Users, 
  Trophy, 
  Zap, 
  Target, 
  TrendingUp,
  ArrowRight,
  Play,
  Star,
  CheckCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Study Materials",
      description: "Comprehensive notes, tutorials, and resources for all technical subjects",
      color: "text-blue-600"
    },
    {
      icon: Code,
      title: "Coding Practice",
      description: "Data structures, algorithms, and coding problems with detailed solutions",
      color: "text-green-600"
    },
    {
      icon: Brain,
      title: "AI-Powered Quizzes",
      description: "Adaptive quizzes that adjust to your skill level and learning pace",
      color: "text-purple-600"
    },
    {
      icon: Users,
      title: "Interview Preparation",
      description: "Mock interviews, behavioral questions, and real-time feedback",
      color: "text-orange-600"
    },
    {
      icon: Target,
      title: "Progress Tracking",
      description: "Detailed analytics and insights to monitor your preparation journey",
      color: "text-red-600"
    },
    {
      icon: Zap,
      title: "AI Recommendations",
      description: "Personalized study plans and suggestions based on your performance",
      color: "text-yellow-600"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Students Helped" },
    { number: "500+", label: "Companies Covered" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "AI Support" }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      college: "IIT Delhi",
      text: "CampusAI Prep helped me crack interviews at Google and Microsoft. The AI-powered recommendations were spot on!",
      rating: 5
    },
    {
      name: "Rahul Kumar",
      college: "NIT Trichy",
      text: "The coding practice section is amazing. I went from struggling with DSA to solving complex problems confidently.",
      rating: 5
    },
    {
      name: "Sneha Patel",
      college: "BITS Pilani",
      text: "Mock interviews feature gave me the confidence I needed. Landed my dream job at Amazon!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <img 
          src={heroImage} 
          alt="Campus Preparation" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
                Ace Your 
                <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Campus Placements
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
                AI-powered platform that combines study materials, coding practice, quizzes, 
                and interview preparation in one comprehensive solution.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="btn-hero text-lg px-8 py-4">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="btn-ghost text-lg px-8 py-4">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform covers every aspect of campus placement preparation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-feature group">
                <CardContent className="p-8 text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto bg-muted rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from students who achieved their dream placements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-elevated">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.college}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90">
            Join thousands of students who have successfully prepared for their campus placements
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
                Create Free Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="btn-ghost text-lg px-8 py-4">
                Already have an account?
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 text-white/80">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Free forever plan</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Start immediately</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">CampusAI Prep</span>
            </div>
            <p className="text-muted-foreground">
              Empowering students to achieve their dream placements through AI-powered preparation.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-foreground">Terms of Service</Link>
              <Link to="/contact" className="hover:text-foreground">Contact</Link>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 CampusAI Prep. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
