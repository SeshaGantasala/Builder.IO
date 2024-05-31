import '../builder.ts'
import '../builder-registry.ts'
import '../styles/globals.css'
import '../styles/hero.css'
import '../styles/nav.css'
import '../styles/belowhero.css'
import '../styles/heroProduct.css'
import type { AppProps } from 'next/app'
import '../components/spiningBall/spiningBall'

import { builder } from '@builder.io/react'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}