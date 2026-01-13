"use client"

import Link from "next/link";
import { ArrowRight, Calculator, Gauge, Cpu, Rocket, Trophy, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TermTooltip } from "@/components/ui/term-tooltip";

export function FeatureCards() {
  return (
    <section className="container mx-auto px-6 py-24">
      <h2 className="mb-12 text-center text-3xl font-bold">Everything You Need to Master Drivetrains</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="transition-all hover:shadow-lg">
          <CardHeader>
            <Gauge className="mb-2 h-10 w-10 text-primary" />
            <CardTitle>Comprehensive Guides</CardTitle>
            <CardDescription>
              Deep dives into tank, <TermTooltip term="mecanum">mecanum</TermTooltip>, <TermTooltip term="swerve">swerve</TermTooltip>, and omni drives with interactive models and real-world applications
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
              Master <TermTooltip term="PID">PID</TermTooltip>, <TermTooltip term="feedforward">feedforward</TermTooltip>, state feedback, and <TermTooltip term="motion profiling">motion profiling</TermTooltip> for precise robot control
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
              Calculate speed, <TermTooltip term="torque">torque</TermTooltip>, acceleration, and optimal <TermTooltip term="gear ratio">gear ratios</TermTooltip> with real-time results
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
              Test <TermTooltip term="drivetrain">drivetrain</TermTooltip> configurations in a virtual arena before building
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
            <CardTitle>Testing & Calibration</CardTitle>
            <CardDescription>
              Procedures for speed tests, drift detection, <TermTooltip term="PID">PID</TermTooltip> tuning, and pre-competition checklists
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
  )
}
