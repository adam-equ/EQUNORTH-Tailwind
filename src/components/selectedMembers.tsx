"use client";
import { WpImage, WpLink } from "@nextwp/core";
import { useEffect, useState } from "react";
import getSelectedMembers from "server-actions/getSelectedMembers";
import Image from "next/image";
import { ChevronDown, ContactRound } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import AOS from "aos";

export interface Member {
  acf: {
    full_name: string;
    profile_image?: WpImage;
    job_title_position?: string;
    linkedin_url?: WpLink;
    intro: string;
    bio: string;
  };
}
interface SelectedTestimonialProps {
  select_members: [];
}
export function SelectedMembers({ select_members }: SelectedTestimonialProps) {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (select_members) {
      const postIds = select_members.map((item) => item);
      getSelectedMembers({ include: postIds })
        .then((data) => {
          setMembers(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [select_members]);
  useEffect(() => {
    if (members.length > 0) {
      AOS.refresh();
    }
  }, [members]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="team-members__items o-container">
      {members.map((member, index) => {
        return (
          <div
            key={index}
            className="team-members__item o-box--rounded-large o-box--border"
          >
            {member.acf?.profile_image?.url ? (
              <div className="team-members__item-image o-image o-image--fit o-image--circle">
                <Image
                  alt={member.acf?.profile_image.alt || ""}
                  height={member.acf?.profile_image.height}
                  src={member.acf?.profile_image.url}
                  width={member.acf.profile_image.width}
                />
              </div>
            ) : null}
            <div className="team-members__item-content">
              <div className="team-members__item-title h5 u-no-margin">
                {member.acf?.full_name}
              </div>
              {member.acf?.linkedin_url && member.acf?.linkedin_url.url ? (
                <div className="team-members__item-url">
                  <a
                    href={member.acf?.linkedin_url.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center ml-auto border border-grey-300 rounded-md p-2 hover:bg-gray-100"
                  >
                    <ContactRound size={24} className="mr-2" />
                    <span className="text-sm">Connect</span>
                  </a>
                </div>
              ) : null}
              <div className="team-members__item-description o-label o-label--small o-label--grey">
                {member.acf?.job_title_position}
              </div>
              <div className="team-members__item-description o-label o-label--small o-label--grey">
                {member.acf?.intro}
              </div>
              {member.acf?.bio ? (
                <Collapsible>
                  <CollapsibleTrigger>
                    <span className="team-members__item-readmore">
                      More
                      <ChevronDown size={24} />
                    </span>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div
                      className="team-members__item-bio"
                      dangerouslySetInnerHTML={{
                        __html: member.acf?.bio,
                      }}
                    />
                  </CollapsibleContent>
                </Collapsible>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
