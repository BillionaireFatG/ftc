import Link from "next/link";
import { ArrowRight, Calculator, Gauge, Cpu, Rocket, Trophy, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Waves } from "@/components/ui/waves";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Animated Waves Background */}
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-6 py-24">
        {/* Animated Waves Background */}
        <Waves 
          className="absolute inset-0 opacity-20" 
          strokeColor="rgba(119, 115, 255, 0.3)"
          backgroundColor="transparent"
          pointerSize={0.3}
        />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Master Your Robot's{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Drivetrain
            </span>
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Speed, Control, and Precision for FTC, FRC & FLL
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/drivetrains">
              <Button size="lg" className="group relative overflow-hidden">
                <span className="relative z-10">Explore Drivetrains</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
            <Link href="/calculators">
              <Button size="lg" variant="outline" className="backdrop-blur-sm">
                Try Calculator
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats Banner */}
      <section className="border-y bg-muted/50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">Drivetrain Types</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Interactive Tools</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">3D</div>
              <div className="text-sm text-muted-foreground">Simulator</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Competition-Tested</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">Everything You Need to Master Drivetrains</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <Gauge className="mb-2 h-10 w-10 text-primary" />
              <CardTitle>Comprehensive Guides</CardTitle>
              <CardDescription>
                Deep dives into tank, mecanum, swerve, and omni drives with interactive models and real-world applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/drivetrains">
                <Button variant="ghost" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <Cpu className="mb-2 h-10 w-10 text-primary" />
              <CardTitle>Control Theory Mastery</CardTitle>
              <CardDescription>
                Master PID, feedforward, state feedback, and motion profiling for precise robot control
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/control-theory">
                <Button variant="ghost" className="group">
                  Explore Control Theory
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <Calculator className="mb-2 h-10 w-10 text-primary" />
              <CardTitle>Interactive Calculators</CardTitle>
              <CardDescription>
                Calculate speed, torque, acceleration, and optimal gear ratios with real-time results
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/calculators">
                <Button variant="ghost" className="group">
                  Start Calculating
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <Rocket className="mb-2 h-10 w-10 text-primary" />
              <CardTitle>3D Simulator</CardTitle>
              <CardDescription>
                Test drivetrain configurations in a virtual arena before building
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/simulator">
                <Button variant="ghost" className="group">
                  Launch Simulator
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <Zap className="mb-2 h-10 w-10 text-primary" />
              <CardTitle>Motor Selection Guide</CardTitle>
              <CardDescription>
                Database of FTC/FRC motors with specs, comparisons, and selection tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/motor-selection">
                <Button variant="ghost" className="group">
                  Browse Motors
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <Trophy className="mb-2 h-10 w-10 text-primary" />
              <CardTitle>Competition Ready</CardTitle>
              <CardDescription>
                Testing procedures, calibration guides, and pre-competition checklists
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/testing">
                <Button variant="ghost" className="group">
                  View Testing Guide
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-primary/5 py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">Start Your Drivetrain Journey Today</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join hundreds of teams optimizing their robots for competition
          </p>
          <Link href="/drivetrains">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
