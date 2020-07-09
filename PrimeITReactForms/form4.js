import React from "react";

class Combo extends React.Component {
  constructor(props) {
    super(props);

    this.state = { marca: "BMW" };
  }

  handleSubmit(event) {
    alert("Marca: " + this.state.marca);
    event.preventDefault();
  }

  handleChange(event) {
    var value = event.target.value;

    this.setState({
      marca: value,
    });
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <p>Escolhe uma marca:</p>
        <select
          value={this.state.marca}
          onChange={(event) => this.handleChange(event)}
        >
          <option value="bmw">BMW</option>
          <option value="mercedes">Mercedes</option>
          <option value="ferrari">Ferrari</option>
          <option value="lamborgini">Lamborgini</option>
        </select>

        <input type="submit" value="Submeter" />
      </form>
    );
  }
}

export default Combo;
