"use client"

import { WebGLShader } from "@/components/ui/web-gl-shader"

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <WebGLShader />
    </div>
  )
}
