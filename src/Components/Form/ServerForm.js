import React, { Component } from 'react';

class ServerForm extends Component {

    constructor(props) {
        super();
        this.state = {
            form: []
        }
    }

    componentDidMount() {
        fetch('/server_form') ////////////
            .then(res => res.json)
            .then(form => this.setState({ form }, () => console.log('Form fetched...', form)))
    }

    render() {

        return (
            <div>
                <h2>
                    Contact Form
                </h2>
            </div>
        );
    }
}

export default ServerForm;
