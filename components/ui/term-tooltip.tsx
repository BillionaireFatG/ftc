"use client"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const glossary: Record<string, string> = {
  // Control Theory & Programming
  "PID": "Proportional-Integral-Derivative: A feedback control loop that continuously calculates an error value and applies a correction based on proportional, integral, and derivative terms.",
  "proportional": "The P in PID. Responds to the current error - how far you are from the target right now.",
  "integral": "The I in PID. Responds to accumulated past errors over time. Helps eliminate steady-state error.",
  "derivative": "The D in PID. Responds to how fast the error is changing. Reduces overshoot and oscillation.",
  "feedforward": "A control strategy that uses knowledge of the system to predict and compensate for disturbances before they affect the output.",
  "feedback": "Information about the system's output that's sent back to adjust the input. Like checking your speed on a speedometer.",
  "closed-loop": "A control system that uses feedback to correct errors automatically. More reliable than open-loop.",
  "open-loop": "A control system with no feedback - just sets power and hopes for the best. Simple but unreliable.",
  "setpoint": "The target value you want to achieve (like desired speed or position).",
  "error": "The difference between where you want to be (setpoint) and where you actually are (current value).",
  "overshoot": "When your robot goes past the target before correcting. Too much P or not enough D causes this.",
  "oscillation": "When your robot repeatedly swings back and forth around the target. Sign of bad tuning.",
  "steady-state error": "The leftover error that remains even after the system stabilizes. Fixed by adding I term.",
  "motion profiling": "A technique to generate smooth acceleration and deceleration curves for more controlled and faster movements.",
  "trapezoidal profile": "A motion profile with constant acceleration, constant velocity, then constant deceleration. Looks like a trapezoid on a graph.",
  "kinematics": "The mathematics describing the motion of the robot based on wheel velocities and positions.",
  "inverse kinematics": "Math to figure out what each wheel should do to make the robot move in a desired way.",
  "odometry": "Using wheel encoders and sensors to track the robot's position on the field.",
  "dead reckoning": "Calculating position by tracking wheel rotations. Gets less accurate over time due to slipping.",
  "path following": "Making the robot follow a planned path using sensors and control systems.",
  
  // Drivetrain Basics
  "drivetrain": "The group of components that deliver power to the driving wheels, including motors, gears, and wheels.",
  "tank drive": "The simplest drivetrain with left and right wheels, like a military tank. Can't move sideways.",
  "mecanum": "A type of holonomic wheel with rollers at 45° angles that allows omnidirectional movement without rotation.",
  "holonomic": "A drivetrain capable of moving in any direction without changing its orientation (can strafe sideways).",
  "non-holonomic": "A drivetrain that must rotate to change direction. Tank drive is non-holonomic.",
  "swerve": "An advanced drivetrain where each wheel can independently rotate and drive, providing maximum maneuverability.",
  "omni wheel": "A wheel with small rollers around its circumference, allowing it to roll sideways with little friction.",
  "omnidirectional": "Able to move in any direction without turning the robot - like moving sideways or diagonally.",
  "strafe": "To move sideways without rotating. Only holonomic drivetrains (mecanum, omni, swerve) can strafe.",
  "field-centric": "A control mode where the robot moves relative to the field (not the robot's orientation). Forward is always away from the driver.",
  "robot-centric": "Control mode where forward/back/left/right are relative to the robot's current orientation.",
  "differential steering": "Steering by making left and right wheels spin at different speeds, like a tank.",
  "ackermann steering": "Car-like steering where front wheels pivot. Not common in FTC/FRC.",
  "wheel base": "The distance between the front and rear axles. Affects turning radius.",
  "track width": "The distance between left and right wheels. Wider = more stable but larger turning radius.",
  "center of gravity": "The balance point of your robot. Lower = more stable. Should be centered between wheels.",
  "ground clearance": "How high the bottom of your robot is off the ground. Affects ability to go over obstacles.",
  
  // Mechanical Components & Systems
  "gear ratio": "The ratio between the number of teeth on two gears that are meshed together, determining the mechanical advantage.",
  "gear": "A rotating wheel with teeth that meshes with other gears to transfer power.",
  "teeth": "The protruding parts on a gear that mesh with other gears. More teeth = larger gear.",
  "pitch": "The spacing between gear teeth. Gears must have the same pitch to mesh properly.",
  "module": "Another way to describe gear tooth size (metric). Similar to pitch.",
  "reduction": "A gear ratio greater than 1:1 that trades speed for torque (power). Example: 4:1 means 4x more torque, 1/4 speed.",
  "overdrive": "A gear ratio less than 1:1 that trades torque for speed. Example: 1:2 means 2x speed, 1/2 torque.",
  "compound gearing": "Multiple gear stages combined together to achieve higher total gear ratios.",
  "spur gear": "The most common type of gear with straight teeth. Simple and efficient.",
  "bevel gear": "A cone-shaped gear used to change power direction by 90 degrees.",
  "worm gear": "A gear system with very high reduction (like 50:1) that can lock in place. Used for arms.",
  "planetary gearbox": "A compact gearbox with multiple gears (planets) rotating around a central gear (sun). High reduction in small space.",
  "chain": "A loop of connected links used to transfer power between sprockets, similar to a bicycle chain.",
  "sprocket": "A toothed wheel that engages with chain to transfer rotational power.",
  "chain pitch": "The distance between chain links. Common sizes: #25 and #35.",
  "chain tension": "How tight the chain is. Too loose = skipping, too tight = extra friction.",
  "belt": "A flexible loop (timing belt) used to transfer power between pulleys without slipping.",
  "timing belt": "A belt with teeth that prevent slipping. More reliable than smooth belts.",
  "pulley": "A wheel with a grooved rim that holds a belt for power transmission.",
  "bearing": "A device that allows smooth rotation while supporting weight. Reduces friction.",
  "bushing": "A simple bearing - usually a smooth tube. More friction than a ball bearing but cheaper.",
  "shaft": "A rotating rod that transmits power, like the axle on a wheel.",
  "hex shaft": "A shaft with hexagonal cross-section. Common in FTC (5mm hex).",
  "axle": "Another word for shaft, especially the shaft that wheels attach to.",
  "hub": "The part that connects a wheel to a shaft.",
  "coupler": "A connector that joins two shafts together.",
  "motor mount": "The bracket or plate that holds a motor securely to the robot.",
  "tensioner": "A device that keeps chains or belts at the right tension.",
  
  // Force, Power & Physics
  "torque": "A measure of rotational force, typically measured in Newton-meters (N⋅m). Higher torque means more pushing/pulling power.",
  "force": "A push or pull on an object. Measured in Newtons (N).",
  "power": "How fast work is done. Measured in Watts (W). Power = Force × Velocity.",
  "work": "Force applied over a distance. Moving something requires work.",
  "energy": "The capacity to do work. Stored in batteries, springs, flywheels, etc.",
  "momentum": "Mass times velocity. Heavy/fast objects have more momentum and are harder to stop.",
  "inertia": "An object's resistance to changes in motion. Heavier objects have more inertia.",
  "RPM": "Revolutions Per Minute: The number of complete rotations a motor or wheel makes in one minute.",
  "angular velocity": "How fast something is rotating. Can be measured in RPM or radians per second.",
  "linear velocity": "How fast something is moving in a straight line. Your robot's speed.",
  "stall torque": "The maximum torque a motor can produce when it's prevented from rotating (at zero RPM).",
  "stall current": "The current a motor draws when it's stalled (can't rotate). Very high - can damage the motor.",
  "free speed": "The maximum RPM a motor can achieve with no load attached.",
  "no-load current": "The current a motor draws when spinning freely with no load.",
  "efficiency": "How much of the input energy actually does useful work. Higher = less waste as heat.",
  "mechanical advantage": "Using machines (like gears or levers) to multiply force. Higher ratio = more force but slower.",
  "traction": "The friction between the wheels and the playing surface that prevents slipping.",
  "friction": "The force that resists sliding between two surfaces in contact.",
  "friction coefficient": "A number representing how much grip exists between two surfaces. Higher = more grip.",
  "static friction": "The friction that must be overcome to start an object moving. Usually higher than kinetic friction.",
  "kinetic friction": "The friction when something is already sliding. Less than static friction.",
  "acceleration": "How quickly the robot's speed changes. Measured in meters per second squared (m/s²).",
  "deceleration": "Negative acceleration - slowing down.",
  "velocity": "Speed in a specific direction. How fast the robot is moving.",
  "speed": "How fast something is moving, without specifying direction.",
  "distance": "How far something has traveled.",
  "displacement": "How far something is from its starting position (straight line).",
  "newton": "The unit of force. 1 N is the force needed to accelerate 1 kg at 1 m/s².",
  "mass": "The amount of matter in an object. Measured in kilograms (kg).",
  "weight": "The force of gravity on an object. Weight = mass × gravity (9.8 m/s²).",
  
  // Sensors & Measurement
  "encoder": "A sensor that measures the rotation of a motor or wheel, used for precise movement control.",
  "quadrature encoder": "The most common encoder type. Uses two signals to detect direction and count rotations.",
  "counts per revolution": "How many signals an encoder sends per full rotation. Higher = more precise.",
  "absolute encoder": "An encoder that knows its exact position even after power loss. Used in swerve modules.",
  "relative encoder": "An encoder that only tracks changes. Loses position when powered off.",
  "gyro": "Gyroscope: A sensor that measures rotational motion and orientation, essential for straight driving and turns.",
  "gyroscope": "Full name for gyro. Measures angular velocity (how fast you're rotating).",
  "accelerometer": "A sensor that measures acceleration and tilt. Can detect sudden impacts.",
  "IMU": "Inertial Measurement Unit: Combines gyroscope and accelerometer to measure rotation and movement.",
  "compass": "A sensor that measures which direction is North. Used for field-centric control.",
  "magnetometer": "Another name for compass. Detects magnetic fields.",
  "distance sensor": "A sensor that measures how far away objects are. Types: ultrasonic, IR, ToF.",
  "ultrasonic": "Uses sound waves to measure distance. Like a bat's echolocation.",
  "infrared": "Uses IR light to detect objects or measure distance.",
  "color sensor": "Detects the color of objects. Used to identify game pieces.",
  "touch sensor": "A simple button or switch that detects physical contact.",
  "limit switch": "A touch sensor that stops a mechanism when it reaches the end of travel.",
  "potentiometer": "A rotary sensor that measures angular position. Like a volume knob.",
  "analog signal": "A continuous signal that can have any value in a range (like 0-5 volts).",
  "digital signal": "A signal that's either ON or OFF (1 or 0). More reliable over long distances.",
  
  // Competition & Strategy
  "autonomous": "The period in FTC/FRC matches where the robot operates without driver input, following pre-programmed instructions.",
  "teleop": "Tele-operated: The period in matches where human drivers control the robot with gamepads.",
  "driver control": "Another name for teleop period.",
  "endgame": "The final 30 seconds of a match, often with special scoring opportunities.",
  "alliance": "A team of 2-3 robots working together in a match.",
  "match": "A competition game between two alliances.",
  "qualification": "Early matches where all teams compete to rank for playoffs.",
  "playoffs": "Elimination rounds after qualifications. Lose and you're out.",
  "ranking points": "Points earned in qualifications that determine playoff seeding.",
  "game piece": "Objects that robots manipulate to score (like balls, blocks, cones).",
  "scoring element": "Another name for game piece.",
  "field": "The playing area where matches happen. Usually 12'×12' for FTC, 27'×54' for FRC.",
  "field perimeter": "The walls around the edge of the field.",
  "starting position": "Where your robot must be placed at the start of a match.",
  "alliance station": "The area where drivers stand to control their robots.",
  "game manual": "The official rules document for the competition. Must read this!",
  "strategy": "Your plan for how to score points and win matches.",
  "cycle time": "How long it takes to grab a game piece, score it, and get another one.",
  "defense": "Blocking or hindering opponent robots (within rules).",
  
  // Electronics & Programming
  "motor controller": "An electronic device that controls the speed and direction of a motor.",
  "control hub": "The main computer/controller in an FTC robot. Made by REV Robotics.",
  "expansion hub": "An additional hub to control more motors/servos in FTC.",
  "roborio": "The main controller used in FRC robots.",
  "brain": "The main controller in VEX robotics.",
  "servo": "A motor that moves to and holds a specific position. Good for arms, claws, etc.",
  "continuous servo": "A servo modified to spin continuously like a motor.",
  "battery": "Power source for the robot. FTC uses 12V batteries that drain during matches.",
  "voltage": "Electrical pressure that pushes current through a circuit. Measured in Volts (V).",
  "current": "The flow of electrical charge, measured in Amps (A). Too much current can trip breakers.",
  "amperage": "Another word for current. How many amps are flowing.",
  "resistance": "Opposition to current flow. Measured in Ohms (Ω).",
  "ohm": "The unit of electrical resistance.",
  "circuit": "A complete path for electricity to flow from battery, through components, and back.",
  "short circuit": "When electricity takes an unintended path (like + touching -). Can cause fires!",
  "breaker": "A safety device that stops current flow if it gets too high. Prevents fires.",
  "fuse": "Similar to a breaker but burns out and must be replaced.",
  "PWM": "Pulse Width Modulation: A method of controlling motor speed by rapidly switching power on and off.",
  "CAN bus": "Controller Area Network: A communication system that lets devices talk to each other.",
  "I2C": "A communication protocol for connecting sensors and devices.",
  "SDK": "Software Development Kit: The programming tools and libraries for your robot.",
  "API": "Application Programming Interface: Functions you can use to control your robot.",
  "library": "Pre-written code that does common tasks so you don't have to code from scratch.",
  "repository": "A storage location for code, usually on GitHub.",
  "version control": "Tracking changes to your code over time. Git is the most common system.",
  "deploy": "Uploading your code to the robot so it can run.",
  "debug": "Finding and fixing errors in your code.",
  "telemetry": "Data sent from the robot to the driver station so you can see what's happening.",
  "gamepad": "The controller drivers use (like an Xbox controller).",
  "driver station": "The device (phone/laptop) that runs your code and connects to the robot.",
  
  // Build Systems & Tools
  "CAD": "Computer-Aided Design: Using software to design your robot in 3D before building.",
  "extrusion": "Long metal beams with slots for attaching things. Used in many FTC/FRC builds.",
  "channel": "C-shaped metal pieces used for structure.",
  "bracket": "A piece used to connect or mount components.",
  "standoff": "A cylindrical spacer that separates two parts by a fixed distance.",
  "fastener": "Any device that holds things together (bolt, screw, rivet, etc.).",
  "bolt": "A threaded fastener with a hex head. Needs a nut on the other end.",
  "screw": "A threaded fastener that cuts its own threads. No nut needed.",
  "nut": "A hexagonal piece with internal threads that a bolt screws into.",
  "locknut": "A nut with a plastic insert or deformed threads that won't vibrate loose.",
  "washer": "A flat disc that distributes load and prevents damage.",
  "spacer": "A tube that creates space between components.",
  "zip tie": "A plastic strap for securing wires. Quick but can come loose.",
  "thread locker": "A chemical that prevents screws from vibrating loose.",
  "tolerance": "How much variation is acceptable in a part's dimensions.",
  "clearance": "The gap between parts to allow movement without rubbing.",
  "interference fit": "When a part is intentionally too big for its hole, requiring force to assemble.",
  "aluminum": "Lightweight metal commonly used for robot frames.",
  "steel": "Strong but heavy metal. Used where strength is critical.",
  "plastic": "Lightweight material. Types: PLA, ABS, polycarbonate, etc.",
  "3D printing": "Making parts by building them up layer by layer from plastic.",
  "CNC": "Computer Numerical Control: Using computers to control machine tools for precise cutting.",
  "machining": "Cutting or shaping parts using tools like mills, lathes, drills.",
  "prototype": "An early version of a design used for testing before making the final version.",
}

interface TermTooltipProps {
  term: string
  children: React.ReactNode
}

export function TermTooltip({ term, children }: TermTooltipProps) {
  const definition = glossary[term.toLowerCase()]
  
  if (!definition) {
    return <>{children}</>
  }

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="underline decoration-dotted decoration-primary/50 cursor-help hover:decoration-primary transition-colors">
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs bg-card border-primary/20 shadow-lg">
          <p className="font-semibold text-primary mb-1">{term}</p>
          <p className="text-sm text-muted-foreground">{definition}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
