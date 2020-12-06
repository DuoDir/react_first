import React from 'react';
import { Modal, Button } from 'antd';

class Modelcomponent extends React.Component {
    
    constructor() {
        super();
        this.state = {
            visible: false 
        };
    }
    showModal() {
      this.setState({
        visible: true,
      });
    };
  
    hideModal() {
      this.setState({
        visible: false,
      });
    };
  
    render() {
      return (
        <>
          <Button type="primary" onClick={this.showModal.bind(this)}>
            {this.props.BtnName}
          </Button>
          <Modal
            title={this.props.Title}
            visible={this.state.visible}
            onOk={this.hideModal.bind(this)}
            onCancel={this.hideModal.bind(this)}
            okText="确认"
            cancelText="取消"
          >
            {this.props.Content}
          </Modal>
        </>
      );
    }
  }

export default Modelcomponent;