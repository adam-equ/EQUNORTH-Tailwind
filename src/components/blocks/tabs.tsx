import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlocksWrapper from "../blocks-wrapper";

export interface TabProps {
  tab_title?: string;
  tab_copy?: string;
  background_colour?: string;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
  tab_items?: {
    tabbed_title: string;
    tabbed_copy: string;
  }[];
}

export function TabsPanel({
  tab_title,
  tab_copy,
  tab_items,
  background_colour,
  component_padding,
}: TabProps) {
  return (
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div className="tabs-panel">
        <div className="tabs-panel__header o-container o-container--narrow u-text-center">
          {tab_title ? (
            <h3 className="u-spacer-bottom-md" data-aos="fade-in">
              {tab_title}
            </h3>
          ) : null}

          {tab_copy ? (
            <p
              className="u-spacer-top-md u-text-balance u-text-large"
              data-aos="fade-in"
            >
              {tab_copy}
            </p>
          ) : null}
        </div>
        {tab_items ? (
          <div className="o-container o-container--narrow">
            <Tabs
              defaultValue={tab_items[0].tabbed_title}
              className="tabs-panel__panel w-[400px]"
            >
              <TabsList>
                {tab_items?.map((tab, index) => {
                  return (
                    <TabsTrigger
                      value={tab.tabbed_title}
                      key={index}
                      className="tabs-panel__triggers"
                    >
                      {tab.tabbed_title}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
              {tab_items?.map((tab, index) => {
                return (
                  <TabsContent
                    value={tab.tabbed_title}
                    key={index}
                    className="tabs-panel__panels o-box--rounded o-box--border"
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: tab.tabbed_copy,
                      }}
                    />
                  </TabsContent>
                );
              })}
            </Tabs>
          </div>
        ) : null}
      </div>
    </BlocksWrapper>
  );
}
