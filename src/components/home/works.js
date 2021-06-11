import React from 'react';
import { Modal, Button } from 'antd';
import { AiFillCaretRight } from "react-icons/ai";

class AppWorks extends React.Component {
    state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

    render() {
        return (
        <div id="works" className="block worksBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>How it works</h2>
                    <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
                </div>
                <div className="contentHolder">
                 <Button onClick={this.showModal}>
                     <AiFillCaretRight className="icon"/>
                   </Button>
                </div>
                <Modal
                title="Amazing Websites"
                visible={this.state.visible}
                onCancel={this.handleCancel}
                footer={null}
                >
                <iframe width="470" height="315" src="https://www.youtube.com/embed/slDybGJI1Ao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Modal>
            </div>
        </div>
    );
   }
}

export default AppWorks;