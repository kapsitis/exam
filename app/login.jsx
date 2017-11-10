import React from 'react'
import {render} from 'react-dom'
import {RadiobuttonGroup, CheckboxGroup, CheckboxSingle} from './radioButtons.jsx'



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "name": "...",
            "exams": [],
            "disableLoginID": false,
            "loginID": "",
            "formValues": {}
        };
        this.setAnonymous = this.setAnonymous.bind(this);
    }

    // https://stackoverflow.com/questions/41030025/react-updating-state-in-two-input-fields-from-form-submission
/*
    handleChange(event) {
        event.preventDefault();
        let formValues = this.state.formValues;
        let loginName = event.target.name;
        let value = event.target.value;

        formValues[name] = value;

        this.setState({formValues})
    }
*/

    setAnonymous() {
        if (this.state.disableLoginID) {
            this.setState({disableLoginID:false});
        } else {
            this.setState({disableLoginID:true});
            //this.setState({formValues:{loginID:""}});
        }
        console.log('ABC172 = ' + this.state.disableLoginID);
    }



    render() {
        return <div className="container">
            <h1>Pieteikšanās testiem</h1>
            <form id="loginForm" action="/exam/login" method="GET">
                <table className="loginTable">
                    <colgroup>
                        <col width="25%"/>
                        <col width="75%"/>
                    </colgroup>
                    <tbody>
                        <tr><td>Vārds:</td><td><input className="webFormInput" type="text"
                                                                                   name="loginName" maxLength="25" size="25"/></td></tr>
                        <tr><td>6-ciparu ID:</td><td><input disabled={this.state.disableLoginID}
                                                        className="webFormInput" type="text"
                                                        style={{backgroundColor: (this.state.disableLoginID ? "silver": "white") }}
                                                        name="loginID"
                                                        maxLength="6" size="6"/></td></tr>
                        <tr><td>&nbsp;</td><td><CheckboxSingle name="isAnon" options={["Pieslēgties anonīmi"]} onClick={this.setAnonymous}/></td></tr>
                        <tr><td colSpan="2"><input type="submit" value="Nosūtīt"/></td></tr>
                    </tbody>
                </table>
            </form>
        </div>
    }
}


module.exports= Login