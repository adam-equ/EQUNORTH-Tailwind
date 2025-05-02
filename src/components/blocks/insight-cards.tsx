import BlocksWrapper from "../blocks-wrapper";
import { SelectedInsights } from "../selectedInsights";
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
  return (
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div className="insights">
        <div className="insights__header o-container o-container--narrow u-text-center">
          {icards_title ? (
            <h3 className="u-spacer-bottom-md" data-aos="fade-in">
              {icards_title}
            </h3>
          ) : null}
          {icards_copy ? (
            <p
              className="u-spacer-top-md u-text-balance u-text-large"
              data-aos="fade-in"
            >
              {icards_copy}
            </p>
          ) : null}
        </div>

        {insights ? (
          <div className="o-container">
            <SelectedInsights select_insights={insights} />
          </div>
        ) : null}
      </div>
    </BlocksWrapper>
  );
}
