import { cn } from "@/lib/utils"
import eventsData from "@/data/events.json"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import battleofhongkong1 from "@/assets/images/battleofhongkong1.jpg"
import battleofhongkong2 from "@/assets/images/battleofhongkong2.jpg"
import diepperaid1 from "@/assets/images/diepperaid1.png"
import diepperaid2 from "@/assets/images/diepperaid2.png"
import atlanticbattle1 from "@/assets/images/atlanticbattle1.jpg"
import atlanticbattle2 from "@/assets/images/atlanticbattle2.jpg"
import vimyridge1 from "@/assets/images/vimyridge1.jpg"
import vimyridge2 from "@/assets/images/vimyridge2.jpg"
import berlinwall1 from "@/assets/images/berlinwall1.jpg"
import berlinwall2 from "@/assets/images/berlinwall2.jpg"
import junobeach1 from "@/assets/images/junobeach1.png"
import junobeach2 from "@/assets/images/junobeach2.png"
import manhattan1 from "@/assets/images/manhattan1.jpg"
import manhattan2 from "@/assets/images/manhattan2.jpg"
import moonlanding1 from "@/assets/images/moonlanding1.png"
import moonlanding2 from "@/assets/images/moonlanding2.png"
import barbarossa1 from "@/assets/images/barbarossa1.jpg"
import barbarossa2 from "@/assets/images/barbarossa2.jpg"
import depression1 from "@/assets/images/depression.png"
import depression2 from "@/assets/images/depression2.jpg"
import { ComicText } from "@/components/ui/comic-text"


interface HistoryEvent {
  rank: number
  title: string
  year: string
  description: string
  images?: string[]
  bgColor: string
}

const imageMap: Record<string, string> = {
  "/src/assets/images/battleofhongkong1.jpg": battleofhongkong1,
  "/src/assets/images/battleofhongkong2.jpg": battleofhongkong2,
  "/src/assets/images/diepperaid1.png": diepperaid1,
  "/src/assets/images/diepperaid2.png": diepperaid2,
  "/src/assets/images/atlanticbattle1.jpg": atlanticbattle1,
  "/src/assets/images/atlanticbattle2.jpg": atlanticbattle2,
  "/src/assets/images/vimyridge1.jpg": vimyridge1,
  "/src/assets/images/vimyridge2.jpg": vimyridge2,
  "/src/assets/images/berlinwall1.jpg": berlinwall1,
  "/src/assets/images/berlinwall2.jpg": berlinwall2,
  "/src/assets/images/junobeach1.png": junobeach1,
  "/src/assets/images/junobeach2.png": junobeach2,
  "/src/assets/images/manhattan1.jpg": manhattan1,
  "/src/assets/images/manhattan2.jpg": manhattan2,
  "/src/assets/images/moonlanding1.png": moonlanding1,
  "/src/assets/images/moonlanding2.png": moonlanding2,
  "/src/assets/images/barbarossa1.jpg": barbarossa1,
  "/src/assets/images/barbarossa2.jpg": barbarossa2,
  "/src/assets/images/depression.png": depression1,
  "/src/assets/images/depression2.jpg": depression2,
}

const events: HistoryEvent[] = eventsData

const EventSection = ({ rank, title, year, description, images, bgColor }: HistoryEvent) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "w-full min-h-screen flex items-center",
        bgColor
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-8 md:px-16 py-20">
        <motion.div 
          className="flex flex-col gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span 
            className="text-8xl md:text-9xl font-bold text-white/20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            #{rank}
          </motion.span>
          <motion.div 
            className="flex items-center gap-4 flex-wrap"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              {title}
            </h2>
          </motion.div>
          <motion.p 
            className="text-3xl md:text-4xl font-semibold text-white/70"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {year}
          </motion.p>
          <motion.div 
            className="text-base md:text-lg text-white/90 leading-relaxed max-w-5xl space-y-4"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {description.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>
          {images && images.length > 0 && (
            <motion.div 
              className="flex flex-wrap gap-6 mt-8"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {images.map((image, index) => (
                <motion.img
                  key={index}
                  src={imageMap[image] || image}
                  alt={`${title} ${index + 1}`}
                  className="rounded-lg shadow-2xl max-w-md w-full object-cover"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.section>
  )
}

export function HistoryCards() {
  return (
    <div className="w-full">
      {events.map((event) => (
        <>
          <EventSection key={event.rank} {...event} />
          {event.rank === 6 && (
            <section className="w-full min-h-screen flex items-center justify-center bg-white">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <ComicText>You're Halfway There!</ComicText>
              </motion.div>
            </section>
          )}
        </>
      ))}
    </div>
  )
}
