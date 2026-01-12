"use client"

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const motors = [
  { name: "REV HD Hex", stallTorque: 3.2 },
  { name: "REV Core Hex", stallTorque: 1.6 },
  { name: "goBILDA 5202 (312 RPM)", stallTorque: 3.6 },
  { name: "goBILDA 5202 (435 RPM)", stallTorque: 2.6 },
  { name: "NeveRest 20", stallTorque: 3.7 },
  { name: "NeveRest 40", stallTorque: 7.0 },
];

export default function TorqueCalculatorPage() {
  const [motorTorque, setMotorTorque] = useState(3.2);
  const [gearRatio, setGearRatio] = useState(1);
  const [numMotors, setNumMotors] = useState(4);
  const [wheelDiameter, setWheelDiameter] = useState(4);
  const [robotWeight, setRobotWeight] = useState(40);

  const wheelRadius = (wheelDiameter / 2) / 12; // convert to feet
  const wheelTorque = motorTorque * gearRatio * 0.9; // 90% efficiency
  const totalTorque = wheelTorque * numMotors;
  const pushingForce = totalTorque / wheelRadius;
  const acceleration = pushingForce / robotWeight;
  const canClimbRamp = pushingForce > (robotWeight * 1.5);

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Torque Calculator</h1>
        <p className="text-lg text-muted-foreground">
          Calculate wheel torque, pushing force, and acceleration
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Input Parameters</CardTitle>
            <CardDescription>Enter your motor and robot specifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Motor</Label>
              <Select value={motorTorque.toString()} onValueChange={(v) => setMotorTorque(Number(v))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {motors.map((motor) => (
                    <SelectItem key={motor.name} value={motor.stallTorque.toString()}>
                      {motor.name} ({motor.stallTorque} Nm)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Motor Stall Torque (Nm)</Label>
              <Input
                type="number"
                step="0.1"
                value={motorTorque}
                onChange={(e) => setMotorTorque(Number(e.target.value))}
                placeholder="Enter motor torque"
              />
            </div>

            <div className="space-y-2">
              <Label>Gear Ratio</Label>
              <Input
                type="number"
                step="0.1"
                value={gearRatio}
                onChange={(e) => setGearRatio(Number(e.target.value))}
                placeholder="e.g., 2 for 2:1"
              />
            </div>

            <div className="space-y-2">
              <Label>Number of Drive Motors</Label>
              <Input
                type="number"
                value={numMotors}
                onChange={(e) => setNumMotors(Number(e.target.value))}
                placeholder="e.g., 4"
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
              <Label>Robot Weight (lbs)</Label>
              <Input
                type="number"
                value={robotWeight}
                onChange={(e) => setRobotWeight(Number(e.target.value))}
                placeholder="e.g., 40"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Calculated Results</CardTitle>
            <CardDescription>Torque and force analysis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-primary/10 p-4">
              <div className="text-sm text-muted-foreground">Total Wheel Torque</div>
              <div className="text-3xl font-bold">{totalTorque.toFixed(1)} Nm</div>
              <div className="mt-1 text-sm text-muted-foreground">
                {(wheelTorque).toFixed(1)} Nm per wheel
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between rounded-lg border p-3">
                <span className="text-sm">Pushing Force</span>
                <span className="font-bold">{pushingForce.toFixed(1)} lbs</span>
              </div>
              <div className="flex justify-between rounded-lg border p-3">
                <span className="text-sm">Acceleration</span>
                <span className="font-bold">{acceleration.toFixed(2)} ft/s²</span>
              </div>
              <div className="flex justify-between rounded-lg border p-3">
                <span className="text-sm">Can Climb 30° Ramp</span>
                <span className="font-bold">{canClimbRamp ? "Yes ✓" : "No ✗"}</span>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="text-sm font-semibold">Torque Rating:</div>
              {totalTorque < 10 && (
                <Badge variant="outline">Low - Struggle with pushing</Badge>
              )}
              {totalTorque >= 10 && totalTorque < 20 && (
                <Badge variant="outline">Moderate - Decent pushing power</Badge>
              )}
              {totalTorque >= 20 && totalTorque < 40 && (
                <Badge variant="outline">High - Strong pushing capability</Badge>
              )}
              {totalTorque >= 40 && (
                <Badge variant="outline">Very High - Excellent torque!</Badge>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <div className="text-sm font-semibold">0 to 5 feet time:</div>
              <div className="text-2xl font-bold">
                {(Math.sqrt(10 / acceleration)).toFixed(2)}s
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Formula Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm font-mono">
          <p>Wheel Torque = Motor Torque × Gear Ratio × Efficiency</p>
          <p>= {motorTorque} × {gearRatio} × 0.9 = {wheelTorque.toFixed(2)} Nm</p>
          <p className="mt-2">Total Torque = Wheel Torque × Number of Motors</p>
          <p>= {wheelTorque.toFixed(2)} × {numMotors} = {totalTorque.toFixed(2)} Nm</p>
          <p className="mt-2">Pushing Force = Total Torque ÷ Wheel Radius</p>
          <p>= {totalTorque.toFixed(2)} ÷ {wheelRadius.toFixed(3)} = {pushingForce.toFixed(1)} lbs</p>
          <p className="mt-2">Acceleration = Force ÷ Mass (F = ma)</p>
          <p>= {pushingForce.toFixed(1)} ÷ {robotWeight} = {acceleration.toFixed(2)} ft/s²</p>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Tips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>• <strong>Higher gear ratios</strong> multiply torque but reduce speed</p>
          <p>• <strong>More motors</strong> increase both torque and current draw</p>
          <p>• <strong>Smaller wheels</strong> increase torque at the expense of speed</p>
          <p>• <strong>Typical FTC robots:</strong> Aim for 20-30 Nm total torque for balanced performance</p>
          <p>• <strong>Defense bots:</strong> Prioritize high torque (40+ Nm) over speed</p>
        </CardContent>
      </Card>
    </div>
  );
}
