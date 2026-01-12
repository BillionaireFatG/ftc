import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FeedforwardPage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Feedforward Control</h1>
        <p className="text-lg text-muted-foreground">
          Model-based control that predicts required power using physics
        </p>
        <Badge className="mt-4">Difficulty: Advanced</Badge>
      </div>

      <Card className="mb-8 border-primary/50">
        <CardHeader>
          <CardTitle>What is Feedforward?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Feedforward control uses a mathematical model of your system to calculate the required input <strong>before</strong> measuring the output. Unlike PID (which reacts to errors), feedforward <strong>predicts</strong> what power is needed.
          </p>
          <div className="rounded-lg bg-muted p-4 font-mono text-sm">
            output = kS + kV × velocity + kA × acceleration
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            kS = Static friction, kV = Velocity constant, kA = Acceleration constant
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">kS (Static)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Minimum power needed to overcome static friction and start moving.</p>
            <p className="text-sm text-muted-foreground mt-2">Example: 0.1 (10% power)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">kV (Velocity)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Power per unit velocity. Maintains constant speed against resistance.</p>
            <p className="text-sm text-muted-foreground mt-2">Example: 0.05 per ft/s</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">kA (Acceleration)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Additional power needed for acceleration. Overcomes inertia.</p>
            <p className="text-sm text-muted-foreground mt-2">Example: 0.02 per ft/s²</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Why Use Feedforward?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Advantages:</h4>
              <ul className="space-y-1 text-sm">
                <li>✓ Faster response (predictive, not reactive)</li>
                <li>✓ No oscillation issues</li>
                <li>✓ Works well for velocity control</li>
                <li>✓ Reduces PID gain requirements</li>
                <li>✓ More efficient power usage</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-600 dark:text-yellow-400 mb-2">Limitations:</h4>
              <ul className="space-y-1 text-sm">
                <li>⚠ Requires system characterization</li>
                <li>⚠ Model must be accurate</li>
                <li>⚠ Doesn't correct for errors</li>
                <li>⚠ Best combined with PID feedback</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Programming Example (Java)</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`public class FeedforwardController {
    private double kS, kV, kA;
    
    public FeedforwardController(double kS, double kV, double kA) {
        this.kS = kS;
        this.kV = kV;
        this.kA = kA;
    }
    
    public double calculate(double velocity, double acceleration) {
        // Calculate feedforward output
        return kS * Math.signum(velocity) + 
               kV * velocity + 
               kA * acceleration;
    }
}

// Combined PID + Feedforward (Best Approach)
public class HybridController {
    private PIDController pid;
    private FeedforwardController feedforward;
    
    public double calculate(double setpoint, double measurement, 
                           double velocity, double acceleration) {
        // Feedforward provides base power
        double ff = feedforward.calculate(velocity, acceleration);
        
        // PID corrects any remaining error
        double fb = pid.calculate(measurement);
        
        return ff + fb;
    }
}

// Example: Drivetrain velocity control
FeedforwardController ff = new FeedforwardController(0.1, 0.05, 0.02);
PIDController pid = new PIDController(0.01, 0, 0.001);

// In your loop:
double targetVelocity = 5.0; // ft/s
double currentVelocity = getWheelVelocity();
double acceleration = (targetVelocity - currentVelocity) / dt;

double ffOutput = ff.calculate(targetVelocity, acceleration);
double pidCorrection = pid.calculate(currentVelocity);

double motorPower = ffOutput + pidCorrection;`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Characterizing Your Robot</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>To find kS, kV, and kA for your robot:</p>
          <ol className="list-decimal pl-6 space-y-3 text-sm">
            <li>
              <strong>Find kS (Static Friction):</strong>
              <p className="mt-1 text-muted-foreground">Gradually increase motor power until robot just starts moving. That power value is kS.</p>
            </li>
            <li>
              <strong>Find kV (Velocity Constant):</strong>
              <p className="mt-1 text-muted-foreground">Drive at various constant speeds, measure velocity and power. kV = (Power - kS) / Velocity. Average multiple data points.</p>
            </li>
            <li>
              <strong>Find kA (Acceleration Constant):</strong>
              <p className="mt-1 text-muted-foreground">Accelerate robot, measure power, velocity, and acceleration. kA = (Power - kS - kV × velocity) / acceleration.</p>
            </li>
          </ol>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-4">
            <p className="text-sm"><strong>Tip:</strong> Use tools like FTC Dashboard or WPILib's characterization tools to automate this process and get accurate measurements.</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Best Practices</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>• <strong>Always combine with PID:</strong> Feedforward alone can't correct for disturbances</p>
          <p>• <strong>Recharacterize periodically:</strong> Constants change as robot weight/friction changes</p>
          <p>• <strong>Use for velocity control:</strong> Feedforward excels at maintaining constant speeds</p>
          <p>• <strong>Smooth acceleration:</strong> Better feedforward performance with motion profiling</p>
          <p>• <strong>Separate constants per side:</strong> Left and right drivetrain may differ</p>
        </CardContent>
      </Card>
    </div>
  );
}
