import React from 'react';
import '../../css/FilterForm.css';
import axios from 'axios';


class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name_filter: '', discount_filter: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if(event.currentTarget.id == "name")
      this.setState({name_filter: event.target.value});
    else
      this.setState({discount_filter: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = {
      name: this.state.name_filter,
      discountPercentage: this.state.discount_filter
    };

    axios.post('product', { user })
      .then(res => {
        this.props.onUpdateImages(res.data);
      })
  }

  render() {
    return (
      <form className="filter" onSubmit={this.handleSubmit}>
        <div className="row">
          <label className="col-25"><span>Name:</span></label>
          <input 
            type="text" 
            className="col-75"
            id="name"
            onChange={this.handleChange} />
        </div>
        <div className="row">
          <label className="col-25">Discount percentage:</label>
          <input 
            type="text" 
            className="col-75"
            id="discountPercentage"
            onChange={this.handleChange} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FilterForm;