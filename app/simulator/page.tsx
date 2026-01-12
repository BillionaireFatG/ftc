import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket } from "lucide-react";

export default function SimulatorPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">3D Drivetrain Simulator</h1>
        <p className="text-lg text-muted-foreground">
          Test and visualize drivetrain configurations in a virtual environment
        </p>
        <Badge className="mt-4">Coming Soon</Badge>
      </div>

      <Card className="mb-8 border-primary/50">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Rocket className="h-12 w-12 text-primary" />
            <div>
              <CardTitle>Interactive 3D Simulator</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Experiment with different drivetrain types before building
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The simulator will allow you to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Visualize tank, mecanum, swerve, and omni drivetrains in 3D</li>
            <li>Control the robot using keyboard or gamepad input</li>
            <li>Adjust motor power, gear ratios, and wheel configurations</li>
            <li>See real-time speed, torque, and trajectory visualizations</li>
            <li>Test performance in various scenarios (obstacles, ramps, etc.)</li>
            <li>Compare different drivetrain configurations side-by-side</li>
          </ul>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Realistic Physics</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            Simulates wheel slip, momentum, friction, and motor characteristics for accurate behavior.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Live Adjustments</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            Change parameters in real-time and instantly see how they affect robot performance.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            Track speed, acceleration, turning radius, and time trials with detailed analytics.
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Development Roadmap</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold">Phase 1: Basic Simulator</h4>
            <ul className="list-disc pl-6 text-sm text-muted-foreground">
              <li>Tank drive visualization and control</li>
              <li>Basic physics simulation</li>
              <li>Keyboard controls</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Phase 2: Additional Drivetrains</h4>
            <ul className="list-disc pl-6 text-sm text-muted-foreground">
              <li>Mecanum, swerve, and omni implementations</li>
              <li>Gamepad support</li>
              <li>Performance metrics dashboard</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Phase 3: Advanced Features</h4>
            <ul className="list-disc pl-6 text-sm text-muted-foreground">
              <li>Competition field environments</li>
              <li>Obstacle courses and challenges</li>
              <li>Autonomous path recording and playback</li>
              <li>Configuration saving and sharing</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
