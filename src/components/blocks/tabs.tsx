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
      <div className="relative mx-auto w-full max-w-7xl text-center lg:text-center z-1">
        {tab_title ? (
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-equ-white">
            {tab_title}
          </h2>
        ) : null}

        {tab_copy ? (
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-100">
            {tab_copy}
          </p>
        ) : null}
        {tab_items ? (
          <Tabs
            defaultValue={tab_items[0].tabbed_title}
            className="w-[400px] mt-8 mx-auto"
          >
            <TabsList>
              {tab_items?.map((tab, index) => {
                return (
                  <TabsTrigger value={tab.tabbed_title} key={index}>
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
                  className="text-left"
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
        ) : null}
      </div>
    </BlocksWrapper>
  );
}
