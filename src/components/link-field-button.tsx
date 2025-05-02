import Link from "next/link";
import { LinkFieldType } from "./blocks/types";

export interface LinkFieldProps {
  link_field: LinkFieldType;
  className?: string;
}

export function LinkFieldButton({ link_field, className }: LinkFieldProps) {
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
        <Link className={className} href={internal_link}>
          {link_title}
        </Link>
      ) : (
        <a className={className} href={external_link} target={link_target}>
          {link_title}
        </a>
      )}
    </div>
  );
}
