import React, { useEffect, useState } from 'react';
import { Builder, withChildren } from '@builder.io/react';

interface customHeroProductProps {
  image: string;
  text: string;
  textColor: string;
  textElement: keyof JSX.IntrinsicElements;
  subTitle: string; // This allows specifying HTML text element types
  children?: React.ReactNode;
  
}

const customHeroProduct: React.FC<customHeroProductProps> = ({ image, text, textColor, textElement, subTitle,children }) => {
  const TextElement = textElement as keyof JSX.IntrinsicElements;
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '500px',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      color: textColor
    }}>
      <TextElement style={{
        fontSize: '16px'
      }}>{text}</TextElement>
      <h1>{subTitle}</h1>
      {children}
    </div>
  );
};
const customHeroProductwithChildren = withChildren(customHeroProduct)
Builder.registerComponent(customHeroProductwithChildren, {
  name: 'customHeroProduct',
  canHaveChildren: true,
  inputs: [
    { name: 'image', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'gif'], defaultValue: '', required: false },
    { name: 'text', type: 'string', defaultValue: 'Default Text', required: true }, // Default text value
    { name: 'textColor', type: 'color', defaultValue: '#000000', required: false }, // Text color input
    { name: 'textElement', type: 'string', defaultValue: 'p', enum: ['p', 'h1', 'h2', 'span'], required: true }, // Text element selector,
    { name: 'subTitle', type: 'string', defaultValue: 'Default Text', required: true },
    { name: 'product', type: 'reference',model: 'test-push', required: true }
  ],
  childRequirements: {
    message: "This should be a description.",
    query: {
      // The child of this element must be 
      // a 'Button' or 'Text' component
      'component.name': { $in: ['heroProduct'] }
    }
  }
});

export default customHeroProduct;
