import { Button } from "./ui/button";
import Link from "next/link";
import { LinkFieldType } from "./blocks/types";

export interface LinkFieldProps {
  link_field: LinkFieldType;
}

export function LinkFieldButton({ link_field }: LinkFieldProps) {
  const link_target = link_field.link?.target
    ? link_field.link?.target
    : "_self";
  const link_title = link_field.link?.title;
  const internal_link =
    link_field.link?.url?.replace("http://equnorthwp.local", "") || "";
  const external_link = link_field?.link?.url || "";
  return (
    <div className="link-wrap">
      {!link_field.link_type ? (
        <Button asChild>
          <Link href={internal_link}>{link_title}</Link>
        </Button>
      ) : (
        <Button asChild>
          <a href={external_link} target={link_target}>
            {link_title}
          </a>
        </Button>
      )}
    </div>
  );
}
