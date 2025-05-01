import BlocksWrapper from "../blocks-wrapper";
export interface ContentBlockProps {
  contentb_copy: string;
  background_colour?: string;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
}

export function ContentBlock({
  contentb_copy,
  background_colour,
  component_padding,
}: ContentBlockProps) {
  return (
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div className="o-container">
        <div
          className="content-block o-rich-text relative mx-auto w-full max-w-7xl prose"
          dangerouslySetInnerHTML={{ __html: contentb_copy }}
        />
      </div>
    </BlocksWrapper>
  );
}
