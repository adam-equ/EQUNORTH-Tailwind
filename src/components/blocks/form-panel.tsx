import BlocksWrapper from "../blocks-wrapper";
import HubspotContactForm from "../hubspotform";
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
      <div className="form-panel">
        <div className="form-panel__header o-container o-container--narrow u-text-center">
          {form_title ? (
            <h3 className="u-spacer-bottom-md" data-aos="fade-in">
              {form_title}
            </h3>
          ) : null}
          {form_copy ? (
            <p
              className="u-spacer-top-md u-text-balance u-text-large"
              data-aos="fade-in"
            >
              {form_copy}
            </p>
          ) : null}
        </div>
        <div className="o-container o-container--narrow">
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
