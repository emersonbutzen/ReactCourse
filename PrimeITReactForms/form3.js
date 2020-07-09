import React from "react";

class TextAreaBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Content: "" };
  }

  handleSubmit(event) {
    alert("Textarea: " + this.state.content);
    event.preventDefault();
  }

  handleChange(event) {
    var value = event.target.value;

    this.setState({
      content: value,
    });
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <label>Content</label>
        <br />
        <textarea
          cols="45"
          row="5"
          value={this.state.content}
          onChange={(event) => this.handleChange(event)}
        />
        <br />
        <input type="submit" value="Submit" />
        <p>{this.state.content}</p>
      </form>
    );
  }
}

export default TextAreaBox;
