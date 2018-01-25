import React from 'react'
import {render} from 'react-dom'
import ReactDOM from 'react-dom'
import {RadiobuttonGroup, CheckboxGroup, CheckboxSingle} from './radioButtons.jsx'
import getMinutesSeconds from './jsutils.js'
//import examData from './carousel7data.js'


import {getCompleteExamItems} from './examlistApi2.js'



class Carousel7Solutions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "yourAnswers": ["","","","","","","","","","","","","","",""],
            "seed": "1",
            "questions": []
        }
    }


    componentDidMount() {
        getCompleteExamItems()
            .then(data => {
                this.setState({
                    yourAnswers: data.yourAnswers,
                    seed: data.seed,
                    questions: data.questions
                })
            });
    }


    render() {
        return (
            <form action="grading2" method="GET">
                <div className="container">
                    <a href="#myCarousel" role="button" data-slide="prev">
                        <button type="button" className="btn btn-primary" id="prevButton"><b>Prev</b></button>
                    </a>&nbsp;&nbsp;
                    <a href="#myCarousel" role="button" data-slide="next">
                        <button type="button" className="btn btn-primary" id="nextButton"><b>Next</b></button>
                    </a>&nbsp;&nbsp;
                    <span style={{color:"blue"}}>ATBILDES</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="hidden" name="testId" value="pigeonhole"/>
                    <input type="hidden" name="seed" value={this.state.seed}/>
                    <input type="submit" value="Nosūtīt"/>
                    <br/>
                </div>

                <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="false">
                    <div className="carousel-inner" role="listbox">
                        {this.state.questions.map(function(qq,i) {
                            let webForm = null;
                            let theInstruction = "";
                            let webImage = "";
                            let webImage2 = "";
                            let theAlternatives = "";




                            if (qq.hasOwnProperty('imgSrc') && qq.imgSrc != "") {
                                webImage = <div>{qq.imgSrc.map(function(iiss,i) {
                                    return <span><img src={iiss}/><br/></span>
                                })}</div>
                                //webImage = <img src={qq.imgSrc}/>;
                            } else {
                                webImage = ""
                            }


                            if (qq.hasOwnProperty('imgSrc2') && qq.imgSrc2 != "") {
                                webImage2 = <div>{qq.imgSrc2.map(function(iiss,i) {
                                    return <span><img src={iiss}/><br/></span>
                                })}</div>
                                //webImage = <img src={qq.imgSrc}/>;
                            } else {
                                webImage2 = ""
                            }

                            if (qq.questionType == "MC" || qq.questionType == "MC" ) {
                                theAlternatives = <ol>{qq.alternatives.map(function(alter, i) {
                                    return <li>{alter}</li>
                                })}</ol>
                            }


                            return <div className={(i==0) ? "item active" : "item"}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <br/><b style={{fontSize:"120%"}}>Q{i+1}:</b> <div dangerouslySetInnerHTML={{__html: qq.question}}></div>
                                            {(theInstruction == "") ? "" : <span><br />{theInstruction}</span>}
                                            {(webImage == "") ? "" : <span><br/>{webImage}<br /></span>}
                                            <br/>
                                            {(theAlternatives == "") ? "" : <div>{theAlternatives}</div>}
                                            Atbilde: '{qq.answer}'
                                            <br/>
                                            <b>Skaidrojums:</b> {qq.explanation}
                                            {(webImage2 == "") ? "" : <span><br/>{webImage2}<br /></span>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </form>
        )
    }
}



module.exports = Carousel7Solutions;
