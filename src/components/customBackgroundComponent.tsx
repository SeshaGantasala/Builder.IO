// import React from 'react';
// import { Builder } from '@builder.io/react';
// interface CustomBackgroundProps {
//  image: string;
//  children?: React.ReactNode;
// }
// const CustomBackgroundComponent: React.FC<CustomBackgroundProps> = ({ image, children }) => {
//  return (
// <div style={{
//      width: '100%',
//      height: '500px',
//      backgroundImage: `url(${image})`,
//      backgroundSize: 'cover',
//      backgroundPosition: 'center center'
//    }}>
//      {children}
// </div>
//  );
// };
// Builder.registerComponent(CustomBackgroundComponent, {
//  name: 'CustomBackground',
//  inputs: [
//    { name: 'image', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'gif'], defaultValue: '', required: false }
//  ]
// });
// export default CustomBackgroundComponent;





// import React from 'react';
// import { Builder } from '@builder.io/react';

// interface CustomBackgroundProps {
//   image: string;
//   children?: React.ReactNode;
//   text: string;
//   textColor: string;
// }

// const CustomBackgroundComponent: React.FC<CustomBackgroundProps> = ({ image, text, textColor, children }) => {
//   return (
//     <div style={{
//       position: 'relative',
//       width: '100%',
//       height: '500px',
//       backgroundImage: `url(${image})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center center',
//       color: textColor
//     }}>
//       <p style={{
//         position: 'absolute',
//         bottom: '20px',
//         left: '20px',
//         zIndex: 1,
//         fontSize: '16px'
//       }}>{text}</p>
//     </div>
//   );
// };

// Builder.registerComponent(CustomBackgroundComponent, {
//   name: 'CustomBackground',
//   inputs: [
//     { name: 'image', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'gif'], defaultValue: '', required: false },
//     { name: 'text', type: 'string', defaultValue: 'Default Text', required: true }, // Default text value
//     { name: 'textColor', type: 'color', defaultValue: '#000000', required: false } // Text color input
//   ]
// });

// export default CustomBackgroundComponent;

import React from 'react';
import { Builder } from '@builder.io/react';

interface CustomBackgroundProps {
  image: string;
  productTitle: string;
  shortDescription: string;
  duration: string;
  language: string;
  text: string;
  textColor: string;
  textElement: keyof JSX.IntrinsicElements; // This allows specifying HTML text element types
}

const CustomBackgroundComponent: React.FC<CustomBackgroundProps> = ({ image, text, shortDescription, productTitle, duration, language, textColor, textElement }) => {
  const TextElement = textElement as keyof JSX.IntrinsicElements;

  return (
    <section className="mod-hero mod-hero--metal">
            <div style={{
      position: 'relative',
      width: '100%',
      height: '500px',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      color: textColor
    }} className="mobile-background position-absolute"></div>
            <div className="wrap">
                <div className="container-max">
                    <div className="row">
                        <div className="mod-hero__main col">
                            <TextElement>{productTitle}</TextElement>
                            <div className="mod-hero__copy">
                            <TextElement>{shortDescription}</TextElement>
                                <ul><li><strong>Most Trusted OSHA-Authorized Course&nbsp;</strong></li>
                                    <li><strong>100% Online, Self-Paced Without Timers &nbsp;</strong></li>
                                    <li><strong>Mobile-Friendly, Interactive Content&nbsp;</strong></li>
                                </ul>
                                <p>
                                    <strong>Duration:</strong> <TextElement>{duration}</TextElement>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <strong>Language:</strong><TextElement>{language}</TextElement> 
                                </p>
                            </div>
                            {/* <a href="https://stage-www.360training.com/CustomOrderItemAdd?quantity_1=1&amp;storeId=21701&amp;catalogId=10051&amp;langId=-1&amp;calculationUsageId=1&amp;URL=AjaxOrderItemDisplayView&amp;catEntryId_1=366211&amp;calculateOrder=1&amp;authenticate=0&amp;orderId=.&amp;isDirectLink=true&amp;promoCode=" class="bulk-add-to-cart"><button class="course-box__buy" data-product-id="366211" data-lity-cart="" data-lity-target="#cart-lb" data-lity-target-mobile="#cart-lb-mob">BUY NOW</button></a> */}
                            {/* <a href="{props.buttonLinkBuyNow}" className="bulk-add-to-cart"><button className="course-box__buy" data-product-id="366211" data-lity-cart="" data-lity-target="#cart-lb" data-lity-target-mobile="#cart-lb-mob">{props.buttonBuyNowText}</button></a> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
  );
};

Builder.registerComponent(CustomBackgroundComponent, {
  name: 'CustomBackground',
  inputs: [
    { name: 'image', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'gif'], defaultValue: '', required: false },
    { name: 'text', type: 'string', defaultValue: 'Default Text', required: true }, // Default text value
    { name: 'textColor', type: 'color', defaultValue: '#000000', required: false }, // Text color input
    { name: 'textElement', type: 'string', defaultValue: 'p', enum: ['p', 'h1', 'h2', 'span'], required: true }, // Text element selector

    
    { name: 'productTitle', type: 'string', defaultValue: 'Product Title Here' },
    { name: 'shortDescription', type: 'string', defaultValue: 'Short Description Here' },
    { name: 'duration', type: 'string', defaultValue: 'Course Duration Here' },
    { name: 'language', type: 'string', defaultValue: 'Language Here' },
  ]
});

export default CustomBackgroundComponent;
