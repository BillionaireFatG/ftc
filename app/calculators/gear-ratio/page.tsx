"use client"

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function GearRatioCalculatorPage() {
  const [motorRPM, setMotorRPM] = useState(6000);
  const [wheelDiameter, setWheelDiameter] = useState(4);
  const [desiredSpeed, setDesiredSpeed] = useState(5);
  const [drivingGear, setDrivingGear] = useState(12);
  const [drivenGear, setDrivenGear] = useState(12);

  const wheelCircumference = Math.PI * wheelDiameter;
  const desiredWheelRPM = (desiredSpeed * 12 * 60) / wheelCircumference;
  const idealRatio = motorRPM / desiredWheelRPM;
  
  const actualRatio = drivenGear / drivingGear;
  const actualWheelRPM = motorRPM / actualRatio;
  const actualSpeed = (actualWheelRPM * wheelCircumference) / 12 / 60;

  const commonRatios = [
    { ratio: 1, teeth: "12:12, 15:15, 24:24", use: "Maximum speed, minimal torque" },
    { ratio: 1.5, teeth: "12:18, 16:24", use: "High speed, light torque boost" },
    { ratio: 2, teeth: "12:24, 15:30", use: "Balanced speed and torque" },
    { ratio: 3, teeth: "12:36, 16:48", use: "Good torque, moderate speed" },
    { ratio: 4, teeth: "12:48, 15:60", use: "High torque, reduced speed" },
    { ratio: 5, teeth: "12:60, 16:80", use: "Maximum torque, low speed" },
  ];

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Gear Ratio Calculator</h1>
        <p className="text-lg text-muted-foreground">
          Find the optimal gear ratio for your desired performance
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Target Performance</CardTitle>
            <CardDescription>What speed do you want to achieve?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Motor RPM</Label>
              <Input
                type="number"
                value={motorRPM}
                onChange={(e) => setMotorRPM(Number(e.target.value))}
                placeholder="e.g., 6000"
              />
            </div>

            <div className="space-y-2">
              <Label>Wheel Diameter (inches)</Label>
              <Input
                type="number"
                step="0.1"
                value={wheelDiameter}
                onChange={(e) => setWheelDiameter(Number(e.target.value))}
                placeholder="e.g., 4"
              />
            </div>

            <div className="space-y-2">
              <Label>Desired Speed (ft/s)</Label>
              <Input
                type="number"
                step="0.1"
                value={desiredSpeed}
                onChange={(e) => setDesiredSpeed(Number(e.target.value))}
                placeholder="e.g., 5"
              />
            </div>

            <div className="rounded-lg bg-primary/10 p-4">
              <div className="text-sm text-muted-foreground">Ideal Gear Ratio</div>
              <div className="text-3xl font-bold">{idealRatio.toFixed(2)}:1</div>
              <div className="mt-2 text-sm">
                {idealRatio < 1.5 && "Speed-focused"}
                {idealRatio >= 1.5 && idealRatio < 3 && "Balanced"}
                {idealRatio >= 3 && "Torque-focused"}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Actual Gear Configuration</CardTitle>
            <CardDescription>Calculate with specific gear teeth counts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Driving Gear Teeth (on motor)</Label>
              <Input
                type="number"
                value={drivingGear}
                onChange={(e) => setDrivingGear(Number(e.target.value))}
                placeholder="e.g., 12"
              />
            </div>

            <div className="space-y-2">
              <Label>Driven Gear Teeth (on wheel)</Label>
              <Input
                type="number"
                value={drivenGear}
                onChange={(e) => setDrivenGear(Number(e.target.value))}
                placeholder="e.g., 24"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between rounded-lg border p-3">
                <span className="text-sm">Actual Ratio</span>
                <span className="font-bold">{actualRatio.toFixed(2)}:1</span>
              </div>
              <div className="flex justify-between rounded-lg border p-3">
                <span className="text-sm">Resulting Speed</span>
                <span className="font-bold">{actualSpeed.toFixed(2)} ft/s</span>
              </div>
              <div className="flex justify-between rounded-lg border p-3">
                <span className="text-sm">Speed Difference</span>
                <span className={`font-bold ${Math.abs(actualSpeed - desiredSpeed) < 0.5 ? 'text-green-600' : 'text-yellow-600'}`}>
                  {((actualSpeed - desiredSpeed)).toFixed(2)} ft/s
                </span>
              </div>
            </div>

            {Math.abs(actualSpeed - desiredSpeed) < 0.5 ? (
              <Badge variant="outline" className="w-full justify-center">
                ✓ Good match to target speed!
              </Badge>
            ) : actualSpeed > desiredSpeed ? (
              <Badge variant="outline" className="w-full justify-center">
                ⚠ Too fast - increase ratio
              </Badge>
            ) : (
              <Badge variant="outline" className="w-full justify-center">
                ⚠ Too slow - decrease ratio
              </Badge>
            )}
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Common Gear Ratios</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {commonRatios.map((item) => (
              <div key={item.ratio} className="flex items-start justify-between border-b pb-2 last:border-0">
                <div className="flex-1">
                  <div className="font-semibold">{item.ratio}:1</div>
                  <div className="text-sm text-muted-foreground">{item.teeth}</div>
                </div>
                <div className="flex-1 text-right text-sm">{item.use}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Understanding Gear Ratios</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">How Ratios Work:</h4>
            <p className="text-sm">Gear Ratio = Driven Teeth ÷ Driving Teeth = Output / Input</p>
            <p className="text-sm mt-2">Example: 12 teeth driving → 24 teeth driven = 24/12 = 2:1 ratio</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Speed vs Torque Trade-off:</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>Ratio &lt; 1.5:</strong> High speed, low torque (racing builds)</li>
              <li><strong>Ratio 1.5-3:</strong> Balanced (most FTC robots)</li>
              <li><strong>Ratio &gt; 3:</strong> High torque, lower speed (pushing/climbing)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Multi-Stage Gearing:</h4>
            <p className="text-sm">For very high ratios, use multiple gear stages. Total ratio = Stage1 × Stage2</p>
            <p className="text-sm mt-1">Example: 2:1 × 3:1 = 6:1 total ratio</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
