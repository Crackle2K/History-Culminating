
import ColourfulText from "@/components/ui/colourful-text";

export function Title() {
  return (
    <div className="w-full flex items-center justify-center py-20">
      <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center relative z-2">
        Top 10 Most <ColourfulText text="Significant Events" /> <br /> of Canadian and World History
      </h1>
    </div>
  );
}
