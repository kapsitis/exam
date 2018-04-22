var examData = {
    count: 1800,
    "questions": [
        /* 18 */
        {
            "id": "c.recurrence.intro.q18",
            "questionType": "INPUT",
            "length": "2",
            "question": "Voldemāram jāpamato, ka vienādojumam $x^3 - 2016xyz=120$ nav atrisinājumu veselos skaitļos $x,y,z$. "
            + "Lai to izdarītu, viņš izvēlējās tādu naturālu skaitli $m$, ka vienādojuma kreisā puse $x^3-2016xyz$ var dot trīs atlikumus "
            + "$0$,$1$ vai $m-1$ dalot ar $m$, bet neviens no šiem atlikumiem nesakrīt ar skaitļa $120$ doto atlikumu, dalot ar $m$. "
            + "Kādu skaitli Voldemārs izvēlējās?",
            "answer": "9",
            "explanation": "Jebkuru pilnu kubu dalot ar $9$ iegūsim kādu no atlikumiem $0,1,8$, bet $120$ dod atlikumu $3$. "
            + "Tādēļ $m=9$ ir 'pretrunas modulis' šim vienādojumam - atlikumi pēc $9$ parāda, ka to nevar atrisināt."
        },
        /* 19 */
        {
            "id": "c.recurrence.intro.q19",
            "questionType": "MULTIPART",
            "question": "Lai pamatotu, ka vienādojumam $x^2+y^2+z^2=\\underbrace{1111\\ldots{}1}_{2018}$ nav atrisinājumu "
            + "Fricis iedomājās tādu naturālu skaitli $m$, kuram kreisā puse $x^2+y^2+z^2$ var dot dažādus atlikumus, bet neviens no tiem "
            + "nesakrīt ar vienādojuma labajā pusē esošā skaitļa atlikumu, dalot ar $m$. "
            + "Ierakstīt lodziņos skaitli $m$ un arī visus atlikumus, kādus dod $x^2+y^2+z^2$, dalot ar $m$.",
            "parts": [
                {
                    "questionType": "INPUT",
                    "length": "2",
                    "cue": "Skaitlis $m$"
                },
                {
                    "questionType": "INPUT",
                    "length": "20",
                    "cue": "Iespējamie atlikumi augošā secībā, atdalīti ar komatiem"
                }
            ],
            "answer": "8,0,1,2,3,4,5,6",
            "explanation": "$(x,y,z)$ var būt $(0,0,0)$, $(0,0,1)$, $(0,1,1)$, $(1,1,1)$, $(2,0,0)$, $(2,0,1)$, $(2,1,1)$, "
            + "kas dod visus atlikumus no $0$ līdz $6$. Atlikumu $7$ dabūt nav iespējams, jo ikviens pilns kvadrāts dod atlikumu "
            + "$0$,$1$ vai $4$, dalot ar $8$. Nekādu trīs šādu saskaitāmo summa nevar būt $7$ vai $15$ (vai cits skaitlis ar atlikumu $7$)."
        },
        /* 20 */
        {
            "id": "c.recurrence.intro.q20",
            "questionType": "INPUT",
            "length": "2",
            "question": "Lai pamatotu, ka vienādojumam $10^x + 12^y = 34^z$ nav atrisinājumu naturālos skaitļos, "
            + "Zigfrīds atrada tādu naturālu skaitli $m$, ka vienādojuma kreisā puse var dot tikai divus dažādus atlikumus, dalot ar $m$, "
            + "bet labā puse dod vienmēr vienu un to pašu atlikumu (citu, nekā kreisā puse!) dalot ar $m$. Atrast šādu $m$.",
            "answer": "11",
            "explanation": "Šāds skaitlis $m=11$. Tad $12^y$ un $34^z$ vienmēr dod atlikumu $1$, bet $10^x$ dod pārmaiņus atlikumus $1$ un $10$. "
            + "Tādēļ $m=11$ ir 'pretrunas modulis' šim vienādojumam - atlikumi pēc $11$ parāda, ka to nevar atrisināt."
        },
        /* THE END */
    ]
};

module.exports = examData