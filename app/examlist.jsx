import React from 'react'
import {render} from 'react-dom'
import ReactDOM from 'react-dom'


import {getExamlist, getExamItems} from './examlistApi.js'

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
                <h3>Testu saraksts</h3>

                <p><a href="http://www.dudajevagatve.lv:8080/exam/pigeonhole-random.html">Dirihlē princips: No visām tēmām</a> (10 jaut., 30 min.)</p>

                {/*
                <p style={{fontWeight: "bold"}}>Daži citi testi</p>
                <ol>
                    {this.state.exams.map(function(ee,i) {
                        return <li><a href={ee.url}>{ee.title}</a> ({ee.qCount} jaut., {ee.minutes} min.)</li>
                    })}
                </ol>
                */}

                <p>Zem šīs svītras labāk neko neklikšķini. <br/><i>"... Jo, kur ir daudz gudrības,
                    tur ir daudz nepatikšanu, un ar atziņas pieaugšanu vairojas arī vilšanās."</i> (Ekleziasts, 1:18)
                </p>
                <hr/>
                <ol>
                    <li><a href="http://www.dudajevagatve.lv:8080/exam/pigeonhole-intro.html">Dirihlē princips: Ievads</a> (15 jaut., 45 min.)</li>
                    <li><a href="http://www.dudajevagatve.lv:8080/exam/pigeonhole-generalizations.html">Dirihlē princips: Vispārinājumi</a> (15 jaut., 45 min.)</li>
                    <li><a href="http://www.dudajevagatve.lv:8080/exam/pigeonhole-combinatorics.html">Dirihlē princips: Lietojumi kombinatorikā</a> (15 jaut., 45 min.)</li>
                    <li><a href="http://www.dudajevagatve.lv:8080/exam/pigeonhole-shapes.html">Dirihlē princips: Figūriņas</a> (15 jaut., 45 min.)</li>
                    <li><a href="http://www.dudajevagatve.lv:8080/exam/pigeonhole-number-theory.html">Dirihlē princips: Skaitļu teorija</a> (15 jaut., 45 min.)</li>
                </ol>
            </div>
        )
    }
}


module.exports = Examlist;
