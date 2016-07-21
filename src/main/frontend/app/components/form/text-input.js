import React from 'react';

export default class TextInputField extends React.Component {

  constructor(props) {
    super(props);

    this.label = '';
    this.name = '';
  }

  render() {
    return (
      <div className="form-group">
        <label className="control-label">{this.props.label}</label>
        <input className="form-control" id="postTitle" type="text" name={this.props.name}
               onChange={this.handleChange}/>
      </div>
    );
  }

}

TextInputField.propTypes = {
  label: React.PropTypes.string,
  name: React.PropTypes.string,
  handleChange: React.PropTypes.func
};
