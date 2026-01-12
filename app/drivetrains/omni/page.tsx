import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function OmniDrivePage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Omni Drive</h1>
        <p className="text-lg text-muted-foreground">
          Fast holonomic movement with perpendicular roller configuration
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge>Complexity: ⭐⭐⭐☆☆</Badge>
          <Badge>Cost: $$☆☆☆</Badge>
          <Badge>Maneuverability: ⭐⭐⭐⭐☆</Badge>
          <Badge>Speed: ⭐⭐⭐⭐⭐</Badge>
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Omni wheels have rollers perpendicular to the wheel's axis, allowing the wheel to slide sideways while providing forward traction. By combining multiple omni wheels in specific configurations, the robot can move omnidirectionally.
          </p>
          <p>
            Common configurations include X-drive (4 wheels at 45°), H-drive (4 drive + 2 strafe wheels), and Kiwi drive (3 wheels at 120°).
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Omni vs Mecanum</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Key Differences:</h4>
              <ul className="space-y-2">
                <li><strong>Roller Orientation:</strong> Omni rollers are perpendicular (90°), mecanum rollers are at 45°</li>
                <li><strong>Speed:</strong> Omni wheels generally provide faster movement</li>
                <li><strong>Traction:</strong> Mecanum has slightly better traction</li>
                <li><strong>Cost:</strong> Omni wheels are typically cheaper</li>
                <li><strong>Programming:</strong> Omni (X-drive) uses similar math to mecanum</li>
              </ul>
            </div>
          </div>
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
                <span><strong>High speed:</strong> Faster than mecanum drives</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
                <span><strong>Omnidirectional:</strong> Move in any direction</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
                <span><strong>Simpler than mecanum:</strong> Easier programming</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
                <span><strong>Lower cost:</strong> Cheaper wheels than mecanum</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
                <span><strong>Good maneuverability:</strong> Quick repositioning</span>
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
                <span><strong>Reduced traction:</strong> Less grip than tank drive</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-600 dark:text-red-400">✗</span>
                <span><strong>Wheel wear:</strong> Rollers can wear quickly</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-600 dark:text-red-400">✗</span>
                <span><strong>Slippage in turns:</strong> Can slide unexpectedly</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-600 dark:text-red-400">✗</span>
                <span><strong>Less pushing power:</strong> Weaker defense</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>X-Drive Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The most common omni configuration in FTC. Four wheels mounted at 45° angles:
          </p>
          <div className="bg-muted p-6 rounded-lg text-center">
            <pre className="font-mono">
{`     FL ╱ ╲ FR
        
        
     BL ╲ ╱ BR`}
            </pre>
            <p className="text-sm text-muted-foreground mt-2">X-Drive wheel orientation</p>
          </div>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Front-left and back-right wheels parallel</li>
            <li>Front-right and back-left wheels parallel</li>
            <li>All wheels at 45° to robot chassis</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Programming Example (Java)</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`// X-Drive Control (similar to mecanum)
public void teleopPeriodic() {
    double y = -gamepad1.left_stick_y;  // Forward
    double x = gamepad1.left_stick_x;   // Strafe
    double rx = gamepad1.right_stick_x; // Rotate
    
    // Calculate wheel powers (45° mounting)
    double flPower = y + x + rx;
    double frPower = y - x - rx;
    double blPower = y - x + rx;
    double brPower = y + x - rx;
    
    // Normalize if any power > 1.0
    double maxPower = Math.max(
        Math.abs(flPower),
        Math.max(Math.abs(frPower),
            Math.max(Math.abs(blPower),
                Math.abs(brPower))));
    
    if (maxPower > 1.0) {
        flPower /= maxPower;
        frPower /= maxPower;
        blPower /= maxPower;
        brPower /= maxPower;
    }
    
    // Apply to motors
    frontLeft.setPower(flPower);
    frontRight.setPower(frPower);
    backLeft.setPower(blPower);
    backRight.setPower(brPower);
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
            <li>✓ Fast-paced games requiring speed</li>
            <li>✓ Quick repositioning without turning</li>
            <li>✓ Teams wanting holonomic without mecanum cost</li>
            <li>✓ Offensive strategies (speed over defense)</li>
            <li>✓ Smooth field surfaces (reduced traction OK)</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
