import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function MecanumDrivePage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Mecanum Drive</h1>
        <p className="text-lg text-muted-foreground">
          Holonomic drivetrain with omnidirectional movement capabilities
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge>Complexity: ⭐⭐⭐☆☆</Badge>
          <Badge>Cost: $$$☆☆</Badge>
          <Badge>Maneuverability: ⭐⭐⭐⭐⭐</Badge>
          <Badge>Speed: ⭐⭐⭐☆☆</Badge>
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Mecanum wheels feature rollers at 45-degree angles to the wheel's axis. By controlling the speed and direction of each wheel independently, the robot can move in any direction without rotating its chassis.
          </p>
          <p>
            The wheels are arranged in an "X" pattern when viewed from above, with left-front and right-rear having the same orientation, and right-front and left-rear having the opposite orientation.
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
                <span><strong>Omnidirectional:</strong> Move in any direction instantly</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
                <span><strong>No turning needed:</strong> Maintain orientation while moving</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
                <span><strong>Precise positioning:</strong> Perfect for alignment tasks</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
                <span><strong>Field-centric control:</strong> Drive relative to field orientation</span>
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
                <span><strong>Reduced traction:</strong> Only 70% of wheel surface contacts ground</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-600 dark:text-red-400">✗</span>
                <span><strong>Complex programming:</strong> Vector math required</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-600 dark:text-red-400">✗</span>
                <span><strong>Expensive wheels:</strong> Higher cost than standard wheels</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-600 dark:text-red-400">✗</span>
                <span><strong>Drift issues:</strong> May drift during strafing</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Wheel Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Mecanum wheels must be installed in a specific pattern:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Front Left & Rear Right:</strong> Rollers point towards front-right</li>
            <li><strong>Front Right & Rear Left:</strong> Rollers point towards front-left</li>
            <li>Looking from above, the rollers form an "X" pattern</li>
          </ul>
          <div className="bg-muted p-4 rounded-lg mt-4">
            <p className="font-mono text-center">
              ╱ ╲<br/>
              ╲ ╱
            </p>
            <p className="text-center text-sm text-muted-foreground mt-2">X-pattern configuration (top view)</p>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Programming Example (Java)</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`// Mecanum Drive Control
public void teleopPeriodic() {
    double y = -gamepad1.left_stick_y;  // Forward/backward
    double x = gamepad1.left_stick_x;   // Strafe left/right
    double rx = gamepad1.right_stick_x; // Rotation
    
    // Calculate power for each wheel
    double frontLeftPower = y + x + rx;
    double frontRightPower = y - x - rx;
    double backLeftPower = y - x + rx;
    double backRightPower = y + x - rx;
    
    // Normalize powers if any exceed 1.0
    double maxPower = Math.max(
        Math.abs(frontLeftPower),
        Math.max(Math.abs(frontRightPower),
            Math.max(Math.abs(backLeftPower),
                Math.abs(backRightPower))));
    
    if (maxPower > 1.0) {
        frontLeftPower /= maxPower;
        frontRightPower /= maxPower;
        backLeftPower /= maxPower;
        backRightPower /= maxPower;
    }
    
    // Apply power to motors
    frontLeft.setPower(frontLeftPower);
    frontRight.setPower(frontRightPower);
    backLeft.setPower(backLeftPower);
    backRight.setPower(backRightPower);
}`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Best For</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>✓ Games requiring precise positioning</li>
            <li>✓ Quick repositioning without turning</li>
            <li>✓ Maintaining orientation while moving</li>
            <li>✓ Complex autonomous routines</li>
            <li>✓ Field-centric driving</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
