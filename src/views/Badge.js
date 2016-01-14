/// <reference path="../../typings/react/react-global.d.ts" />
import * as React from 'react';
export class Badge extends React.Component {
    render() {
        return (React.createElement("span", null, this.props.value));
    }
}
