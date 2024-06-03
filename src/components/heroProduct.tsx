import { Builder } from '@builder.io/react'
import React, { useState, useEffect } from 'react'

export default function HeroProduct(props) {
    const [productData, setProductData] = useState("hola");

    useEffect(() => {
        // fetch('http://stage-restapi.360training.com:3737/search/ext/resources/store/21701/productview/basicSummary/byIds?id=367704')
        fetch('http://stage-restapi.360training.com:3737/search/ext/resources/store/21701/productview/basicSummary/byIds?id=367704')
          .then(response => response.json())
          .then(data => {
            console.log("hola",data)
            setProductData(data.catalogEntryView[0]);
          })
          .catch(error => {
            console.error('Error fetching product data:', error);
          });
      }, []); 

    


    


  return (
    <section className="mod-hero mod-hero--metal">
            <div className="mobile-background position-absolute"></div>
            <div className="wrap">
                <div className="container-max">
                    <div className="row">
                        <div className="mod-hero__main col">
                            <div className="mod-hero__copy">
                                <p>{props.shortDescription}</p>
                                <ul>{props?.options?.map(option => {return <li>{option.option}</li>})}</ul>
                                <p>
                                    <strong>Duration:</strong> {props.duration ?? productData?.Hours} hours
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <strong>Language:</strong> {props.language}
                                    <strong>price:</strong> {productData?.price?.map(price => {return price.value})}
                                </p>
                            </div>
                            {/* <a href="https://stage-www.360training.com/CustomOrderItemAdd?quantity_1=1&amp;storeId=21701&amp;catalogId=10051&amp;langId=-1&amp;calculationUsageId=1&amp;URL=AjaxOrderItemDisplayView&amp;catEntryId_1=366211&amp;calculateOrder=1&amp;authenticate=0&amp;orderId=.&amp;isDirectLink=true&amp;promoCode=" class="bulk-add-to-cart"><button class="course-box__buy" data-product-id="366211" data-lity-cart="" data-lity-target="#cart-lb" data-lity-target-mobile="#cart-lb-mob">BUY NOW</button></a> */}
                            <a href="{props.buttonLinkBuyNow}" className="bulk-add-to-cart"><button className="course-box__buy" data-product-id="366211" data-lity-cart="" data-lity-target="#cart-lb" data-lity-target-mobile="#cart-lb-mob">{props.buttonBuyNowText}</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

// Register this component for use in the visual editor
// https://www.builder.io/c/docs/custom-components-setup
Builder.registerComponent(HeroProduct, {
  name: 'heroProduct',
  inputs: [
    { name: 'shortDescription', type: 'string', defaultValue: 'Short Description Here' },
    { name: 'duration', type: 'number', defaultValue: 'Course Duration Here' },
    { name: 'language', type: 'string', defaultValue: 'Language Here' },
    {
      name: 'options',
      type: 'list',
      defaultValue: [ 
            
     ],
      subFields: [
	{
          name: 'option',
          type: 'string',
          defaultValue: '',
        },
      ],
    },
    { name: 'buttonBuyNowText', type: 'string', defaultValue: 'Buy Now' },
    { name: 'buttonLinkBuyNow', type: 'string', defaultValue: 'http://localhost:3000' },
  ]
})

