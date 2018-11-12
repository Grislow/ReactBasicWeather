import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: ''};

        //overrides the this from the onInputChange(which refers to the global object since its a function) with the current object
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({
            term: event.target.value
        })
    }

    onFormSubmit(event) {
        event.preventDefault();

        //fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({ term: ''});
    }

    render() {
        return (
            <form 
                className="input-group"
                //We want to prevent the default html behavior - if you press enter/submit the page refreshes
                //We can use this built in behavior to our advantage without creating another event handler
                onSubmit={this.onFormSubmit}
            >
                <input 
                    type="text" 
                    placeholder="5-day weather forecast for searched city"
                    className="form-control"
                    value={this.state.term}
                    onChange={(this.onInputChange)}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

//we are not mapping the state to the container - that is why first argument is null(no mapStateToProps)
export default connect(null, mapDispatchToProps)(SearchBar);