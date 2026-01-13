"use client"

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, TrendingUp, Activity } from "lucide-react";
import { TermTooltip } from "@/components/ui/term-tooltip";

const topics = [
  {
    name: "PID Controller",
    href: "/control-theory/pid",
    icon: Activity,
    description: <><TermTooltip term="proportional">Proportional</TermTooltip>-<TermTooltip term="integral">Integral</TermTooltip>-<TermTooltip term="derivative">Derivative</TermTooltip> control for precise robot movements and <TermTooltip term="error">error</TermTooltip> correction.</>,
    difficulty: "Intermediate",
    concepts: [
      <><TermTooltip term="error calculation">Error calculation</TermTooltip></>,
      <><TermTooltip term="tuning gains">Tuning gains</TermTooltip></>,
      <><TermTooltip term="steady-state error">Steady-state error</TermTooltip></>,
      <><TermTooltip term="oscillation control">Oscillation control</TermTooltip></>
    ],
  },
  {
    name: "Feedforward Control",
    href: "/control-theory/feedforward",
    icon: TrendingUp,
    description: <>Model-based control that predicts required power based on physics equations.</>,
    difficulty: "Advanced",
    concepts: [
      <><TermTooltip term="kV constant">kV constant</TermTooltip></>,
      <><TermTooltip term="kA constant">kA constant</TermTooltip></>,
      <><TermTooltip term="velocity control">Velocity control</TermTooltip></>,
      <><TermTooltip term="acceleration compensation">Acceleration compensation</TermTooltip></>
    ],
  },
  {
    name: "Motion Profiling",
    href: "/control-theory/motion-profiling",
    icon: Cpu,
    description: <>Generate smooth, controlled paths with <TermTooltip term="velocity">velocity</TermTooltip> and <TermTooltip term="acceleration">acceleration</TermTooltip> constraints.</>,
    difficulty: "Advanced",
    concepts: [
      <><TermTooltip term="trapezoidal profiles">Trapezoidal profiles</TermTooltip></>,
      <><TermTooltip term="path following">Path following</TermTooltip></>,
      <><TermTooltip term="velocity">Velocity</TermTooltip> limits</>,
      <>Smooth motion</>
    ],
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
            Control theory transforms your robot from an unpredictable machine into a precise, competition-ready system. While <TermTooltip term="open-loop">open-loop control</TermTooltip> (simply setting motor power) works for basic tasks, it fails when:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong><TermTooltip term="battery">Battery</TermTooltip> voltage changes:</strong> Motors slow down as battery drains</li>
            <li><strong>Opponents interfere:</strong> Collisions push your robot off course</li>
            <li><strong>Field conditions vary:</strong> Different surfaces, game elements</li>
            <li><strong>Precision is critical:</strong> <TermTooltip term="autonomous">Autonomous</TermTooltip> scoring, accurate positioning</li>
          </ul>
          <p className="font-semibold mt-4">
            <TermTooltip term="closed-loop">Closed-loop control</TermTooltip> systems use <TermTooltip term="feedback">feedback</TermTooltip> to continuously correct <TermTooltip term="error">errors</TermTooltip> and maintain consistent performance.
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
                {topic.concepts.map((concept, index) => (
                  <li key={index} className="flex items-start">
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
            <h4 className="font-semibold mb-2">1. Start with <TermTooltip term="PID">PID</TermTooltip></h4>
            <p className="text-sm text-muted-foreground">
              <TermTooltip term="PID">PID</TermTooltip> control is the foundation. Master it first for <TermTooltip term="heading hold">heading hold</TermTooltip>, <TermTooltip term="turn-to-angle">turn-to-angle</TermTooltip>, and <TermTooltip term="straight driving">straight driving</TermTooltip>.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">2. Add <TermTooltip term="feedforward">Feedforward</TermTooltip></h4>
            <p className="text-sm text-muted-foreground">
              Combine <TermTooltip term="PID">PID</TermTooltip> with <TermTooltip term="feedforward">feedforward</TermTooltip> for better performance and faster <TermTooltip term="response time">response times</TermTooltip>.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">3. Implement <TermTooltip term="motion profiling">Motion Profiling</TermTooltip></h4>
            <p className="text-sm text-muted-foreground">
              Once basic control works, add <TermTooltip term="motion profiling">motion profiling</TermTooltip> for smooth, optimized <TermTooltip term="autonomous">autonomous</TermTooltip> paths.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
