// "use client";
// import { ComponentProps } from "react";
// import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
// import { BuilderContent, builder } from "@builder.io/sdk";
// import DefaultErrorPage from "next/error";
// import "../builder-registry";

// type BuilderPageProps = ComponentProps<typeof BuilderComponent>;

// // Builder Public API Key set in .env file
// builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// export function RenderBuilderContent({ content, model }: BuilderPageProps) {
//   // Call the useIsPreviewing hook to determine if
//   // the page is being previewed in Builder
//   const isPreviewing = useIsPreviewing();
//   // If "content" has a value or the page is being previewed in Builder,
//   // render the BuilderComponent with the specified content and model props.
//   if (content || isPreviewing) {
//     return <BuilderComponent content={content} model={model} />;
//   }
//   // If the "content" is falsy and the page is
//   // not being previewed in Builder, render the
//   // DefaultErrorPage with a 404.
//   return <DefaultErrorPage statusCode={404} />;
// }

// "use client";
// import { BuilderComponent, useIsPreviewing } from "@builder.io/react"; 
// import { BuilderContent, builder } from '@builder.io/sdk';
// import DefaultErrorPage from "next/error";

// interface BuilderPageProps { 
//   content?: BuilderContent;
// }

// // Replace with your Public API Key
// builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// export function RenderBuilderContent({ content }: BuilderPageProps) { 
//   // Call the useIsPreviewing hook to determine if 
//   // the page is being previewed in Builder
//   const isPreviewing = useIsPreviewing(); 
//   // If `content` has a value or the page is being previewed in Builder,
//   // render the BuilderComponent with the specified content and model props.
//   if (content || isPreviewing) {
//     return <BuilderComponent content={content} model="page" />;
//   }
//   // If the `content` is falsy and the page is 
//   // not being previewed in Builder, render the 
//   // DefaultErrorPage with a 404.
//   return <DefaultErrorPage statusCode={404} />; 
// }

import { Builder, builder } from '@builder.io/react'
// Initialize with your API key
// https://www.builder.io/c/docs/using-your-api-key
// builder.init('playground')
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// Create a custom menu for your components
// https://www.builder.io/c/docs/custom-components-visual-editor#organizing
Builder.register('insertMenu', {
  name: 'My Components',
  items: [{ name: 'Heading' }, { name: 'Hero' }, { name: 'heroProduct' }, { name: 'belowHeader' }, { name: 'CustomBackground' }, { name: 'customHeroProduct' }]
})