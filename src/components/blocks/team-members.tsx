import type { WpLink } from "@nextwp/core";
import BlocksWrapper from "../blocks-wrapper";
import { SelectedMembers } from "../selectedMembers";

export interface TeamMembersProps {
  teamm_title?: string;
  teamm_copy?: string;
  teamm_link?: WpLink;
  background_colour?: string;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
  select_members?: [];
}
export function TeamMembers({
  teamm_title,
  teamm_copy,
  teamm_link,
  background_colour,
  select_members,
  component_padding,
}: TeamMembersProps) {
  return (
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div className="relative mx-auto w-full max-w-7xl text-center lg:text-center z-1">
        {teamm_title ? (
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-equ-white">
            {teamm_title}
          </h2>
        ) : null}

        {teamm_copy ? (
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-100">
            {teamm_copy}
          </p>
        ) : null}
        {select_members ? (
          <SelectedMembers select_members={select_members} />
        ) : null}
      </div>
    </BlocksWrapper>
  );
}
