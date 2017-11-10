import React from 'react'
import {render} from 'react-dom'
import ReactDOM from 'react-dom'


import {getExamlist} from './examlistApi.js'

class Examlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "name": "...",
            "exams": []
        }
    }

    componentDidMount() {
        getExamlist()
            .then(data => {
                this.setState({
                    exams: data.exams,
                    name: data.name
                })
            })
    }


    render() {
        return (
            <div className="container">
                <h3>Sveicināti, {this.state.name}! Testi:</h3>
                <ol>
                    {this.state.exams.map(function(ee,i) {
                        return <li><a href={ee.url}>{ee.title}</a></li>
                    })}
                </ol>
            </div>
        )
    }
}


module.exports = Examlist;
