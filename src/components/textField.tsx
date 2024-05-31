import React from "react";
import { Builder } from '@builder.io/react'

export const BuilderTextField = (props: any) => (
  // Important! Builder.io must add a couple classes 
  // and attributes with props.attributes.
  // If you add your own classes, 
  // do it after ...props.attributes 
  <input 
    variant={props.variant} 
    {...props.attributes} 
    className={`my-class ${props.attributes.className}`}
   />
)
