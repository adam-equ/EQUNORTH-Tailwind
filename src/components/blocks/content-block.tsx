import Edges from "../edges";

export interface ContentBlockProps {
  contentb_copy: string;
  background_colour?: string;
}

export function ContentBlock({
  contentb_copy,
  background_colour = "equ-white",
}: ContentBlockProps) {
  return (
    <section className={`relative bg-${background_colour}`}>
      <Edges
        className="my-10 prose"
        dangerouslySetInnerHTML={{ __html: contentb_copy }}
      />
    </section>
  );
}
