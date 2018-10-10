import React, { Component } from 'react';

class Course extends Component {
    getParam = (key) => {
        let params = this.props.location.search.split('?');
        let parsedParams = {};

        if (params.length > 1) {
            params = params[1].split('&');
            params = params.forEach(param => {
                let splitParam = decodeURIComponent(param).split('=');

                parsedParams[splitParam[0]] = splitParam[1];
            });

            if (parsedParams[key]) {
                return parsedParams[key];
            }
        }

        return null;
    }

    render() {
        let title = this.getParam('title');

        return (
            <div>
                <h1>{title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;