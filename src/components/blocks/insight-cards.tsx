import BlocksWrapper from "../blocks-wrapper";
import { SelectedInsights } from "../selectedInsights";
// import Button from "../ui/button";

export interface InsightCardsProps {
  icards_title?: string;
  icards_copy?: string;
  insights: [];
  background_colour?: string;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
}

export function InsightCards({
  icards_title,
  icards_copy,
  insights,
  background_colour,
  component_padding,
}: InsightCardsProps) {
  // useEffect(() => {
  //   console.log("pcard_pages:", JSON.stringify(pcard_pages, null, 2));
  // }, [pcard_pages]);
  return (
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div className="mx-auto w-full max-w-7xl text-center lg:text-center">
        {icards_title ? (
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {icards_title}
          </h2>
        ) : null}
        {icards_copy ? (
          <p className="mt-3 text-lg text-gray-500">{icards_copy}</p>
        ) : null}
        {insights ? <SelectedInsights select_insights={insights} /> : null}
      </div>
    </BlocksWrapper>
  );
}
