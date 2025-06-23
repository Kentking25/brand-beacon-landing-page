
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            John Doe
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Full Stack Developer & Digital Creator
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Passionate about building innovative web applications and creating digital experiences that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Building the Future, One Line at a Time</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With over 5 years of experience in web development, I specialize in creating scalable applications 
                using modern technologies like React, Node.js, and TypeScript. I'm passionate about clean code, 
                user experience, and continuous learning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Frontend Development</h4>
                  <p className="text-sm text-muted-foreground">React, TypeScript, Tailwind CSS, Next.js</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Backend Development</h4>
                  <p className="text-sm text-muted-foreground">Node.js, Express, PostgreSQL, MongoDB</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Tools & Platforms</h4>
                  <p className="text-sm text-muted-foreground">Git, Docker, AWS, Vercel, Figma</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Ready to collaborate or have a question? I'd love to hear from you.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Mail className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">john.doe@example.com</p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">San Francisco, CA</p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Github className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-sm text-muted-foreground">@johndoe</p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Linkedin className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">/in/johndoe</p>
            </Card>
          </div>

          <Button size="lg" className="px-12">
            <Mail className="w-4 h-4 mr-2" />
            Send Message
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-muted/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 John Doe. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
