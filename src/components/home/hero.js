import React from 'react';
import { Carousel, Button } from 'antd';
import { MdVideoLibrary } from 'react-icons/md';
import { motion } from 'framer-motion';


const items = [
    {
      key: '1',
      title: 'Web and mobile payment built for developers',
      content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      key: '2',
      title: 'Work better together. Schedule meetings AJA!',
      content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    }, 
  ]

function AppHero() {
    return (
        <div className="heroBlock">
            <Carousel>
                {items.map(item => {
                    return (
                <div id="hero" className="container-fluid" key={item.key}>
                    <div className="content">
                      <h3>{item.title}</h3>
                      <p>{item.content}</p>
                    <div className="btnHolder">
                    <Button type="primary" size="large">Learn More</Button>
                    <Button size="large"><MdVideoLibrary className="fas"/> Watch a Demo</Button>
                 </div>
                </div>
               </div>
              );
            })}
          </Carousel>
       </div>
    );
}

export default AppHero;