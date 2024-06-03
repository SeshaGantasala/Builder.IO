"use client";
import { builder, Builder } from "@builder.io/react";
import App from "./pages/_app";
import { BuilderTextField } from "./components/textField";
import Counter from "./components/Counter/Counter";
import CustomBackgroundComponent from "./components/CustomBackgroundComponent";
import Footer from "./components/footer";
import Header from "./components/header";
import Heading from "./components/heading";
import Hero from "./components/hero";
import HeroProduct from "./components/heroProduct";
import Home from "./pages/[[...page]]";
import Nav from "./components/nav";
import SpinningBall from "./components/spiningBall/spiningBall";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Heading, {
  name: "Heading",
  inputs: [{ name: "title", type: "text" }],
  image:
    "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
});

Builder.registerComponent(App, {
  name: "App",
  inputs: [
    {
      name: "__N_SSG",
      type: "boolean",
    },
    {
      name: "__N_SSP",
      type: "boolean",
    },
    {
      name: "Component",
      type: "string",
      meta: {
        ts: "NextComponentType<NextPageContext, any, any>",
      },
      required: true,
    },
    {
      name: "pageProps",
      type: "string",
      meta: {
        ts: "PageProps",
      },
      required: true,
    },
    {
      name: "router",
      type: "string",
      meta: {
        ts: "Router",
      },
      required: true,
    },
  ],
});

Builder.registerComponent(Footer, {
  name: "Footer",
});

Builder.registerComponent(BuilderTextField, {
  name: "TextField",
  noWrap: true, // Important!
  inputs: [{ name: "variant", type: "string" }],
});

Builder.registerComponent(CustomBackgroundComponent, {
  name: "CustomBackgroundComponent",
  inputs: [
    {
      name: "duration",
      type: "string",
      required: true,
    },
    {
      name: "image",
      type: "string",
      required: true,
    },
    {
      name: "language",
      type: "string",
      required: true,
    },
    {
      name: "productTitle",
      type: "string",
      required: true,
    },
    {
      name: "shortDescription",
      type: "string",
      required: true,
    },
    {
      name: "text",
      type: "string",
      required: true,
    },
    {
      name: "textColor",
      type: "string",
      required: true,
    },
    {
      name: "textElement",
      type: "string",
      meta: {
        ts: "keyof IntrinsicElements",
      },
      required: true,
    },
  ],
});

Builder.registerComponent(HeroProduct, {
  name: "HeroProduct",
});

Builder.registerComponent(Hero, {
  name: "Hero",
});

Builder.registerComponent(Header, {
  name: "Header",
});

Builder.registerComponent(Home, {
  name: "Home",
});

Builder.registerComponent(Nav, {
  name: "Nav",
});

Builder.registerComponent(SpinningBall, {
  name: "SpinningBall",
});
