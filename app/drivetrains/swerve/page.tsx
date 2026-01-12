import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

export default function SwerveDrivePage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <Alert className="mb-8 border-yellow-500">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Advanced Drivetrain</AlertTitle>
        <AlertDescription>
          Swerve drive is the most complex and expensive option. Only recommended for experienced teams with significant resources and time.
        </AlertDescription>
      </Alert>

      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Swerve Drive</h1>
        <p className="text-lg text-muted-foreground">
          The ultimate in robot maneuverability with independent module steering
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge>Complexity: ⭐⭐⭐⭐⭐</Badge>
          <Badge>Cost: $$$$$</Badge>
          <Badge>Maneuverability: ⭐⭐⭐⭐⭐</Badge>
          <Badge>Speed: ⭐⭐⭐⭐⭐</Badge>
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Swerve drive uses independent modules that can both drive and rotate. Each wheel can point in any direction while also being powered, allowing for true omnidirectional movement with maximum traction.
          </p>
          <p>
            Unlike mecanum drives, swerve maintains full traction because wheels always point in the direction of travel. This combines the maneuverability of holonomic drives with the power of tank drives.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-green-600 dark:text-green-400">Advantages</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
                <span><strong>Maximum maneuverability:</strong> Move and rotate independently</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
                <span><strong>Full traction:</strong> Wheels always point in travel direction</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
                <span><strong>Highest speed:</strong> Optimal power transfer</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
                <span><strong>Field-centric control:</strong> Intuitive driving</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
                <span><strong>Defensive capability:</strong> Can push while rotating</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-red-600 dark:text-red-400">Disadvantages</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-red-600 dark:text-red-400">✗</span>
                <span><strong>Extremely complex:</strong> Hardest to build and maintain</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-600 dark:text-red-400">✗</span>
                <span><strong>Very expensive:</strong> $500-1500+ for modules</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-600 dark:text-red-400">✗</span>
                <span><strong>Difficult programming:</strong> Inverse kinematics required</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-600 dark:text-red-400">✗</span>
                <span><strong>Build time:</strong> 40-80+ hours to complete</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-600 dark:text-red-400">✗</span>
                <span><strong>Maintenance:</strong> Many failure points</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Module Requirements</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Each swerve module needs:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Drive Motor:</strong> Powers the wheel (1 per module)</li>
            <li><strong>Steering Motor:</strong> Rotates the module (1 per module)</li>
            <li><strong>Absolute Encoder:</strong> Tracks module angle</li>
            <li><strong>Gear System:</strong> Transfers power efficiently</li>
            <li><strong>Bearing System:</strong> Allows smooth rotation</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            Total: 4 modules × (2 motors + 1 encoder) = 8 motors + 4 encoders minimum
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Cost Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>4× Swerve Modules (COTS)</span>
              <span className="font-bold">$400-800</span>
            </div>
            <div className="flex justify-between">
              <span>8× Drive/Steer Motors</span>
              <span className="font-bold">$240-400</span>
            </div>
            <div className="flex justify-between">
              <span>4× Absolute Encoders</span>
              <span className="font-bold">$120-200</span>
            </div>
            <div className="flex justify-between">
              <span>Hardware & Misc</span>
              <span className="font-bold">$100-200</span>
            </div>
            <div className="flex justify-between border-t pt-2 text-lg font-bold">
              <span>Total Estimated Cost</span>
              <span>$860-1600</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Programming Complexity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Swerve drive requires inverse kinematics to convert desired robot movement into individual module states:
          </p>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
            <code>{`// Simplified swerve kinematics (actual implementation more complex)
public void drive(double x, double y, double rotation) {
    // Convert robot-centric to field-centric
    double fieldX = x * Math.cos(heading) - y * Math.sin(heading);
    double fieldY = x * Math.sin(heading) + y * Math.cos(heading);
    
    // Calculate each module's target state
    for (SwerveModule module : modules) {
        double dx = fieldX + rotation * module.y;
        double dy = fieldY - rotation * module.x;
        
        double speed = Math.sqrt(dx * dx + dy * dy);
        double angle = Math.atan2(dy, dx);
        
        module.setTargetState(speed, angle);
    }
}

// Each module also needs PID control for both:
// - Drive speed
// - Steering angle`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Is It Worth It?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="font-semibold">Consider swerve ONLY if:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You have experienced builders and programmers</li>
            <li>Your budget allows for $1000+ drivetrain investment</li>
            <li>You have 40+ hours available for build and testing</li>
            <li>Your game strategy requires maximum maneuverability</li>
            <li>You can handle complex maintenance and repairs</li>
          </ul>
          <p className="font-semibold mt-4">DO NOT attempt swerve if:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>This is your first or second season</li>
            <li>You have limited budget or time</li>
            <li>Your team lacks programming expertise</li>
            <li>Simpler drivetrains would meet game requirements</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Best For</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>✓ Championship-level competition</li>
            <li>✓ Advanced teams with resources</li>
            <li>✓ Games requiring maximum maneuverability</li>
            <li>✓ Teams with experienced mentors</li>
            <li>✓ Long-term investment across seasons</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
