var examData = {
    count: 1800,
    "questions": [

        /*
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
            "answer": "b,",
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
            + "$$15+16+17+18+19+20 = 3 \cdot (15+20) = 105.$$ "
            + "Tiklīdz kā konfekšu skaits pārsniedz $105$, tad tās nevar iesaiņot $6$ pakās. "
            + "Ir nepieciešamas vismaz $7$ pakas, kas nozīmē to, ka vismaz divas "
            + "no pakām izrādīsies vienādas vai arī nonāks vienādos attālumos no virknītes "
            + "$10,\\ldots,20$ galiem (t.i. dod summā $31$)."
        },
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
            "explanation": "Iespējamo aplīšu pāru ir$15 \cdot 15 = 225$ (reizināšanas "
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
            "explanation": "Mums uzdevumā jāspēj izšķirt $12 \cdot 2 = 24$ dažādas "
            + "situācijas (ikviena no $12$ monētām var izrādīties viltota, turklāt "
            + "tā var būt gan smagāka, gan vieglāka par citām.) Ar divām svēršanām, kam "
            + "iespējami trīs iznākumi, var iegūt $9$ dažādus rezultātus. Tā kā $24 > 9$, "
            + "tad ar šiem iznākumiem nepietiek, lai atšķirtu visas iespējas."
        },
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
                    "cue": "Mazākā summa",
                },
                {
                    "questionType": "INPUT",
                    "length": "4",
                    "cue": "Lielākā summa",
                },

            ],
            "answer": "10,945",
            "explanation": "Ja spēlētājs $A$ izvēlējās kopu, kurā ietilpst "
            + "skaitlis $10$, bet $B$ izvēlējās tieši šo skaitli $10$, tad "
            + "tas arī ir mazākais.<br/> "
            + "Lielākā summa, ko var iegūt, ir $90+\\ldots+99 = 945$."
        },
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


        */








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
        }

    ]

};

module.exports = examData