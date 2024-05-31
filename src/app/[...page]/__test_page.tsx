// import { builder } from "@builder.io/sdk";
// import { RenderBuilderContent } from "../../components/builder";

// // Builder Public API Key set in .env file
// builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// interface PageProps {
//   params: {
//     page: string[];
//   };
// }

// export default async function Page(props: PageProps) {
//   const builderModelName = "page";

//   const content = await builder
//     // Get the page content from Builder with the specified options
//     .get(builderModelName, {
//       userAttributes: {
//         // Use the page path specified in the URL to fetch the content
//         urlPath: "/" + (props?.params?.page?.join("/") || ""),
//       },
//     })
//     // Convert the result to a promise
//     .toPromise();

//   return (
//     <>
//       {/* Render the Builder page */}
//       <RenderBuilderContent content={content} model={builderModelName} />
//     </>
//   );
// }

// Example file structure, app/[...page]/page.tsx
// You could alternatively use src/app/[...page]/page.tsx
import { builder } from "@builder.io/sdk";
import { BuilderComponent } from '@builder.io/react'
import "../../builder";
// import MyHeader from '../components/my-header'
// import MyFooter from '../components/my-footer'

// Replace with your Public API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page(props: PageProps) {
  const content = await builder
    // Get the page content from Builder with the specified options
    .get("page", {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
      // Set prerender to false to return JSON instead of HTML
      prerender: false,
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <BuilderComponent content={content} />
    </>
  );
}