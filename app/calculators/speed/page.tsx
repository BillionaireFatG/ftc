"use client"

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const motors = [
  { name: "REV HD Hex", rpm: 6000 },
  { name: "REV Core Hex", rpm: 7200 },
  { name: "goBILDA 5202 (312 RPM)", rpm: 312 },
  { name: "goBILDA 5202 (435 RPM)", rpm: 435 },
  { name: "goBILDA 5202 (1150 RPM)", rpm: 1150 },
  { name: "NeveRest 20", rpm: 340 },
  { name: "NeveRest 40", rpm: 160 },
  { name: "NeveRest 60", rpm: 105 },
];

export default function SpeedCalculatorPage() {
  const [motorRPM, setMotorRPM] = useState(6000);
  const [wheelDiameter, setWheelDiameter] = useState(4);
  const [gearRatio, setGearRatio] = useState(1);

  const wheelCircumference = Math.PI * wheelDiameter;
  const wheelRPM = motorRPM / gearRatio;
  const speedInchesPerMin = wheelRPM * wheelCircumference;
  const speedFeetPerSec = speedInchesPerMin / 12 / 60;
  const speedMPS = speedFeetPerSec * 0.3048;
  const speedMPH = speedFeetPerSec * 0.681818;
  
  const ftcFieldLength = 12; // feet
  const frcFieldLength = 54; // feet
  const timeCrossFTC = ftcFieldLength / speedFeetPerSec;
  const timeCrossFRC = frcFieldLength / speedFeetPerSec;

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Speed Calculator</h1>
        <p className="text-lg text-muted-foreground">
          Calculate your robot's maximum speed based on drivetrain configuration
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Input Parameters</CardTitle>
            <CardDescription>Enter your drivetrain specifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Motor</Label>
              <Select value={motorRPM.toString()} onValueChange={(v) => setMotorRPM(Number(v))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {motors.map((motor) => (
                    <SelectItem key={motor.name} value={motor.rpm.toString()}>
                      {motor.name} ({motor.rpm} RPM)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Motor RPM (or custom)</Label>
              <Input
                type="number"
                value={motorRPM}
                onChange={(e) => setMotorRPM(Number(e.target.value))}
                placeholder="Enter motor RPM"
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
              <Label>Gear Ratio (input:output)</Label>
              <Input
                type="number"
                step="0.1"
                value={gearRatio}
                onChange={(e) => setGearRatio(Number(e.target.value))}
                placeholder="e.g., 1 for 1:1, 2 for 2:1"
              />
              <p className="text-xs text-muted-foreground">
                Higher ratio = more torque, less speed
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Calculated Results</CardTitle>
            <CardDescription>Your robot's performance metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-primary/10 p-4">
              <div className="text-sm text-muted-foreground">Maximum Speed</div>
              <div className="text-3xl font-bold">{speedFeetPerSec.toFixed(2)} ft/s</div>
              <div className="mt-2 space-y-1 text-sm">
                <div>{speedMPS.toFixed(2)} m/s</div>
                <div>{speedMPH.toFixed(2)} mph</div>
                <div>{speedInchesPerMin.toFixed(0)} in/min</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between rounded-lg border p-3">
                <span className="text-sm">Wheel RPM</span>
                <span className="font-bold">{wheelRPM.toFixed(0)}</span>
              </div>
              <div className="flex justify-between rounded-lg border p-3">
                <span className="text-sm">Time to cross FTC field (12ft)</span>
                <span className="font-bold">{timeCrossFTC.toFixed(2)}s</span>
              </div>
              <div className="flex justify-between rounded-lg border p-3">
                <span className="text-sm">Time to cross FRC field (54ft)</span>
                <span className="font-bold">{timeCrossFRC.toFixed(2)}s</span>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="text-sm font-semibold">Speed Rating:</div>
              {speedFeetPerSec < 3 && (
                <Badge variant="outline">Slow - Good for precise tasks</Badge>
              )}
              {speedFeetPerSec >= 3 && speedFeetPerSec < 6 && (
                <Badge variant="outline">Moderate - Balanced approach</Badge>
              )}
              {speedFeetPerSec >= 6 && speedFeetPerSec < 10 && (
                <Badge variant="outline">Fast - Good for crossing field</Badge>
              )}
              {speedFeetPerSec >= 10 && (
                <Badge variant="outline">Very Fast - Racing speed!</Badge>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Formula Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="font-mono text-sm">
            Wheel Circumference = π × Diameter = {wheelCircumference.toFixed(2)} inches
          </p>
          <p className="font-mono text-sm">
            Wheel RPM = Motor RPM ÷ Gear Ratio = {motorRPM} ÷ {gearRatio} = {wheelRPM.toFixed(0)} RPM
          </p>
          <p className="font-mono text-sm">
            Speed = (Wheel RPM × Circumference) ÷ (12 × 60) = {speedFeetPerSec.toFixed(2)} ft/s
          </p>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Tips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>• <strong>FTC robots</strong> typically run between 3-8 ft/s depending on strategy</p>
          <p>• <strong>Higher gear ratios</strong> reduce speed but increase torque and acceleration</p>
          <p>• <strong>Larger wheels</strong> increase top speed but reduce acceleration</p>
          <p>• Consider your <strong>game strategy</strong>: Do you need speed or pushing power?</p>
        </CardContent>
      </Card>
    </div>
  );
}
