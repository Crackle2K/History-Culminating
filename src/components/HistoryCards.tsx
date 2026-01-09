import { cn } from "@/lib/utils"
import eventsData from "@/data/events.json"
import battleofhongkong1 from "@/assets/images/battleofhongkong1.jpg"
import battleofhongkong2 from "@/assets/images/battleofhongkong2.jpg"
import diepperaid1 from "@/assets/images/diepperaid1.png"
import diepperaid2 from "@/assets/images/diepperaid2.png"
import atlanticbattle1 from "@/assets/images/atlanticbattle1.jpg"
import atlanticbattle2 from "@/assets/images/atlanticbattle2.jpg"
import vimyridge1 from "@/assets/images/vimyridge1.jpg"
import vimyridge2 from "@/assets/images/vimyridge2.jpg"


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
}

const events: HistoryEvent[] = eventsData

const EventSection = ({ rank, title, year, description, images, bgColor }: HistoryEvent) => {
  return (
    <section
      className={cn(
        "w-full min-h-screen flex items-center",
        bgColor
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-8 md:px-16 py-20">
        <div className="flex flex-col gap-6">
          <span className="text-8xl md:text-9xl font-bold text-white/20">
            #{rank}
          </span>
          <div className="flex items-center gap-4 flex-wrap">
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              {title}
            </h2>
          </div>
          <p className="text-3xl md:text-4xl font-semibold text-white/70">
            {year}
          </p>
          <div className="text-base md:text-lg text-white/90 leading-relaxed max-w-5xl space-y-4">
            {description.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          {images && images.length > 0 && (
            <div className="flex flex-wrap gap-6 mt-8">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={imageMap[image] || image}
                  alt={`${title} ${index + 1}`}
                  className="rounded-lg shadow-2xl max-w-md w-full object-cover"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export function HistoryCards() {
  return (
    <div className="w-full">
      {events.map((event) => (
        <EventSection key={event.rank} {...event} />
      ))}
    </div>
  )
}
