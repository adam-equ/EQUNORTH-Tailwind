import { GlobalStuff } from "@/components/global-stuff";
import { Infinity } from "@/components/infinity";

export function ServicesPageTemplate(props) {
  return (
    <div>
      <h1>Services page template</h1>
      <div className="relative w-full bg-[#f7f8fd] p-4">
        <Infinity />
      </div>

      <pre>{JSON.stringify(props, null, 2)}</pre>
      <GlobalStuff />
    </div>
  );
}
