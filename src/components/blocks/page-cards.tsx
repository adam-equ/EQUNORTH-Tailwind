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
      <div className="mx-auto w-full max-w-7xl text-center lg:text-center">
        {pcards_title ? (
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-equ-white">
            {pcards_title}
          </h2>
        ) : null}
        {pcards_copy ? (
          <p className="mt-3 text-lg text-gray-500 dark:text-equ-white">
            {pcards_copy}
          </p>
        ) : null}
        {pcard_pages ? <SelectedPages select_pages={pcard_pages} /> : null}
      </div>
    </BlocksWrapper>
  );
}
