import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const motors = [
  {
    name: "REV HD Hex Motor",
    rpm: 6000,
    stallTorque: 3.2,
    stallCurrent: 10.7,
    weight: 0.42,
    price: 40,
    legal: ["FTC"],
    bestFor: "High-speed applications, fast drivetrains",
  },
  {
    name: "REV Core Hex Motor",
    rpm: 7200,
    stallTorque: 1.6,
    stallCurrent: 9.0,
    weight: 0.23,
    price: 30,
    legal: ["FTC"],
    bestFor: "Lightweight mechanisms, high-speed low-load",
  },
  {
    name: "goBILDA 5202 (312 RPM)",
    rpm: 312,
    stallTorque: 3.6,
    stallCurrent: 11.5,
    weight: 0.5,
    price: 45,
    legal: ["FTC"],
    bestFor: "High torque, low speed applications",
  },
  {
    name: "goBILDA 5202 (435 RPM)",
    rpm: 435,
    stallTorque: 2.6,
    stallCurrent: 11.5,
    weight: 0.5,
    price: 45,
    legal: ["FTC"],
    bestFor: "Balanced torque and speed",
  },
  {
    name: "goBILDA 5202 (1150 RPM)",
    rpm: 1150,
    stallTorque: 0.99,
    stallCurrent: 11.5,
    weight: 0.5,
    price: 45,
    legal: ["FTC"],
    bestFor: "High-speed mechanisms",
  },
  {
    name: "AndyMark NeveRest 20",
    rpm: 340,
    stallTorque: 3.7,
    stallCurrent: 10.0,
    weight: 0.52,
    price: 42,
    legal: ["FTC"],
    bestFor: "Drivetrains, high torque needs",
  },
  {
    name: "AndyMark NeveRest 40",
    rpm: 160,
    stallTorque: 7.0,
    stallCurrent: 10.0,
    weight: 0.52,
    price: 42,
    legal: ["FTC"],
    bestFor: "Maximum torque applications",
  },
  {
    name: "CIM Motor",
    rpm: 5330,
    stallTorque: 2.41,
    stallCurrent: 131,
    weight: 2.8,
    price: 30,
    legal: ["FRC"],
    bestFor: "FRC drivetrains, workhorse motor",
  },
  {
    name: "NEO Brushless",
    rpm: 5676,
    stallTorque: 2.6,
    stallCurrent: 105,
    weight: 0.94,
    price: 40,
    legal: ["FRC"],
    bestFor: "FRC drivetrains, efficient power",
  },
];

export default function MotorSelectionPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Motor Selection Guide</h1>
        <p className="text-lg text-muted-foreground">
          Compare motors and choose the best option for your robot
        </p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>How to Choose a Motor</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Consider these factors:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Speed vs Torque:</strong> High RPM = fast but weak, Low RPM = slow but strong</li>
              <li><strong>Current Draw:</strong> More current = faster battery drain, ensure your system can handle it</li>
              <li><strong>Weight:</strong> Heavier motors affect robot agility and center of gravity</li>
              <li><strong>Budget:</strong> Balance performance with cost constraints</li>
              <li><strong>Competition Legality:</strong> Verify motor is allowed in your league (FTC/FRC/FLL)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Motor Database</h2>
        
        <div className="space-y-4">
          {motors.map((motor) => (
            <Card key={motor.name} className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{motor.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{motor.bestFor}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">${motor.price}</div>
                    <div className="text-xs text-muted-foreground">
                      {motor.legal.join(", ")}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground">Free Speed</div>
                    <div className="font-bold">{motor.rpm} RPM</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Stall Torque</div>
                    <div className="font-bold">{motor.stallTorque} Nm</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Stall Current</div>
                    <div className="font-bold">{motor.stallCurrent} A</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Weight</div>
                    <div className="font-bold">{motor.weight} lbs</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Power/Weight</div>
                    <div className="font-bold">{(motor.stallTorque / motor.weight).toFixed(1)}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Quick Recommendations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold">For FTC Drivetrains:</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm mt-2">
              <li><strong>Speed-focused:</strong> REV HD Hex (6000 RPM) with gear ratio</li>
              <li><strong>Balanced:</strong> goBILDA 5202 435 RPM or NeveRest 20</li>
              <li><strong>Torque-focused:</strong> NeveRest 40 or goBILDA 312 RPM</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">For FRC Drivetrains:</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm mt-2">
              <li><strong>Modern choice:</strong> NEO or NEO 550 (brushless, efficient)</li>
              <li><strong>Budget option:</strong> CIM motors (reliable, proven)</li>
              <li><strong>High performance:</strong> Falcon 500 (integrated controller)</li>
            </ul>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <p className="text-sm"><strong>Pro Tip:</strong> Always use multiple motors for drivetrains (4-6) to distribute load and provide redundancy.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
