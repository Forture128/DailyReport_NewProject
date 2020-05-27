import React, { Component } from 'react';
import './DeviceList.css';
import deviceItems from './fakeData'
import Modal from '../Modal/Modal'
import axios from "axios"


class DeviceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewInUsed: false,
      modal: false,
      activeItem: {
        device_name: "",
        device_description: "",
        device_in_used: false
      },
      deviceList: [],
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("http://localhost:8000/api/devices/")
      .then(res => this.setState({ deviceList: res.data }))
      .catch(err => console.log(err))
  }

  toogle = () => {
    this.setState({ modal: !this.state.modal })
  };

  handleSubmit = item => {
    this.toogle();
    if (item.id) {
      axios
        .put(`http://localhost:8000/api/devices/${item.id}/`, item)
        .then(res => this.refreshList)
      return;
    }
    axios
    .post("http://localhost:8000/api/devices/", item)
    .then(res => this.refreshList());
  };

  handleDelete = item => {
    alert("Delete" + JSON.stringify(item))
  }

  createItem = () => {
    const item = { device_name: "", device_description: "", device_in_used: false };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  displayCompleted = status => {
    if (status) {
      return this.setState({ viewInUsed: true });
    }
    return this.setState({ viewInUsed: false })
  };

  renderTabList = () => {
    return (
      <div className="my-5 tab-list">
        <span onClick={() => this.displayCompleted(true)}
          className={this.state.viewInUsed ? "active" : ""}>
          In-used
        </span>
        <span onClick={() => this.displayCompleted(false)}
          className={this.state.viewInUsed ? "" : "active"}>
          Unused
        </span>
      </div>
    );
  };

  renderItems = () => {
    const { viewInUsed } = this.state
    const newDevice = this.state.deviceList.filter(
      item => item.device_in_used === viewInUsed
    );
    return newDevice.map(item => (
      <li key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`device-title mr-2 ${this.state.viewInUsed ? "device_in_used" : ""
            }`}
          title={item.device_description}
        >
          {item.device_name}
        </span>
        <span>
          <button onClick={this.editItem} className="btn btn-secondary mr-2"> {" "} Edit{" "} </button>
          <button onClick={this.handleDelete} className="btn btn-danger">Delete{" "} </button>
        </span>
      </li>
    ));
  };


  // componentWillMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <main className="content">
        <h1 className="text-uppercase text-center my-4">Device List</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <button onClick={this.createItem} className="btn btn-primary">Add Device</button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal 
          activeItem={this.state.activeItem} 
          toogle={this.toogle} 
          onSave={this.handleSubmit} />
        ): null }
      </main>
    );
  }
}

export default DeviceList;