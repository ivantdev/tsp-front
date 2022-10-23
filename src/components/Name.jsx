import '../styles/Name.css'
import React from "react";

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
            <form onSubmit={this.handleSubmit}> <label>
                <input type="text" placeholder="Name of trip" value={this.state.value} onChange={this.handleChange} /> </label>
                <button type="submit" class="btn"><i className="fa-light fa-pen"></i></button>
            </form>
        );
    }
}