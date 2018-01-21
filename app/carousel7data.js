var examData = {
    count: 1800,
    "questions": [
        {
            "id": "c.dirichlet.intro.q1",
            "questionType": "INPUT",
            "length":"3",
            "question": "Tumšā skapī ir zeķes 12 krāsās - pa 20 zeķēm katrā no krāsām. "
            + "Kāds mazākais zeķu skaits jāizvelk, lai starp tām noteikti atrastos divas zeķes vienādā krāsā?",
            "answer": "13",
            "explanation": "Izvilktās zeķes ir objekti (\"truši\"), bet iespējamās krāsas ir grupas (\"būri\"). "
            + "Tā kā grupu ir tieši $N=12$, tad izvelkot  $N+1 = 13$ zeķes, starp tām noteikti būs "
            + "divas vienādā krāsā. Ar $12$ zeķēm nepietiek, jo var neveikties: katra no pirmajām $12$ zeķēm "
            + "var būt citā krāsā."
        },

        {
            "id": "c.dirichlet.intro.q2",
            "questionType": "INPUT",
            "length": "4",
            "question": "Rūpnīca ražo ķieģeļus, no kuriem neviens nav "
            + "smagāks par 3kg, neviens nav vieglāks par 2.7kg. "
            + "Kāds mazākais ķieģeļu skaits jānopērk, lai "
            + "starp tiem noteikti atrastos divi tādi, kuru masu starpība ir mazāka par 1g "
            + "(masu starpību iegūst, no lielākās masas atņemot mazāko)?",
            "answer": "302",
            "explanation": "Pārveidojam visas masas gramos. Tad intervālu $[2700;3000]$ "
            + "var pārklāt ar $301$ maziem intervāliem $[2700.0;2700.5)$, "
            + "$[2700.5;2701.5)$, $[2701.5;2702.5)$, $\\ldots$, "
            + "$[2999.5;3000.0]$. Ja izraudzīti jebkādi $302$ ķieģeļi, tad vismaz vienā no intervāliem "
            + "būs vismaz divi ķieģeļi. Tā kā jebkurš intervāls (izņemot pirmo un pēdējo, "
            + "kuri ir vēl īsāki) ir pusatvērts ar garumu $1$ "
            + "tad tas nozīmē, ka tajā esošo abu ķieģeļu masu starpība būs mazāka par $1$. Ar $301$ "
            + "nepietiek, jo var ņemt $w_0 = 2700$, $\\ldots$, $w_{300} = 3000$ (un tad visas masu "
            + "atšķirības ir vismaz $1\\operatorname{g}$)."
        },

        {
            "id": "c.dirichlet.intro.q3",
            "questionType": "INPUT",
            "length": "2",
            "question": "Kāds mazākais skaits no naturāliem skaitļiem $1,2,3,4,5,6,7,8$ jāizsvītro, lai "
            + "starp palikušajiem skaitļiem neatrastos tādi divi, kuru summa ir $9$?",
            "answer": "4",
            "explanation": "Ir pavisam $4$ \"būrīši\" ($(1,8)$, $(2,7)$, $(3,6)$, $(4,5)$), kuros esošie "
            + "skaitļu pāri dod summā $9$. Izsvītrojot no katra vienu ir pietiekami. Ja svītro mazāk, "
            + "tad paliek pāri būrītis ar diviem skaitļiem, kuri summā dod $9$."
        },

        {
            "id": "c.dirichlet.intro.q4",
            "questionType": "MULTIPART",
            "question": "Vai skaitļus $1,2,3,4,5,6,7,8$ var uzrakstīt (1) rindiņā, (2) pa apli "
            + "tā, lai katru divu blakusesošo "
            + "skaitļu starpības būtu dažādas? (Skaitļu starpību aprēķina, no lielākā skaitļa atņemot mazāko.)",

            "parts": [
                {
                    "questionType": "MC",
                    "cue": "Rakstot rindiņā:",
                    "alternatives": [
                        "Jā",
                        "Nē"
                    ]
                },
                {
                    "questionType": "MC",
                    "cue": "Rakstot pa apli:",
                    "alternatives": [
                        "Jā",
                        "Nē"
                    ]
                }
            ],

            "answer": "a,b",
            "explanation": "Var rakstīt, piemēram, šādu virknīti: $1,8,2,7,3,6,4,5$. "
            + "Iespējamo starpību ir tieši $7$ un visas tās tiek iegūtas. "
            + " "
            + "Ja raksta pa apli, tad arī ir $7$ iespējamās starpības (no $1$ līdz $7$), "
            + "bet veselas $8$ vietas, kur saskaras blakusesošie skaitļi. Tādēļ vismaz "
            + "divas starpības sakritīs."
        },

        {
            "id": "c.dirichlet.intro.q5",
            "questionType": "MC",
            "question": "Atzīmēt, kurš no apgalvojumiem ir vienmēr patiess, ja $6$ objektus kaut kā izvieto $5$ būros.",
            "alternatives": [
                "Eksistē tieši viens būris, kurā ir vismaz divi objekti.",
                "Eksistē vismaz viens būris, kurā ir tieši divi objekti.",
                "Eksistē vismaz viens būris, kurā ir vismaz divi objekti.",
                "Eksistē tieši viens būris, kurā ir tieši divi objekti."
            ],
            "answer": "c",
            "explanation": "Dirihlē princips apgalvo, ka vismaz vienā būrī būs vismaz divi elementi. "
            + "Tas nesola, ka būs tieši viens tāds būris vai arī, ka tajā būs tieši divi elementi."
        },

        {
            "id": "c.dirichlet.intro.q6",
            "questionType": "MC",
            "question": "$3$ trušus kaut kā izvieto $4$ būros. Kāds apgalvojums ir vienmēr patiess?",
            "alternatives": [
                "Eksistē būris, kurā ir tieši divi truši.",
                "Eksistē būris, kurš ir tukšs.",
                "Eksistē būris, kurā ir tieši viens trusis.",
                "Eksistē vismaz divi būri, kuros ir vismaz pa vienam trusim."
            ],
            "answer": "b",
            "explanation": "Ja būru ir vairāk nekā objektu, tad vismaz viens būris noteikti ir tukšs. "
            + "(Tas ir līdzīgi Dirihlē principam, tikai būri un truši samainīti vietām - t.i. "
            + "katram būrim truša nepietiek.) Citiem apgalvojumiem viegli atrast pretpiemērus - "
            + "var, piemēram, visus trušus salikt vienā no būriem."
        },
        {
            "id": "c.dirichlet.intro.q7",
            "questionType": "INPUT",
            "length": "2",
            "question": "Uz galda ir $15$ spēļu kārtis. "
            + "Kāds lielākais skaits no tām noteikti ir vienā krāsā?",
            "answer": "8",
            "explanation": "Spēļu kārtīm ir divas krāsas (melna un sarkana). "
            + "Ja tikai septiņas būtu katrā no krāsām, "
            + "tad to kopskaits nevarētu pārsniegt $2 \\cdot 7 = 14$. "
            + "Tāpēc vismaz $8$ ir vienādā krāsā (nav zināms kādā). "
            + "Nav obligāti, lai lielāks skaits būtu vienādā krāsā, jo var būt $8$ kārtis "
            + "vienā krāsā, bet $7$ kārtis - otrā krāsā."
        },
        {
            "id": "c.dirichlet.intro.q8",
            "questionType": "INPUT",
            "length": "4",
            "question": "Kāds ir mazākais skaits skolēnu, kam jābūt skolā, "
            + "lai divi no tiem noteikti būtu dzimuši vienā datumā (dd.mm). "
            + "(Garajos gados esošo datumu 29.februāri te neaplūkojam - pieņemam, ka neviens skolēns tajā nav dzimis.)",
            "answer": "366",
            "explanation": "Gados ir $365$ datumi, neskaitot 29. februāri. "
            + "Ja skolēnu skaits būs $366 > 365$, tad noteikti kāds no datumiem atkārtosies. "
            + "Ja skolēnu ir $365$ vai mazāk, tad katram var būt cits dzimšanas datums."
        },
        {
            "id": "c.dirichlet.intro.q9",
            "questionType": "MULTIPART",
            "question": "$4$ trušus dažādos veidos izvietoja pa $3$ būriem. Katram no veidiem "
            + "būrus sakārtoja trušu skaita dilšanas secībā. "
            + "Ieguva šādas iespējas $(4,0,0)$ (visi četri vienā būrī, abi citi būri ir tukši), "
            + "$(3,1,0)$, $(2,2,0)$, $(2,1,1)$. Vai eksistē cits $4$ trušu izvietojuma veids, "
            + "kurš te nav parādīts?<br/>"
            + "(<b>Norāde:</b> <i>Ja atzīmējāt atbildi \"eksistē\", tad ierakstiet trūkstošo "
            + "veidu lodziņā, formā <code>(a,b,c)</code>, burtu vietā rakstot veselus skaitļus.</i>)",
            "parts": [
                {
                    "questionType": "MC",
                    "cue": "Vai eksistē trušu izvietojums, kas nav minēts?",
                    "alternatives": [
                        "Jā",
                        "Nē"
                    ]
                },
                {
                    "questionType": "INPUT",
                    "length": "10",
                    "cue": "Ja eksistē, norādīt trūkstošo veidu formā (a,b,c)"
                }
            ],
            "answer": "b",
            "explanation": "Ir tikai viens veids, kā divi būri var būt tukši ($(4,0,0)$), "
            + "un divi veidi, kā viens būris var būt tukšs ($(3,1,0)$ un $(2,2,0)$). "
            + "Kā arī viens veids, kurā neviens būris nav tukšs: $(2,1,1)$. "
            + "Uzdevumā visi tie ir norādīti."
        },
        {
            "id": "c.dirichlet.intro.q10",
            "questionType": "INPUT",
            "length": "3",
            "question": "Tumšā skapī ir 100 melnas, 100 zilas un 100 zaļas zeķes. "
            + "Kāds mazākais skaits zeķu neskatoties ir jāizvelk, lai noteikti starp tām būtu "
            + "divas melnas vai divas zilas zeķes?",
            "answer": "103",
            "explanation": "Ar $102$ izvilktām zeķēm nepietiek, jo var gadīties $100$ zaļas, "
            + "viena melna un viena zila. "
            + "Ar $103$ izvilktām zeķēm vienmēr pietiek, jo vismaz $3$ no tām nebūs zaļas "
            + "un varēs lietot Dirihlē principu - jebkādi piekārtojot $3$ zeķes divām krāsām, "
            + "divas no zeķēm nonāks vienā krāsā."
        },
        {
            "id": "c.dirichlet.intro.q11",
            "questionType": "INPUT",
            "length": "4",
            "question": "Valoda $L$ satur visus $3$-burtu vārdus no burtiem \"A\" un \"B\" "
            + "(ieskaitot vārdus, kur vienādi burti ir blakus, piemēram \"AAA\" vai \"BBA\"). "
            + "Cik vārdi šajā valodā jāpasaka, lai noteikti būtu pateikti divi "
            + "vienādi vārdi?",
            "answer": "9",
            "explanation": "Valodā $L$ ir $8$ dažādi vārdi. Pasakot $9$ vārdus, vismaz viens no tiem "
            + "būs pateikts divas reizes."
        },
        {
            "id": "c.dirichlet.intro.q12",
            "questionType": "INPUT",
            "length": "1",
            "question": "Kāds mazākais daudzums skaitļu no $1$ līdz $9$ jāizvēlas, "
            + "lai starp tiem atrastos divi, kuru summa ir $10$?",
            "answer": "5",
            "explanation": "Var izvēlēties skaitli $5$ un arī pa vienam no katra pārīša "
            + "$(1,9)$, $(2,8)$, $(3,7)$, $(4,6)$. Ja izvēlas vairāk nekā "
            + "piecus, tad vismaz divi no izvēlētajiem nonāk vienā no "
            + "minētajiem pārīšiem, t.i. summā dod $10$."
        },
        {
            "id": "c.dirichlet.intro.q13",
            "questionType": "INPUT",
            "length": "5",
            "question": "Auditorijā ir $10$ gari soli, uz kuriem kaut kādā veidā "
            + "jau sasēdušās $100$ meitenes. "
            + "Kādu lielāko skaitu zēnu var sasēdināt šajā auditorijā, ja "
            + "nekādi divi zēni nedrīkst sēdēt blakus uz viena sola?",
            "answer": "110",
            "explanation": "Pirms meitenēm auditorijā bija $10$ \"būrīši\" (katrs no soliem), "
            + "bet katras meitenes nosēdināšana \"būrīšu\" skaitu palielina par $1$ "
            + "(pārdalot solu vai tā posmu divās daļās). Tādēļ būrīšu ir pavisam $110$. "
            + "Lai nevienā būrītī nonāktu ne vairāk par vienu zēnu, to skaits nevar "
            + "pārsniegt $110$. "
            + "$110$, acīmredzot, var izsēdināt. Piemēram, var izsēdināt uz viena sola 11 zēnus "
            + "un 10 meitenes: "
            + "$$(Z,M,Z,M,\\ldots,M,Z,M,Z)$$"
        },

        {
            "id": "c.dirichlet.intro.q14",
            "questionType": "MC",
            "question": "Vienā gadā noteikti var atrast divus tādus mēnešus, kuriem 30. datums ir "
            + "vienā nedēļas dienā. ",
            "alternatives": [
                "Jā",
                "Nē"
            ],
            "answer": "a",
            "explanation": "Gada laikā ir $11$ mēneši, kuros ir 30.datums. "
            + "Tā kā nedēļas dienu ir tikai septiņas, tad atradīsies divi mēneši, kuriem "
            + "šis datums ir vienā dienā."
        },

        {
            "id": "c.dirichlet.intro.q15",
            "questionType": "MC",
            "question": "Visos gados, kuros ir $365$ dienas (t.i. tajos, kuri "
            + "nav garie gadi), janvāra un oktobra tabulu kalendārs "
            + "sakrīt (1.zīm. attēlots 2018.g. kalendārs). "
            + "Atrast, kurš apgalvojums noteikti ir patiess katrā gadā, "
            + "kurā ir $365$ dienas.",
            "alternatives": [
                "Eksistē tāda nedēļas diena, kurā nesākas neviens mēnesis ar 31 dienu.",
                "Eksistē trīs tādas nedēļas dienas, kurās nesākas "
                + "neviens mēnesis ar mazāk nekā 31 dienu.",
                "Eksistē tieši divas nedēļas dienas, kurās sākas divi tā paša gada mēneši."
            ],
            "imgSrc": "http://85.254.250.28/downloads1/olimpiades/dirihle-princips/exams/dirichlet01-intro/c.dirichlet.intro.q15.fig1-1.png",
            "answer": "a",
            "explanation": "Pavisam ir $7$ mēneši ar $31$ dienu "
            + "(janvāris, marts, maijs, jūlijs, augusts, oktobris, decembris). "
            + "Ja zināms, ka divi no tiem (janvāris un oktobris) sākas vienā "
            + "nedēļas dienā, tad uz pārējām $6$ nedēļas dienām atliek "
            + "tikai $5$ mēneši, t.i. vienai nedēļas dienai mēneša nepietiks."
        },







        {
            "id": "c.dirichlet.generalizations.q1",
            "questionType": "MC",
            "question": "Makā ir $25$ monētas (eiro vai centu). "
            + "Vai makā noteikti ir vismaz $4$ "
            + "vienādas vērtības monētas?",
            "alternatives": [
                "Jā",
                "Nē"
            ],
            "answer": "a",
            "explanation": "Pavisam ir astoņu vērtību monētas $1,2,5,10,20,50$ centu, $1$ un $2$ eiro. "
            + "No pretējā: Ja nebūtu vismaz $4$ monētu ar vienādu vērtību (vienalga kādas vērtības), tad "
            + "varētu būt ne vairāk kā $3$ monētu katrai no astoņām vērtībām, t.i. to kopskaits nevarētu "
            + "pārsniegt $3 \cdot 8 = 24$."
        },



    ]
};

module.exports = examData