var examData = {
    count: 1800,
    "questions": [
    	/* 1 */
        {
            "id": "nt-part1-02.q1",
            "questionType": "MC",
            "question": "Kuriem no šiem skaitļiem ir divi atšķirīgi decimālpieraksti (ar bezgalīgi daudzām nullēm un arī ar bezgalīgi daudziem deviņniekiem)?",
            "alternatives": [
                "$\\frac{7}{35}$",
                "$\\frac{4}{12}$",
                "$\\frac{10}{15}$",
                "$\\frac{1}{17}$"
            ],
            "correct": "a"
        },
        /* 2 */
        {
            "id": "nt-part1-02.q2",
            "questionType": "MC",
            "question": "Kuram no nosauktajiem skaitļiem ir nepāru skaits naturālu dalītāju, ieskaitot 1 un pašu šo skaitli?",
            "alternatives": [
                "$20$",
                "$24$",
                "$36$",
                "$40$"
            ],
            "correct": "c"
        },
        /* 3 */
        {
            "id": "nt-part1-02.q3",
            "questionType": "MC",
            "question": "Kurš ir polinoma $x^4 + 9$ sadalījums reizinātājos?",
            "alternatives": [
                "$(x^2 + \\sqrt{6}x + 3)(x^2 - \\sqrt{6}x + 3)$",
                "$(x^2 + \\sqrt{6}x + 3)(x^2 + \\sqrt{6}x - 3)$",
                "$(x^2 + 3x + \\sqrt{6})(x^2 - 3x + \\sqrt{6})$",
                "$(x^2 + 3x + \\sqrt{6})(x^2 + 3x - \\sqrt{6})$"
            ],
            "answer": "a"
        },
        /* 4 */
        {
            "id": "nt-part1-02.q4",
            "questionType": "MC",
            "question": "Ar kuru no skaitļiem dalās $1001^{1001}+1$?",
            "alternatives": [
                "$9$",
                "$1001^{13}+1$",
                "$1001^{101}+1$",
                "$1001^{800}-1001^{600}+1001^{400}-1001^{200}+1$"
            ],
            "answer": "b"
        },
        /* 5 */
        {
            "id": "nt-part1-02.q5",
            "questionType": "MC",
            "question": "Cik naturālu skaitļu intervālā $[1;100]$ nedalās ne ar $2$, ne ar $3$?",
            "alternatives": [
                "$30$",
                "$31$",
                "$32$",
                "$33$",
                "$34$"
            ],
            "answer": "d"
        },
        /* 6 */
        {
            "id": "nt-part1-02.q6",
            "questionType": "MC",
            "question": "Uz tāfeles uzrakstīts skaitlis $N$. Divi spēlētāji pārmaiņus to samazina par kādu no skaitļiem $1$, $2$, $3$ vai $4$. "
            + "Uzvar tas, kurš pirmais uzraksta $0$. Kādām $N$ vērtībām, pareizi spēlējot, var uzvarēt OTRAIS spēlētājs?",
            "alternatives": [
                "Ja $N$ dalās ar $4$.",
                "Ja $N$ nedalās ar $4$",
                "Ja $N$ dalās ar $5$.",
                "Ja $N$ nedalās ar $5$",
                "Ja $N$ dalās ar $10$",
                "Ja $N$ nedalās ar $10$"
            ],
            "answer": "c"

        },
        /* 7 */
        {
            "id": "nt-part1-02.q7",
            "questionType": "MC",
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
            ], 
            "answer": "d"
        },
        /* 8 */
        {
            "id": "nt-part1-02.q8",
            "questionType": "MC",
            "question": "Cilvēks $A$ uzrakstīja uz papīra lapiņas vienu no $64$ šaha galdiņa rūtiņām (piemēram, 'a1', 'h8' utml.). "
            + "Kāds ir mazākais jautājumu skaits, ar ko cilvēkam $B$ vienmēr pietiek, lai uzzinātu, kuru rūtiņu $A$ izvēlējās? "
            + "(Uz katru jautājumu ir jāvar atbildēt ar JĀ vai NĒ.)",
            "alternatives": [
                "$4$",
                "$5$",
                "$6$",
                "$7$",
                "$8$"
            ], 
            "answer": "6"
        },
        /* 9 */
        {
            "id": "nt-part1-02.q9",
            "questionType": "MC",
            "question": "$60$ konfektes sadalīja vairākās vienādās kaudzītēs un visu kaudzīšu konfekšu skaitus sareizināja. "
            + "Pa cik konfektēm jābūt katrā kaudzītē, lai reizinājums būtu lielākais iespējamais?",
            "alternatives": [
                "$2$",
                "$3$",
                "$4$",
                "$5$",
                "$6$"
            ],
            "answer": "b"
        },
        /* 10 */
        {
            "id": "nt-part1-02.q10",
            "questionType": "MC",
            "question": "Skaitli $123\\ldots175176$ iegūst, uzrakstot pēc kārtas visus ciparus skaitļos $1,2,\\ldots,176$. "
            + "Kādu atlikumu dod šis skaitlis, dalot ar $3$?",
            "alternatives": [
                "$0$",
                "$1$",
                "$2$"
            ],
            "answer": "a"
        },
        /* 11 */
        {
            "id": "nt-part1-02.q11",
            "questionType": "INPUT",
            "length":"10",
            "question": "Izteikt kā parastu daļskaitli: $0.0399999\\ldots=0.03\\overline{9}$.",
            "instruction": "Ierakstīt atbildi formā a/b",
            "answer": "1/25"
        },
        /* 12 */
        {
            "id": "nt-part1-02.q12",
            "questionType": "INPUT",
            "length":"10",
            "question": "Dārgumu krātuvē bija $N$ lādītes, kurās kopā bija pavisam 462 dārgakmeņi, "
            + "pie tam katrā lādītē dārgakmeņu skaits bija vienāds. "
            + "Dārgumu krātuves kasierim vajadzēja četras tukšas lādītes, "
            + "un viņš varēja izvietot četru lādīšu dārgakmeņus pa atlikušajām lādītēm tā, "
            + "lai katrā lādītē atkal būtu vienāds skaits dārgakeņu. "
            + "Atrast visas iespējamās lādīšu skaita $N$ vērtības.",
            "instruction": "Ierakstīt vienu vai vairākus skaitļus, atdalot tos ar komatiem",
            "answer": "6,7,11"
        },
        /* THE END */
    ]
};

module.exports = examData