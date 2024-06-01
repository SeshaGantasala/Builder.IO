import { Builder } from '@builder.io/react'
import { AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from 'react'

export default function belowHeader(props: { title1: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; text1: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; title2: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; text2: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; title3: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; text3: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined }) {
  return (
    <section className="mod-below-header" id="mod-below-header">
    <div className="wrap">
      <div className="container-max">
        <div className="mod-below-header-p1"><h2>{props.title1}</h2><p>{props.text1}</p></div>
        <div className="mod-below-header-p2"><h2>{props.title2}</h2><p>{props.text2}</p></div>
        <div className="mod-below-header-p3"><h2>{props.title3}</h2><p>{props.text3}</p></div>
      </div>
    </div>
  </section>
  )
}

Builder.registerComponent(belowHeader, {
  name: 'belowHeader',
  inputs: [
    { name: 'title1', type: 'string', defaultValue: 'Heading 1' },
    { name: 'title2', type: 'string', defaultValue: 'Heading 2' },
    { name: 'title3', type: 'string', defaultValue: 'Heading 3' },

    
    { name: 'text1', type: 'string', defaultValue: 'Paragraph 1' },
    { name: 'text2', type: 'string', defaultValue: 'Paragraph 2' },
    { name: 'text3', type: 'string', defaultValue: 'Paragraph 3' },
  ]
})