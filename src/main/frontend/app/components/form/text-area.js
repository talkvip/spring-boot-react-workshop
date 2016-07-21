import React from 'react';

export default class TextAreaField extends React.Component {

  constructor(props) {
    super(props);

    this.label = '';
    this.name = '';
    this.state = ''
  }

  render() {
    return (
      <div className="form-group">
        <label className="control-label">{this.props.label}</label>
            <textarea className="form-control" id="postContent" name={this.props.name} rows="20"
                      onChange={this.props.handleChange.bind(this, this.state)}/>
      </div>
    );
  }

}

TextAreaField.propTypes = {
  label: React.PropTypes.string,
  name: React.PropTypes.string,
  handleChange: React.PropTypes.func,
  state: React.PropTypes.object
};
