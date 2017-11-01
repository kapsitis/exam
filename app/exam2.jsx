import React from 'react'
import {render} from 'react-dom'
import ReactDOM from 'react-dom'


class Exam2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            "questions": [
                {
                    "id": "nt-part1-01.q1",
                    "question": "Kuriem no šiem skaitļiem ir divi atšķirīgi decimālpieraksti (ar bezgalīgi daudzām nullēm un arī ar bezgalīgi daudziem deviņniekiem)?",
                    "instruction": "Atzīmēt 2 variantus.",
                    "answerForm": ["c1","c2","c3","c4"],
                    "alternatives": [
                        "$\\frac{7}{35}$",
                        "$\\frac{4}{12}$",
                        "$\\frac{10}{15}$",
                        "$\\frac{1}{17}$"
                    ],
                    "validation": "^[a-d](,[a-d]){,3}$",
                    "normalize": ["commaSplit","sort","commaJoin"],
                    "correct": "a,c"
                },


                {
                    "id": "nt-part1-01.q4",
                    "question": "Kuram no nosauktajiem skaitļiem ir nepāru skaits naturālu dalītāju, ieskaitot 1 un pašu šo skaitli?",
                    "instruction": "",
                    "answerForm": ["r1","r2","r3"],
                    "alternatives": [
                        "$20$",
                        "$24$",
                        "$36$",
                        "$40$"
                    ],
                    "validation": "^[a-c]$",
                    "normalize": [],
                    "correct": "c"
                },

                {
                    "id": "nt-part3-01.q1",
                    "question": "Kurš ir polinoma $x^4 + 9$ sadalījums reizinātājos?",
                    "alternatives": [
                        "$(x^2 + \\sqrt{6}x + 3)(x^2 - \\sqrt{6}x + 3)$",
                        "$(x^2 + \\sqrt{6}x + 3)(x^2 + \\sqrt{6}x - 3)$",
                        "$(x^2 + 3x + \\sqrt{6})(x^2 - 3x + \\sqrt{6})$",
                        "$(x^2 + 3x + \\sqrt{6})(x^2 + 3x - \\sqrt{6})$"
                    ]

                },

                {
                    "id": "nt-part3-01.q2",
                    "question": "Ar kuru no skaitļiem dalās $1001^{1001}+1$?",
                    "alternatives": [
                        "$9$",
                        "$1001^{13}+1$",
                        "$1001^{101}+1$",
                        "$1001^{800}-1001^{600}+1001^{400}-1001^{200}+1$"
                    ]

                },



                {
                    "id": "nt-part3-01.q3",
                    "question": "Cik naturālu skaitļu intervālā $[1;100]$ nedalās ne ar $2$, ne ar $3$?",
                    "alternatives": [
                        "$30$",
                        "$31$",
                        "$32$",
                        "$33$",
                        "$34$"
                    ]

                },


                {
                    "id": "nt-part3-01.q4",
                    "question": "Uz tāfeles uzrakstīts skaitlis $N$. Divi spēlētāji pārmaiņus to samazina par kādu no skaitļiem $1$, $2$, $3$ vai $4$. "
                    + "Uzvar tas, kurš pirmais uzraksta $0$. Kādām $N$ vērtībām, pareizi spēlējot, var uzvarēt OTRAIS spēlētājs?",
                    "alternatives": [
                        "Ja $N$ dalās ar $4$.",
                        "Ja $N$ nedalās ar $4$",
                        "Ja $N$ dalās ar $5$.",
                        "Ja $N$ nedalās ar $5$",
                        "Ja $N$ dalās ar $10$",
                        "Ja $N$ nedalās ar $10$"
                    ]

                },



                {
                    "id": "nt-part3-01.q5",
                    "question": "Dota bezgalīgas ģeometriskas progresijas summa: $$S=1-1+1-1+1-\\ldots.$$"
                    + "Ja zem tās paraksta apakšā otru tādu pašu summu tā, lai visi saskaitāmie, "
                    + "izņemot pirmo, noīsinātos un no šīs izteiksmes izsaka $S$, "
                    + "kādu skaitlisko iegūst bezgalīgā summa $S$?",
                    "alternatives": [
                        "$-1$",
                        "$-0.5$",
                        "$0$",
                        "$0.5$",
                        "$1$"
                    ]

                },


                {
                    "id": "nt-part3-01.q6",
                    "question": "Cilvēks $A$ uzrakstīja uz papīra lapiņas vienu no $64$ šaha galdiņa rūtiņām (piemēram, 'a1', 'h8' utml.). "
                    + "Kāds ir mazākais jautājumu skaits, ar ko cilvēkam $B$ vienmēr pietiek, lai uzzinātu, kuru rūtiņu $A$ izvēlējās? "
                    + "(Uz katru jautājumu ir jāvar atbildēt ar JĀ vai NĒ.)",
                    "alternatives": [
                        "$4$",
                        "$5$",
                        "$6$",
                        "$7$",
                        "$8$"
                    ]
                },

                {
                    "id": "nt-part3-01.q7",
                    "question": "$60$ konfektes sadalīja vairākās vienādās kaudzītēs un visu kaudzīšu konfekšu skaitus sareizināja. "
                    + "Pa cik konfektēm jābūt katrā kaudzītē, lai reizinājums būtu lielākais iespējamais?",
                    "alternatives": [
                        "$2$",
                        "$3$",
                        "$4$",
                        "$5$",
                        "$6$"
                    ]
                },

                {
                    "id": "nt-part3-01.q8",
                    "question": "Skaitli $123\\ldots175176$ iegūst, uzrakstot pēc kārtas visus ciparus skaitļos $1,2,\\ldots,176$. " +
                    "Kādu atlikumu dod šis skaitlis, dalot ar $3$?",
                    "alternatives": [
                        "$0$",
                        "$1$",
                        "$2$"
                    ]
                },



                /*,


                 {
                 "id": "nt-part1-01.q2",
                 "question": "Izteikt kā parastu daļskaitli: $0.0399999\\ldots=0.03\\overline{9}$.",
                 "instruction": "Ierakstīt atbildi formā a/b",
                 "answerForm": ["text.10"],
                 "validation": "^\\d+/\\d+$",
                 "normalize": [],
                 "correct": "1/25"
                 },

                 {
                 "id": "nt-part1-01.q3",
                 "question": "Izteikt kā divu naturālu skaitļu reizinājumu (kas abi pārsniedz 1):<br/> $5^4 + 4\\cdot 6^4$.",
                 "instruction": "Atdalīt reizinātājus ar zvaigznīti: a*b",
                 "answerForm": ["text.10"],
                 "validation": "^\\d+\\*\\d+$",
                 "normalize": ["asteriskSplit", "sort", "asteriskJoin"],
                 "correct": "157*37"
                 },


                 {
                 "id": "nt-part1-01.q5",
                 "question": "Dārgumu krātuvē bija $N$ lādītes, kurās kopā bija pavisam 462 dārgakmeņi, "
                 + "pie tam katrā lādītē dārgakmeņu skaits bija vienāds. "
                 + "Dārgumu krātuves kasierim vajadzēja četras tukšas lādītes, "
                 + "un viņš varēja izvietot četru lādīšu dārgakmeņus pa atlikušajām lādītēm tā, "
                 + "lai katrā lādītē atkal būtu vienāds skaits dārgakeņu. "
                 + "Atrast visas iespējamās lādīšu skaita $N$ vērtības.",
                 "instruction": "Ierakstīt vienu vai vairākus skaitļus, atdalot tos ar komatiem",
                 "answerForm": ["text.10"],
                 "validation": "^\d+(,\d+)*$",
                 "normalize": ["commaSplit","sort","commaJoin"],
                 "correct": "11,7"
                 }
                 */
            ]



        }

    }

    render() {
        return (
            <div>
                <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="false">
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>


                    </ol>

                    <form id="myform" action="grading" method="GET">


                        <div class="carousel-inner" role="listbox">
                            <div class="item">
                                <div class="container">

                                    <div class="row">
                                        <div class="col-xs-12">
                                            <br/> $(x^2 + \sqrt{6}x + 3)(x^2 - \sqrt{6}x + 3)$
                                            <br/>
                                            <div class="btn-group btn-group-vertical" data-toggle="buttons">
                                                <label class="btn active">
                                                    <input type="radio" name='gender' value="1"/><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>
                                                    <span style="font-size:100%; color:black;">Male</span>
                                                </label>
                                                <label class="btn">
                                                    <input type="radio" name='gender' value="2"/><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>
                                                    <span style="font-size:100%; color:black;">Female</span>
                                                </label>
                                                <label class="btn">
                                                    <input type="radio" name='gender' value="2"/><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>
                                                    <span style="font-size:100%; color:black;">(c)</span>
                                                </label>

                                                <label class="btn">
                                                    <input type="radio" name='gender' value="2"/><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>
                                                    <span style="font-size:100%; color:black;">(d)</span>
                                                </label>

                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                            <div class="item active">

                                <div class="container">

                                    <div class="row">
                                        <div class="col-xs-12">
                                            <br/> $(x^2 + \sqrt{6}x + 3)(x^2 - \sqrt{6}x + 3)$
                                            <br/>
                                            <div class="btn-group btn-group-vertical" data-toggle="buttons">

                                                <table class="c17">

                                                    <tr>
                                                        <td>
                                                            <label class="btn active">
                                                                <input type="radio" name='gender2' value="1"/><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>
                                                                <span style="font-size:100%; color:black;">(a)</span>
                                                            </label>
                                                        </td>
                                                        <td>$(x^2 + \sqrt{6}x + 3)(x^2 - \sqrt{6}x + 3)$</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label class="btn">
                                                                <input type="radio" name='gender2' value="2"/><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>
                                                                <span style="font-size:100%; color:black;">Female</span>
                                                            </label>
                                                        </td>
                                                        <td>AAA</td>
                                                    </tr>

                                                </table>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>




                    </form>


                </div>
                <div class="container">

                    <p><a class="btn btn-lg btn-primary" href="javascript:void(0);"
                          onclick="document.forms['myform'].submit();"
                          role="button">Iesūtīt</a></p>
                </div>
            </div>
        );
    }
};


module.exports = Exam2

