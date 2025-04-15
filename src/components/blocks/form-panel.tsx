import BlocksWrapper from "../blocks-wrapper";
import HubspotContactForm from "./hubspotform";
// import GravityFormForm from "next-gravity-forms";
// import { getGravityForm } from "next-gravity-forms/server";
export interface FormPanelProps {
  form_title?: string;
  form_copy?: string;
  form_id?: string;
  background_colour?: string;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
}
export function FormPanel({
  form_title,
  form_copy,
  form_id,
  background_colour,
  component_padding,
}: FormPanelProps) {
  return (
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div className="mx-auto w-full max-w-7xl text-center lg:text-center">
        {form_title ? (
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {form_title}
          </h2>
        ) : null}
        {form_copy ? (
          <p className="mt-3 text-lg text-gray-500">{form_copy}</p>
        ) : null}
      </div>
      <div>
        <HubspotContactForm
          region="na1"
          portalId="1861417"
          form_id="d760a1fa-136a-44c4-b1d5-7ebcf2a01a5c"
        />
      </div>
    </BlocksWrapper>
  );
}
