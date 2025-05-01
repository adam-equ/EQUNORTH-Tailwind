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
      <div className="team-members">
        <div className="team-members__header o-container o-container--narrow u-text-center">
          {teamm_title ? (
            <h3 className="u-spacer-bottom-md" data-aos="fade-in">
              {teamm_title}
            </h3>
          ) : null}

          {teamm_copy ? (
            <p className="u-spacer-top-md u-text-balance" data-aos="fade-in">
              {teamm_copy}
            </p>
          ) : null}
        </div>
        {select_members ? (
          <SelectedMembers select_members={select_members} />
        ) : null}
      </div>
    </BlocksWrapper>
  );
}
