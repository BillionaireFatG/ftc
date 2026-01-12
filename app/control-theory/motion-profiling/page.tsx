import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function MotionProfilingPage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Motion Profiling</h1>
        <p className="text-lg text-muted-foreground">
          Generate smooth, controlled paths with velocity and acceleration constraints
        </p>
        <Badge className="mt-4">Difficulty: Advanced</Badge>
      </div>

      <Card className="mb-8 border-primary/50">
        <CardHeader>
          <CardTitle>What is Motion Profiling?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Motion profiling generates a time-based trajectory that defines how your robot should move from point A to point B. Instead of instantly commanding full speed, it creates a smooth acceleration, constant velocity, and deceleration profile.
          </p>
          <p>
            This prevents wheel slippage, reduces mechanical stress, and enables precise, repeatable autonomous movements.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Trapezoidal Motion Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm">The most common profile consists of three phases:</p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">1. Acceleration</h4>
              <p className="text-sm">Gradually increase velocity from 0 to max velocity</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">2. Cruise</h4>
              <p className="text-sm">Maintain constant max velocity</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">3. Deceleration</h4>
              <p className="text-sm">Gradually decrease velocity to 0 at target</p>
            </div>
          </div>
          <div className="bg-muted p-4 rounded-lg mt-4 text-center">
            <div className="font-mono text-sm">
              Velocity<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;▁▂▃▄▅▆▇█████████████████████▇▆▅▄▃▂▁<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;└─────────────────────────────────&gt; Time
            </div>
            <p className="text-xs text-muted-foreground mt-2">Trapezoidal velocity profile</p>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Benefits of Motion Profiling</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
              <span><strong>Smooth movement:</strong> No jerky starts or stops</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
              <span><strong>Prevent wheel slip:</strong> Controlled acceleration within traction limits</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
              <span><strong>Repeatable:</strong> Consistent performance every run</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
              <span><strong>Predictable timing:</strong> Know exactly when robot arrives</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
              <span><strong>Reduced stress:</strong> Less wear on mechanical components</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
              <span><strong>Better control:</strong> Feedforward works optimally with profiles</span>
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
            <code>{`public class TrapezoidalMotionProfile {
    private double maxVelocity;
    private double maxAcceleration;
    private double distance;
    private double startTime;
    
    public TrapezoidalMotionProfile(double distance, 
                                   double maxVel, 
                                   double maxAccel) {
        this.distance = distance;
        this.maxVelocity = maxVel;
        this.maxAcceleration = maxAccel;
    }
    
    public void start() {
        startTime = System.currentTimeMillis() / 1000.0;
    }
    
    public ProfileState getState(double currentTime) {
        double t = currentTime - startTime;
        
        // Calculate profile durations
        double accelTime = maxVelocity / maxAcceleration;
        double accelDistance = 0.5 * maxAcceleration * accelTime * accelTime;
        
        // Check if we reach max velocity
        if (accelDistance * 2 > distance) {
            // Triangular profile (never reach max velocity)
            double peakVel = Math.sqrt(maxAcceleration * distance);
            accelTime = peakVel / maxAcceleration;
            
            if (t < accelTime) {
                // Acceleration phase
                return new ProfileState(
                    0.5 * maxAcceleration * t * t,
                    maxAcceleration * t,
                    maxAcceleration
                );
            } else {
                // Deceleration phase
                double decelT = t - accelTime;
                return new ProfileState(
                    distance - 0.5 * maxAcceleration * decelT * decelT,
                    peakVel - maxAcceleration * decelT,
                    -maxAcceleration
                );
            }
        } else {
            // Trapezoidal profile
            double cruiseDistance = distance - 2 * accelDistance;
            double cruiseTime = cruiseDistance / maxVelocity;
            double totalTime = 2 * accelTime + cruiseTime;
            
            if (t < accelTime) {
                // Acceleration
                return new ProfileState(
                    0.5 * maxAcceleration * t * t,
                    maxAcceleration * t,
                    maxAcceleration
                );
            } else if (t < accelTime + cruiseTime) {
                // Cruise
                double cruiseT = t - accelTime;
                return new ProfileState(
                    accelDistance + maxVelocity * cruiseT,
                    maxVelocity,
                    0
                );
            } else if (t < totalTime) {
                // Deceleration
                double decelT = t - accelTime - cruiseTime;
                return new ProfileState(
                    distance - 0.5 * maxAcceleration * 
                        (accelTime - decelT) * (accelTime - decelT),
                    maxVelocity - maxAcceleration * decelT,
                    -maxAcceleration
                );
            } else {
                // Finished
                return new ProfileState(distance, 0, 0);
            }
        }
    }
}

class ProfileState {
    double position;
    double velocity;
    double acceleration;
    
    ProfileState(double pos, double vel, double accel) {
        this.position = pos;
        this.velocity = vel;
        this.acceleration = accel;
    }
}

// Usage:
TrapezoidalMotionProfile profile = 
    new TrapezoidalMotionProfile(
        60,    // 60 inches distance
        40,    // 40 in/s max velocity
        20     // 20 in/s² max acceleration
    );

profile.start();

// In your control loop:
ProfileState target = profile.getState(currentTime);
double error = target.position - currentPosition;

// Use target velocity for feedforward
double power = feedforward.calculate(target.velocity, target.acceleration) 
             + pid.calculate(currentPosition);`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Choosing Parameters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Max Velocity:</h4>
            <p className="text-sm">Set to 70-80% of your robot's theoretical max speed for safety margin.</p>
            <p className="text-sm text-muted-foreground">Example: If max = 8 ft/s, use 6 ft/s for profile</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Max Acceleration:</h4>
            <p className="text-sm">Must be within your wheel traction limits. Test empirically.</p>
            <p className="text-sm text-muted-foreground">Start conservative (2-3 ft/s²), increase until you see wheel slip</p>
          </div>
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
            <p className="text-sm"><strong>Warning:</strong> Too aggressive acceleration will cause wheel slip and inconsistent autonomous routines!</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Advanced: Path Following</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm">
            For complex paths (curves, arcs), combine motion profiling with path following algorithms:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li><strong>Pure Pursuit:</strong> Follow a path of waypoints with lookahead distance</li>
            <li><strong>Ramsete Controller:</strong> Non-linear path follower for differential drives</li>
            <li><strong>Spline Generation:</strong> Create smooth curves between waypoints</li>
          </ul>
          <p className="text-sm mt-4">
            Libraries like RoadRunner (FTC) and WPILib (FRC) provide these advanced features out of the box.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
