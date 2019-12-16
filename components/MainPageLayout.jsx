import React from "react";
import ListMail from "./ListMail";

export default class MainPageLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: "",
      flag: false
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.markItemCompleted = this.markItemCompleted.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  markItemCompleted(itemId) {
    var updatedItems = this.state.items.map(item => {
      if (itemId === item.id) item.done = !item.done;

      return item;
    });

    // State Updates are Merged
    this.setState({
      items: [].concat(updatedItems)
    });
  }
  handleDeleteItem(itemId) {
    var updatedItems = this.state.items.filter(item => {
      return item.id !== itemId;
    });

    this.setState({
      items: [].concat(updatedItems)
    });
  }
  handleTextChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleAddItem(event) {
    event.preventDefault();
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (mailformat.test($("#email").val())) {
      $("#email-error").text(" ");
      var newItem = {
        id: Date.now(),
        text: this.state.text,
        done: false
      };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: "",
        flag: true
      }));
    } else {
      $("#email-error").text("Enter the correct mail id");
    }
  }

  render() {
    return (
      <div className="main-div">
        <h3 className="title">Email Address</h3>
        <div>
          <form onSubmit={this.handleAddItem}>
            <div>
              {" "}
              <input
                id="email"
                placeholder="Enter email"
                name="email"
                className="email-text"
                onChange={this.handleTextChange}
                value={this.state.text}
              />
              <span id="email-error" />
            </div>
            <div>
              <button
                type="submit"
                className="add-btn"
                disabled={!this.state.text}
              >
                Add
              </button>
            </div>
          </form>
        </div>
        <div>
          <ListMail
            items={this.state.items}
            onItemCompleted={this.markItemCompleted}
            onDeleteItem={this.handleDeleteItem}
            flag={this.state.flag}
          />
        </div>
      </div>
    );
  }
}
