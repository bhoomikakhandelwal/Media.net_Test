import React from "react";

export default class DisplayListMail extends React.Component{
  constructor(props) {
    super(props);
    this.markCompleted = this.markCompleted.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  markCompleted(event) {
    this.props.handleCheckChieldElement(this.props.id);
    this.props.onItemCompleted(this.props.id);
  }
  deleteItem(event) {
    this.props.onDeleteItem(this.props.id);
  }

  render() {
    var itemClass = "form-check getitem " + (this.props.completed ? "done" : "undone");
    return (
      <tbody>    
      <tr className={itemClass} ref={tr => this._listItem = tr }>
        <label className="form-check-label">
       <td> <input type="checkbox" className="checkbox" onChange={this.markCompleted} checked={this.props.isChecked} 
       value={this.props.value} /> </td>
       <td> {this.props.text} </td> 
        </label>
       <td> <button type="button" className="trash-btn" onClick={this.deleteItem}>
        <i class="fa fa-trash-o"></i>
          </button></td>
      </tr>
      </tbody>
    );
  }
}