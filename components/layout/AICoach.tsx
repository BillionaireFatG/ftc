"use client"

import { useState, useEffect } from "react"
import { Sparkles, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function AICoach() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    {
      role: "assistant",
      content: "Hi! I'm your FTC Drivetrain AI Coach. Ask me anything about drivetrains, control theory, gear ratios, or robot design!"
    }
  ])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleSend = () => {
    if (!message.trim()) return

    const userMessage = message
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setMessage("")

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Great question! For drivetrain optimization, consider the trade-off between speed and torque. Tank drives prioritize simplicity, while mecanum drives offer omnidirectional movement.",
        "PID control is essential for precise autonomous movement. Start by tuning Kp first, then add Ki for steady-state error, and Kd for damping oscillations.",
        "Gear ratios determine your robot's speed vs torque. Higher ratios (like 3:1) give more torque for pushing, lower ratios (like 1:1) prioritize speed.",
        "Motor selection depends on your game strategy. REV HD Hex motors offer good torque, while NEO motors provide excellent power-to-weight ratios.",
        "For mecanum drives, remember that wheel orientation matters! The rollers should form an 'X' pattern when viewed from above.",
      ]
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: responses[Math.floor(Math.random() * responses.length)] },
      ])
    }, 1000)
  }

  return (
    <>
      {/* Floating AI Coach Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg"
        size="icon"
      >
        <Sparkles className="h-6 w-6" />
        <span className="sr-only">Open AI Coach</span>
      </Button>

      {/* AI Coach Panel */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] rounded-lg border bg-background shadow-2xl transition-all duration-300",
          isOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        )}
      >
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">AI Drivetrain Coach</h3>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="h-96 space-y-4 overflow-y-auto p-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={cn(
                "rounded-lg p-3 text-sm",
                msg.role === "user"
                  ? "ml-8 bg-primary text-primary-foreground"
                  : "mr-8 bg-muted"
              )}
            >
              {msg.content}
            </div>
          ))}
        </div>

        <div className="border-t p-4">
          <div className="flex space-x-2">
            <Input
              placeholder="Ask about drivetrains..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <Button onClick={handleSend} size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Press <kbd className="rounded border bg-muted px-1">Ctrl</kbd> + <kbd className="rounded border bg-muted px-1">K</kbd> to toggle
          </p>
        </div>
      </div>
    </>
  )
}
