import Link from "next/link";
import { LinkFieldType } from "./blocks/types";

export interface LinkFieldProps {
  link_field: LinkFieldType;
}

export function LinkFieldCover({ link_field }: LinkFieldProps) {
  const publicUrl = process.env.NEXT_PUBLIC_WP_URL;
  const link_target = link_field.link?.target
    ? link_field.link?.target
    : "_self";
  const internal_link =
    link_field.link?.url?.replace(publicUrl ?? "", "") || "";
  const external_link = link_field?.link?.url || "";
  return (
    //   <Link
    //   href={logo_item_link.url}
    //   className="absolute top-0 bottom-0 left-0 right-0 w-full h-full"
    // />
    <>
      {!link_field.link_type ? (
        <Link href={internal_link} className="u-link-fill" />
      ) : (
        <a href={external_link} target={link_target} className="u-link-fill" />
      )}
    </>
  );
}
