var examData = {
    count: 1500,
    "questions": [
        {
            "id": "nt-part2-02.q1",
            "questionType": "INPUT",
            "length":"5",
            "question": "Kāds ir mazākais skaitlis, kas dod atlikumu $7$, dalot ar $9$, bet šī skaitļa ciparu summa ir lielāka nekā $7$?"
        },


        {
            "id": "nt-part2-02.q2",
            "questionType": "INPUT",
            "length":"15",
            "question": "Kāds ir mazākais skaitlis $n$, kura ciparu summa $S(n) \\geq 79$?"
        },

        {
            "id": "nt-part2-02.q3",
            "questionType": "INPUT",
            "length":"2",
            "question": "Cik no veseliem skaitļiem intervālā $[1;60]$ ir tādi, kas nedalās ne ar $2$, ne ar $3$, ne ar $5$?"
        },

        {
            "id": "nt-part2-02.q4",
            "questionType": "INPUT",
            "length": "2",
            "question": "Šaha galdiņam $4 \\times 4$ katrā rūtiņā ierakstīts skaitlis " +
            "('$0$' uz galvenās diagonāles, '$1$' visur citur). " +
            "Uz tā var $4! = 24$ veidos izvietot $4$ torņus, lai tie cits citu neapdraudētu. " +
            "Cik no šiem torņu novietojumiem ir tādi, ka zem tiem ierakstīto skaitļu reizinājums NAV $0$?",
            "imgSrc": [
                "http://www.dudajevagatve.lv:8080/exam/images/chessboard4x4.png"
            ],
            "instruction": "Zīmējumā attēlotā torņu konfigurācija neder, jo daži no tiem ir uz galvenās diagonāles."
        },



        {
            "id": "nt-part2-02.q5",
            "questionType": "INPUT",
            "length": "3",
            "question": "Ar cik nullēm beidzas skaitļa $100!$ decimālpieraksts?"
        },


        {
            "id": "nt-part2-02.q6",
            "questionType": "INPUT",
            "length": "3",
            "question": "Ar kādu vislielāko skaitļa $2$ pakāpi dalās $100!$ jeb cik ir $\\operatorname{ord}_{2}(100!)$? ",
            "instruction": "Piemēram, ja skaitlis $n$ dalās ar $2^3 = 8$, bet nedalās ar $2^4 = 16$, tad $\\operatorname{ord}_{2}(n) = 3$"
        },



        {
            "id": "nt-part2-02.q7",
            "questionType": "INPUT",
            "length": "20",
            "question": "Skaitļa $n$ decimālpieraksts beidzas ar ciparu $5$. Ierakstīt visas $3$-ciparu virknītes, "
            + "ar kurām var beigties skaitļa $n^2$ decimālpieraksts.",
            "instruction": "Ierakstīt visas $3$-ciparu virknītes, atdalot ar komatiem. Secība nav svarīga."
        },


        {
            "id": "nt-part2-02.q8",
            "questionType": "INPUT",
            "length": "2",
            "question": "Zināms, ka $7^2 + 1 \\equiv 0\\;(\\operatorname{mod}\\;25)$. Atrast kādu citu veselu "
            + "skaitli $x \\in \\{0,1,\\ldots,24\\}$, $x \\neq 7$, kuram arī izpildās "
            + "$x^2 + 1 \\equiv 0\\;(\\operatorname{mod}\\;25)$",
            "instruction": "Ierakstīt Jūsu atrasto veselo skaitli $x$"
        },

        {
            "id": "nt-part2-02.q9",
            "questionType": "INPUT",
            "length": "20",
            "question": "Naturāliem $n$, $\\operatorname{gcd}(n,28)$ var pieņemt dažādas vērtības. Uzrakstīt, kuras tās ir.",
            "instruction": "Ierakstīt visas iespējamās lielākā kopīgā dalītāja vērtības, atdalot ar komatiem. Secība nav svarīga."
        },

        {
            "id": "nt-part2-02.q10",
            "questionType": "INPUT",
            "length": "2",
            "question": "Pēc Eilera teorēmas, jebkuram nepāru $a$ ir spēkā $a^{\\varphi(8)} \\equiv 1\\;(\\operatorname{mod}\\;8)$. "
            + "Bet kāds ir vismazākais $n$, kas patvaļīgam nepāru $a$ apmierina sakarību $a^n \\equiv 1\\;(\\operatorname{mod}\\;8)$?"
        },

        {
            "id": "nt-part2-02.q11",
            "questionType": "INPUT",
            "question": "Dots, ka $x+y \\equiv 0\\;(\\operatorname{mod}\\;9)$. Kādu atlikumu dod izteiksme "
            + "$$x^9 + y^9 = (x+y)(x^8 - x^7y + x^6y^2 - \\cdots + x^2y^6 - xy^7 + y^8,$$ "
            + "dalot ar $81$?",
            "instruction": "Ierakstīt atlikumu, kas rodas, dalot ar $81$"
        },

        {
            "id": "nt-part2-02.q12",
            "questionType": "MS",
            "length":"4",
            "question": "Kuriem moduļiem $m$ visi iespējamie naturālo skaitļu kubi $k^3$ var dot tikai $3$ dažādus atlikumus pēc $m$ moduļa?",
            "instruction": "Atzīmēt 2 atbildes.",
            "alternatives": [
                "$(\\operatorname{mod}\\;5)$",
                "$(\\operatorname{mod}\\;7)$",
                "$(\\operatorname{mod}\\;9)$",
                "$(\\operatorname{mod}\\;11)$"
            ]
        }
    ]

};

module.exports = examData