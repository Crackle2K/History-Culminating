import { Button } from "@/components/ui/button"
import { UserReviews } from "@/components/UserReviews"

function App() {

  return (
    <>
      <UserReviews />
      <h1>Top 10 Most Significant Events of Canadian and World History</h1>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button>Click me</Button>
      </div>
      
    </>
  )
}

export default App
