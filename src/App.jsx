import { useEffect, useRef } from 'react'
import AboutSection from './sections/AboutSection.jsx'
import ContactSection from './sections/ContactSection.jsx'
import HeroSection from './sections/HeroSection.jsx'
import ProjectsSection from './sections/ProjectsSection.jsx'
import ResumeSection from './sections/ResumeSection.jsx'
import SkillsSection from './sections/SkillsSection.jsx'

/* ─────────────────────────────────────────────
   Global Cursor Glow
   Follows mouse across the entire page
───────────────────────────────────────────── */
function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const el = glowRef.current
    let rafId
    let tx = -999, ty = -999
    let cx = -999, cy = -999

    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
    }

    const animate = () => {
      // Smooth lerp so it trails slightly behind cursor
      cx += (tx - cx) * 0.1
      cy += (ty - cy) * 0.1
      el.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`
      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-20 h-[420px] w-[420px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(164,123,255,0.07) 0%, rgba(120,182,255,0.03) 40%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  )
}

/* ─────────────────────────────────────────────
   Space Particle Canvas
   Renders behind everything, full viewport
───────────────────────────────────────────── */
function SpaceCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let W, H

    /* ── Resize ── */
    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = document.documentElement.scrollHeight
    }
    resize()
    window.addEventListener('resize', resize)

    /* ── Stars ── */
    const STAR_COUNT = 260
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * document.documentElement.scrollHeight,
      r: Math.random() * 1.4 + 0.2,
      alpha: Math.random() * 0.7 + 0.15,
      twinkleSpeed: Math.random() * 0.012 + 0.004,
      twinkleOffset: Math.random() * Math.PI * 2,
    }))

    /* ── Glowing orbs ── */
    const ORBS = [
      { x: 0.12, y: 0.08, r: 340, color: 'rgba(164,123,255,0.055)' },
      { x: 0.88, y: 0.22, r: 280, color: 'rgba(120,182,255,0.045)' },
      { x: 0.5,  y: 0.45, r: 360, color: 'rgba(164,123,255,0.04)'  },
      { x: 0.18, y: 0.68, r: 300, color: 'rgba(120,182,255,0.04)'  },
      { x: 0.82, y: 0.78, r: 320, color: 'rgba(164,123,255,0.05)'  },
      { x: 0.45, y: 0.92, r: 260, color: 'rgba(120,182,255,0.04)'  },
    ]

    /* ── Floating dust particles (upward) ── */
    const DUST_COUNT = 55
    const dust = Array.from({ length: DUST_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * document.documentElement.scrollHeight,
      r: Math.random() * 2.2 + 0.6,
      speed: Math.random() * 0.35 + 0.08,
      alpha: Math.random() * 0.45 + 0.08,
      drift: (Math.random() - 0.5) * 0.18,
      hue: Math.random() > 0.5 ? '164,123,255' : '120,182,255',
    }))

    /* ── Shooting stars ── */
    const shooters = []
    const spawnShooter = () => {
      const angle = (Math.random() * 25 + 15) * (Math.PI / 180)
      shooters.push({
        x: Math.random() * window.innerWidth * 1.2 - window.innerWidth * 0.1,
        y: Math.random() * document.documentElement.scrollHeight * 0.5,
        vx: Math.cos(angle) * (5 + Math.random() * 5),
        vy: Math.sin(angle) * (5 + Math.random() * 5),
        len: 120 + Math.random() * 100,
        alpha: 1,
        life: 1,
      })
    }
    setInterval(spawnShooter, 3200 + Math.random() * 2000)

    /* ── Render ── */
    let t = 0
    const draw = () => {
      const scrollH = document.documentElement.scrollHeight
      if (canvas.height !== scrollH) {
        canvas.height = scrollH
        H = scrollH
      }

      ctx.clearRect(0, 0, W, H)

      /* Orbs */
      ORBS.forEach(o => {
        const grd = ctx.createRadialGradient(o.x * W, o.y * H, 0, o.x * W, o.y * H, o.r)
        grd.addColorStop(0, o.color)
        grd.addColorStop(1, 'transparent')
        ctx.fillStyle = grd
        ctx.beginPath()
        ctx.arc(o.x * W, o.y * H, o.r, 0, Math.PI * 2)
        ctx.fill()
      })

      /* Stars — twinkling */
      stars.forEach(s => {
        const alpha = s.alpha * (0.6 + 0.4 * Math.sin(t * s.twinkleSpeed + s.twinkleOffset))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${alpha})`
        ctx.fill()
      })

      /* Dust — floating upward */
      dust.forEach(d => {
        d.y -= d.speed
        d.x += d.drift
        if (d.y < -10) {
          d.y = H + 10
          d.x = Math.random() * W
        }
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${d.hue},${d.alpha})`
        ctx.fill()
      })

      /* Shooting stars */
      for (let i = shooters.length - 1; i >= 0; i--) {
        const s = shooters[i]
        s.x += s.vx
        s.y += s.vy
        s.life -= 0.018
        if (s.life <= 0) { shooters.splice(i, 1); continue }

        const grad = ctx.createLinearGradient(
          s.x, s.y,
          s.x - s.vx * (s.len / Math.hypot(s.vx, s.vy)),
          s.y - s.vy * (s.len / Math.hypot(s.vx, s.vy))
        )
        grad.addColorStop(0, `rgba(255,255,255,${s.life * 0.9})`)
        grad.addColorStop(0.3, `rgba(164,123,255,${s.life * 0.5})`)
        grad.addColorStop(1, 'transparent')
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(
          s.x - s.vx * (s.len / Math.hypot(s.vx, s.vy)),
          s.y - s.vy * (s.len / Math.hypot(s.vx, s.vy))
        )
        ctx.stroke()
      }

      t++
      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed left-0 top-0 z-0"
      style={{ width: '100vw', height: '100vh', position: 'fixed' }}
    />
  )
}

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#08090f]">
      <SpaceCanvas />
      <CursorGlow />

      {/* Content — sits above canvas */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ResumeSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  )
}

export default App