import { cn } from "@/lib/utils"
import mapleLeafImg from "@/assets/icons/mapleleaf.png"

interface HistoryEvent {
  rank: number
  title: string
  year: string
  description: string
  bgColor: string
}

const events: HistoryEvent[] = [
  {
    rank: 10,
    title: "Battle of Hong Kong",
    year: "1941",
    description: "description here",
    bgColor: "from-red-900 to-red-950",
  },
  {
    rank: 9,
    title: "Dieppe Raid",
    year: "1942",
    description: "description here",
    bgColor: "from-purple-900 to-pink-950",
  },
  {
    rank: 8,
    title: "Battle of the Atlantic",
    year: "1939 - 1945",
    description: "description here",
    bgColor: "from-cyan-900 to-blue-950",
  },
  {
    rank: 7,
    title: "Battle of Vimy Ridge",
    year: "1917",
    description: "description here",
    bgColor: "from-green-900 to-emerald-950",
  },
  {
    rank: 6,
    title: "Fall of the Berlin Wall",
    year: "1989",
    description: "description here",
    bgColor: "from-orange-900 to-amber-950",
  },
  {
    rank: 5,
    title: "The Great Depression",
    year: "1929 - 1939",
    description: "description here",
    bgColor: "from-gray-900 to-slate-950",
  },
  {
    rank: 4,
    title: "D-Day Invasion of Juno Beach",
    year: "1944",
    description: "description here",
    bgColor: "from-red-900 to-rose-950",
  },
  {
    rank: 3,
    title: "The Manhattan Project",
    year: "1942 - 1945",
    description: "description here",
    bgColor: "from-yellow-900 to-orange-950",
  },
  {
    rank: 2,
    title: "Operation Barborosa",
    year: "1941",
    description: "description here",
    bgColor: "from-violet-900 to-purple-950",
  },
  {
    rank: 1,
    title: "The Moon Landing",
    year: "1969",
    description: "description here",
    bgColor: "from-sky-900 to-cyan-950",
  },
]

const MapleLeafIcon = () => (
  <img src={mapleLeafImg} alt="Canadian" width="24" height="24" className="inline-block" />
)

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
