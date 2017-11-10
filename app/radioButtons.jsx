import React from 'react'
import {render} from 'react-dom'

class RadiobuttonGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "i": props.i,
            "alternatives": props.alternatives
        }
    }


    render() {
        return <div className="btn-group btn-group-vertical" data-toggle="buttons">
            <table className="c17">
                <tbody>
                {this.state.alternatives.map(function(object, ii){
                    return <tr>
                        <td>
                            <label className={(this.state.i==0) ? "btn active" : "btn"}>
                                <input type="radio" name={"q"+this.state.i} value={["a","b","c","d","e","f"][ii]}/><i className="fa fa-circle-o fa-2x"></i><i className="fa fa-dot-circle-o fa-2x"></i>
                                <span style={{fontSize:"100%", color:"black"}}>({["a","b","c","d","e","f"][ii]})</span>
                            </label>
                        </td>
                        <td>{object}</td>
                    </tr>;
                }.bind(this))}

                </tbody>
            </table>
        </div>
    }
}


class CheckboxGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "i": props.i,
            "alternatives": props.alternatives
        }
    }


    render() {
        return <div className="btn-group btn-group-vertical" data-toggle="buttons">
            <table className="c17">
                <tbody>
                {this.state.alternatives.map(function(object, ii){
                    return <tr>
                        <td>
                            <label className="btn active">
                                <input type="checkbox" name={"q"+this.state.i + ["a","b","c","d","e","f"][ii]}/>
                                <i className="fa fa-square-o fa-2x"></i>
                                <i className="fa fa-check-square-o fa-2x"></i><span>({["a","b","c","d","e","f"][ii]})</span>
                            </label>
                        </td>
                        <td>{object}</td>
                    </tr>;
                }.bind(this))}
                </tbody>
            </table>
        </div>
    }
}

class CheckboxSingle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "options": props.options
        };
    }


    render() {
        return <div className="btn-group btn-group-vertical" data-toggle="buttons">
            <label className="btn active">
                <input type="checkbox" name={this.props.name} onClick={this.props.onClick} value="on"/>
                <i className="fa fa-square-o fa-2x"></i>
                <i className="fa fa-check-square-o fa-2x"></i><span>{this.state.options[0]}</span>
            </label>
        </div>
    }
}


module.exports = { RadiobuttonGroup, CheckboxGroup, CheckboxSingle };
