import { cn } from "@/lib/utils";
import BlocksWrapper from "../blocks-wrapper";

export interface TwoColContentProps {
  twocol_title?: string;
  twocol_copy?: string;
  reverse?: boolean;
  background_colour?: string;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
}
export function TwoColContent({
  twocol_title,
  twocol_copy,
  reverse,
  background_colour,
  component_padding,
}: TwoColContentProps) {
  return (
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div className="two-col-content">
        <div className="o-container two-col-content--content">
          <div
            className={cn(
              "two-col-content--title",
              reverse ? "two-col-content--title--reverse" : null
            )}
          >
            {twocol_title ? <h2>{twocol_title}</h2> : null}
          </div>
          {twocol_copy ? (
            <div dangerouslySetInnerHTML={{ __html: twocol_copy }} />
          ) : null}
        </div>
      </div>
    </BlocksWrapper>
  );
}
