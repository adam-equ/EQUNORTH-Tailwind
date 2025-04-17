"use client";
import { WpImage, WpLink } from "@nextwp/core";
import { useEffect, useState } from "react";
import getSelectedMembers from "server-actions/getSelectedMembers";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ContactRound } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

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
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
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
                {member.acf?.linkedin_url && member.acf?.linkedin_url.url ? (
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
  );
}
