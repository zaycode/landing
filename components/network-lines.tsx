"use client"

import { useEffect, useRef } from "react"

export default function NetworkLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.clientWidth
        canvas.height = container.clientHeight
      }
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Node class
    class Node {
      x: number
      y: number
      size: number
      connections: Node[]
      speedX: number
      speedY: number

      constructor(x: number, y: number, size: number) {
        this.x = x
        this.y = y
        this.size = size
        this.connections = []
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (!ctx || !canvas) {
          return
        }
        // Bounce off edges with some padding
        const padding = 50
        if (this.x > canvas.width - padding || this.x < padding) {
          this.speedX = -this.speedX
        }
        if (this.y > canvas.height - padding || this.y < padding) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        if (!ctx || !canvas) {
          return
        }
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(214, 143, 58, 0.8)"
        ctx.fill()
      }

      connectTo(node: Node) {
        if (!this.connections.includes(node)) {
          this.connections.push(node)
        }
      }

      drawConnections() {
        if (!ctx || !canvas) {
          return
        }
        for (const node of this.connections) {
          ctx.beginPath()
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(node.x, node.y)

          // Create gradient for connections
          const gradient = ctx.createLinearGradient(this.x, this.y, node.x, node.y)
          gradient.addColorStop(0, "rgba(214, 143, 58, 0.3)")
          gradient.addColorStop(1, "rgba(255, 51, 102, 0.3)")

          ctx.strokeStyle = gradient
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    }

    // Create nodes
    const nodes: Node[] = []
    const nodeCount = 15

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const size = Math.random() * 1.5 + 0.5
      nodes.push(new Node(x, y, size))
    }

    // Connect nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        // Connect some nodes randomly
        if (Math.random() < 0.3) {
          nodes[i].connectTo(nodes[j])
        }
      }
    }

    // Animation loop
    function animate() {
      if (!ctx || !canvas) {
        return
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      for (const node of nodes) {
        node.update()
        node.draw()
        node.drawConnections()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-10" style={{ pointerEvents: "none" }} />
}
