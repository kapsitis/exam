import React from 'react'
import {render} from 'react-dom'
import ReactDOM from 'react-dom'

//import * as Hammer from 'hammer';
//window.Hammer = Hammer.default;
//require(['../js/hammer.min.js']);
//var Hammer = require(['hammer']);

//import * as Hammer from '/exam/js/hammer.min.js';

import Exam from './exam.jsx'
import Carousel2 from './carousel2.jsx'
import Examlist from './examlist.jsx'


class Index extends React.Component {
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
                <form action="grading" method="GET">
                    Vārds: <input type="text" name="name" maxlength="24" size="24"/><br/>
                {this.state.questions.map(function(qq,ii) {
                    return <div>
                        <h3>{ii+1}. Jautājums</h3>
                        <p>{qq.question}</p>
                        <ol type="a">
                            {qq.alternatives.map(function(object, i){
                                return <li><input type="radio" name={'q'+ii} value={i+1}/>{object}</li>;
                            })}
                        </ol>

                    </div>;

                })}

                    <input type="submit" value="Nosūtīt"/>
                </form>
            </div>
        );
    }
};



if (document.getElementById('index') != null) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}

if (document.getElementById('exam') != null) {
    ReactDOM.render(<Exam />, document.getElementById('exam'));
}

if (document.getElementById('carousel2') != null) {
    ReactDOM.render(<Carousel2 />, document.getElementById('carousel2'));
}

if (document.getElementById('examlist') != null) {
    ReactDOM.render(<Examlist />, document.getElementById('examlist'));
}

