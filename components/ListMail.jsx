import React from "react";
import DisplayListMail from "./DisplayListMail";

export default class ListMail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      items: []
    };
  }
  getAllChecked() {
    if (this.props.flag === true) {
      return (
        <div>
          <input
            type="checkbox"
            id="checkedAll"
            value="checkedAll"
            onChange={this.handleAllChecked}
          />
          Check all
          <br />
        </div>
      );
    }
  }

  handleAllChecked = event => {
    let items = this.props.items;
    items.forEach(item => (item.isChecked = event.target.checked));
    this.setState({ items: items });
  };

  handleCheckChieldElement = event => {
    let items = this.props.items;
    items.forEach(item => {
      if (item.value === event.target.value)
        item.isChecked = event.target.checked;
    });

    this.setState({ items: items });
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  getSearchBox() {
    if (this.props.flag === true) {
      return (
        <div className="div-box2">
          <h3>Search Email</h3>
          <form>
            <span className="search">Search</span>
            <input
              type="text"
              className="search-text"
              value={this.state.searchValue}
              onChange={this.handleChange("searchValue")}
            />
            <i className="fa fa-search go-text" aria-hidden="true" />
          </form>
        </div>
      );
    }
  }

  render() {
    const selectvalue = this.props.items
      .filter(r =>
        r.text.toLowerCase().includes(this.state.searchValue.toLowerCase())
      )
      .map(item => (
        <DisplayListMail
          key={item.id}
          id={item.id}
          text={item.text}
          completed={item.done}
          onItemCompleted={this.props.onItemCompleted}
          onDeleteItem={this.props.onDeleteItem}
          handleCheckChieldElement={this.handleCheckChieldElement}
          {...item}
        />
      ));
    return (
      <div>
        {this.getSearchBox()}
        <table className="displaylist">
          {this.getAllChecked()}
          {selectvalue}
        </table>
      </div>
    );
  }
}
