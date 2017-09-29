/**
 * Created by hp on 12.08.2017.
 */
import React from '../js/react.min.js';

export default class Button extends React.Component{
    Text;

    getInitialState() {
        this.Text ="Sample Text";
        return {Text}
    }
    render () {
        return<div className="left"><button className="button-primary">Hello</button></div>

    }
}




