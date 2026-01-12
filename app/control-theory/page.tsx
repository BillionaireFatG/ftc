import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, TrendingUp, Activity } from "lucide-react";

const topics = [
  {
    name: "PID Controller",
    href: "/control-theory/pid",
    icon: Activity,
    description: "Proportional-Integral-Derivative control for precise robot movements and error correction.",
    difficulty: "Intermediate",
    concepts: ["Error calculation", "Tuning gains", "Steady-state error", "Oscillation control"],
  },
  {
    name: "Feedforward Control",
    href: "/control-theory/feedforward",
    icon: TrendingUp,
    description: "Model-based control that predicts required power based on physics equations.",
    difficulty: "Advanced",
    concepts: ["kV constant", "kA constant", "Velocity control", "Acceleration compensation"],
  },
  {
    name: "Motion Profiling",
    href: "/control-theory/motion-profiling",
    icon: Cpu,
    description: "Generate smooth, controlled paths with velocity and acceleration constraints.",
    difficulty: "Advanced",
    concepts: ["Trapezoidal profiles", "Path following", "Velocity limits", "Smooth motion"],
  },
];

export default function ControlTheoryPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Control Theory</h1>
        <p className="text-lg text-muted-foreground">
          Master advanced control systems for precise and reliable robot movement
        </p>
      </div>

      <Card className="mb-12 border-primary/50 bg-primary/5">
        <CardHeader>
          <CardTitle>Why Control Theory Matters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Control theory transforms your robot from an unpredictable machine into a precise, competition-ready system. While open-loop control (simply setting motor power) works for basic tasks, it fails when:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Battery voltage changes:</strong> Motors slow down as battery drains</li>
            <li><strong>Opponents interfere:</strong> Collisions push your robot off course</li>
            <li><strong>Field conditions vary:</strong> Different surfaces, game elements</li>
            <li><strong>Precision is critical:</strong> Autonomous scoring, accurate positioning</li>
          </ul>
          <p className="font-semibold mt-4">
            Closed-loop control systems use feedback to continuously correct errors and maintain consistent performance.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <Card key={topic.name} className="transition-all hover:shadow-lg">
            <CardHeader>
              <topic.icon className="mb-4 h-12 w-12 text-primary" />
              <CardTitle>{topic.name}</CardTitle>
              <CardDescription>{topic.description}</CardDescription>
              <div className="mt-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold">
                {topic.difficulty}
              </div>
            </CardHeader>
            <CardContent>
              <h4 className="mb-2 text-sm font-semibold">Key Concepts:</h4>
              <ul className="mb-4 space-y-1 text-sm">
                {topic.concepts.map((concept) => (
                  <li key={concept} className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    {concept}
                  </li>
                ))}
              </ul>
              <Link href={topic.href}>
                <Button className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Getting Started with Control Theory</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">1. Start with PID</h4>
            <p className="text-sm text-muted-foreground">
              PID control is the foundation. Master it first for heading hold, turn-to-angle, and straight driving.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">2. Add Feedforward</h4>
            <p className="text-sm text-muted-foreground">
              Combine PID with feedforward for better performance and faster response times.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">3. Implement Motion Profiling</h4>
            <p className="text-sm text-muted-foreground">
              Once basic control works, add motion profiling for smooth, optimized autonomous paths.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
