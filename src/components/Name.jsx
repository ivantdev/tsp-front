import React from "react";
import '../styles/Name.css'

export class Name extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { this.setState({ value: event.target.value }); }
    handleSubmit(event) { 
        alert('Nombre de ruta actualizado' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}> 
            <div id="cont">
                <div id="texth"><label>
                <input type="text" placeholder="Name of trip" value={this.state.value} onChange={this.handleChange} /> </label>
                </div>
                <div id="boton">
                    <button type="submit" class="btn"><i className="fa-light fa-pen"></i></button>
                </div>
            </div>
            </form>
        );
    }
}