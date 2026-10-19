import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { PresentationNav } from './presentation/PresentationNav'
import { slideIndexById, slides } from './presentation/PresentationSlides'

function App() {
  const [currentIndex, setCurrentIndex] = useState(() => {
    if (typeof window === 'undefined') return 0
    const hash = window.location.hash.replace('#', '')
    return slideIndexById[hash] ?? 0
  })
  const [isPresentationMode, setIsPresentationMode] = useState(false)

  const goToSlide = (index: number) => {
    const safeIndex = Math.max(0, Math.min(index, slides.length - 1))
    const slideId = slides[safeIndex].id
    setCurrentIndex(safeIndex)
    window.location.hash = slideId
  }

  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.replace('#', '')
      const nextIndex = slideIndexById[hash] ?? 0
      setCurrentIndex(nextIndex)
    }

    syncHash()
    window.addEventListener('hashchange', syncHash)
    return () => window.removeEventListener('hashchange', syncHash)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'PageDown') {
        event.preventDefault()
        goToSlide(currentIndex + 1)
      }

      if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        event.preventDefault()
        goToSlide(currentIndex - 1)
      }

      if (event.key === 'Escape') {
        setIsPresentationMode(false)
      }

      if (event.key === 'f' || event.key === 'F') {
        setIsPresentationMode((prev) => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex])

  useEffect(() => {
    if (!isPresentationMode) {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      return
    }

    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    const root = document.documentElement as HTMLElement & { requestFullscreen?: () => Promise<void> }
    if (!document.fullscreenElement) {
      root.requestFullscreen?.().catch(() => undefined)
    }

    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      if (document.fullscreenElement) {
        document.exitFullscreen?.().catch(() => undefined)
      }
    }
  }, [isPresentationMode])

  const CurrentSlide = slides[currentIndex].component

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentIndex].id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
          <CurrentSlide />
        </motion.div>
      </AnimatePresence>

      <PresentationNav
        currentIndex={currentIndex}
        total={slides.length}
        onPrevious={() => goToSlide(currentIndex - 1)}
        onNext={() => goToSlide(currentIndex + 1)}
        onSelect={(index) => goToSlide(index)}
        isPresentationMode={isPresentationMode}
        onTogglePresentation={() => setIsPresentationMode((prev) => !prev)}
        menuLabels={slides.map((slide) => slide.label)}
      />
    </div>
  )
}

export default App
