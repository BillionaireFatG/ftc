import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Gauge, Zap, Cog, ArrowRight } from "lucide-react";

const calculators = [
  {
    name: "Speed Calculator",
    href: "/calculators/speed",
    icon: Gauge,
    description: "Calculate your robot's maximum speed based on motor RPM, wheel diameter, and gear ratio.",
    features: ["Max speed in multiple units", "Time to cross field", "Gear ratio recommendations"],
  },
  {
    name: "Torque Calculator",
    href: "/calculators/torque",
    icon: Zap,
    description: "Determine wheel torque, pushing force, and acceleration based on motor specs.",
    features: ["Wheel torque calculation", "Pushing force estimate", "Acceleration prediction"],
  },
  {
    name: "Gear Ratio Calculator",
    href: "/calculators/gear-ratio",
    icon: Cog,
    description: "Find optimal gear ratios for your desired speed and torque requirements.",
    features: ["Speed vs torque tradeoff", "Optimal ratio finder", "Multiple gear options"],
  },
];

export default function CalculatorsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Drivetrain Calculators</h1>
        <p className="text-lg text-muted-foreground">
          Interactive tools to help you design and optimize your robot's drivetrain.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {calculators.map((calc) => (
          <Card key={calc.name} className="transition-all hover:shadow-lg">
            <CardHeader>
              <calc.icon className="mb-4 h-12 w-12 text-primary" />
              <CardTitle>{calc.name}</CardTitle>
              <CardDescription>{calc.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="mb-4 space-y-2 text-sm">
                {calc.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={calc.href}>
                <Button className="w-full group">
                  Open Calculator
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle>How to Use These Calculators</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Our calculators help you make data-driven decisions about your drivetrain design:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Input your parameters:</strong> Enter motor specs, wheel size, and gear ratios</li>
            <li><strong>Review the results:</strong> See calculated speed, torque, and performance metrics</li>
            <li><strong>Experiment:</strong> Try different combinations to find the optimal setup</li>
            <li><strong>Apply to your robot:</strong> Use the insights to build your drivetrain</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}
