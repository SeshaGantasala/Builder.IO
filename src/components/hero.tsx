import { Builder } from '@builder.io/react'
import { useState } from 'react'

// A more complex component example. You can use any component
// in Builder, including those using third party libraries, state,
// API data, context, or whatever else.
// https://www.builder.io/c/docs/custom-components-intro
export default function Hero(props: any) {
  // Simple example showing components can be interactive,
  // not just simply presentational
  const [count, setCount] = useState(0)

  return (
    <div className="mod-hero mod-hero--divider">
      <div className="wrap">
        <div className='container-max'>
          <div className="row mod-hero__row">
            <div className="mod-hero__main col">
              <nav className="breadcrumb" role="navigation" aria-labelledby="system-breadcrumb">
                <h2 id="system-breadcrumb" className="visually-hidden">Breadcrumb</h2>
                <p>{props.breadcrumb}</p>
              </nav>
            </div>
            <h1 className="mod-hero__heading f-40">{props.title}</h1>
            <div className="mod-hero__copy">
                <p>{props.description}</p>
                <div className="row divider-row">
                <div className="col divider-col-one">
                <h2 className="ind-title">{props.IndividualsTitle}</h2>
                <p className="eqHeight">{props.ShortDescIndividualsTitle}</p>
                <a className="btn btn-custom btn-custom--solid scroll" href={props.buttonLinkIndividuals} role="button">{props.buttonTextIndividuals}</a></div>
                <div className="col divider-col-two divider">or</div>
                <div className="col divider-col-three">
                <h2 className="ind-title">{props.BusinessesTitle}</h2>
                <p className="eqHeight">{props.ShortDesBusinessesTitle}</p>
                <a className="btn btn-custom btn-custom--outlined" href={props.buttonLinkBusinesses} role="button">{props.buttonTextBusinesses}</a></div>
                </div>

          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Register this component for use in the visual editor
// https://www.builder.io/c/docs/custom-components-setup
Builder.registerComponent(Hero, {
  name: 'Hero',
  inputs: [
    { name: 'breadcrumb', type: 'string', defaultValue: 'Breadcrumb' },
    { name: 'title', type: 'string', defaultValue: 'Vertical Title/Heading' },
    { name: 'description', type: 'string', defaultValue: 'Vertical Short Description' },
    
    { name: 'IndividualsTitle', type: 'string', defaultValue: 'Individuals' },
    { name: 'ShortDescIndividualsTitle', type: 'string', defaultValue: 'State-Approved Online Training Courses' },
    { name: 'BusinessesTitle', type: 'string', defaultValue: 'Businesses' },
    { name: 'ShortDesBusinessesTitle', type: 'string', defaultValue: 'Online Training Solutions for Your Teams' },

    { name: 'buttonTextIndividuals', type: 'string', defaultValue: 'Browse Courses' },
    { name: 'buttonLinkIndividuals', type: 'string', defaultValue: 'http://localhost:3000' },
    { name: 'buttonTextBusinesses', type: 'string', defaultValue: 'Contact Us' },
    { name: 'buttonLinkBusinesses', type: 'string', defaultValue: 'http://localhost:3000' },
    
  ]
})

const HeroBackdropTop = () => (
  <div className="hero-bg-1" aria-hidden="true">
    <div 
      className="hero-bg-1-inner" />
  </div>
)

const HeroBackdropBottom = () => (
  <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
    <div 
      className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
  </div>
)