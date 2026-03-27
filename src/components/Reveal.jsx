import { useEffect, useRef, useState } from 'react'

function Reveal({
  as: Tag = 'div',
  className = '',
  delay = 0,
  variant = 'up',
  threshold = 0.28,
  children,
  ...props
}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold, rootMargin: '-5% 0px -8% 0px' },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${isVisible ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Reveal
