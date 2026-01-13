"use client"

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { TermTooltip } from "@/components/ui/term-tooltip";

const drivetrains = [
  {
    name: "Tank Drive",
    href: "/drivetrains/tank",
    description: <>The simplest and most robust <TermTooltip term="drivetrain">drivetrain</TermTooltip>. Perfect for beginners and high-pushing-power applications.</>,
    complexity: 1,
    cost: 1,
    maneuverability: 2,
    speed: 4,
    pros: [
      <>Simple to build</>,
      <><TermTooltip term="torque">High torque</TermTooltip></>,
      <>Predictable</>,
      <>Low cost</>
    ],
    cons: [
      <>Cannot strafe</>,
      <>Limited maneuverability</>,
      <>Turning radius</>
    ],
  },
  {
    name: "Mecanum Drive",
    href: "/drivetrains/mecanum",
    description: <><TermTooltip term="holonomic">Holonomic</TermTooltip> drive with omnidirectional movement. Move in any direction without rotating.</>,
    complexity: 3,
    cost: 3,
    maneuverability: 5,
    speed: 3,
    pros: [
      <>Omnidirectional movement</>,
      <>No turning needed</>,
      <>Precise positioning</>
    ],
    cons: [
      <><TermTooltip term="traction">Reduced traction</TermTooltip></>,
      <>More complex code</>,
      <>Expensive wheels</>
    ],
  },
  {
    name: "Swerve Drive",
    href: "/drivetrains/swerve",
    description: <>The ultimate in maneuverability. Independent steering for each wheel module.</>,
    complexity: 5,
    cost: 5,
    maneuverability: 5,
    speed: 5,
    pros: [
      <>Maximum maneuverability</>,
      <>Fastest option</>,
      <>Field-centric control</>
    ],
    cons: [
      <>Very complex</>,
      <>Expensive</>,
      <>Difficult programming</>
    ],
  },
  {
    name: "Omni Drive",
    href: "/drivetrains/omni",
    description: <>Similar to <TermTooltip term="mecanum">mecanum</TermTooltip> but with different wheel orientation. Faster with less <TermTooltip term="traction">traction</TermTooltip>.</>,
    complexity: 3,
    cost: 2,
    maneuverability: 4,
    speed: 5,
    pros: [
      <>Fast movement</>,
      <>Simpler than mecanum</>,
      <>Good maneuverability</>
    ],
    cons: [
      <>Less traction</>,
      <>Wheel wear</>,
      <>Slippage in turns</>
    ],
  },
];

function getRatingStars(rating: number) {
  return "⭐".repeat(rating) + "☆".repeat(5 - rating);
}

export default function DrivetrainsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Drivetrain Types</h1>
        <p className="text-lg text-muted-foreground">
          Explore different drivetrain configurations for your robot. Each has unique strengths and trade-offs.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {drivetrains.map((drivetrain) => (
          <Card key={drivetrain.name} className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">{drivetrain.name}</CardTitle>
                  <CardDescription className="mt-2">{drivetrain.description}</CardDescription>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline">Complexity: {getRatingStars(drivetrain.complexity)}</Badge>
                <Badge variant="outline">Cost: {"$".repeat(drivetrain.cost)}</Badge>
                <Badge variant="outline">Speed: {getRatingStars(drivetrain.speed)}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold text-green-600 dark:text-green-400">Pros</h4>
                  <ul className="space-y-1 text-sm">
                    {drivetrain.pros.map((pro, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">✓</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-red-600 dark:text-red-400">Cons</h4>
                  <ul className="space-y-1 text-sm">
                    {drivetrain.cons.map((con, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">✗</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Link href={drivetrain.href} className="mt-4 block">
                <Button className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 rounded-lg border bg-card p-6">
        <h2 className="mb-4 text-2xl font-bold">How to Choose?</h2>
        <div className="space-y-3 text-muted-foreground">
          <p>
            <strong className="text-foreground">Tank Drive:</strong> Best for beginners, pushing-heavy games, and simple <TermTooltip term="autonomous">autonomous</TermTooltip> routines.
          </p>
          <p>
            <strong className="text-foreground"><TermTooltip term="mecanum">Mecanum Drive</TermTooltip>:</strong> Ideal for games requiring precise positioning and quick repositioning without turning.
          </p>
          <p>
            <strong className="text-foreground"><TermTooltip term="swerve">Swerve Drive</TermTooltip>:</strong> For advanced teams with resources, time, and need for maximum performance.
          </p>
          <p>
            <strong className="text-foreground">Omni Drive:</strong> Good balance between speed and maneuverability for fast-paced games.
          </p>
        </div>
      </div>
    </div>
  );
}
