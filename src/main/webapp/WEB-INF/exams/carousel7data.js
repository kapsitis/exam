var examData = {
    count: 1800,
    "questions": [

        /* 1 */
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
        /* 2 */
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
        /* 3 */
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
        /* 4 */
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
        /* 5 */
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
        /* 6 */
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
        /* 7 */
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
        /* 8 */
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
        /* 9 */
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
            "answer": "b,",
            "explanation": "Ir tikai viens veids, kā divi būri var būt tukši ($(4,0,0)$), "
            + "un divi veidi, kā viens būris var būt tukšs ($(3,1,0)$ un $(2,2,0)$). "
            + "Kā arī viens veids, kurā neviens būris nav tukšs: $(2,1,1)$. "
            + "Uzdevumā visi tie ir norādīti."
        },
        /* 10 */
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
        /* 11 */
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
        /* 12 */
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
        /* 13 */
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
        /* 14 */
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
        /* 15 */
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
            "imgSrc": [
                "http://85.254.250.28/downloads1/olimpiades/dirihle-princips/exams/dirichlet01-intro/c.dirichlet.intro.q15.fig1-1.png"
            ],
            "answer": "a",
            "explanation": "Pavisam ir $7$ mēneši ar $31$ dienu "
            + "(janvāris, marts, maijs, jūlijs, augusts, oktobris, decembris). "
            + "Ja zināms, ka divi no tiem (janvāris un oktobris) sākas vienā "
            + "nedēļas dienā, tad uz pārējām $6$ nedēļas dienām atliek "
            + "tikai $5$ mēneši, t.i. vienai nedēļas dienai mēneša nepietiks."
        },





        /* 16 */
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
            + "pārsniegt $3 \\cdot 8 = 24$."
        },
        /* 17 */
        {
            "id": "c.dirichlet.generalizations.q2",
            "questionType": "MC",
            "question": "Autobusā brauc $50$ cilvēki. Vai var apgalvot, ka vismaz $6$ "
            + "no tiem dzimuši vienā mēnesī?",
            "alternatives": [
                "Jā",
                "Nē"
            ],
            "answer": "b",
            "explanation": "Tā kā ir pavisam $12$ mēneši, var gadīties, ka katrā no tiem dzimuši $4$ vai $5$ cilvēki "
            + "no autobusā klātesošajiem (desmit mēnešos dzimuši $4$, bet divos mēnešos dzimuši $5$). "
            + "Tad $50 = 10 \\cdot 4 + 2 \\cdot 5$. Šajā gadījumā nebūs neviena mēneša, kurā dzimuši vismaz $6$ cilvēki."

        },
        /* 18 */
        {
            "id": "c.dirichlet.generalizations.q3",
            "questionType": "INPUT",
            "length": "5",
            "question": "Auto dīlerim ir $20$ Audi, $20$ BMW, $20$ VW un $20$ Volvo "
            + "automašīnas. Kāds mazākais mašīnu skaits jānopērk, lai varētu apgalvot, "
            + "ka ir nopirktas vismaz piecas vienas markas automašīnas?",
            "answer": "17",
            "explanation": "Ja nopirktas tikai $16$ mašīnas, tad var būt pa četrām no katras markas. "
            + "Ja nopirktas $17$ mašīnas, tad nevar gadīties, ka no katras markas nopirktas mazāk kā piecas, jo "
            + "$4 \\cdot 4 < 17$."
        },
        /* 19 */
        {
            "id": "c.dirichlet.generalizations.q4",
            "questionType": "INPUT",
            "length": "5",
            "question": "Kāds ir mazākais skaits skolēnu, kam jābūt klasē, "
            + "lai varētu apgalvot, ka vismaz 5 no tiem ir dzimuši vienā nedēļas dienā?",
            "answer": "29",
            "explanation": "Ja skolēnu ir $28$, tad katrā no septiņām nedēļas dienām "
            + "var būt dzimuši tikai $4$ skolēni. "
            + "Ja skolēnu ir $29$, tad nevar gadīties, ka katrā nedēļas dienā dzimuši "
            + "mazāk kā $5$ skolēni, jo $7 \\cdot 4 < 29$."
        },
        /* 20 */
        {
            "id": "c.dirichlet.generalizations.q5",
            "questionType": "MULTIPART",
            "question": "Dots apgalvojums: Ja istabā ienāk $n$ cilvēki, tad vismaz trīs no viņiem "
            + "noteikti ir dzimuši vienā nedēļas dienā, bet var gadīties, ka neeksistē četri, "
            + "kuri visi dzimuši vienā nedēļas dienā. "
            + "Atrast mazāko un lielāko $n$ vērtību, kurai šis apgalvojums ir patiess.",
            "parts": [
                {
                    "questionType": "INPUT",
                    "length": "4",
                    "cue": "Mazākā $n$ vērtība"
                },
                {
                    "questionType": "INPUT",
                    "length": "4",
                    "cue": "Lielākā $n$ vērtība"
                }
            ],
            "answer": "15,21",
            "explanation": "Ja $n <15$, tad ne vairāk kā $14$ cilvēkus var sadalīt "
            + "pa nedēļas dienām tā, lai katrā būtu dzimuši ne vairāk kā $2$. "
            + "Ja cilvēku ir no $15$ līdz $21$ (abus galapunktus ieskaitot), tad "
            + "pēc vispārinātā Dirihlē principa iegūsim $\\lceil n/7 \\rceil = 3$ - vismaz "
            + "trīs cilvēkus \"vispopulārākajā\" nedēļas dienā. "
            + "Ja cilvēku ir vairāk kā $21$, tad no tā paša Dirihlē principa iegūsim, "
            + "ka būs nedēļas diena, kurā dzimuši vismaz četri."
        },
        /* 21 */
        {
            "id": "c.dirichlet.generalizations.q6",
            "questionType": "INPUT",
            "length": "4",
            "question": "Tortes dekorēšanai nepieciešami vai nu divi apelsīni, vai trīs āboli, "
            + "vai piecas aprikozes, vai septiņi ķirši. "
            + "Mazā Mija atnesa no veikala $n$ augļus, ikviens no kuriem "
            + "ir apelsīns, ābols, aprikoze vai ķirsis. "
            + "Kādam mazākajam $n$ ar atnestajiem augļiem "
            + "noteikti pietiek tortes dekorēšanai?",
            "answer": "14",
            "explanation": "Skaits $n = (2-1)+(3-1)+(5-1)+(7-1)=2+3+5+7-4=13$ "
            + "ir vislielākais, kuram var atnest augļus tā, lai katram no četriem "
            + "paveidiem viens pietrūktu. Ja atnesīs par vienu vairāk, t.i. "
            + "$14$, tad vismaz vienam paveidam tiks sasniegts vajadzīgais skaits."
        },
        /* 22 */
        {
            "id": "c.dirichlet.generalizations.q7",
            "questionType": "INPUT",
            "length": "4",
            "question": "Klasē mācās $20$ skolēni. Katram skolēnam ir tieši divi "
            + "vectētiņi; turklāt katriem diviem skolēniem vismaz viens "
            + "vectētiņš ir kopīgs. (Zināms arī, ka neeksistē visiem "
            + "skolēniem kopīgs vectētiņš.) Kāds ir lielākais iespējamais "
            + "šīs klases skolēnu vectētiņu skaits?",
            "answer": "3",
            "explanation": "Trīs vectētiņi $A,B,C$, acīmredzot, ir iespējami - ja katram "
            + "skolēnam vectētiņu pāris ir $(A,B)$, $(A,C)$ vai $(B,C)$, tad "
            + "katriem diviem skolēniem kāds no vectētiņiem sakritīs "
            + "(ja četrus vectētiņus var izvēlēties no trim, tad divi sakritīs). "
            + " "
            + "Noskaidrosim, vai aplūkotajā situācijā iespējami četri vectētiņi - "
            + "pievienosim skolēnus $a_1,a_2,\\ldots,a_{20}$ pa vienam. "
            + "Skolēna $a_1$ vectētiņus apzīmējam ar $A$ un $B$. Apskatām "
            + "to skolēnu $a_2$, kuram $B$ nav vectētiņš (tāds noteikti eksistē, "
            + "jo uzdevumā zināms, ka nevar būt visu skolēnu kopīgais vectētiņš - "
            + "t.sk. arī $B$ tāds nav). Apzīmēsim $a_2$ vectētiņus ar $A$ un $C$ "
            + "($A$ jābūt $a_2$ vectētiņam, jo tas ir kopīgs skolēniem $a_1, a_2$). "
            + "Tālāk aplūkosim tādu skolēnu $a_3$, kuram $A$ nav vectētiņš "
            + "(arī tāds noteikti eksistē). Lai $a_3$ būtu kopīgi vectētiņi gan ar "
            + "$a_1$, gan $a_2$, tam jābūt ar vectētiņu pāri $(B,C)$. "
            + " "
            + "Pievienojot jebkuru jaunu skolēnu $a_4$ utt. mums būs "
            + "jāizmanto kāds no vectētiņu pāriem $(A,B)$, $(A,C)$ vai $(B,C)$ "
            + "(ja skolēnam $a_4$ būtu kāds jauns vectētiņš $D$, tad viņam nevarēs "
            + "būt kopīgs otrs vectētiņš gan ar $a_1$, gan ar $a_2$, gan ar $a_3$). "
            + "Tātad ceturtais vectētiņš ir neiespējams."
        },
        /* 23 */
        {
            "id": "c.dirichlet.generalizations.q8",
            "questionType": "INPUT",
            "length": "4",
            "question": "Klasē mācās $20$ skolēni. Katram skolēnam ir tieši divi "
            + "vectētiņi; turklāt katriem diviem skolēniem šajā klasē vismaz viens "
            + "vectētiņš ir kopīgs. Kāds ir lielākais skolēnu skaits, "
            + "kuriem noteikti visiem ir kopīgs vectētiņš?",
            "answer": "14",
            "explanation": "Ja visiem skolēniem ir visiem kopīgs vectētiņš, "
            + "tad skolēnu skaits ar kopīgo vectētiņu ir $20$. Bet šāds rezultāts "
            + "nav garantēts. Ja visiem skolēniem kopīga vectētiņa nav, tad "
            + "var būt pavisam $3$ vectētiņi (sk. iepriekšējo testa jautājumu). "
            + "Katram no $20$ skolēniem ir pa $2$ vectētiņi; varam uzskatīt, ka no "
            + "katra skolēna uz vectētiņu kopu novilktas divas bultiņas - "
            + "pavisam ir $40$ bultiņu. Ja $40$ bultiņu galus "
            + "kaut kā sadala $3$ vectētiņiem, pēc Dirihlē principa iegūstam, "
            + "ka vismaz vienam no vectētiņiem \"iedurs\" vivsmaz $14$ bultiņas, "
            + "jo $\\lceil 40/3 \\rceil = 14$."
        },
        /* 24 */
        {
            "id": "c.dirichlet.generalizations.q9",
            "questionType": "MC",
            "question": "$k$ trusīšus kaut kā izvietoja pa $m$ būrīšiem. "
            + "Atrast formulu, kura izsaka mazāko iespējamo trusīšu skaitu "
            + "tanī būrī, kur viņu ir visvairāk. "
            + "(Ar $\\lfloor x \\rfloor$ apzīmēta <b>apakšējā</b> veselā daļa - "
            + "lielākais veselais skaitlis, kas nepārsniedz $x$. Piemēram, "
            + "$\\lfloor 4 \\rfloor = 4$ un $\\lfloor 3.99 \\rfloor = 3$.)",
            "alternatives": [
                "$\\lfloor \\frac{k}{m} \\rfloor$",
                "$\\lfloor \\frac{k-1}{m} \\rfloor + 1$",
                "$\\lfloor \\frac{k+1}{m} \\rfloor$",
                "$\\lfloor \\frac{k+1}{m}+1 \\rfloor$",
                "$\\lfloor \\frac{k}{m-1} \\rfloor$"
            ],
            "answer": "b",
            "explanation": "Ja $1 \\leq k \\leq m$, tad lielākajā būrī var garantēt "
            + "$1$ trusīša esamību. Ja $m+1 \\leq k \\leq 2m$, tad $2$ trusīšu esamību, utt. "
            + "Tas atbilst formulai $\\lfloor \\frac{k-1}{m} \\rfloor + 1$: no $k$ atņem vieninieku, "
            + "atrod apakšējo veselo daļu, dalot ar $m$. Pēc tam pieskaita $1$."
        },
        /* 25 */
        {
            "id": "c.dirichlet.generalizations.q10",
            "questionType": "INPUT",
            "length": "2",
            "question": "Pilnā $52$ spēļu kāršu komplektā katrai kārtij ir "
            + "kāds no $13$ nosaukumiem (\"2\" (divnieks), \"3\", \"4\", \"5\", \"6\", \"7\", "
            + "\"8\", \"9\", \"10\" (desmitnieks), "
            + "\"J\" (kalps), \"Q\" (dāma), \"K\" (kungs), \"A\" (dūzis)) un "
            + "kāds no $4$ mastiem (kreics, pīķis, ercs, kāravs). "
            + "Tātad eksistē pavisam četri divnieki, četri dūži, utt. "
            + "Kāds mazākais skaits spēļu kāršu jāizvēlas, lai "
            + "starp izvēlētajām noteikti atrastos divas kārtis ar blakusesošiem "
            + "nosaukumiem, piemēram, (\"2\";\"3\") vai (\"10\",\"J\") vai (\"K\",\"A\")?",
            "answer": "29",
            "explanation": "Izveidosim 7 Dirihlē \"būrīšus\": (\"2\";\"3\"), "
            + "(\"4\", \"5\"), (\"6\", \"7\"), (\"8\", \"9\"), (\"10\", \"J\"), (\"Q\", \"K\"), "
            + "(\"A\"). Izvēloties $29$ kārtis, vismaz $\\lceil 29/7 \\rceil = 5$ "
            + "nonāks vienā būrītī. Tā kā ar vienu nosaukumu ir tikai $4$ kārtis, "
            + "tad maksimālajā būrītī noteikti būs divu dažādu nosaukumu kārtis - tās "
            + "arī būs ar blakusesošiem nosaukumiem. "
            + " "
            + "Ar $28$ kārtīm, acīmredzot, nepietiek, jo var izvēlēties visus "
            + "četrus no šiem septiņiem nosaukumiem: \"2\", \"4\", \"6\", \"8\", \"10\", "
            + "\"Q\", \"A\". Tur nekādi divi nosaukumi nenonāk blakus, jo tie ņemti, "
            + "vienu izlaižot."
        },
        /* 26 */
        {
            "id": "c.dirichlet.generalizations.q11",
            "questionType": "MC",
            "question": "Vai ir patiess sekojošs apgalvojums: "
            + "Starp jebkuriem $8$ naturāliem skaitļiem, kuru summa ir $20$ "
            + "noteikti atradīsies daži (vismaz divi) tādi skaitļi, kuru summa ir $4$.",
            "alternatives": [
                "Jā",
                "Nē"
            ],
            "answer": "a",
            "explanation": "Summu $4$ var iegūt kā $1+1+1+1$ vai "
            + "$1+1+2$, vai $1+3$, vai $2+2$. "
            + "Lai nenotiktu neviens no šiem gadījumiem, "
            + "kādi var būt izvēlētie skaitļi, kas mazāki par $4$? Ir sekojošas iespējas:<br/>"
            + "(a) Tikai ar trijniekiem: $(3)$, $(3,3)$ (vai arī lielāks skaits ar trijniekiem)<br/>"
            + "(b) Ar trijniekiem un divniekiem: $(3,2)$, $(3,3,2)$  (vai arī vēl vairāk trijnieku un "
            + "viens divnieks)<br/>"
            + "(c) Bez trijniekiem, bet ar divnieku: $(2)$, $(2,1)$.<br/>"
            + "(d) Bez trijniekiem un divniekiem: $(1,1,1)$.<br/>"
            + " "
            + "Visos šajos gadījumos izraudzītais skaitļu komplekts (kopā ar "
            + "atlikušajiem skaitļiem, kuri ir lielāki vai vienādi ar $4$) nedos "
            + "aritmētisko vidējo, kas vienāds ar $20/8 = 2.5$. To pārbauda ar pilno pārlasi.<br/>"
            + " "
            + "(a) Ja izraudzīti $n$ trijnieki ($n=1,\\ldots,6$), tad paliek $8-n$ skaitļi, "
            + "kas dod summā $20-3n$. Iegūstam, ka vidējais ir $(20-3n)/(8-n)$. Visas šīs "
            + "attiecības nepārsniedz $17/7<4$, t.i. visi $(8-n)$ skaitļi nevar būt vismaz $4$.<br/>"
            + "(b) Ja izraudzīti $n$ trijnieki ($n=1,\\ldots,6$) un viens divnieks, tad "
            + "atliek $(7-n)$ skaitļi, kas dod summā $18-3n$. Visas šīs attiecības nepārsniedz "
            + "$15/6=2.5$, t.i. visi $(7-n)$ skaitļi nevar būt vismaz $4$.<br/>"
            + "(c) Aplūkosim $(2,1)$ (gadījums $(2)$ ir līdzīgs). Iegūstam, ka ir vēl seši "
            + "skaitļi, kuru summa ir $17$. Tad $17/6 < 4$, t.i. visi šie seši skaitļi "
            + "nevar būt vismaz $4$.<br/>"
            + "(d) Ja ir izraudzīti skaitļi $(1,1,1)$ un vēl pieci skaitļi, kas dod "
            + "summā $20-3=17$, tad $17/5=3.4$, t.i. piecu skaitļu aritmētiskais vidējais "
            + "nevar būt vismaz $4$."
        },
        /* 27 */
        {
            "id": "c.dirichlet.generalizations.q12",
            "questionType": "INPUT",
            "length": "2",
            "question": "Kādu lielāko skaitu skaitļu var izvēlēties no "
            + "kopas $\\{ 1,2,\\ldots,50 \\}$ tā, lai starp izvēlētajiem "
            + "neatrastos divi dažādi skaitļi, kuru summa dalās ar $7$?",
            "answer": "23",
            "explanation": "Starp šiem skaitļiem ir septiņi skaitļi, kuri "
            + "dod atlikumu $0$, dalot ar $7$, astoņi skaitļi, kuri dod "
            + "atlikumu $1$, dalot ar $7$ un pa septiņiem skaitļiem, "
            + "kuri dod visus citus atlikumus ($2$, $3$, $4$, $5$, $6$), dalot "
            + "ar $7$. Lai divu skaitļu summas nedalītos ar $7$, nedrīkst "
            + "izvēlēties divus skaitļus ar atlikumiem $0$; nedrīkst arī "
            + "izvēlēties abus atlikumus $1$ un $6$, kā arī $2$ un $5$ vai "
            + "$3$ un $4$. "
            + "Tātad var ņemt vienu skaitli ar atlikumu $0$, visus skaitļus "
            + "ar atlikumiem $1$, $2$ un $3$. Iegūstam $1 + 8 + 7+7 = 23$."
        },
        /* 28 */
        {
            "id": "c.dirichlet.generalizations.q13",
            "questionType": "INPUT",
            "length": "4",
            "question": "Kopu $A$ veido, izvēloties dažus naturālus skaitļus "
            + "no $1$ līdz $100$ (abus galapunktus "
            + "arī drīkst izvēlēties). Zināms, ka, saskaitot "
            + "jebkurus divus elementus no kopas $A$, nevar iegūt summu $125$. "
            + "Kāds ir lielākais iespējamais elementu skaits kopā $A$?",
            "answer": "62",
            "explanation": "Skaitļi no $1$ līdz $24$ nevar piedalīties nevienā "
            + "skaitļu pārī, kam summā sanāk $125$. Visus citus skaitļus var "
            + "sadalīt pa pāriem, kas veido šādas summas: "
            + "$25+100 = 125$, $26 + 99 = 125$, utt., $62+63=125$. "
            + "Šajos pāros ietilpstošo skaitļu pavisam ir $100-24 = 76$, pašu "
            + "pāru ir $76/2 = 38$. No katra pāra var ņemt ne vairāk kā vienu skaitli. "
            + "Tātad pavisam var izvēlēties $24 + 38 = 62$ skaitļus."
        },
        /* 29 */
        {
            "id": "c.dirichlet.generalizations.q14",
            "questionType": "INPUT",
            "length": "2",
            "question": "Katrs no $36$ punktiem kvadrātiskā režģī $6 \\times 6$, nejauši izvēloties, nokrāsots "
            + "vai nu melns vai balts. "
            + "Kāds lielākais punktu skaits var būt balti, lai noteikti atrastos "
            + "horizontāla vai vertikāla taisne, uz kuras ir vismaz $4$ melni punkti?",
            "answer": "17",
            "explanation": "Ja $17$ punkti ir balti, tad $19$ punkti ir melni. "
            + "Tos kaut kā sazīmējot uz $6$ paralēlām taisnēm režģī (piemēram, horizontālajām) "
            + "atradīsies $\\lceil 19/6 \\rceil = 4$ punkti uz vienas horizontālās taisnes. "
            + " "
            + "Ja turpretī izvēlas $18$ baltos punktus, tad arī melno būs $18$ un tos "
            + "režģī $6 \times 6$ varēs iekrāsot pārmaiņus līdzīgi šaha galdiņa krāsojumam.",
            "imgSrc2": [
                "http://85.254.250.28/downloads1/olimpiades/dirihle-princips/exams/dirichlet02-generalizations/c.dirichlet.generalizations.q14.fig1-1.png"
            ]
        },
        /* 30 */
        {
            "id": "c.dirichlet.generalizations.q15",
            "questionType": "INPUT",
            "length": "2",
            "question": "Klasē ir $12$ skolēni. Katrs no viņiem kaut kā izvēlas $n$ klasesbiedrus "
            + "un nosūta katram no viņiem Jaungada apsveikumu. Kādam mazākajam $n$ var apgalvot, "
            + "ka noteikti atradīsies divi tādi klasesbiedri, kas nosūtījuši apsveikumus viens "
            + "otram?",
            "answer": "6",
            "explanation": "Attēlosim klasesbiedrus kā punktus, kas izvietoti uz "
            + "riņķa līnijas. Pavisam tos savieno $C_12^2 = \\frac{12 \\cdot 11}{2}=66$ "
            + "šķautnes jeb vēstuļu sūtīšanas \"kanāli\". Ja tiek sūtītas $12 \\cdot 6$ = $72$ "
            + "vēstules, tad katrai vēstulei nepietiek sava \"kanāla\"; divām jātiek "
            + "sūtītām starp tām pašām virsotnēm - t.i. "
            + "klasesbiedri nosūta vēstules viens otram. "
            + " "
            + "Pretpiemēra veidošanai katru no klasesbiedriem apzīmēsim ar numuru "
            + "no $0$ līdz $11$. Skolēns ar "
            + "numuru $N \\in \\{ 0,\\ldots,11 \\}$ nosūta piecas vēstules skolēniem "
            + "$N+1, \\ldots, N+5$ (ja kāds no skaitļiem $N+i$ ir lielāks vai vienāds "
            + "ar $12$, tad aprēķinām atlikumu $N+i$ dalot ar $12$). Pie šādas "
            + "kārtības neatradīsies nekādi divi skolēni, kuri sūta vēstules viens "
            + "otram, jo $N+i+j$ (kur $i,j$ ir naturāli skaitļi, kas nepārsniedz $5$) "
            + "nevar dot atlikumu $N$, dalot ar $12$.",
            "imgSrc2": [
                "http://85.254.250.28/downloads1/olimpiades/dirihle-princips/exams/dirichlet02-generalizations/c.dirichlet.generalizations.q15.fig1-1.png"
            ]
        },





        /* 31 */
        {
            "id": "c.dirichlet.combinatorics.q1",
            "questionType": "INPUT",
            "length": "4",
            "question": "Konfektes iesaiņotas vairākās pakās, kurās var būt no $11$ līdz $20$ konfekšu. "
            + "Cik konfekšu jāiesaiņo (vienalga kura lieluma pakās) tā, lai noteikti "
            + "atrastos vai nu divas pakas ar vienādu "
            + "konfekšu skaitu vai arī divas pakas ar konfekšu summu $31$?",
            "answer": "106",
            "explanation": "Ir spēkā vienādība: "
            + "$$16+17+18+19+20 = 90.$$ "
            + "Tiklīdz kā konfekšu skaits pārsniedz $91$, tad tās nevar iesaiņot $5$ pakās. "
            + "Ir nepieciešamas vismaz $6$ pakas, kas nozīmē to, ka vismaz divas "
            + "no pakām izrādīsies vienādas vai arī nonāks vienādos attālumos no virknītes "
            + "$11,\\ldots,20$ galiem (t.i. dod summā $31$)."
        },
        /* 32 */
        {
            "id": "c.dirichlet.combinatorics.q2",
            "questionType": "INPUT",
            "length": "4",
            "question": "Morzes ābece pārraida burtus ar divu veidu pīkstieniem - īsajiem un garajiem. "
            + "Piemēram, burtu \"S\" pārraida ar trim īsajiem pīkstieniem. "
            + "Cik 3-pīkstienu kombinācijas jāpārraida, lai vismaz $10$ no šīm "
            + "kombinācijām būtu vienādas (t.i. saturētu vienādu skaitu ar īsajiem un "
            + "garajiem pīkstieniem vienādā secībā)?",
            "answer": "73",
            "explanation": "Pavisam ir astoņas dažādas 3-pīkstienu kombinācijas "
            + "(reizināšanas likums kombinatorikā: $2 \\cdot 2 \\cdot 2 = 8$, jo ir "
            + "trīs pīkstieni un katrs var pieņemt divas vērtības). "
            + "Pārraidot $73$ kombinācijas, iegūstam, ka "
            + "vispopulārākajā 3-pīkstienu kombinācijā nonāks "
            + "$\\lceil 73/8 \\rceil = \\lceil 9.125 \\rceil = 10$ no tām."
        },
        /* 33 */
        {
            "id": "c.dirichlet.combinatorics.q3",
            "questionType": "INPUT",
            "length": "1",
            "question": "Istabā ir $10$ cilvēki; katri divi vai nu pazīst viens otru vai arī nepazīst. "
            + "(Pazīšanās ir simetriska: ja $A$ pazīst $B$, tad arī $B$ pazīst $A$.) "
            + "Izvēlamies cilvēku $X$ starp šiem $10$ cilvēkiem. "
            + "Kāds ir lielākais skaits cilvēku, kas vai nu visi pazīst $X$, vai arī "
            + "visi nepazīst $X$?",
            "answer": "5",
            "explanation": "Cilvēkam $X$ ir pavisam $9$ dažādi citi cilvēki. "
            + "Katru no tiem var pazīt vai nepazīt. Vismaz $5$ no šiem "
            + "cilvēkiem būs attiecībā \"pazīst\" vai arī attiecībā \"nepazīst\". "
            + "$9$ cilvēkus dala divu veidu \"būrīšos\"."
        },
        /* 34 */
        {
            "id": "c.dirichlet.combinatorics.q4",
            "questionType": "INPUT",
            "length": "2",
            "question": "Vecmāmiņa kāpj pa trepēm $49$ pakāpienus, ar vienu soli pārvarot "
            + "$1$, $2$ vai $3$ pakāpienus. Pavisam viņai nepieciešami "
            + "$30$ soļi augšup. Ja vecmāmiņa piecreiz uzkāpj pa šīm trepēm, "
            + "cik reižu viņa ciemojusies uz tā pakāpiena, "
            + "uz kura viņa bijusi visbiežāk "
            + "(pašu apakšējo - $0$-to un pašu augšējo - $49$-to neskaitot)?",
            "answer": "4",
            "explanation": "Pavisam ir $48$ pakāpieni (neskaitot apakšējo un augšējo). "
            + "0-tajā solī vecmāmiņa ir uz apakšējā pakāpiena, bet 30-tajā solī - uz "
            + "augšējā. Tādēļ viņai katrā uzkāpšanas reizē ir $29$ soļi uz pakāpieniem "
            + "kaut kur pa vidu. Iegūstam, $29 \\cdot 5 = 145$. Sadalot $145$ uz $48$ "
            + "\"būrīšiem\" iegūstam, ka vismaz vienā būrītī būs vismaz "
            + "$\\lceil 145/48 \\rceil = \\lceil 3.02 \\rceil = 4$ objekti. "
            + "(<b>Piezīme:</b> Spēja kāpt tieši pa $1$, $2$ vai $3$ nav būtiska - varētu atļaut "
            + "kāpt arī lielāku skaitu pakāpienu, atbilde no tā nemainītos.)"
        },
        /* 35 */
        {
            "id": "c.dirichlet.combinatorics.q5",
            "questionType": "MC",
            "question": "Ir $15$ sarkani un $15$ zaļi aplīši; uz katra aplīša uzrakstīts cits skaitlis "
            + "no $1$ līdz $100$. Vai noteikti var atrast divus tādus pārus (katrā pārī ir "
            + "$1$ sarkans un $1$ zaļš aplītis), ka abos pāros "
            + "skaitļu summas ir vienādas?",
            "alternatives": [
                "Jā",
                "Nē"
            ],
            "answer": "a",
            "explanation": "Iespējamo aplīšu pāru ir$15 \\cdot 15 = 225$ (reizināšanas "
            + "likums: pirmajā solī izvēlas jebkuru no sarkanajiem aplīšiem; otrajā solī - jebkuru "
            + "no zaļajiem aplīšiem), savukārt summu ir tikai $199$ (no $1+1=2$ līdz "
            + "$100 + 100 = 200$). Tādēļ pēc Dirihlē principa, divi no pārīšiem "
            + "iekritīs tanī pašā summā. "
            + " "
            + "Nevar gadīties, ka atrastie pāri "
            + "daļēji pārklājas. Ja sarkanā/zaļā aplīša pāris ir $(s_1,z_1)$ kā arī "
            + "$(s_1,z_2)$, turklāt $s_1 + z_1 = s_1 + z_2$; pēc noīsināšanās: "
            + "$z_1 = z_2$. Tātad abi pāri sakrīt - tie nevar daļēji pārklāties. "
            + "Līdzīgi pamato arī gadījumam, ja zaļie aplīši abos pāros sakristu (tad "
            + "būtu jāsakrīt arī sarkanajiem - bet Dirihlē princips nodrošina, ka būs "
            + "divi dažādi pāri)."
        },
        /* 36 */
        {
            "id": "c.dirichlet.combinatorics.q6",
            "questionType": "MC",
            "question": "Ir $10$ sarkani un $10$ zaļi aplīši; uz katra aplīša uzrakstīts cits skaitlis "
            + "no $1$ līdz $100$. Vai noteikti var atrast divus pārus, kuros ietilpst "
            + "pa vienam sarkanam un vienam zaļam aplītim, uz kuriem uzrakstīto skaitļu "
            + "summas ir vienādas?",
            "alternatives": [
                "Jā",
                "Nē"
            ],
            "answer": "b",
            "explanation": "Var gadīties, ka nevar atrast divus šādus pārus. "
            + "Pretpiemēru var izveidot, izvēloties sarkanos "
            + "aplīšus, kas visi dalās ar $10$: $(10,20,\\ldots,100)$. "
            + "Toties zaļie aplīši ir $(1,2,\\ldots,10)$. "
            + "Katra summa $S \\in [2,200]$ viennozīmīgi izsakās kā tieši viens no zaļajiem "
            + "aplīšiem (atkarībā no atlikuma, kas rodas $S$ dalot ar $10$) un "
            + "tieši viens no sarkanajiem aplīšiem: ja no $S$ atņem skaitli uz zaļā aplīša."
        },
        /* 37 */
        {
            "id": "c.dirichlet.combinatorics.q7",
            "questionType": "MC",
            "question": "Vai starp $51$ skaitļiem noteikti var atrast divus tādus skaitļus $a$ un $b$, "
            + "ka to summa vai starpība dalās ar $100$?",
            "alternatives": [
                "Jā",
                "Nē"
            ],
            "answer": "b",
            "explanation": "Var izvēlēties $51$ skaitļus: $\\{ 50,51,\\ldots,100 \\}$. "
            + "Visas starpības nepārsniedz $50$. Visas summas ir vismaz $50+51 = 101$ "
            + "un nepārsniedz $99+100 = 199$."
        },
        /* 38 */
        {
            "id": "c.dirichlet.combinatorics.q8",
            "questionType": "INPUT",
            "length": "2",
            "question": "Dotas $8$ pēc izskata vienādas monētas, kuru masas ir dažādas. "
            + "Doti sviras svari ar diviem kausiem un bez atsvariem, uz kuriem var "
            + "uzlikt jebkuras divas monētas un noskaidrot, kura ir smagāka. "
            + "Kādam lielākajam $n$ noteikti nepietiek ar $n$ svēršanām, lai atrastu smagāko "
            + "monētu.",
            "answer": "6",
            "explanation": "Ja ar $n$ svēršanām ir atrasta smagākā monēta, "
            + "tad tas nozīmē, ka tā ir salīdzināta ar visām $7$ pārējām monētām "
            + "(vai nu tieši: salīdzinot smagāko ar kādu citu, vai arī netieši: "
            + "salīdzinot smagāko ar vienu, pēc tam to ar vēl kādu utt.)."
            + "Citiem vārdiem sakot, ja katru svēršanu iztēlo kā monētu "
            + "savienošanu ar svītriņu, tad svēršanu beigās eksistē ceļš "
            + "ar vienu vai vairākām svītriņām, kas ved no smagākās uz jebkuru citu. "
            + "Nedrīkst palikt izolēti gabali, kas nekad nav salīdzināti ar to "
            + "monētu, kuru esam pasludinājuši par smagāko. "
            + " "
            + "Pirms visām svēršanām katra monēta veido \"izolētu gabalu\", tad "
            + "veicot $6$ svēršanas gabalu skaits var samazināties no $8$ līdz $2$ "
            + "(katra svēršana var sasaistīt kopā divus gabalus). Bet ar to "
            + "nepietiek, lai nonāktu līdz vienam gabalam. "
        },
        /* 39 */
        {
            "id": "c.dirichlet.combinatorics.q9",
            "questionType": "INPUT",
            "length": "2",
            "question": "Dotas $12$ pēc izskata vienādas monētas. Viena no tām ir viltota. "
            + "Visas citas monētas ir ar vienādu masu, bet viltotā ir vai nu vieglāka "
            + "vai smagāka par tām. Doti sviras svari ar diviem svaru kausiem un "
            + "bez atsvariem; var noskaidrot vai kreisais svaru kauss ir smagāks/vienāds/vieglāks "
            + "par labo svaru kausu.<br/> "
            + "Atrast lielāko $n$, kuram var pamatot, ka ar $n$ svēršanām uz sviru "
            + "svariem <b>nepietiek</b>, lai atrastu viltoto monētu un uzzinātu "
            + "vai tā smagāka/vieglāka par citām.",
            "answer": "2",
            "explanation": "Mums uzdevumā jāspēj izšķirt $12 \\cdot 2 = 24$ dažādas "
            + "situācijas (ikviena no $12$ monētām var izrādīties viltota, turklāt "
            + "tā var būt gan smagāka, gan vieglāka par citām.) Ar divām svēršanām, kam "
            + "iespējami trīs iznākumi, var iegūt $9$ dažādus rezultātus. Tā kā $24 > 9$, "
            + "tad ar šiem iznākumiem nepietiek, lai atšķirtu visas iespējas."
        },
        /* 40 */
        {
            "id": "c.dirichlet.combinatorics.q10",
            "questionType": "INPUT",
            "length": "4",
            "question": "Latviešu alfabētā ir $33$ burti. Kādā skolā katrs skolēns parakstās ar "
            + "iniciāļiem - tieši diviem latviešu alfabēta burtiem (abi burti "
            + "var būt arī vienādi). "
            + "Kāds var būt vismazākais skolēnu skaits skolā, lai noteikti atrastos "
            + "divi skolēni ar vienādiem iniciāļiem, kurus viņi raksta tieši tanī "
            + "pašā secībā?",
            "answer": "1090",
            "explanation": "Iespējamo iniciāļu pāru (t.i. Dirihlē principa \"būrīšu\") "
            + "ir $33 \\cdot 33 = 1089$. Ja skolēnu būs par vienu vairāk, tad "
            + "diviem no viņiem būs jānonāk vienā \"būrītī\", t.i. jāizmanto tie paši iniciāļi "
            + "tanī pašā secībā.<br/> "
            + "Ja skolēnu ir $1089$ vai mazāk, katram var būt cits iniciāļu pāris."
        },
        /* 41 */
        {
            "id": "c.dirichlet.combinatorics.q11",
            "questionType": "INPUT",
            "length": "4",
            "question": "Miķelītis $n$ reizes pēc kārtas meta monētu un katrā "
            + "reizē pierakstīja \"C\", ja uzkrita \"cipars\" un \"Ģ\", ja uzkrita "
            + "ģerbonis - šādi iegūstot $n$ burtu virknīti. "
            + "Kādai mazākajai $n$ vērtībai šajā virknītē noteikti "
            + "atradīsies divi vienādi lasāmi $3$-burtu fragmenti (šie "
            + "fragmenti drīkst daļēji pārklāties - piemēram \"CĢCĢC\" divas "
            + "reizes satur fragmentu \"CĢC\").",
            "answer": "11",
            "explanation": "Ja virknītes garums ir $11$ burti, tad tajā ir deviņi "
            + "trīsburtu gabali (pirmais sākas ar 1.burtu, pēdējais - ar 9.burtu). "
            + "No deviņiem gabaliem vismaz divi sakritīs, jo no diviem "
            + "burtiem var izveidot tikai $2^3=8$ dažādus trīsburtu gabalus.<br/>"
            + "Atbilde $10$ neder, jo var rasties virkne \"CCCĢCĢĢĢCC\", kurā "
            + "katrs no astoņiem trīsburtu gabaliem ietilpst tieši vienreiz."
        },
        /* 42 */
        {
            "id": "c.dirichlet.combinatorics.q12",
            "questionType": "INPUT",
            "length": "2",
            "question": "Kādu lielāko skaitu laidņu var izvietot uz šaha galdiņa $6 \\times 6$ "
            + "tā, lai tie viens otru neapdraud (t.i. neatrodas uz vienas diagonāles)?",
            "answer": "10",
            "explanation": "Ir divu veidu laidņi - uz melnajām un uz baltajām "
            + "diagonālēm. Ja aplūkojam melnās diagonāles, tad tām eksistē "
            + "divi virzieni (no kreisā augšējā uz labo apakšējo stūri un "
            + "no labā augšējā uz kreiso apakšējo). Dirihlē principa lietošanai "
            + "izdevīgāks tas virziens uz kura ir mazāk diagonāļu ($5$ diagonāles "
            + "nevis $6$ - sk. pelēkās bultiņas 1.zīmējumā). Uz katras no $5$ diagonālēm "
            + "var novietot ne vairāk par vienu laidni. Tas pats sakāms arī par "
            + "baltajām diagonālēm. Tādēļ laidņu nevar būt vairāk par $5+5=10$.<br/> "
            + "Veids, kā izvietot $10$ laidņus ir parādīts 2.zīmējumā.",
            "imgSrc2": [
                "http://85.254.250.28/downloads1/olimpiades/dirihle-princips/exams/dirichlet03-combinatorics/c.dirichlet.combinatorics.q12.fig1-1.png",
                "http://85.254.250.28/downloads1/olimpiades/dirihle-princips/exams/dirichlet03-combinatorics/c.dirichlet.combinatorics.q12.fig2-1.png"
            ]
        },
        /* 43 */
        {
            "id": "c.dirichlet.combinatorics.q13",
            "questionType": "INPUT",
            "length": "2",
            "question": "Kāds mazākais skaits torņu jānovieto uz šaha galdiņa $6 \\times 6$ rūtiņas, "
            + "lai no tiem noteikti varētu izvēlēties trīs torņus, kuri "
            + "viens otru neapdraud (t.i. neatrodas uz vienas horizontāles vai "
            + "vienas vertikāles)?",
            "answer": "13",
            "explanation": "Ja torņu ir $12$ vai vēl mazāk, tad tos var izvietot tikai "
            + "divās horizontālēs - šādā gadījumā $3$ savstarpēji neapdraudošus "
            + "torņus no tiem izvēlēties nevar.<br/> "
            + "Ja torņu ir $13$, tad atrodam horizontāli $H_1$, kurā ir vismaz trīs torņi. "
            + "Tāda noteikti atrodas pēc Dirihlē principa ($13$ torņus izvieto "
            + "$6$ horizontālēs). Atzīmējam šajā horizontālē trīs torņus. "
            + "Pēc tam šo horizontāli svītrojam.<br />"
            + "Mums tagad noder novērtējums no augšas (nevienā horizontālē nevar "
            + "būt vairāk kā $6$ torņi); tādēļ pēc izsvītrošanas paliek pāri vismaz "
            + "$13-6=7$ torņi. No atlikušajām horizontālēm atrodam tādu $H_2$, kurā atrodas vismaz "
            + "$2$ torņi un izsvītrojam arī to. Arī tajā nav vairāk kā $6$ torņi, "
            + "tāpēc paliek vismaz vēl viens tornis. Šo horizontāli apzīmējam ar $H_3$.<br/>"
            + "No $H_3$ izvēlamies vienīgo tur garantēti esošo torni. Izsvītrojam šī torņa "
            + "vertikāli no $H_1$ un $H_2$ (tur paliek attiecīgi divi un viens tornis). "
            + "Pēc tam ņemam neizsvītroto torni no $H_2$ un izsvītrojam arī viņa vertikāli. "
            + "Visbeidzot ņemam neizsvītroto torni no $H_1$. Šī procesa beigās mums ir "
            + "trīs torņi, kas cits citu neapdraud."
        },
        /* 44 */
        {
            "id": "c.dirichlet.combinatorics.q14",
            "questionType": "MULTIPART",
            "question": "Spēlētājs $A$ izvēlas $10$ divciparu skaitļus. Spēlētājs $B$ "
            + "no tiem izvēlas netukšu apakškopu (t.i. vienu vai vairākus "
            + "skaitļus; varbūt arī visus $10$); pēc tam $B$ visus izvēlētos "
            + "skaitļus saskaita. Kāda ir mazākā un kāda lielākā "
            + "summa, ko $B$ var iegūt?",
            "parts": [
                {
                    "questionType": "INPUT",
                    "length": "4",
                    "cue": "Mazākā summa"
                },
                {
                    "questionType": "INPUT",
                    "length": "4",
                    "cue": "Lielākā summa"
                }
            ],
            "answer": "10,945",
            "explanation": "Ja spēlētājs $A$ izvēlējās kopu, kurā ietilpst "
            + "skaitlis $10$, bet $B$ izvēlējās tieši šo skaitli $10$, tad "
            + "tas arī ir mazākais.<br/> "
            + "Lielākā summa, ko var iegūt, ir $90+\\ldots+99 = 945$."
        },
        /* 45 */
        {
            "id": "c.dirichlet.combinatorics.q15",
            "questionType": "MULTIPART",
            "question": "Spēlētājs $A$ izvēlas $10$ divciparu skaitļus. Spēlētājs $B$ "
            + "no tiem izvēlas netukšu apakškopu, t.i. vienu vai vairākus "
            + "skaitļus (varbūt arī visus $10$) no tiem, ko paņēma $A$.<br/> "
            + "1. Cik dažādos veidos $B$ to var izdarīt?<br/> "
            + "2. Vai neatkarīgi no $A$ izvēles, $B$ noteikti varēs atrast divas dažādas apakškopas, kurās "
            + "skaitļu summas ir vienādas?",
            "parts": [
                {
                    "questionType": "INPUT",
                    "length": "4",
                    "cue": "Cik veidos $B$ var izvēlēties apakškopu?"
                },
                {
                    "questionType": "MC",
                    "alternatives": [
                        "Jā",
                        "Nē"
                    ],
                    "cue": "Vai vienmēr atradīsies 2 apakškopas ar vienādu summu "
                }
            ],
            "answer": "1023,a",
            "explanation": "No $10$ elementiem apakškopas var izvēlēties "
            + "$2^{10}=1024$ dažādos veidos. Tukšā apakškopa mums neder, "
            + "tādēļ faktiski rezultāts ir par vienu mazāks: $1024-1 = 1023$.<br/>"
            + "Tā kā iespējamo summu ir $945-9 = 936$ (sk. iepriekšējo "
            + "testa jautājumu), bet iespēju izvēlēties netukšu apakškopu ir $1023 > 936$, "
            + "tad vismaz viena summa būs pārstāvēta divas reizes."
        },





        /* 46 */
        {
            "id": "c.dirichlet.shapes.q1",
            "questionType": "INPUT",
            "length": "2",
            "question": "Kāds ir lielākais taisnstūrīšu $1 \\times 2$ skaits, kuros var sagriezt "
            + "kvadrātu $6 \\times 6$, kam noņemtas divas rūtiņas kvadrāta pretējos stūros? "
            + "Griešana jāveic pa rūtiņu līnijām.",
            "imgSrc": [
                "http://85.254.250.28/downloads1/olimpiades/dirihle-princips/exams/dirichlet04-shapes/c.dirichlet.shapes.q1.fig1-1.png"
                ],
            "answer": "16",
            "explanation": "Šādā kvadrātā ir $16$ baltas un $18$ melnas rūtiņas. "
            + "Ja vēlēsimies ievietot $(36-2)/2=17$ taisnstūrīšus (katram no kuriem jāsatur "
            + "viena balta un viena melna rūtiņa), izrādīsies, ka $16$ baltajām rūtiņām "
            + "uzklājušās $17$ figūriņas, t.i. katram taisnstūrītim baltas rūtiņas nepietiks."
        },
        /* 47 */
        {
            "id": "c.dirichlet.shapes.q2",
            "questionType": "INPUT",
            "length": "4",
            "question": "Dots kvadrātisks punktu režģis $3 \\times n$. Katrs punkts šajā režģī "
            + "nokrāsots zils vai sarkans. "
            + "Pie kāda mazākā $n$ tajā noteikti var atrast taisnstūri ar "
            + "malām paralēlām režģa malām, kuram visas virsotnes ir "
            + "vienā krāsā?",
            "imgSrc": [
                "http://85.254.250.28/downloads1/olimpiades/dirihle-princips/exams/dirichlet04-shapes/c.dirichlet.shapes.q2.fig1-1.png"
            ],
            "answer": "7",
            "explanation": "Ja ir kāda vertikāle uz kuras atrodas visi trīs "
            + "punkti vienā krāsā (piemēram, sarkanā), "
            + "tad pievienojot vēl četras vertikāles - ne uz vienas "
            + "no tām nevarēs likt divus sarkanus punktus, t.i. būs kombinācijas "
            + "$(Z,Z,Z)$, $(Z,Z,S)$, $(Z,S,Z)$ vai $(S,Z,Z)$. Ja kāda no tām "
            + "atkārtojas (vai ir kopā ar $(Z,Z,Z)$), iegūstam zilu taisnstūri. "
            + "Tātad šajā gadījumā lielākais vertikāļu skaits ir $4$: "
            + "$(S,S,S)$, $(Z,Z,S)$, $(Z,S,Z)$ vai $(S,Z,Z)$.<br/> "
            + "Ja turpretī neeksistē tāda vertikāle uz kuras visi trīs punkti "
            + "ir vienā krāsā, tad var uzlikt $6$ kombinācijas - ar diviem sarkaniem "
            + "un vienu zilu punktu vai otrādi (ar vienu sarkanu un diviem ziliem). "
            + "Tiklīdz kā liksim $7$ kombinācijas, tad divas atkārtosies."

        },
        /* 48 */
        {
            "id": "c.dirichlet.shapes.q3",
            "questionType": "INPUT",
            "length": "4",
            "question": "Dots punktu režģis $5 \\times n$. Visi punkti nokrāsoti zili vai sarkani (1.zīm.). "
            + "Pie kāda $n$ tajā noteikti var atrast režģi $3 \\times 3$, kurā visas virsotnes ir "
            + "vienā krāsā (2.zīm.)?",
            "imgSrc": [
                "http://85.254.250.28/downloads1/olimpiades/dirihle-princips/exams/dirichlet04-shapes/c.dirichlet.shapes.q3.fig1-1.png",
                "http://85.254.250.28/downloads1/olimpiades/dirihle-princips/exams/dirichlet04-shapes/c.dirichlet.shapes.q3.fig2-1.png"
            ],
            "answer": "41",
            "explanation": "Lielākais skaits vertikāļu, neveidojot vienkrāsas režģi "
            + "$3 \times 3$ iegūstamas tad, ja liek "
            + "visos iespējamajos veidos pa diviem eksemplāriem "
            + "trīs sarkanas un divas zilas virsotnes (šādu veidu ir "
            + "$C_5^3=10$; ja katru atkārto divreiz: $20$) un arī visos iespējamajos veidos "
            + "divas sarkanas un trīs zilas (šādu veidu arī ir kopā ar atkārtojumiem $20$).<br/> "
            + "Tiklīdz kā vertikāļu būs vismaz $41$, atradīsies $\\lceil 41/20 \\rceil = 3$ "
            + "pilnīgi vienādi izkrāsotas vertikāles, kurās trīs punkti ir vienā krāsā "
            + "(piemēram, sarkanā), bet divi citi punkti ir citā krāsā (piemēram, zilā). "
            + "Tad arī būsim atraduši vienkrāsainu (piemēram, sarkanu) režģi."
        },
        /* 49 */
        {
            "id": "c.dirichlet.shapes.q4",
            "questionType": "INPUT",
            "length": "4",
            "question": "Uz taisnes ik pēc $1$ centimetra ir atzīmēts punkts, kas "
            + "nokrāsots vienā no trim krāsām (zils, zaļš vai sarkans). "
            + "Kāds mazākais punktu "
            + "skaits no tiem jāizvēlas, lai starp izvēlētajiem noteikti atrastos trīs punkti "
            + "$A,B,C$, kas visi ir vienā krāsā, un visi attālumi centimetros "
            + "starp tiem dalās ar $3$?",
            "answer": "19",
            "explanation": "Ieviešam uz taisnes \"koordinātu sākumpunktu\" - kādu "
            + "no atzīmētajiem punktiem, kura koordināti pasludinām vienādu ar $0$. "
            + "Katrs cits punkts iegūst kādu veselu skaitļu koordināti (pozitīvu vai "
            + "negatīvu), kas izsaka, cik tālu tas ir no koordinātu sākumpunkta pa "
            + "labi vai pa kreisi.<br/>"
            + "Katram punktam atzīmējam, kādu atlikumu dod šī punkta koordināte, to dalot ar $3$. "
            + "Būrīši mūsu gadījumā ir deviņas krāsu-atlikumu kombinācijas "
            + "(piemēram, \"sarkanie punkti, kuru koordinātes dalās ar $3$\" vai \"zilie punkti, "
            + "kuru koordinātes dod atlikumu $2$, dalot ar $3$\"). Tiklīdz kādā no "
            + "šādiem būrīšiem nonāks trīs punkti, būsim ieguvuši vēlamo rezultātu: "
            + "trīs punktus $A,B,C$, kas visi ir vienā krāsā un visi attālumi starp tiem dalās ar $3$.<br/> "
            + "Mazākais punktu skaits, kas to nodrošina ir $19$, jo $19/9$ augšējā veselā "
            + "daļa ir $3$."
        },
        /* 50 */
        {
            "id": "c.dirichlet.shapes.q5",
            "questionType": "INPUT",
            "length": "2",
            "question": "Andrītis un Mārīte krāsoja šaha galdiņu $8 \\times 8$, kuram "
            + "izņemta stūra rūtiņa trīs krāsās - t.i. tajā ir pavisam $63$ rūtiņas. "
            + "Andrīša krāsojumā zilā krāsa lietota $22$ reizes, zaļā krāsa $21$ reizi, "
            + "sarkanā krāsa $20$ reizes (1.zīm.). Mārītes krāsojumā visas krāsas "
            + "lietotas $21$ reizi (2.zīm.).<br/> "
            + "Kādam lielākajam $n$ uz šī šaha galdiņa (neizmantojot izņemto "
            + "stūra rūtiņu) varēs novietot $n$ taisnstūrīšus $1 \\times 3$? ",
            "imgSrc": [
                "http://85.254.250.28/downloads1/olimpiades/dirihle-princips/exams/dirichlet04-shapes/c.dirichlet.shapes.q5.fig1-1.png",
                "http://85.254.250.28/downloads1/olimpiades/dirihle-princips/exams/dirichlet04-shapes/c.dirichlet.shapes.q5.fig2-1.png"
            ],
            "answer": "20",
            "explanation": "Pretrunas iegūšanai izdevīgāks Andrīša krāsojums, kurā "
            + "ir tikai $20$ sarkanas rūtiņas. Tiklīdz kā mēģināsim izvietot $21$ taisnstūrīti, "
            + "izrādīsies, ka sarkano rūtiņu visiem taisnstūrīšiem nepietiek. "
            + "$20$ taisnstūrīšus, acīmredzot, var izvietot (3.zīm.).",
            "imgSrc2": [
                "http://85.254.250.28/downloads1/olimpiades/dirihle-princips/exams/dirichlet04-shapes/c.dirichlet.shapes.q5.fig3-1.png"
            ]
        },
        /* 51 */
        {
            "id": "c.dirichlet.shapes.q6",
            "questionType": "INPUT",
            "length": "2",
            "question": "Šaha galdiņu $8 \\times 8$ (ar vienu izgrieztu rūtiņu \"C3\") "
            + "Andrītis un Mārīte krāsoja katrs savā virzienā pa "
            + "diagonālēm trīs krāsās (attālumi "
            + "starp vienādi krāsotām diagonālēm ir $3$ vienības). Abiem "
            + "sanāca vienāds rūtiņu skaits visās trīs krāsās (1.zīm. un 2.zīm.). "
            + "Kādam lielākajam $n$ uz šī šaha galdiņa (neizmantojot rūtiņu \"C3\") "
            + "varēs novietot $n$ taisnstūrīšus $1 \\times 3$? ",
            "imgSrc": [
                "http://85.254.250.28/downloads1/olimpiades/dirihle-princips/exams/dirichlet04-shapes/c.dirichlet.shapes.q6.fig1-1.png",
                "http://85.254.250.28/downloads1/olimpiades/dirihle-princips/exams/dirichlet04-shapes/c.dirichlet.shapes.q6.fig2-1.png"
            ],
            "answer": "21",
            "explanation": "Šoreiz Dirihlē princips pretrunu nedod, tādēļ "
            + "ir jēga mēģināt novietot $63/3=21$ taisnstūrīti. "
            + "Konstrukciju ar $21$ taisnstūrīti var atrast "
            + "ar mēģinājumu un kļūdu metodi - tā attēlota 3.zīmējumā.",
            "imgSrc2": [
                "http://85.254.250.28/downloads1/olimpiades/dirihle-princips/exams/dirichlet04-shapes/c.dirichlet.shapes.q6.fig3-1.png"
            ]
        },
        /* 52 */
        {
            "id": "c.dirichlet.shapes.q7",
            "questionType": "INPUT",
            "length": "2",
            "question": "Uzzīmēta liela trijstūrveida figūra "
            + "(1.zīm., to veido $16$ mazi trijstūrīši), katrā mazajā trijstūrītī "
            + "ierakstīts $5$ vai $7$. "
            + "Skaitļu summa lielajā figūrā ir $94$. Kādu skaitli noteikti nepārsniedz "
            + "skaitļu summa 2.zīmējumā attēlotajā figūrā "
            + "(to veido $4$ mazie trijstūrīši, var būt dažādi pagriezta), "
            + "kur šī skaitļu summa ir vismazākā?",
            "imgSrc": [
                "http://85.254.250.28/downloads1/olimpiades/dirihle-princips/exams/dirichlet04-shapes/c.dirichlet.shapes.q7.fig1-1.png"
            ],
            "answer": "22",
            "explanation": "Skaitlis $94$ izsakāms kā $9 \\times 5 + 7 \\times 7$; "
            + "citādi to izteikt nevar (palielinot skaitļu $5$ vai $7$ skaitu, to "
            + "summa attiecīgi samazināsies vai palielināsies). "
            + "Ja sadalām lielo figūru četrās mazajās figūrās (3.zīm.), iegūsim, "
            + "ka vismaz vienā no četrām mazajām figūrām būs vismaz trīs skaitļi $5$. "
            + "Tādēļ tur ierakstīto skaitļu summa nepārsniegs $5 + 5 + 5 + 7 = 22$.",
            "imgSrc2": [
                "http://85.254.250.28/downloads1/olimpiades/dirihle-princips/exams/dirichlet04-shapes/c.dirichlet.shapes.q7.fig3-1.png"
            ]
        },
        /* 53 */
        {
            "id": "c.dirichlet.shapes.q8",
            "questionType": "INPUT",
            "length": "2",
            "question": "Plaknē atzīmēti $11$ punkti, nekādi trīs no tiem neatrodas uz vienas taisnes. "
            + "Katri divi savienoti ar nogriezni kādā no četrām krāsām - zilu, zaļu, oranžu "
            + "vai sarkanu. Kāds ir lielākais skaitlis $n$ ar īpašību, ka šajā zīmējumā noteikti "
            + "atradīsies $n$ nogriežņi vienā krāsā?",
            "answer": "14",
            "hints": [
                "No $11$ punktiem nesakārtotu $2$ virsotņu pāri var izvēlēties $\\frac{11 \\cdot 10}{2}$ veidos."
            ],
            "explanation": "Ir pavisam $55$ nogriežņi, kas kaut kā sadalīti pa četrām "
            + "krāsām. Tādēļ saskaņā ar Dirihlē principu atradīsies vismaz "
            + "$\\lceil 55/4 \\rceil = 14$ nogriežņi vienā krāsā. "
        },
        /* 54 */
        {
            "id": "c.dirichlet.shapes.q9",
            "questionType": "INPUT",
            "length": "2",
            "question": "Dota no sešstūrīšiem veidota figūriņa (1.zīm.), "
            + "kurai izņemts vidējais sešstūrītis. Katrā sešstūrītī ierakstīts"
            + "skaitlis $3$ vai $5$. Visu ierakstīto skaitļu summa ir $68$. "
            + "Kādam vismazākajam $n$ "
            + "noteikti atradīsies tāda trīs sešstūrīšu figūriņa (2.zīm.), "
            + "kurā ierakstīto trīs skaitļu summa ir vismaz $n$?",
            "imgSrc": [
                "http://85.254.250.28/downloads1/olimpiades/dirihle-princips/exams/dirichlet04-shapes/c.dirichlet.shapes.q9.fig1-1.png"
            ],
            "answer": "13",
            "explanation": "Summu $76$ var iegūt tad, ja skaitļi "
            + "$5$ un $3$ ņemti attiecīgi $11$ un $7$ reizes, jo "
            + "$$7 \\cdot 5 + 11 \\cdot 3 = 35+33 = 68.$$ "
            + "1.zīmējumā redzamo figūru var sagriezt sešos gabalos tā, "
            + "ka katrs gabals sakrīt ar 2.zīmējumā redzamo figūru. "
            + "Skaitlis $5$ ir sastopams $7$ reizes, tādēļ "
            + "vismaz vienā no 2.zīm. gabaliem nonāks vismaz divi skaitļi $5$. "
            + "Tādēļ šajā gabalā ierakstīto skaitļu summa būs vismaz $5+5+3 = 13$."
        },
        /* 55 */
        {
            "id": "c.dirichlet.shapes.q10",
            "questionType": "MC",
            "question": "Vienības kvadrātā ($1 \\times 1$ garuma vienības) "
            + "atzīmēti $5$ punkti. Ir spēkā apgalvojums, ka neatkarīgi "
            + "no punktu izvietojuma atradīsies divi tādi punkti, "
            + "kuru attālums nepārsniedz $a$.  Atrast lielāko $a$, kuram šis "
            + "apgalvojums ir spēkā.",
            "alternatives": [
                "$\\sqrt{2}$",
                "$1$",
                "$\\sqrt{2}/2$",
                "$1/2$"
            ],
            "answer": "c",
            "hints": [
                "Tā kā ir atzīmēt pieci punkti, ir izdevīgi sadalīt kvadrātu četros gabalos."
            ],
            "explanation": "Attālums starp tuvākajiem punktiem nepārsniedz "
            + "$\\sqrt{2}/2$. Sadalām vienības kvadrātu četros mazākos kvadrātiņos "
            + "(sk. zīmējumu). Pēc Dirihlē principa vismaz divi punkti atradīsies "
            + "vienā no kvadrātiņiem ar malas garumu $1/2$. Lielākais iespējamais "
            + "attālums ir tad, ja tie atrodas pretējās kvadrāta virsotnēs. "
            + "Tad to attālums ir $\\sqrt{2}/2$.<br/> "
            + "Šo novērtējumu nevar uzlabot, jo var $5$ punktus novietot tā, ka četri "
            + "no tiem nonāk lielā kvadrāta četrās virsotnēs, bet piektais punkts - "
            + "lielā kvadrāta centrā. Tad visi attālumi starp punktiem nepārsniedz "
            + "$\\sqrt{2}/2$.",
            "imgSrc2": [
                "http://85.254.250.28/downloads1/olimpiades/dirihle-princips/exams/dirichlet04-shapes/c.dirichlet.shapes.q10.fig1-1.png"
            ]
        },
        /* 56 */
        {
            "id": "c.dirichlet.shapes.q11",
            "questionType": "MULTIPART",
            "question": "Uz figūras $F$ atzīmēti $16$ punkti. Figūru "
            + "pārgriež $7$ vietās tā, ka neviens griezums nesakrīt ar "
            + "kādu no atzīmētajiem punktiem. "
            + "Kāds ir mazākais iespējamais skaits punktu uz tā gabala, uz kura "
            + "atzīmēto punktu ir visvairāk? Aplūkot divus gadījumus:<br/>"
            + "(a) $F$ ir nogrieznis; (b) $F$ ir riņķa līnija.",
            "parts": [
                {
                    "questionType": "INPUT",
                    "length": "2",
                    "cue": "$F$ ir nogrieznis"
                },
                {
                    "questionType": "INPUT",
                    "length": "2",
                    "cue": "$F$ ir riņķa līnija"
                }
            ],
            "answer": "2,3",
            "explanation": "Nogriežņa gadījumā $7$ punkti sagriež to $8$ "
            + "gabalos jeb \"būrīšos\", t.i. $16$ punktus pa tiem var sadalīt tā, ka "
            + "uz katra gabala ir divi atzīmētie punkti.<br/>"
            + "Riņķa līniju $7$ griezieni sadala $7$ gabalos, tādēļ uz viena no gabaliem "
            + "būs vismaz $\\lceil 16/7 \\rceil = 3$. "
        },
        /* 57 */
        {
            "id": "c.dirichlet.shapes.q12",
            "questionType": "MC",
            "question": "Vai var uzzīmēt daudzstūri (varbūt neizliektu), kuram "
            + "ir $23$ virsotnes, no kurām $16$ virsotnes atrodas uz "
            + "vienas taisnes?",
            "alternatives": [
                "Jā",
                "Nē"
            ],
            "answer": "b",
            "explanation": "Ja $16$ virsotnes, kas ir uz vienas taisnes, dalītu $23-16=7$ grupiņās "
            + "(par atdalītāju var kalpot tāda virsotne, kas neatrodas uz šīs taisnes), "
            + "vismaz vienā no gabaliem nonāks $\\lceil 16/7 \\rceil = 3$ virsotnes.<br/> "
            + "Bet tad šādas $3$ virsotnes $A$, $B$ un $C$, kuras visas pēc kārtas izvietotas uz "
            + "vienas taisnes, nevar būt daudzstūra virsotnes, jo vidējā virsotne $B$ "
            + "atradīsies uz abu malējo virsotņu veidotās malas $AC$."
        },
        /* 58 */
        {
            "id": "c.dirichlet.shapes.q13",
            "questionType": "MULTIPART",
            "question": "Dots šaha galdiņš $8 \\times 8$, kurā kaut kā atzīmētas $n$ "
            + "rūtiņas. Katrai no četrām figūriņām atrast lielāko $n$ vērtību, "
            + "pie kuras noteikti var novietot šo figūriņu, nepārklājot "
            + "nevienu no atzīmētajām rūtiņām.",
            "parts": [
                {
                    "questionType": "INPUT",
                    "length": "2",
                    "cue": "Kvadrātiņš $1 \\times 1$ (1.zīm.)"
                },
                {
                    "questionType": "INPUT",
                    "length": "2",
                    "cue": "Taisnstūrītis $1 \\times 2$ (2.zīm.)"
                },
                {
                    "questionType": "INPUT",
                    "length": "2",
                    "cue": "\"Stūrītis\" - figūriņa no $3$ rūtiņām (3.zīm.)"
                },
                {
                    "questionType": "INPUT",
                    "length": "2",
                    "cue": "Kvadrātiņš $2 \\times 2$ (4.zīm.)"
                }
            ],
            "imgSrc": [
                "http://85.254.250.28/downloads1/olimpiades/dirihle-princips/exams/dirichlet04-shapes/c.dirichlet.shapes.q13.fig1-1.png"
            ],
            "answer": "63,31,31,15",
            "explanation": "Vienu rūtiņu, protams, var novietot, ja vien "
            + "visas $64$ nav iekrāsotas.<br/>"
            + "Divu vai trīs rūtiņu figūriņas "
            + "var novietot tiklīdz kā iekrāsotas ne vairāk kā $31$, t.i. stingri "
            + "mazāk par pusi no $64$, jo tad vismaz vienā kvadrātiņā 2x2 būs tikai viena iekrāsotā. "
            + "($32$ rūtiņas var iekrāsot kā šaha galdiņu - un tad 2.zīm. un 3.zīm. "
            + "figūriņas tur ievietot nevar.)",
            "imgSrc2": [
                "http://85.254.250.28/downloads1/olimpiades/dirihle-princips/exams/dirichlet04-shapes/c.dirichlet.shapes.q13.fig5-1.png"
            ]
        },
        /* 59 */
        {
            "id": "c.dirichlet.shapes.q14",
            "questionType": "INPUT",
            "length": "2",
            "question": "Doti $n$ nogriežņi, kuru garumi izsakāmi ar veselu skaitu "
            + "milimetru. Kādam mazākajam $n$ no tiem noteikti var izvēlēties "
            + "dažus nogriežņus (vai varbūt tikai vienu nogriezni) tā, "
            + "lai to garumu summa būtu vesels skaits centimetru?",
            "answer": "10",
            "explanation": "Ja ir $10$ nogriežņi ar garumiem $a_1,a_2,\\ldots,a_{10}$, "
            + "varam veidot summas $S_1=a_1$, $S_2=a_1+a_2$, utt. $S_{10}=a_1+a_2+\\ldots+a_{10}$. "
            + "Starp šīm $10$ summām var atrasties kāda, kas izsakāma veselā skaitā "
            + "centimetru - tad vajadzīgais ir iegūts. Ja turpretī starp šīm $10$ summām "
            + "neviena nav izsakāma veselā skaitā centimetru, tad katra no tām pārsniedz "
            + "veselu skaitu centimetru par $1$, $2$, utt. $9$ milimetriem.<br/>"
            + "Šo vērtību ir tikai $9$, tādēļ divas no šīm summām beigsies ar vienādu "
            + "skaitu milimetru. Pieņemsim, ka tās ir, teiksim summas $S_3$ un $S_5$. "
            + "Tad starpība $S_5-S_3 = a_4 + a_5$ ir vesels skaits centimetru, jo milimetri, "
            + "atņemot abus lielumus, iznīcinās.<br/> "
            + "Ja izvēlamies deviņus nogriežņus, kuru garumi "
            + "ir $0.1$ milimetrs, tad nekāda summa ar tiem neveidos "
            + "veselu skaitu centimetru. Tādēļ $10$ ir labākais novērtējums."
        },
        /* 60 */
        {
            "id": "c.dirichlet.shapes.q15",
            "questionType": "INPUT",
            "length": "2",
            "question": "Kādu lielāko skaitu $n$ tetromino (1.zīm.) var izgriezt no kvadrāta "
            + "$9 \\times 9$? Visi griezumi iet pa rūtiņu līnijām.",
            "imgSrc": [
                "http://85.254.250.28/downloads1/olimpiades/dirihle-princips/exams/dirichlet04-shapes/c.dirichlet.shapes.q15.fig1-1.png"
            ],
            "answer": "16",
            "explanation": "Katra tetromino figūriņa pārklāj tieši vienu pelēko "
            + "rūtiņu (2.zīm.). Ja figūriņu būtu vairāk par $16$, tad pelēko rūtiņu "
            + "visām figūriņām nepietiktu. (Novērtējot vienkārši pēc rūtiņu "
            + "skaita, varētu šķist, ka pietiek vietas $\\lfloor 81/4 \\rfloor = 20$ figūriņām, "
            + "bet šāds spriedums ignorētu to, ka daudzie tetromino ir blīvi "
            + "jāsapako bez pārklāšanās.)<br/> "
            + "Ar $16$ figūriņām uzdevumu, acīmredzot var veikt - pietiek ievietot "
            + "vienu no figūriņām kā parādīts ar sarkano kontūru - un pēc tam "
            + "citas iegūt, nobīdot šo figūriņu $2$,$4$ vai $6$ rūtiņas pa labi un/vai uz leju.",
            "imgSrc2": [
                "http://85.254.250.28/downloads1/olimpiades/dirihle-princips/exams/dirichlet04-shapes/c.dirichlet.shapes.q15.fig2-1.png"
            ]
        },





        /* 61 */
        {
            "id": "c.dirichlet.nt.q1",
            "questionType": "MC",
            "question": "Pēterītis iedomājās $9$ naturālus skaitļus. Vai noteikti kāds no šiem "
            + "skaitļiem (vai arī dažu iedomāto skaitļu summa) dalās ar $10$? ",
            "alternatives": [
                "Jā",
                "Nē"
            ],
            "answer": "b",
            "explanation": "Var iedomāties visus $9$ skaitļus, kuri dod "
            + "vienādu atlikumu $1$, dalot ar $10$ (vai arī atlikumu $3$, $7$, $9$). "
            + "Šajā gadījumā jebkura šo skaitļu summa dos atlikumu $1,2,\\ldots,9$, "
            + "dalot ar $10$."
        },
        /* 62 */
        {
            "id": "c.dirichlet.nt.q2",
            "questionType": "MC",
            "question": "Pēterītis iedomājās $10$ naturālus skaitļus. Vai noteikti kāds no šiem "
            + "skaitļiem (vai arī dažu iedomāto skaitļu summa) dalās ar $10$?",
            "alternatives": [
                "Jā",
                "Nē"
            ],
            "answer": "a",
            "explanation": "Veidojam summas, pievienojot arvien "
            + "jaunus iedomātos skaitļus: $a_1$, $a_1+a_2$, $\\ldots$, $a_1+a_2+\\ldots+a_{10}$. "
            + "Ja kāda no šīm summām dalās ar $10$, tad apgalvojums ir pierādīts. "
            + "Ja neviena no summām nedalās ar $10$, tad iespējamie atlikumi, dalot ar $10$, "
            + "var būt $1,2,\\ldots,9$. Summu pavisam ir $10$, bet atlikumu ir $9$, tādēļ "
            + "divas no summām dos vienādus atlikumus, dalot ar $10$. "
            + "(Piemēram $a_1+a_2$ un $a_1+a_2+a_3+a_4$.)<br/> "
            + "No lielākās summas atņemot "
            + "mazāko, iegūsim dažu iedomāto skaitļu summu, kas dalās ar $10$. "
            + "(Mūsu piemērā $(a_1+a_2+a_3+a_4)-(a_1+a_2)=a_3+a_4$.)"
        },
        /* 63 */
        {
            "id": "c.dirichlet.nt.q3",
            "questionType": "INPUT",
            "length": "2",
            "question": "Tabulā apkopoti naturāli skaitļi, to atlikumi, dalot ar $7$, arī "
            + "to kubi un kubu atlikumi, dalot ar $7$. "
            + "Cik naturāli skaitļi jāizvēlas, lai starp tiem noteikti varētu atrast "
            + "divus, kuru kubi dod vienādus atlikumus dalot ar $7$?",
            "imgSrc": [
                "http://85.254.250.28/downloads1/olimpiades/dirihle-princips/exams/dirichlet05-number-theory/c.dirichlet.nt.q3.fig1-1.png"
            ],
            "answer": "4",
            "explanation": "Pavisam ir $3$ dažādi atlikumi, dalot naturālu skaitļu "
            + "kubus ar $7$. Ja izvēlēsimies $4$ skaitļus, tad Dirihlē princips nodrošina, "
            + "ka vismaz diviem no tiem būs vienādi atlikumi, ja skaitļa kubu dala ar $7$.<br/>"
            + "Ievērosim, ka arī naturāliem skaitļiem $n \\geq 7$ atlikumi visu "
            + "laiku periodiski atkārto mūsu tabuliņu. Jo "
            + "$$(n+7)^3 = n^3 + 3 \\cdot n^2 \\cdot 7 + 3 \\cdot n \\cdot 7^2 + 7^3,$$ "
            + "t.i. $(n+7)^3$ var izteikt kā četrus saskaitāmos, no kuriem tikai $n^3$ "
            + "iespaido atlikumu, dalot ar $7$ (jo citi izdalās bez atlikuma). "
            + "Tādēļ $(n+7)^3$ un $n^3$ dod vienādus atlikumus, dalot "
            + "ar $7$. To var apzīmēt svešvārdā: $(n+7)^3$ un $n^3$ ir <i>kongruenti</i> pēc "
            + "$7$ moduļa jeb $(n+7)^3 \\equiv n^3\\;(\\operatorname{mod}\\,7)$)."
        },
        /* 64 */
        {
            "id": "c.dirichlet.nt.q4",
            "questionType": "INPUT",
            "length": "2",
            "question": "Tabulā apkopoti naturāli skaitļi, to kubi un kubu atlikumi, dalot ar $7$. "
            + "Cik naturāli skaitļi (no kuriem neviens nedalās ar $7$) "
            + "jāizvēlas, lai starp tiem noteikti varētu atrast "
            + "trīs, kuru kubi dod vienādus atlikumus dalot ar $7$?",
            "imgSrc": [
                "http://85.254.250.28/downloads1/olimpiades/dirihle-princips/exams/dirichlet05-number-theory/c.dirichlet.nt.q4.fig1-1.png"
            ],
            "answer": "7",
            "explanation": "Pavisam iespējami $3$ dažādi atlikumi, dalot naturālu skaitļu "
            + "kubus ar $7$. Tādēļ, izvēloties septiņus atlikumus, vismaz trīs no tiem sakritīs.<br/> "
            + "Ievērosim, ka arī naturāliem skaitļiem $n \\geq 7$ ir tādi "
            + "paši atlikumi, jo $(n+7)^3 = n^3 + 3 \\cdot n^2 \\cdot 7 + 3 \\cdot n \\cdot 7^2 + 7^3$, "
            + "t.i. $(n+7)^3$ var izteikt kā četrus saskaitāmos, no kuriem visi dalās ar $7$, "
            + "izņemot varbūt $n^3$. Tādēļ $(n+7)^3$ un $n^3$ dod vienādus atlikumus, dalot "
            + "ar $7$."
        },
        /* 65 */
        {
            "id": "c.dirichlet.nt.q5",
            "questionType": "INPUT",
            "length": "2",
            "question": "Tabulā apkopoti naturāli skaitļi, to atlikumi, dalot ar $7$, arī "
            + "to kubi un kubu atlikumi, dalot ar $7$. "
            + "Cik naturāli skaitļi (kas visi dod dažādus atlikumus, dalot ar $7$) "
            + "jāizvēlas, lai starp tiem noteikti varētu atrast skaitļus "
            + "$a$ un $b$, kuriem $a^2 + ab + b^2$ dalās ar $7$?",
            "imgSrc": [
                "http://85.254.250.28/downloads1/olimpiades/dirihle-princips/exams/dirichlet05-number-theory/c.dirichlet.nt.q5.fig1-1.png"
            ],
            "hints": [
                "Var izmantot algebrisku identitāti $a^3-b^3=(a-b)(a^2+ab+b^2)$.",
                "Ja $a^3 - b^3$ dalās ar $7$, bet $a - b$ nedalās ar $7$, "
                + "tad $a^2+ab+b^2$ dalās ar $7$, jo ar $7$ dalās reizinājums "
                + "$(a-b)(a^2+ab+b^2)$."
            ],
            "answer": "4",
            "explanation": "Izvēloties $4$ skaitļus, būs vismaz "
            + "divi vienādi atlikumi $a^3$ un $b^3$, dalot ar $7$, jo "
            + "naturālu skaitļu kubi dod tikai trīs dažādus atlikumus. "
            + "Tā kā $a$ un $b$ dod dažādus atlikumus, dalot ar $7$ (tas bija dots), "
            + "tad $a-b$ nedalās ar $7$.<br/> "
            + "Tādēļ iegūstam, ka $a^3 - b^3$ dalās ar $7$, bet $a - b$ nedalās ar $7$. "
            + "Ir spēkā sadalījums reizinātājos $a^3-b^3=(a-b)(a^2+ab+b^2)$ - tādēļ "
            + "iekava $(a^2+ab+b^2)$ noteikti dalās ar $7$."
        },
        /* 66 */
        {
            "id": "c.dirichlet.nt.q6",
            "questionType": "INPUT",
            "length": "2",
            "question": "Miķelītis izvēlējās dažus skaitļus no $1$ līdz $11$, "
            + "kuru kvadrāti dod dažādus atlikumus, dalot ar $11$. "
            + "Zināms, ka viens no Miķelīša izvēlētajiem skaitļiem ir $4$. "
            + "Kādu skaitli Miķelītis noteikti nedrīkst izvēlēties?",
            "hints": [
                "$n^2$ dod tādu pašu atlikumu kā $(-n)^2$, ja to dala ar $11$."
            ],
            "answer": "7",
            "explanation": "Skaitļa $4$ kvadrāts $4^2=16$ "
            + "dod atlikumu $5$, dalot ar $11$. Arī $(-4)^2 = 16$ dod tādu pašu "
            + "atlikumu. Arī pieskaitot skaitlim $-4$ iegūsim skaitli $-4+11 = 7$, "
            + "kas dos atlikumu $5$. Tiešām: $7^2 = 49$ dod atlikumu $5$. To "
            + "pašu var iegūt, atverot iekavas izteiksmē $(-4 + 11)^2$ - un "
            + "pārliecinoties, ka vienīgais saskaitāmais, kas nedalās ar $11$ ir "
            + "$(-4)^2$. "
        },
        /* 67 */
        {
            "id": "c.dirichlet.nt.q7",
            "questionType": "INPUT",
            "length": "2",
            "question": "Skaitļi no $1$ līdz $100$ sadalīti ģeometriskās progresijās ar kvocientu $3$: katra "
            + "progresija sākas ar skaitli, kas nedalās ar $3$, katrs nākamais skaitlis "
            + "progresijā iegūstams, iepriekšējo reizinot ar $3$. Skaitļus, kas pārsniedz $100$, "
            + "neraksta; dažās progresijās (ja tās sākas ar $34$ vai vēl lielāku skaitli) "
            + "ir tikai viens loceklis. Šādi izskatās dažas pirmās progresijas: "
            + "$$\\{1,3,9,27,81\\}$$ "
            + "$$\\{2,6,18,54\\}$$ "
            + "$$\\{4,12,36\\}$$ "
            + "Kāds ir mazākais skaits skaitļu no $1$ līdz $100$, kas jāizvēlas, lai "
            + "kaut kādi divi no tiem noteikti nonāktu vienā progresijā?",
            "answer": "68",
            "explanation": "Tā kā katrā progresijā ir tieši viens skaitlis, "
            + "kurš nedalās ar $3$ (un ir tieši $33$ skaitļi līdz $100$, kas dalās ar $3$), "
            + "tad progresiju kopskaits ir $100-33=67$. Izvēloties par vienu skaitli vairāk (jeb "
            + "tieši $68$ skaitļus) vismaz vienā progresijā nonāks vismaz divi skaitļi."
        },
        /* 68 */
        {
            "id": "c.dirichlet.nt.q8",
            "questionType": "INPUT",
            "length": "2",
            "question": "Kāds ir lielākais skaitļu skaits no $1$ līdz $100$, ko var izvēlēties "
            + "tā, lai nekādiem diviem no izvēlētajiem skaitļiem $m$ un $n$, to "
            + "dalījums $k=m/n$ nebūtu vesels skaitlis, kas lielāks par $2$? ",
            "hints": [
                "Jāizmanto fakts, ka divu izvēlēto skaitļu attiecība drīkst būt VIENĀDA ar $3$. "
                + "Varbūt pietiek atrast lielāko skaitu, ko var izvēlēties "
                + "tā, lai divu skaitļu dalījums nebūtu skaitļa $3$ pakāpe."
            ],
            "answer": "67",
            "explanation": "Piemērs, ko var izvēlēties - visi naturālie skaitļi no 34 līdz 100. "
            + "Uzlabot to nevar: Sadalām naturālos skaitļus no $1$ līdz $100$ "
            + "ģeometriskās progresijās ar kvocientu $3$ (katra progresija sākas ar citu skaitli, kas nedalās ar $3$). "
            + "Pavisam ir $67$ šādas ģeometriskas progresijas. "
            + "Ja skaitļu būtu par vienu vairāk, tad vismaz divi skaitļi nonāks tanī pašā "
            + "ģeometriskajā progresijā, t.i. to attiecība būs vesels skaitlis, "
            + "kas lielāks par $2$ (konkrēti $3,9,27$ vai $81$)."
        },
        /* 69 */
        {
            "id": "c.dirichlet.nt.q9",
            "questionType": "INPUT",
            "length": "2",
            "question": "Kāds ir mazākais skaitļu skaits, ko izvēloties no $1$ līdz $100$, "
            + "starp izvēlētajiem noteikti atradīsim divus tādus, kuru dalījums ir "
            + "divnieka pakāpe augstāka par $0$-to? (T.i. dalījums ir $2,4,8,16,\\ldots$)",
            "answer": "51",
            "explanation": "Sadalām skaitļus no $1$ līdz $100$ vairākās ģeometriskās progresijās "
            + "ar kvocientu $2$: "
            + "$$\\{1,2,4,8,16,32,64\\}$$ "
            + "$$\\{3,6,12,24,48,96\\}$$ "
            + "$$\\{5,10,20,40,80\\}$$ "
            + "Katra šī progresija sākas ar kādu nepāru skaitli no $1$ līdz $99$; "
            + "turpmākie locekļi tiek iegūti, iepriekšējos reizinot ar $2$.<br/>"
            + "Pavisam ir tieši $50$ šādu progresiju. Ja ievietosim "
            + "$51$ skaitļus, tad noteikti divi no tiem izrādīsies vienā "
            + "no progresijām. Tātad to attiecība būs kvocienta $q=2$ pilna pakāpe."
        },
        /* 70 */
        {
            "id": "c.dirichlet.nt.q10",
            "questionType": "INPUT",
            "length": "2",
            "question": "Virknē uzrakstīti daži pēc kārtas sekojoši "
            + "skaitļi, kas dod atlikumu 3, dalot ar $13$. Piemēram, "
            + "$$29, 42, \\ldots$$ "
            + "Kāds mazākais skaits šo skaitļu jāuzraksta, lai starp tiem noteikti atrastos "
            + "tāds, kurš dod atlikumu $2$, dalot ar $17$ (neatkarīgi no tā, ar kuru "
            + "skaitli virkne sākas)?",
            "answer": "17",
            "explanation": "Ja virknē, kur visi dod atlikumu $3$, dalot ar $13$ "
            + "būs $17$ pēc kārtas sekojoši locekļi, no kuriem neviens nedod atlikumu "
            + "$2$, dalot ar $17$, tad sanāks, ka iespējamie atlikumi ir "
            + "no $0$ līdz $16$ (izlaižot $2$), t.i. tieši $16$ vērtības. "
            + "Pēc Dirihlē principa atradīsies divi locekļi, kuri dod vienādus atlikumus, "
            + "bet atšķiras kā divi aritmētiskas progresijas locekļi par "
            + "$k \\cdot 13$, kur $k < 17$. Bet šāds skaitlis nevar dalīties ar $17$. "
            + "Vispārinot šo spriedumu citiem skaitļiem (izņemot $13$ un $17$), citiem "
            + "atlikumiem kā arī lielākam skaitļu skaitam, varam iegūt "
            + "ķīniešu atlikumu teorēmu vispārīgajā veidā."
        },
        /* 71 */
        {
            "id": "c.dirichlet.nt.q11",
            "questionType": "MULTIPART",
            "question": "Sportistam $50$ dienu laikā ir $64$ treniņi - katru dienu vismaz viens "
            + "treniņš. Vai noteikti atradīsies dažas pēc kārtas sekojošas dienas, "
            + "kurās ir tieši $k$ treniņi dotajām $k$ vērtībām?",
            "parts": [
                {
                    "questionType": "MC",
                    "alternatives": [
                        "Jā",
                        "Nē"
                    ],
                    "cue": "Ja $k=34$:"
                },
                {
                    "questionType": "MC",
                    "alternatives": [
                        "Jā",
                        "Nē"
                    ],
                    "cue": "Ja $k=35$:"
                }
            ],
            "answer": "a,a",
            "explanation": "Ja jāatrod tieši $34$ vai $35$ treniņi dažās pēc kārtas "
            + "sekojošās dienās, tad to vienmēr var izdarīt. "
            + "Ar $a_1,\\ldots,a_{50}$ apzīmējam treniņu skaitu katrā no dienām. Veidojam "
            + "summas: cik treniņu bija pirmajā, pirmajās divās, pirmajās trijās utt. dienās: "
            + "$$S_1=a_1,\\;S_2=a_1+a_2,\\;\\ldots$$ "
            + "Šī virkne katrā solī aug (jo katru dienu bija vismaz viens treniņš). Tās "
            + "vērtības ir skaitļi no $1$ līdz $64$.<br/>"
            + "Katrai no vērtībām $S_i$ pieskaitām skaitli $k$ (t.i. $34$ vai $35$). Iegūsim "
            + "$50$ citu  skaitļu virkni, kam visi locekļi ir robežās no $1+k$ līdz $64+k < 100$. "
            + "Tā kā arī pēc pieskaitīšanas virkne katr solī aug, tad $S_i + k < S_j + k$, "
            + "ja $i < j$.<br/>"
            + "Ņemot vērā, ka abās virknēs $(S_i)$ un $(S_i + k)$ ir pavisam $100$ locekļu, "
            + "bet dažādo vērtību ir no $1$ līdz $64+k<100$ (mazāk par $100$), tad "
            + "kādā no vērtībām nonāks divi locekļi. Tie nevar būt abi ņemti no tās pašas "
            + "virknes (jo abas virknes aug). Tādēļ atradīsies loceklis no pirmās, kas vienāds "
            + "ar citu locekli no otrās, piemēram, $S_i + k = S_j$. Bet tad uzdevuma apgalvojums "
            + "izpildās: sākot no dienas ar numuru $i$ (neieskaitot) līdz dienai "
            + "ar numuru $j$ (ieskaitot) notika tieši $k$ treniņi."
        },
        /* 72 */
        {
            "id": "c.dirichlet.nt.q12",
            "questionType": "MC",
            "question": "Dots ļoti liels skaitlis $N$. No tiem izvēlas iespējami daudzus "
            + "skaitļus $M$ tā, lai nekādu divu skaitļu starpība nebūtu $1$ vai $2$. "
            + "Kurai no minētajām daļām ir vistuvākais skaitlis $M/N$?",
            "alternatives": [
                "$1/2$",
                "$1/3$",
                "$2/3$",
                "$1/4$"
            ],
            "answer": "b",
            "explanation": "No katriem $3$ pēc kārtas ņemtiem naturāliem "
            + "skaitļiem drīkst izvēlēties ne vairāk kā vienu (citādi šajā "
            + "skaitļu trijniekā kāda no starpībām ir $1$ vai $2$). "
            + "Varam izvēlēties aritmētisku progresiju ar diferenci $3$, piemēram, "
            + "$1,4,7,10,13,\\ldots$ (to turpinot ldz sasniegts skaitlis $N$). "
            + "Šajā progresijā ietilpst aptuveni katrs trešais skaitlis, t.i. "
            + "$1/3$ no visiem. Ja turklāt $N$ dalās ar $3$, tad var pamatot, "
            + "ka lielākais $M/N$ ir precīzi vienāds ar $1/3$."
        },
        /* 73 */
        {
            "id": "c.dirichlet.nt.q13",
            "questionType": "INPUT",
            "length": "4",
            "question": "Kādu lielāko skaitu naturālu skaitļu no $1$ līdz $840$ var izvēlēties tā, "
            + "lai nekādiem diviem izvēlētajiem skaitļiem to starpība nebūtu ne $2$, "
            + "ne $3$, ne $5$.",
            "answer": "240",
            "explanation": "No katriem $7$ pēc kārtas ņemtiem skaitļiem var "
            + "izvēlēties ne vairāk kā $2$ skaitļus. "
            + "Aplūkosim, piemēram, $(1,2,3,4,5,6,7)$ (var ņemt arī citu, nobīdītu "
            + "$7$ skaitļu virknīti, katram "
            + "elementam pieskaitot vienu un to pašu). Acīmredzot, nevar izvēlēties "
            + "vairāk par vienu skaitli no trijniekiem $(1,3,6)$ un $(2,4,7)$, "
            + "jo visas starpības starp skaitļiem "
            + "šajos trijniekos ir \"neatļautās\" (t.i. $2$, $3$ vai $5$).<br/>"
            + "Tādēļ vienīgā iespēja izvēlēties trīs skaitļus no septiņnieka "
            + "$(1,2,3,4,5,6,7)$ būtu - izvēlēties skaitli $5$ kā arī pa vienam no katra "
            + "trijnieka $(1,3,6)$ un $(2,4,7)$. Tā kā skaitlis $5$ konfliktē ar $2$ un $7$, "
            + "tad jāizvēlas atlikušais skaitlis no trijnieka: $4$. Savukārt $4$ konfliktē "
            + "ar $1$ un ar $6$ - t.i. jāizvēlas atlikušais skaitlis no trijnieka: $3$. "
            + "Bet $5$ un $3$ reizē nevar ņemt, jo starp tiem starpība ir $2$.<br/> "
            + "Esam ieguvuši pretrunu (no pieņēmuma, ka var izvēlēties $3$ skaitļus "
            + "no septiņnieka). Tādēļ katrā no $120$ \"septiņniekiem\", kuros var sadalīt "
            + "skaitļus no $1$ līdz $840$ varēs izvēlēties divus skaitļus. "
            + "Maksimums būs $2 \\cdot 120 = 240$."
        },
        /* 74 */
        {
            "id": "c.dirichlet.nt.q14",
            "questionType": "MS",
            "question": "Dota naturālu skaitļu kopa $S$, kas satur dažus "
            + "skaitļus no kopas $\\{1,2,3,\\ldots,100\\}$. "
            + "Kopa $S$ apmierina īpašību: ja tai pieder skaitļi $a$ un $b$ un $a>b$, "
            + "tad $a+b$ nedalās ar $a-b$.<br/>"
            + "(<i>Atzīmēt visus patiesos apgalvojumus par kopu $S$.</i>)",
            "alternatives": [
                "Kopa $S$ var saturēt skaitļus $a$ un $b$, kam $a=b+1$?",
                "Kopa $S$ var saturēt skaitļus $a$ un $b$, kam $a=b+2$?",
                "Kopa $S$ var saturēt skaitļus $a$ un $b$, kam $a=b+3$?",
                "Kopa $S$ var saturēt skaitļus $a$ un $b$, kam $a=b+4$?"
            ],
            "answer": "c,d",
            "explanation": "Starpības $1$ un $2$ starp $a,b \\in S$ "
            + "ir neiespējamas: jebkurš skaitlis "
            + "dalās ar $1$, un jebkuriem diviem skaitļiem $a, b$, kam $a=b+2$ summa "
            + "būs pāru skaitlis, t.i. dalīsies arī ar $2$.<br/> "
            + "Starpības $3$ un $4$ starp skaitļiem ir iespējamas. "
            + "Ja, piemēram, $a,b$ paši nedalās ar $3$ un $a = b+3$, tad $a+b=2b+3$ "
            + "nedalīsies ar $3$, jo $2b$ arī nedalās ar $3$. Savukārt, ja $a=b+4$ un "
            + "pie tam $a,b$ ir nepāru skaitļi, tad to summa nedalās ar $4$."
        },
        /* 75 */
        {
            "id": "c.dirichlet.nt.q15",
            "questionType": "INPUT",
            "length": "2",
            "question": "Dota naturālu skaitļu kopa $S$, kas satur dažus "
            + "skaitļus no kopas $\\{1,2,3,\\ldots,100\\}$. "
            + "Kopa $S$ apmierina īpašību: ja tai pieder skaitļi $a$ un $b$ un $a>b$, "
            + "tad $a+b$ nedalās ar $a-b$. "
            + "Kāds lielākais elementu skaits var būt kopā $S$?",
            "answer": "34",
            "explanation": "Var izvēlēties kopu $S$, kurā ietilpst visi tie "
            + "skaitļi no $1$ līdz $100$, kas dod atlikumu $1$, dalot ar $3$. T.i. "
            + "$$S = \\{ 1,4,7,10,13,\\ldots,97,100 \\}.$$ "
            + "Jebkuru divu skaitļu summa no šīs kopas dos atlikumu $2$, dalot ar $3$. "
            + "Savukārt to starpība dalīsies ar $3$. Tādēļ summa $a+b$ nekad nevarēs "
            + "dalīties ar $a-b$, jo $a+b$ nedalās ar $3$, bet $a-b$ dalās ar $3$."
        },
        /* THE END */
    ]
};

module.exports = examData