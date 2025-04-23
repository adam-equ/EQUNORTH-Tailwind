import Link from "next/link";
import { LinkFieldType } from "./blocks/types";

export interface LinkFieldProps {
  link_field: LinkFieldType;
}

export function LinkField({ link_field }: LinkFieldProps) {
  const publicUrl = process.env.NEXT_PUBLIC_WP_URL;
  const link_target = link_field.link?.target
    ? link_field.link?.target
    : "_self";
  const link_title = link_field.link?.title;
  const internal_link =
    link_field.link?.url?.replace(publicUrl ?? "", "") || "";
  const external_link = link_field?.link?.url || "";
  return (
    <div className="link-wrap">
      {!link_field.link_type ? (
        <Link href={internal_link}>{link_title}</Link>
      ) : (
        <a href={external_link} target={link_target}>
          {link_title}
        </a>
      )}
    </div>
  );
}
