import React from 'react';

import { Row, Col, } from 'antd';
import { MdPhonelink, MdCreate, MdCloudQueue, MdPages } from "react-icons/md";


const items = [
    {
      key: '1',
      icon: <MdPhonelink className="fas"/>,
      title: 'Web Development',
      content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      key: '2',
      icon: <MdCreate className="fas"/>,
      title: 'Graphic Design',
      content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      key: '3',
      icon: <MdCloudQueue className="fas"/>,
      title: 'Hosting Service',
      content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
        key: '4',
        icon: <MdPages className="fas"/>,
        title: 'WordPress CMS',
        content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
      },
  ]

function AppAbout() {
    return (
        <div id="about" className="block aboutBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>We love to explore new ways to coding the ideas connect with users</h2>
                    <p></p>
                </div>
                <div className="contentHolder">
                    <p>orem ipsum dolor sit amet, consectetur adipisicing elit. Velit necessitatibus
                    officiis repudiandae est deserunt delectus dolorem iure porro distinctio fuga, 
                    nostrum doloremque. Facilis porro in laborum dolor amet ratione hic? Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Magnam aut a porro, adipisci quidem sint enim 
                    pariatur ducimus, saepe voluptatibus inventore commodi! Quis, explicabo molestias libero
                    tenetur temporibus perspiciatis deserunt.</p>
                </div>
                <Row gutter={[24, 24]}>
                  {items.map(item => {
                      return (
                        <Col xs={{ span:24 }} sm={{ span:24 }} md={{ span: 12}} lg={{ span:6 }} xl={{ span:6 }} key={item.key}>
                            <div className="content">
                                <div className="icon">
                                    {item.icon}
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        </Col>
                        );
                      })}
                </Row>
                <Row gutter={[24, 24]}>
                  {items.map(item => {
                      return (
                        <Col xs={{ span:12 }} sm={{ span:12 }} md={{ span: 12}} lg={{ span:6 }} xl={{ span:6 }} key={item.key}>
                            <div className="content">
                                <div className="icon">
                                    {item.icon}
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        </Col>
                        );
                      })}
                </Row>
            </div>
        </div>
    );
}

export default AppAbout;