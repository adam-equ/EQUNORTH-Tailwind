import { Button } from "./ui/button";
import Link from "next/link";
import { LinkFieldType } from "./blocks/types";

export interface LinkFieldProps {
  link_field: LinkFieldType;
}

export function LinkFieldCover({ link_field }: LinkFieldProps) {
  const link_target = link_field.link?.target
    ? link_field.link?.target
    : "_self";
  const link_title = link_field.link?.title;
  const internal_link =
    link_field.link?.url?.replace("http://equnorthwp.local", "") || "";
  const external_link = link_field?.link?.url || "";
  return (
    //   <Link
    //   href={logo_item_link.url}
    //   className="absolute top-0 bottom-0 left-0 right-0 w-full h-full"
    // />
    <>
      {!link_field.link_type ? (
        <Link
          href={internal_link}
          className="absolute top-0 bottom-0 left-0 right-0 w-full h-full"
        />
      ) : (
        <Link
          href={external_link}
          target={link_target}
          className="absolute top-0 bottom-0 left-0 right-0 w-full h-full"
        />
      )}
    </>
  );
}
