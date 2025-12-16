import { cn } from "@/lib/utils"
import mapleLeafImg from "@/assets/icons/mapleleaf.png"

interface HistoryEvent {
  rank: number
  title: string
  description: string
  isCanadian: boolean
}

const events: HistoryEvent[] = [
  {
    rank: 10,
    title: "Battle of Hong Kong (1941)",
    description: "description here",
    isCanadian: true,
  },
  {
    rank: 9,
    title: "Dieppe Raid (1942)",
    description: "description here",
    isCanadian: true,
  },
  {
    rank: 8,
    title: "Battle of the Atlantic (1939 - 1945)",
    description: "description here",
    isCanadian: true,
  },
  {
    rank: 7,
    title: "Battle of Vimy Ridge (1917)",
    description: "description here",
    isCanadian: true,
  },
  {
    rank: 6,
    title: "Fall of the Berlin Wall (1989)",
    description: "description here",
    isCanadian: false,
  },
  {
    rank: 5,
    title: "The Great Depression (1929 - 1939)",
    description: "description here",
    isCanadian: false,
  },
  {
    rank: 4,
    title: "D-Day Invasion of Juno Beach (1944)",
    description: "description here",
    isCanadian: true,
  },
  {
    rank: 3,
    title: "The Manhattan Project (1942 - 1945)",
    description: "description here",
    isCanadian: false,
  },
  {
    rank: 2,
    title: "Operation Barborosa (1941)",
    description: "description here",
    isCanadian: false,
  },
  {
    rank: 1,
    title: "The Moon Landing (1969)",
    description: "description here",
    isCanadian: false,
  },
]

const MapleLeafIcon = () => (
  <img src={mapleLeafImg} alt="Canadian" width="16" height="16" className="inline-block" />
)

const EventCard = ({ rank, title, description, isCanadian }: HistoryEvent) => {
  return (
    <div
      className={cn(
        "relative w-full cursor-pointer overflow-hidden rounded-xl border p-6 transition-all hover:shadow-lg",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <span className="text-4xl font-bold text-gray-400 dark:text-gray-500">
            #{rank}
          </span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-semibold dark:text-white">
              {title}
            </h3>
            {isCanadian && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm font-medium">
                <MapleLeafIcon /> Canadian Event
              </span>
            )}
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export function HistoryCards() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      <div className="space-y-6">
        {events.map((event) => (
          <EventCard key={event.rank} {...event} />
        ))}
      </div>
    </div>
  )
}
