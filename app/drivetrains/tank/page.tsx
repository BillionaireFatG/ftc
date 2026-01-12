import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TankDrivePage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Tank Drive</h1>
        <p className="text-lg text-muted-foreground">
          The most reliable and straightforward drivetrain for FTC robots
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge>Complexity: ⭐☆☆☆☆</Badge>
          <Badge>Cost: $☆☆☆☆</Badge>
          <Badge>Maneuverability: ⭐⭐☆☆☆</Badge>
          <Badge>Speed: ⭐⭐⭐⭐☆</Badge>
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Tank drive uses two sets of wheels (left and right) that are powered independently. To move forward, both sides rotate forward. To turn, the sides rotate at different speeds or in opposite directions.
          </p>
          <p>
            This is the same principle used in military tanks and bulldozers, hence the name. The simplicity makes it extremely reliable and predictable.
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
                <span><strong>Simple construction:</strong> Only requires 2-4 motors and standard wheels</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
                <span><strong>High torque:</strong> Excellent pushing power for defense and game elements</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
                <span><strong>Easy programming:</strong> Straightforward control code</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
                <span><strong>Predictable behavior:</strong> Reliable autonomous movements</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
                <span><strong>Low cost:</strong> Budget-friendly option for new teams</span>
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
                <span><strong>No strafing:</strong> Must turn to change direction</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-600 dark:text-red-400">✗</span>
                <span><strong>Limited maneuverability:</strong> Larger turning radius</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-600 dark:text-red-400">✗</span>
                <span><strong>Wheel scrub:</strong> Friction during turns can cause wear</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-600 dark:text-red-400">✗</span>
                <span><strong>Slow repositioning:</strong> Must turn then drive</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Motor Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Tank drives typically use 2 to 4 motors:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>2-Motor:</strong> One motor per side. Simple but less power.</li>
            <li><strong>4-Motor:</strong> Two motors per side. More power, better acceleration, and redundancy.</li>
            <li><strong>6-Motor:</strong> Three motors per side. Maximum power for heavy robots.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Programming Example (Java)</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code>{`// Basic Tank Drive Control
public void teleopPeriodic() {
    // Get joystick inputs
    double leftPower = -gamepad1.left_stick_y;
    double rightPower = -gamepad1.right_stick_y;
    
    // Apply power to motors
    leftFront.setPower(leftPower);
    leftRear.setPower(leftPower);
    rightFront.setPower(rightPower);
    rightRear.setPower(rightPower);
}

// Arcade Drive (single stick steering)
public void arcadeDrive() {
    double drive = -gamepad1.left_stick_y;
    double turn = gamepad1.right_stick_x;
    
    double leftPower = drive + turn;
    double rightPower = drive - turn;
    
    leftFront.setPower(leftPower);
    leftRear.setPower(leftPower);
    rightFront.setPower(rightPower);
    rightRear.setPower(rightPower);
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
            <li>✓ Beginner teams learning robotics</li>
            <li>✓ Games requiring pushing power</li>
            <li>✓ Simple autonomous routines</li>
            <li>✓ Tight budget constraints</li>
            <li>✓ Reliable, predictable performance</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
