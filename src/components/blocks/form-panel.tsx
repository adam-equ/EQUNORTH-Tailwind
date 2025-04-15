import BlocksWrapper from "../blocks-wrapper";
import HubspotContactForm from "./hubspotform";
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
  const hsportalId = process.env.HUBSPOT_PORTAL;
  const hsregion = process.env.HUBSPOT_REGION;
  return (
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div className="mx-auto w-full max-w-7xl text-center lg:text-center">
        <div className="flex gap-32 max-w-[800px] mx-auto">
          <div className="form-copy-wrapper text-left">
            {form_title ? (
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {form_title}
              </h2>
            ) : null}
            {form_copy ? (
              <p className="mt-3 text-lg text-gray-500">{form_copy}</p>
            ) : null}
          </div>
          {hsregion && hsportalId && form_id ? (
            <HubspotContactForm
              region={hsregion}
              portalId={hsportalId}
              formId={form_id}
            />
          ) : null}
        </div>
      </div>
    </BlocksWrapper>
  );
}
