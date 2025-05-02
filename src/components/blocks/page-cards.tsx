import BlocksWrapper from "../blocks-wrapper";
import { SelectedPages } from "../selectedPages";
export interface PageCardsProps {
  pcards_title?: string;
  pcards_copy?: string;
  pcard_pages: [];
  background_colour?: string;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
}

export function PageCards({
  pcards_title,
  pcards_copy,
  pcard_pages,
  background_colour,
  component_padding,
}: PageCardsProps) {
  return (
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div className="page-cards">
        <div className="page-cards__header o-container o-container--narrow u-text-center">
          {pcards_title ? (
            <h3 className="u-spacer-bottom-md" data-aos="fade-in">
              {pcards_title}
            </h3>
          ) : null}
          {pcards_copy ? (
            <p
              className="u-spacer-top-md u-text-balance u-text-large"
              data-aos="fade-in"
            >
              {pcards_copy}
            </p>
          ) : null}
        </div>
        <div className="o-container">
          {pcard_pages ? <SelectedPages select_pages={pcard_pages} /> : null}
        </div>
      </div>
    </BlocksWrapper>
  );
}
