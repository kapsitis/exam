import React from 'react'
import {render} from 'react-dom'
import ReactDOM from 'react-dom'
import {RadiobuttonGroup, CheckboxGroup, CheckboxSingle} from './radioButtons.jsx'
import getMinutesSeconds from './jsutils.js'
import examData from './carousel7data.js'

class Carousel7 extends React.Component {
    constructor(props) {
        super(props);
        this.state = examData
    }


    componentDidMount() {
        setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000)

    }


    render() {
        return (
            <form action="grading" method="GET">
                <div className="container">
                    <a href="#myCarousel" role="button" data-slide="prev">
                        <button type="button" className="btn btn-primary" id="prevButton"><b>Prev</b></button>
                    </a>&nbsp;&nbsp;
                    <a href="#myCarousel" role="button" data-slide="next">
                        <button type="button" className="btn btn-primary" id="nextButton"><b>Next</b></button>
                    </a>&nbsp;&nbsp;
                    {getMinutesSeconds(this.state.count)}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="hidden" name="testId" value="carouselNT2EXAM2"/>
                    <input type="submit" value="Nosūtīt"/>
                    <br/>
                </div>

                <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="false">
                    <ol className="carousel-indicators">
                        {this.state.questions.map(function(q, i){
                            return <li data-target="#myCarousel" data-slide-to={i} className={(i==0) ? "active" : ""}></li>;
                        })}
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        {this.state.questions.map(function(qq,i) {
                            let webForm = null;
                            let theInstruction = "";
                            let webImage = "";
                            if (qq.questionType == "INPUT") {
                                webForm = <div><input size={qq.length} maxLength={qq.length}
                                                      className="webFormInput" type="text" name={"q" + i}/></div>;
                            } else if (qq.questionType == "MS") {
                                webForm = <CheckboxGroup prefix="q" alternatives={qq.alternatives} i={i}/>;
                            } else if (qq.questionType == "MC") {
                                webForm = <RadiobuttonGroup prefix="q" alternatives={qq.alternatives} i={i}/>;
                            } else if (qq.questionType == "MULTIPART") {


                                webForm = qq.parts.map(function(qqqq,iiii) {

                                    if (qqqq.questionType=="MC") {
                                        return <div><u>{qqqq.cue}</u><br/>
                                            <RadiobuttonGroup prefix={"q" + i + "p"} alternatives={qqqq.alternatives} i={iiii}/>
                                        </div>
                                    } else if (qqqq.questionType=="MS") {
                                        return <div><u>{qqqq.cue}</u><br/>
                                            <CheckboxGroup prefix={"q" + i + "p"} alternatives={qqqq.alternatives} i={iiii}/>
                                        </div>
                                    } else {
                                        return <div><u>{qqqq.cue}</u><br/><input size={qqqq.length} maxLength={qqqq.length}
                                               className="webFormInput" type="text" name={"q" + i + "p" + iiii}/>
                                        </div>
                                    }

                                })

                            } else {
                                webForm = <div>Not Supported Question Type {i}</div>;
                            }



                            if (qq.hasOwnProperty('instruction') && qq.instruction != "") {
                                theInstruction = <i>({qq.instruction})</i>
                            } else {
                                theInstruction = ""
                            }

                            if (qq.hasOwnProperty('imgSrc') && qq.imgSrc != "") {
                                webImage = <img src={qq.imgSrc}/>;
                            } else {
                                webImage = ""
                            }



                            return <div className={(i==0) ? "item active" : "item"}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <br/><b style={{fontSize:"120%"}}>Q{i+1}:</b> <div dangerouslySetInnerHTML={{__html: qq.question}}></div>
                                            {(theInstruction == "") ? "" : <span><br />{theInstruction}</span>}
                                            {(webImage == "") ? "" : <span><br/>{webImage}<br /></span>}
                                            <br/>
                                            {webForm}
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



module.exports = Carousel7;
