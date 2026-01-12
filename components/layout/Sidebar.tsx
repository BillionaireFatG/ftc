"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home, Calculator, Gauge, Cpu, BookOpen, TestTube, Rocket } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  {
    name: "Drivetrains",
    icon: Gauge,
    children: [
      { name: "Overview", href: "/drivetrains" },
      { name: "Tank Drive", href: "/drivetrains/tank" },
      { name: "Mecanum Drive", href: "/drivetrains/mecanum" },
      { name: "Swerve Drive", href: "/drivetrains/swerve" },
      { name: "Omni Drive", href: "/drivetrains/omni" },
    ],
  },
  {
    name: "Control Theory",
    icon: Cpu,
    children: [
      { name: "Overview", href: "/control-theory" },
      { name: "PID Controller", href: "/control-theory/pid" },
      { name: "Feedforward", href: "/control-theory/feedforward" },
      { name: "Motion Profiling", href: "/control-theory/motion-profiling" },
    ],
  },
  {
    name: "Calculators",
    icon: Calculator,
    children: [
      { name: "Overview", href: "/calculators" },
      { name: "Speed Calculator", href: "/calculators/speed" },
      { name: "Torque Calculator", href: "/calculators/torque" },
      { name: "Gear Ratio", href: "/calculators/gear-ratio" },
    ],
  },
  { name: "Simulator", href: "/simulator", icon: Rocket },
  { name: "Motor Selection", href: "/motor-selection", icon: TestTube },
  { name: "Resources", href: "/resources", icon: BookOpen },
]

export function Sidebar() {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<string[]>(["Drivetrains", "Control Theory", "Calculators"])

  const toggleExpand = (name: string) => {
    setExpandedItems((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    )
  }

  return (
    <div className="fixed left-0 top-16 z-40 hidden h-[calc(100vh-4rem)] w-64 border-r bg-background lg:block">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleExpand(item.name)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                    >
                      <div className="flex items-center">
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.name}
                      </div>
                      <ChevronRight
                        className={cn(
                          "h-4 w-4 transition-transform",
                          expandedItems.includes(item.name) && "rotate-90"
                        )}
                      />
                    </button>
                    {expandedItems.includes(item.name) && (
                      <div className="ml-6 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground",
                              pathname === child.href && "bg-accent text-accent-foreground font-medium"
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className={cn(
                      "flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                      pathname === item.href && "bg-accent text-accent-foreground"
                    )}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
