import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      nombre: "",
      apellido: ""
    };
    this.inputNombre = this.inputNombre.bind(this);
    this.inputApellido = this.inputApellido.bind(this);
    this.agregaData = this.agregaData.bind(this);
  }
  inputNombre(e) {
    this.setState({
      nombre: e.target.value
    });
  }
  inputApellido(e) {
    this.setState({
      apellido: e.target.value
    });
  }
  agregaData(e) {
    e.preventDefault();
    let data = this.state.data;
    let objdata = {
      id: this.state.data.length + 1,
      nombre: this.state.nombre,
      apellido: this.state.apellido
    }
    this.setState({
      data: [...data, objdata],
      nombre: "",
      apellido: ""
    });
  }
  render() {
    const { nombre, apellido, data } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.agregaData}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input value={nombre} onChange={this.inputNombre} type="text" className="form-control" name="first-name" />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido </label>
                <input value={apellido} type="text" onChange={this.inputApellido} className="form-control" name="last-name" />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {data.map((element) =>
                  <tr key={element.id}>
                    <td>{element.nombre}</td>
                    <td>{element.apellido}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App


