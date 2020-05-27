import './Modal.css';
import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };
  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    const { toggle, onSave } = this.props
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> Device Item </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="device_name">Device Name</Label>
              <Input
                type="text"
                name="device_name"
                value={this.state.activeItem.device_name}
                onChange={this.handleChange}
                placeholder="Enter Device Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="device_description">Description</Label>
              <Input
                type="text"
                name="device_description"
                value={this.state.activeItem.device_description}
                onChange={this.handleChange}
                placeholder="Enter Todo description"
              />
            </FormGroup>
            <FormGroup check>
              <Label for="device_in_used">
                <Input
                  type="checkbox"
                  name="device_in_used"
                  checked={this.state.activeItem.device_in_used}
                  onChange={this.handleChange}
                />
                    Device is used
                  </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" 
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
