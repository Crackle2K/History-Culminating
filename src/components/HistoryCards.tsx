import { cn } from "@/lib/utils"
import eventsData from "@/data/events.json"

interface HistoryEvent {
  rank: number
  title: string
  year: string
  description: string
  isCanadian: boolean
  bgColor: string
}

const events: HistoryEvent[] = eventsData

const EventSection = ({ rank, title, year, description, bgColor }: HistoryEvent) => {
  return (
    <section
      className={cn(
        "w-full min-h-screen flex items-center bg-gradient-to-br",
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
          <p className="text-2xl md:text-3xl text-white/90 leading-relaxed max-w-5xl">
            {description}
          </p>
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
