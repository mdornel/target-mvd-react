import React from 'react';

class Select extends React.Component {
  constructor() {
    super();
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(event) {
    this.props.input.onChange(event.target.value);
  }

  render() {
    const {
      label, input, options
    } = this.props;

    return (
      <div>
        {label && <label className="uppercase">{label}</label>}
        <select {...input} onChange={this.handleOnChange}>
          <option value="" disabled selected>SELECT YOUR GENDER</option>
          {options.map((option, index) => (<option key={index} value={option.value}>{option.text}</option>))}
        </select>
      </div>
    );
  }
}
export default Select;
