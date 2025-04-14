"use client";
import Image from "next/image";
import type { WpImage, WpLink } from "@nextwp/core";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import getMembers from "server-actions/getMembers";
import { ChevronDown, ContactRound } from "lucide-react";
import BlocksWrapper from "../blocks-wrapper";

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
export function TeamMembers({
  teamm_title,
  teamm_copy,
  teamm_link,
  background_colour,
  select_members,
  component_padding,
}: TeamMembersProps) {
  const [members, setMembers] = useState<Member[]>([]);
  useEffect(() => {
    if (select_members) {
      const postIds = select_members.map((item) => item);
      getMembers({ include: postIds })
        .then((data) => {
          setMembers(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [select_members]);
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
          <div className="relative">
            {members.map((member, index) => {
              return (
                <div key={index} className="flex gap-8 my-16">
                  {member.acf?.profile_image?.url ? (
                    <Image
                      alt={member.acf?.profile_image.alt || ""}
                      height={member.acf?.profile_image.height}
                      src={member.acf?.profile_image.url}
                      width={member.acf.profile_image.width}
                      className="text-center w-[250px] h-[250px] rounded-md mb-8"
                    />
                  ) : null}
                  <div className="grow text-left">
                    <div className="flex items-start">
                      <h3 className="text-4xl">{member.acf?.full_name}</h3>
                      {member.acf?.linkedin_url &&
                      member.acf?.linkedin_url.url ? (
                        <Link
                          href={member.acf?.linkedin_url.url}
                          target="_blank"
                          className="flex items-center ml-auto border border-grey-300 rounded-md p-2 hover:bg-gray-100"
                        >
                          <ContactRound size={24} className="mr-2" />
                          <span className="text-sm">Connect</span>
                        </Link>
                      ) : null}
                    </div>
                    <p>{member.acf?.job_title_position}</p>
                    <p className="text-gray-600">{member.acf?.intro}</p>
                    {member.acf?.bio ? (
                      <Collapsible>
                        <CollapsibleTrigger>
                          <span className="flex font-bold">
                            More
                            <ChevronDown size={24} />
                          </span>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div
                            className="text-gray-600 pt-4"
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
        ) : null}
      </div>
    </BlocksWrapper>
  );
}
