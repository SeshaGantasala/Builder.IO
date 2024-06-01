// import { Builder, BuilderComponent, builder } from '@builder.io/react'
// import Header from '../components/header'
// import Footer from '../components/footer'
// import Nav from '../components/nav'
// import '../components/heading'
// import '../components/hero'

// // You control this page and how and where Builder renders
// export default function Home({ builderJson }) {
//   const navArray = [
//     { data: { url: '/home', label: '360 Training' } },
//     { data: { url: '/food-alcohol', label: 'Food & Alcohol' } },
//     { data: { url: '/real-estate', label: 'Real Estate' } },
//     { data: { url: '/env-health-safety', label: 'Environmental Health & Safety' } },
//     { data: { url: '/healthcare', label: 'Healthcare' } },
//     { data: { url: '/other-industries', label: 'Other Industries' } },
//   ];

//   return (
//     <>
//       <Nav links={navArray} />
//       <Header />
//       {/* Render your Builder.io content https://www.builder.io/c/docs/quickstart */}
//       <main className="min-h-[70vh]">
//         <BuilderComponent model="page" content={builderJson} />
//       </main>
//       <Footer />
//     </>
//   )
// }

// // Fetch Builder.io content from the content API
// // https://www.builder.io/c/docs/content-api
// export async function getStaticProps({ params }) {
//   const links = await builder.get('nav-links', {
//     // You can use options for queries, sorting, and targeting here
//   }).promise();

// //   const productDetails = await builder.get('product-details', {
// //     query: { 
// //       // Query product details by its handle field
// //       'data.handle': params.product
// //     }
// //  }).promise();

//   const content = await builder.get('page', { 
//     url: '/' + (params.page?.join('/') || '') 
//   }).promise();

//   // return { props: { builderJson: content || null , links: links || null, productDetails: productDetails || null, notFound: !productDetails, revalidate: 5,} }
//   return { props: { builderJson: content || null , links: links || null, revalidate: 5,} }
// }

// // Query a list of pages in Builder
// export async function getStaticPaths() {
//   const pages = await builder.getAll('page', { fields: 'data.url' })
//   return {
//     paths: pages.map(page => ({ params: { page: page.data.url } })),
//     fallback: true
//   }
// }

import { Builder, BuilderComponent, builder } from '@builder.io/react'
import { GetStaticProps, GetStaticPaths } from "next";
import Header from '../components/header'
import Footer from '../components/footer'
import Nav from '../components/nav'
import '../components/heading'
import '../components/hero'
import '../components/belowHeader'
import '../components/heroProduct'
import '../components/customHeroProduct'

export default function Home({ builderJson, links }: any) {
  console.log(links)
  return (
    <>
    
      
      <main className="min-h-[70vh]">
        <BuilderComponent model="page" content={builderJson} />
      </main>
      
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  try {
    const links = await builder.getAll("figma-imports");

    const content = await builder.get("page", {
      url: "/" + (params.page?.join("/") || ""),
    });

    return {
      props: {
        builderJson: content || null,
        links: links || null,
      },
      revalidate: 5,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        builderJson: null,
        links: null,
      },
      revalidate: 5,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await builder.getAll("page", { fields: "data.url" });

  return {
    paths: pages.map((page) => ({ params: { page: page?.data?.url.split("/") } })),
    fallback: true,
  };
};