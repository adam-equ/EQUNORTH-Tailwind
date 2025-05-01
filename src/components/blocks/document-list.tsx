import Link from "next/link";
import type { AcfFile } from "@nextwp/core";
import { FileIcon } from "lucide-react";
import BlocksWrapper from "../blocks-wrapper";

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
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div className="document-list">
        {docu_title || docu_copy ? (
          <div className="document-list__header o-container o-container--narrow u-text-center">
            {docu_title ? (
              <h2 className="u-spacer-bottom-md" data-aos="fade-in">
                {docu_title}
              </h2>
            ) : null}
            {docu_copy ? (
              <p
                className="u-spacer-top-md u-text-balance u-text-large"
                data-aos="fade-in"
              >
                {docu_copy}
              </p>
            ) : null}
          </div>
        ) : null}

        {docu_list_items ? (
          <div className="o-container">
            <ul className="document-list__items u-list-reset">
              {docu_list_items.map(
                ({ document_title, document_upload }, index) => {
                  return (
                    <li
                      className="document-list__item-wrap"
                      data-aos="fade-up"
                      key={index}
                    >
                      <a
                        href={document_upload.url}
                        target="_blank"
                        className="document-list__item u-flex o-box--rounded o-box--border o-box--hover"
                      >
                        <div className="document-list__item-content">
                          <span className="document-list__item-name h5 u-no-margin">
                            {document_title}
                          </span>
                          <div className="document-list__item-details">
                            <FileIcon className="mr-3" />
                            {document_upload.filesize ? (
                              <span className="o-label o-label--small o-label--upper o-label--grey">
                                {(
                                  document_upload.filesize /
                                  1024 /
                                  1024
                                ).toFixed(2)}
                                MB
                              </span>
                            ) : null}
                          </div>
                        </div>
                        <div className="document-list__item-download">
                          <span className="o-label o-label--bold">
                            Download
                          </span>
                        </div>
                      </a>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        ) : null}
      </div>
    </BlocksWrapper>
  );
}
