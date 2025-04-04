import Link from "next/link";
import type { AcfFile } from "@nextwp/core";
import { FileIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DocumentListProps {
  docu_title?: string;
  docu_copy?: string;
  background_colour?: string;
  docu_list_items?: {
    document_title: string;
    document_upload: AcfFile;
  }[];
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
}
export function DocumentList({
  docu_title,
  docu_copy,
  background_colour,
  docu_list_items,
  component_padding,
}: DocumentListProps) {
  return (
    <section
      className={cn(
        "relative",
        background_colour ? `bg-equ-${background_colour}` : "bg-equ-white",
        background_colour === "teal" ||
          background_colour === "black" ||
          background_colour === "grey"
          ? "dark"
          : "",
        component_padding
          ? `${component_padding.top_padding} ${component_padding.bottom_padding}`
          : "pb-16 pt-16"
      )}
    >
      <div className="mx-auto w-full max-w-7xl text-center lg:text-center">
        {docu_title ? (
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {docu_title}
          </h2>
        ) : null}

        {docu_copy ? (
          <p className="mt-3 text-lg text-gray-500">{docu_copy}</p>
        ) : null}

        {docu_list_items ? (
          <div className="mt-10">
            {docu_list_items.map(
              ({ document_title, document_upload }, index) => {
                return (
                  <div
                    className="w-full flex mt-2 p-2 border bg-white rounded-md"
                    key={index}
                  >
                    <h4 className="mb-0">{document_title}</h4>
                    <div className="flex ml-auto items-center">
                      <FileIcon className="mr-3" />
                      <p className="mr-3 mb-0 text-sm">
                        {document_upload.filesize ? (
                          <span>
                            {(document_upload.filesize / 1024 / 1024).toFixed(
                              2
                            )}
                          </span>
                        ) : null}
                        <span className="text-xs text-gray-500">MB</span>
                        <span className="border-r-2 ml-3"></span>
                      </p>
                      {document_upload.url ? (
                        <Link href={document_upload.url} className="text-sm">
                          View Document
                        </Link>
                      ) : null}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}
