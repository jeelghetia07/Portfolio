import { useEffect, useRef } from 'react'
import Reveal from '../components/Reveal.jsx'

const skills = [
  {
    name: 'React',
    bg: 'rgba(97,218,251,0.15)', border: '#61dafb', color: '#61dafb',
    path: 'M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.29zm-9.77.008c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.975-.254-1.43-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.123zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z',
  },
  {
    name: 'JavaScript',
    bg: 'rgba(247,223,30,0.15)', border: '#f7df1e', color: '#f7df1e',
    path: 'M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z',
  },
  {
    name: 'Python',
    bg: 'rgba(55,118,171,0.15)', border: '#3776ab', color: '#ffd43b',
    path: 'M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.04zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z',
  },
  { name: 'HTML', bg: 'rgba(227,79,38,0.15)', border: '#e34f26', color: '#e34f26', path: 'M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z' },
  { name: 'CSS', bg: 'rgba(21,114,182,0.15)', border: '#1572b6', color: '#1572b6', path: 'M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414v-.001z' },
  { name: 'Java', bg: 'rgba(248,152,32,0.15)', border: '#f89820', color: '#f89820', path: 'M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.543 1.646-2.474 6.206-3.676 5.19-7.623M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639' },
  { name: 'C', bg: 'rgba(94,130,186,0.15)', border: '#5e82ba', color: '#5e82ba', isC: true, path: '' },
  { name: 'C++', bg: 'rgba(0,89,157,0.15)', border: '#00599d', color: '#659ad2', isCpp: true, path: '' },
]

const orbits = [
  { rx: 280, ry: 92, tilt: 0.18, speed: 0.0055 },
  { rx: 260, ry: 80, tilt: -0.28, speed: -0.0042 },
  { rx: 242, ry: 88, tilt: 0.38, speed: 0.004 },
  { rx: 268, ry: 85, tilt: 0.1, speed: -0.005 },
]

function PlanetCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const W = canvas.width
    const H = canvas.height
    const CX = W / 2
    const CY = H / 2

    const nodes = skills.map((s, i) => ({
      ...s,
      orb: orbits[i % orbits.length],
      angle: (i / skills.length) * Math.PI * 2,
    }))

    let rotY = 0
    let hovered = false
    let dragging = false
    let lastMX = 0
    let animId

    const icons = {}
    skills.forEach((s) => {
      if (s.isC || s.isCpp) return
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="${s.color}" d="${s.path}"/></svg>`
      const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }))
      const img = new Image()
      img.src = url
      img.onload = () => URL.revokeObjectURL(url)
      icons[s.name] = img
    })

    function project(angle, orb) {
      const theta = angle + rotY
      const x3 = orb.rx * Math.cos(theta)
      const y3 = orb.ry * Math.sin(theta)
      const z3 = Math.sin(theta)
      return {
        sx: CX + x3 * Math.cos(orb.tilt) - y3 * Math.sin(orb.tilt),
        sy: CY + x3 * Math.sin(orb.tilt) + y3 * Math.cos(orb.tilt),
        depth: z3,
      }
    }

    function drawOrbit(orb) {
      ctx.save()
      ctx.translate(CX, CY)
      ctx.rotate(orb.tilt)
      ctx.scale(1, orb.ry / orb.rx)
      ctx.beginPath()
      ctx.ellipse(0, 0, orb.rx, orb.rx, 0, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(164,123,255,0.1)'
      ctx.lineWidth = 1
      ctx.stroke()
      ctx.restore()
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)

      ;[
        [80, 'rgba(164,123,255,0.12)'],
        [58, 'rgba(148,108,255,0.18)'],
        [42, 'rgba(130,88,248,0.28)'],
        [28, 'rgba(115,70,235,0.42)'],
        [18, 'rgba(100,55,220,0.62)'],
      ].forEach(([r, c]) => {
        ctx.beginPath()
        ctx.arc(CX, CY, r, 0, Math.PI * 2)
        ctx.fillStyle = c
        ctx.fill()
      })

      const shine = ctx.createRadialGradient(CX - 8, CY - 8, 2, CX, CY, 18)
      shine.addColorStop(0, 'rgba(255,255,255,0.22)')
      shine.addColorStop(1, 'transparent')
      ctx.beginPath()
      ctx.arc(CX, CY, 18, 0, Math.PI * 2)
      ctx.fillStyle = shine
      ctx.fill()

      orbits.forEach(drawOrbit)

      const projected = nodes
        .map((n) => ({ ...n, ...project(n.angle, n.orb) }))
        .sort((a, b) => a.depth - b.depth)

      projected.forEach((n) => {
        const depthRatio = (n.depth + 1) / 2
        const r = 24 + depthRatio * 10
        const alpha = 0.45 + depthRatio * 0.5

        const grd = ctx.createRadialGradient(n.sx, n.sy, 0, n.sx, n.sy, r * 2.2)
        grd.addColorStop(0, `${n.border}40`)
        grd.addColorStop(1, 'transparent')
        ctx.fillStyle = grd
        ctx.beginPath()
        ctx.arc(n.sx, n.sy, r * 2.2, 0, Math.PI * 2)
        ctx.fill()

        ctx.beginPath()
        ctx.arc(n.sx, n.sy, r, 0, Math.PI * 2)
        ctx.fillStyle = n.bg
        ctx.fill()

        ctx.beginPath()
        ctx.arc(n.sx, n.sy, r, 0, Math.PI * 2)
        ctx.strokeStyle = `${n.border}${Math.round(alpha * 180).toString(16).padStart(2, '0')}`
        ctx.lineWidth = 1.2
        ctx.stroke()

        if (n.isC) {
          ctx.save()
          ctx.globalAlpha = alpha
          ctx.font = `700 ${Math.round(r * 0.95)}px -apple-system, sans-serif`
          ctx.fillStyle = '#5e82ba'
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillText('C', n.sx, n.sy)
          ctx.restore()
        } else if (n.isCpp) {
          ctx.save()
          ctx.globalAlpha = alpha
          ctx.textBaseline = 'middle'
          ctx.textAlign = 'center'
          ctx.font = `700 ${Math.round(r * 0.82)}px -apple-system, sans-serif`
          ctx.fillStyle = '#659ad2'
          ctx.fillText('C', n.sx - r * 0.3, n.sy)
          ctx.font = `700 ${Math.round(r * 0.58)}px -apple-system, sans-serif`
          ctx.fillStyle = '#00599d'
          ctx.fillText('++', n.sx + r * 0.28, n.sy)
          ctx.restore()
        } else {
          const img = icons[n.name]
          if (img && img.complete && img.naturalWidth > 0) {
            const sz = r * 1.05
            ctx.globalAlpha = alpha
            ctx.drawImage(img, n.sx - sz / 2, n.sy - sz / 2, sz, sz)
            ctx.globalAlpha = 1
          }
        }

        ctx.font = `600 ${Math.round(12 + depthRatio * 4)}px -apple-system, sans-serif`
        ctx.fillStyle = `rgba(255,255,255,${alpha * 0.88})`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'top'
        ctx.fillText(n.name, n.sx, n.sy + r + 4)
      })

      if (!hovered && !dragging) nodes.forEach((n) => { n.angle += n.orb.speed })
      animId = requestAnimationFrame(draw)
    }

    const onEnter = () => { hovered = true }
    const onLeave = () => { hovered = false; dragging = false }
    const onDown = (e) => { dragging = true; lastMX = e.clientX }
    const onUp = () => { dragging = false }
    const onMove = (e) => {
      if (!dragging) return
      const dx = e.clientX - lastMX
      rotY += dx * 0.009
      nodes.forEach((n) => { n.angle += dx * 0.007 })
      lastMX = e.clientX
    }

    canvas.addEventListener('mouseenter', onEnter)
    canvas.addEventListener('mouseleave', onLeave)
    canvas.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('mousemove', onMove)
    draw()

    return () => {
      cancelAnimationFrame(animId)
      canvas.removeEventListener('mouseenter', onEnter)
      canvas.removeEventListener('mouseleave', onLeave)
      canvas.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={820}
      height={820}
      className="block h-auto w-full max-w-[700px] cursor-grab active:cursor-grabbing"
    />
  )
}

function SkillsSection() {
  return (
    <Reveal
      as="section"
      id="skills"
      variant="scale"
      className="relative overflow-hidden px-5 pb-4 pt-14 sm:px-8 sm:pb-6 sm:pt-16 lg:px-10"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(120,182,255,0.07),transparent_70%)] blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-[1180px]">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#a47bff] sm:text-base">
            Skills
          </p>
          <h2 className="mt-3 font-[var(--font-display)] text-[2.2rem] leading-[1.02] text-white sm:text-[2.8rem]">
            Tech stack in orbit.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Technologies I work with - drag to spin, hover to pause.
          </p>
        </div>
        <div className="-mt-24 flex justify-center sm:-mt-28 lg:-mt-32">
          <PlanetCanvas />
        </div>
      </div>
    </Reveal>
  )
}

export default SkillsSection
