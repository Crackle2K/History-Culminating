import { Marquee } from "@/components/ui/marquee"
import { cn } from "@/lib/utils"
import misplacedorangeImg from "@/assets/icons/misplacedorange.jpg"
import louisfangImg from "@/assets/icons/louisfang.png"
import hoganyuImg from "@/assets/icons/hoganyu.jpg"
import navgotshotImg from "@/assets/icons/navgotshot.png"
import ibrahimhameedImg from "@/assets/icons/ibrahimhameed.jpg"

const reviews = [
  {
    name: "Louis Fang",
    username: "@StillNotLouiii",
    body: "Thank you so much for blessing me with this historic knowledge which I will carry to future generations.",
    img: louisfangImg,
  },
  {
    name: "Hogan Yu",
    username: "@goodenough6997",
    body: "Your work is genuinely exceptional, and I mean that in the most literal sense.",
    img: hoganyuImg,
  },
  {
    name: "Roy Lu",
    username: "@MisplacedOrange",
    body: "The way each event was displayed with such detailed explanations and elements truly captivated my attention.",
    img: misplacedorangeImg,
  },
  {
    name: "Ibrahim Hameed",
    username: "@ibbu_hameed",
    body: "I really like the selected choices as I feel it accurately represents some of the most important events in World History.",
    img: ibrahimhameedImg,
  },
  {
    name: "Navjot Singh Sidhu",
    username: "@navgotshot",
    body: "The way you were able to inform me on which events mattered most in our history left me dazzled.",
    img: navgotshotImg,
  }
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full object-cover aspect-square" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export function UserReviews() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}
