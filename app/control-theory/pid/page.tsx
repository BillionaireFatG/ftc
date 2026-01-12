import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PIDPage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">PID Controller</h1>
        <p className="text-lg text-muted-foreground">
          Proportional-Integral-Derivative control for precise robot movements
        </p>
        <Badge className="mt-4">Difficulty: Intermediate</Badge>
      </div>

      <Card className="mb-8 border-primary/50">
        <CardHeader>
          <CardTitle>What is PID Control?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            PID is a feedback control algorithm that continuously calculates an error value as the difference between a desired setpoint and a measured process variable. It applies a correction based on proportional, integral, and derivative terms.
          </p>
          <div className="rounded-lg bg-muted p-4 font-mono text-sm">
            output = Kp × error + Ki × ∫error dt + Kd × (d error / dt)
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>The Three Components</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Proportional (P)</h4>
              <p className="text-sm mb-2">Responds to the <strong>current error</strong>. The larger the error, the stronger the correction.</p>
              <p className="text-sm text-muted-foreground">Think: "How far off am I right now?"</p>
              <div className="mt-2 text-sm bg-muted p-2 rounded">output = Kp × error</div>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Integral (I)</h4>
              <p className="text-sm mb-2">Accumulates <strong>past errors</strong> over time. Eliminates steady-state error.</p>
              <p className="text-sm text-muted-foreground">Think: "How long have I been off?"</p>
              <div className="mt-2 text-sm bg-muted p-2 rounded">output = Ki × sum(all previous errors)</div>
            </div>
            <div>
              <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Derivative (D)</h4>
              <p className="text-sm mb-2">Predicts <strong>future error</strong> based on rate of change. Reduces overshoot.</p>
              <p className="text-sm text-muted-foreground">Think: "How fast am I approaching the target?"</p>
              <div className="mt-2 text-sm bg-muted p-2 rounded">output = Kd × (current error - previous error)</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>When to Use PID</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
              <span><strong>Straight driving:</strong> Maintain heading using gyro feedback</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
              <span><strong>Turn to angle:</strong> Rotate to precise heading</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
              <span><strong>Arm positioning:</strong> Hold arm at specific angle</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
              <span><strong>Flywheel speed:</strong> Maintain consistent shooter velocity</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
              <span><strong>Drive to position:</strong> Move to specific coordinates</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Programming Example (Java)</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`public class PIDController {
    private double kP, kI, kD;
    private double integral = 0;
    private double previousError = 0;
    private double setpoint = 0;
    
    public PIDController(double kP, double kI, double kD) {
        this.kP = kP;
        this.kI = kI;
        this.kD = kD;
    }
    
    public void setTarget(double setpoint) {
        this.setpoint = setpoint;
        integral = 0; // Reset integral on new target
    }
    
    public double calculate(double measurement) {
        // Calculate error
        double error = setpoint - measurement;
        
        // Proportional term
        double p = kP * error;
        
        // Integral term (accumulated error)
        integral += error;
        double i = kI * integral;
        
        // Derivative term (rate of change)
        double derivative = error - previousError;
        double d = kD * derivative;
        
        previousError = error;
        
        // Return total output
        return p + i + d;
    }
    
    public void reset() {
        integral = 0;
        previousError = 0;
    }
}

// Usage Example: Heading Hold
PIDController headingPID = new PIDController(0.05, 0.001, 0.01);
headingPID.setTarget(0); // Target heading: 0 degrees

// In your loop:
double currentHeading = imu.getAngularOrientation().firstAngle;
double correction = headingPID.calculate(currentHeading);

// Apply correction to drivetrain
leftPower = basePower + correction;
rightPower = basePower - correction;`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Tuning Your PID Controller</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Step-by-Step Process:</h4>
            <ol className="list-decimal pl-6 space-y-2 text-sm">
              <li><strong>Start with Kp only</strong> (Ki=0, Kd=0). Gradually increase until system oscillates.</li>
              <li><strong>Reduce Kp</strong> by 30-50% from oscillation point.</li>
              <li><strong>Add Kd</strong> to reduce overshoot and dampen oscillations. Start with Kd = Kp/10.</li>
              <li><strong>Add Ki</strong> only if there's steady-state error. Start very small (Kp/100).</li>
              <li><strong>Fine-tune</strong> all three values for optimal performance.</li>
            </ol>
          </div>
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Common Problems:</h4>
            <ul className="space-y-1 text-sm">
              <li>• <strong>Oscillates around target:</strong> Kp too high or Kd too low</li>
              <li>• <strong>Slow to reach target:</strong> Kp too low</li>
              <li>• <strong>Overshoots target:</strong> Kp too high, add more Kd</li>
              <li>• <strong>Never quite reaches target:</strong> Add Ki (but keep it small!)</li>
              <li>• <strong>Unstable behavior:</strong> Ki too high (integral windup)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tips for Success</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>• <strong>Start simple:</strong> Get P working first, then add D, finally I if needed</p>
          <p>• <strong>Tune for one task:</strong> Different tasks may need different gains</p>
          <p>• <strong>Use telemetry:</strong> Graph error, output, and measurement over time</p>
          <p>• <strong>Prevent integral windup:</strong> Cap the integral term to avoid instability</p>
          <p>• <strong>Reset on new target:</strong> Clear integral when changing setpoints</p>
          <p>• <strong>Consider feedforward:</strong> Combine PID with feedforward for best results</p>
        </CardContent>
      </Card>
    </div>
  );
}
