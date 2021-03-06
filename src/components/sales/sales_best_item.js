import React from 'react'

export default function SalesBestItem({title}) {
    return (
        <div className="sales_best">
        <div className="sales_best-wrapper">
          <div className="sales_best-wrapper_item"></div>
          <div className="sales_best-wrapper_item">
            <div className="sales_best-wrapper_item-content">
              
              <div className="sales_best-wrapper_item-content_inner">
    
                <div className="sales_best-wrapper_item-content_inner-text">
                  <div className="sales_best-wrapper_item-content_inner-text-heading">
                    <span>НАЗВАНИЕ<br/></span><span>ПРИНТЕРА {title}</span>
                  </div>
                  <div className="sales_best-wrapper_item-content_inner-text-description">
                    <span> Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.</span>
                  </div>
    
                  <div className="sales_best-wrapper_item-content_inner-text-cta">
                    <span>ПОДРОБНЕЕ</span>
                  </div>
                </div>
    
                <div className="sales_best-wrapper_item-content_inner-image">
                  <img src={'/sales/sales_best.png'} alt=""/>
                </div>
    
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
