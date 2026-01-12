import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const preCompetitionChecklist = [
  { category: "Mechanical", items: ["All screws tight", "Wheels secure", "No loose wires", "Chain/belt tension correct", "No rubbing/binding"] },
  { category: "Electrical", items: ["Battery fully charged", "All connections secure", "Motors plugged in correctly", "Sensors wired properly", "No exposed wires"] },
  { category: "Programming", items: ["Latest code uploaded", "All modes tested", "Autonomous runs correctly", "Teleop controls responsive", "Emergency stop works"] },
  { category: "Driver Practice", items: ["30+ minutes practice", "Know control layout", "Practiced game tasks", "Tested with alliance", "Backup driver ready"] },
];

const tests = [
  {
    name: "Straight Line Test",
    purpose: "Detect drift and verify straight driving",
    procedure: [
      "Mark a start line on the field",
      "Drive forward at 50% power for 12 feet",
      "Measure lateral drift from straight path",
      "Repeat 5 times and average",
    ],
    acceptable: "Less than 6 inches of drift",
    fix: "Adjust motor power scaling or implement gyro correction",
  },
  {
    name: "Speed Test",
    purpose: "Measure actual maximum speed",
    procedure: [
      "Mark 12-foot distance on field",
      "Accelerate to max speed before start",
      "Time crossing the 12-foot section",
      "Repeat 3 times and average",
    ],
    acceptable: "Within 10% of calculated speed",
    fix: "Check wheel diameter, gear ratio, or motor RPM settings",
  },
  {
    name: "Acceleration Test",
    purpose: "Measure 0-5 feet time",
    procedure: [
      "Mark 5-foot distance",
      "Start from complete stop",
      "Full throttle to 5 feet mark",
      "Time with stopwatch or video",
    ],
    acceptable: "Consistent times (±0.2s)",
    fix: "Check motor power, weight distribution, or traction",
  },
  {
    name: "Turn Test",
    purpose: "Verify turning radius and accuracy",
    procedure: [
      "Command 90° turn using gyro",
      "Measure actual angle with protractor/gyro",
      "Test both left and right turns",
      "Repeat 5 times each direction",
    ],
    acceptable: "Within ±2° of target",
    fix: "Tune PID gains or calibrate gyro",
  },
  {
    name: "Pushing Test",
    purpose: "Evaluate torque and traction",
    procedure: [
      "Push against wall at full power",
      "Check if wheels slip or hold",
      "Push against another robot (with permission)",
      "Note any mechanical issues",
    ],
    acceptable: "No wheel slip, smooth power delivery",
    fix: "Add weight, change wheels, or increase gear ratio",
  },
];

export default function TestingPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Testing & Calibration</h1>
        <p className="text-lg text-muted-foreground">
          Ensure your drivetrain performs reliably in competition
        </p>
      </div>

      <Card className="mb-12 border-primary/50">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="h-8 w-8 text-primary" />
            <CardTitle>Pre-Competition Checklist</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {preCompetitionChecklist.map((section) => (
              <div key={section.category}>
                <h4 className="font-semibold mb-3">{section.category}</h4>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start text-sm">
                      <span className="mr-2 text-green-600 dark:text-green-400 mt-0.5">☐</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Testing Procedures</h2>
        
        {tests.map((test, idx) => (
          <Card key={test.name}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{test.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{test.purpose}</p>
                </div>
                <Badge variant="outline">Test #{idx + 1}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Procedure:</h4>
                <ol className="list-decimal pl-6 space-y-1 text-sm">
                  {test.procedure.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-lg border p-3">
                  <div className="text-xs text-muted-foreground mb-1">Acceptable Result:</div>
                  <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                    {test.acceptable}
                  </div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="text-xs text-muted-foreground mb-1">If Failed:</div>
                  <div className="text-sm">{test.fix}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Data Logging Tips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Keep a notebook or spreadsheet with:</p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li><strong>Date and location</strong> of each test session</li>
            <li><strong>Battery voltage</strong> before and after tests</li>
            <li><strong>Measured values</strong> for speed, time, accuracy</li>
            <li><strong>Issues encountered</strong> and solutions attempted</li>
            <li><strong>Configuration changes</strong> (gear ratios, PID values, etc.)</li>
            <li><strong>Competition results</strong> and performance notes</li>
          </ul>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-4">
            <p className="text-sm"><strong>Pro Tip:</strong> Test on the same surface type as your competition field. Carpet vs. tile makes a huge difference!</p>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Calibration Procedures</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Gyro Calibration:</h4>
            <p className="text-sm">Place robot on level surface, keep completely still for 5 seconds during initialization.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Encoder Calibration:</h4>
            <p className="text-sm">Drive exactly 12 feet, measure actual distance, calculate correction factor: actual / measured.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Dead Reckoning Tuning:</h4>
            <p className="text-sm">Measure wheel base width precisely. Test turning 360°, adjust trackwidth value until accurate.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
