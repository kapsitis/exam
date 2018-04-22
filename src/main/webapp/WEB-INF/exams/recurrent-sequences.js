var examData = {
    count: 1800,
    "questions": [
        /* 1 */
        {
            "id": "c.recurrence.intro.q1",
            "questionType": "INPUT",
            "question": "Fibonači virkni definē šādi: $F(0)=0$, $F(1)=1$ un katrs nākamais "
            + "loceklis ir divu iepriekšējo summa: $F(n+2)=F(n)+F(n+1)$. Kā izteikt "
            + "$F(n+4)$ ar $F(n)$ un $F(n+1)$?",
            "instruction": "Ierakstīt atbildi formā: c*F(n)+d*F(n+1) (bez atstarpēm un ar zvaigznītēm reizināšanas zīmju vietā)",
            "answer": "2*F(n)+3*F(n+1)",
            "explanation": "Ievietojam izteiksmē $F(n+3)=F(n+1)+F(n+2)$ izteiksmi, kurā $F(n+2)$ izteikta ar "
            + "$F(n)$ un $F(n+1)$. Pēc tam ievietojam atrasto $F(n+3)$ izteiksmē $F(n+4)=F(n+3)+F(n+2)$. "
            + "$$F(n+4)=F(n+2)+F(n+3)=F(n+2)+(F(n+1)+F(n+2))=F(n+1)+2F(n+2)=$$ "
            + "$$=F(n+1)+2(F(n)+F(n+1))=2F(n)+3F(n+1).$$"
        },
        /* 2 */
        {
            "id": "c.recurrence.intro.q2",
            "questionType": "INPUT",
            "length": "6",
            "question": "Hanojas tornis sastāv no trim stieņiem un astoņiem diskiem $A,\\ldots,H$. "
            + "Vismazākā/augšējā diska $A$ pārcelšana maksā $1$ centu, diska $B$ pārcelšana $2$ centus, utt., "
            + "diska $H$ pārcelšana - $2^7$ centus (t.i. $n$-tā diska pārcelšana maksā $2^{n-1}$ centus). "
            + "Cik maksās visu $8$ disku pārcelšana no 1.stieņa uz 3.stieni, ja to izpilda ar mazāko iespējamo pārcelšanu skaitu? "
            + "(Piezīme: Hanojas torņa diskus drīkst pārcelt tikai pa vienam, nedrīkst likt lielāku disku uz mazāka, "
            + "pārcelšanas gaitā drīkst izmantot arī vidējo, 2.stieni.)",
            "answer": "1024",
            "explanation": "Veidojam rekurentu virkni ar izmaksām: $C(1)=1$, $C(n+1)=2C(n)+2^n$. "
            + "Sākam ievietot arvien lielākus $n$ un iegūstam, ka $C(8)=1024$. Tā kā gājienu ir vidēji $2^8-1$, "
            + "tad viena gājiena vidējās izmaksas ir $4$ centi. Tas te nav prasīts, bet varam arī mēģināt iegūt vispārīgo formulu: "
            + "$$C(1) = 1 = 1 \\cdot 2^0$$ "
            + "$$C(2) = 4 = 2 \\cdot 2^1$$ "
            + "$$C(3) = 12 = 3 \\cdot 2^2$$ "
            + "$$C(4) = 32 = 4 \\cdot 2^3$$ "
            + "$$C(5) = 80 = 5 \\cdot 2^4$$ "
            + "$$C(6) = 192 = 6 \\cdot 2^5$$ "
            + "$$C(7) = 448 = 7 \\cdot 2^6$$ "
            + "$$C(8) = 1024 = 8 \\cdot 2^7$$ "
            + "Varam pamatot ar matemātisko indukciju, ka $C(n)=n \\cdot 2^{n-1}$. Bāze $n=1$ ir patiesa. Ja "
            + "pieņemam, ka $C(k)=k \\cdot 2^{k-1}$, tad "
            + "$$C(k+1)=2C(k)+2^k = 2(k \\cdot 2^{k-1}) + 2^k = k \\cdot 2^{k} + 2^k = (k+1)2^k$$ "
            + "Esam pamatojuši induktīvo pāreju."
        },
        /* 3 */
        {
            "id": "c.recurrence.intro.q3",
            "questionType": "INPUT",
            "question": "Koha līkni veido vairākos soļos: $K_0$ ir taisnes nogrieznis, ko velk no kreisās uz labo pusi "
            + "(jeb no punkta $A$ uz punktu $B$ sk. zīmējumā). Koha līkni $K_{n+1}$ veido no iepriekšējās "
            + "līknes $K_n$, aizvietojot katra $K_n$ nogriežņa vidējo trešdaļu ar diviem jauniem posmiem, kuri "
            + "ar esošo posmu veido $60$ grādu leņķi un ir izbīdīti uz ārpusi (sk. zīmējumu). "
            + "Ja šos soļus daudzreiz atkārto, iegūst 'fraktāli' - sarežģīti izrobotu figūru. No $3$ šādām "
            + "figūrām var salikt pazīstamo <a href='https://en.wikipedia.org/wiki/Koch_snowflake'>Koha sniegpārsliņu.</a><br/> "
            + "Ja pieņem, ka līkni velk no punkta $A$ uz punktu $B$, "
            + "tad katrs no līknes $K_n$ posmiem tiek vilkts vienā no $6$ virzieniem: "
            + "ar $a_n$ apzīmējam posmu skaitu, kas vilkti taisni pa labi (uz austrumiem), "
            + "ar $b_n$: uz ziemeļaustrumiem; ar $c_n$: uz ziemeļrietumiem; ar $d_n$: uz rietumiem; "
            + "ar $e_n$: uz dienvidrietumiem; ar $f_n$: uz dienvidaustrumiem. Zināms, ka $d_{n+1}$ ($n \\geq 0$) var izteikt "
            + "kā summu: "
            + "$$d_{n+1}=k_1a_n + k_2b_n + k_3c_n + k_4d_n + k_5e_n + k_6f_n.$$ "
            + "Atrast sešus koeficientus $k_1,k_2,k_3,k_4,k_5,k_6$ šajā formulā.",
            "imgSrc": [
                "http://85.254.250.28/downloads1/olimpiades/exams/recurrent-sequences/koch-curve.png"
            ],
            "instruction": "Ierakstīt atbildi kā sešus veselus skaitļus, atdalot tos ar komatiem.",
            "answer": "0,0,1,2,1,0",
            "explanation": "Tā kā Koha līknes nākamā iterācija $K_n$ ir iegūstama, savienojot $4$ iepriekšējās līknes "
            + "$K_{n-1}$ (katra samazināta ar līdzības koeficientu $1/3$), tad aplūkosim, kā šīs četras līknes $K_{n-1}$ "
            + "ir novietotas attiecībā pret $K_{n}$. Pirmais un pēdējais posmi vispār netiek pagriezti, tādēļ "
            + "pa kreisi vedošo posmu $d_{n+1}$ skaita noteikšanai varam vienkārši divreiz pieskaitīt $d_n$ (koeficients pie $d_n$ ir $2$. "
            + "Savukārt abi vidējie posmi tiek pagriezti uz vienu vai otru pusi par $60$ grādiem, t.i. šajā "
            + "gadījumā pie $d_{n+1}$ pieskaitās attiecīgi $c_n$ un $e_n$. Iegūstam, ka vajadzīgie koeficienti ir "
            + "$0,0,1,2,1,0$, jo $a_n$, $b_n$ un $f_n$ vispār $d_{n+1}$ izteiksmē nepiedalās (attiecīgie koeficienti ir $0$)."
        },
        /* 4 */
        {
            "id": "c.recurrence.intro.q4",
            "questionType": "INPUT",
            "length": "5",
            "question": "Morzes virkni veido no nullēm un vieniniekiem, audzējot klāt pa gabaliem. "
            + "Pirmais sākumfragments ir $0$, otrais sākumfragments ir $01$ (ja pirmajam fragmentam "
            + "pieraksta klāt tam 'pretējo', kur nulles aizstāj ar vieniniekiem un otrādi). Nākamie sākumfragmenti ir "
            + "$0110$, $01101001$, $0110100110010110$, utt. Lai uzzinātu šīs virknes $n$-to locekli, uzraksta tik "
            + "garu sākumfragmentu, lai tā garums būtu vismaz $n$. "
            + "Redzams, ka $M(0)=0$, $M(1)=1$, $M(2)=1$, $M(3)=0$ (jo virkne sākas ar $0110$).<br/><br/>"
            + "Atrast virknes locekļus, ko veido $M(2016),M(2017),M(2018),M(2019),M(2020)$",
            "instruction": "Ierakstīt 5 ciparus (nulles vai vieniniekus) bez atstarpēm vai komatiem",
            "answer": "01001",
            "explanation": "Var pamatot, ka Morzes virknē cipars ir $0$ t.t.t., ja skaitļa $n$ binārajā pierakstā ir pāru skaits vieninieku. "
            + "Tā kā $2016 = 63 \\cdot 32$ binārais pieraksts ir '11111100000', tad $M(2016)=0$. Līdzīgi atrod arī četrus nākamos locekļus."
        },
        /* 5 */
        {
            "id": "c.recurrence.intro.q5",
            "questionType": "INPUT",
            "length": "2",
            "question": "Hanojas tornis sastāv no trim stieņiem un pieciem diskiem $A,B,C,D,E$. "
            + "Aplūkojam procesu, kas pārliek visus diskus no 1.stieņa uz 3.stieni. "
            + "Visas pārcelšanas darbības iedalām $6$ klasēs - atkarībā no tā, no kura uz kuru stieni "
            + "disku pārliek. "
            + "Cik reizes procesa gaitā diski jāpārliek no 1.stieņa uz 2.stieni, ja šo procesu (visu 5 disku pārlikšanu no 1.stieņa uz 3.stieni) "
            + "veic ar mazāko iespējamo pārcelšanu skaitu? "
            + "(Piezīme: Hanojas torņa diskus drīkst pārcelt tikai pa vienam, nedrīkst likt lielāku disku uz mazāka, "
            + "pārcelšanas gaitā drīkst izmantot arī vidējo, 2.stieni.)",
            "answer": "4",
            "explanation": "Tos soļus, kuri $n$ disku pārcelšanā notiek no 1. uz 2.stieni apzīmējam ar $XY(n)$, "
            + "līdzīgi ieviešam apzīmējumus $XZ(n)$ (no 1. uz 3.), $YX(n)$ (no 2. uz 1.), $YZ(n)$ (no 2. uz 3.) "
            + "$ZX(n)$ (no 3. uz 1.) un $ZY(n)$ (no 3. uz 2.). Ja mēs zinām visus sešus skaitļus $XY(n),\\ldots,ZY(n)$ "
            + "tad varam rekurenti atrast arī sešus skaitļus $n+1$ diskiem. Pārcelšanu aplūkojam trīs posmos:<br/> "
            + "(1) Vispirms pārceļam visus $n$ augšējos diskus no 1. stieņa uz 2.stieni, ko var izdarīt $2^n-1$ gājienos, "
            + "tur skaitļu $(XY(n+1),\\ldots,ZY(n+1))$ sešiniekam piesummējam skaitļus no iepriekšējā sešinieka "
            + "$(XY(n),\\ldots,ZY(n))$, kur $Y$ un $Z$ mainās lomām (jo tad, ja disku ir tikai $n$, tad mērķis ir 3.stienis, nevis 2.stienis).<br/> "
            + "(2) Pārceļam vislielāko disku no 1.stieņa uz 3.stieni. Tas piesummē vieninieku pie $XZ(n+1)$.<br/> "
            + "(3) Visbeidzot pārceļam visus $n$ augšējos diskus no 2.stieņa uz 3.stieni, ko atkal var izdarīt $2^n-1$ gājienos, "
            + "kas atkal piesummē sešiniekam $(XY(n+1),\\ldots,ZY(n+1))$ vērtības no iepriekšējā sešinieka "
            + "$(XY(n),\\ldots,ZY(n))$, kur $X$ un $Y$ mainās lomām.<br/> "
            + "Iegūstam šādu rekurentu sakarību (īsuma dēļ pierakstām visas sešas piešķiršanas ar vienu vienādību): "
            + "$$(XY(1),XZ(1),YX(1),YZ(1),ZX(1),ZY(1))=(0,1,0,0,0,0)$$ "
            + "$$(XY(n+1),XZ(n+1),YX(n+1),YZ(n+1),ZX(n+1),ZY(n+1))=(XZ(n)+YX(n),XY(n)+1+YZ(n),ZX(n)+XY(n),ZY(n)+XZ(n),YX(n)+ZY(n),YZ(n)+ZX(n))$$ "
            + "Sākam ievietot šajā rekurencē un rēķināt nākamos skaitļu sešiniekus: "
            + "$$(XY(2),XZ(2),YX(2),YZ(2),ZX(2),ZY(2))=(1,1,0,1,0,0)$$ "
            + "$$(XY(3),XZ(3),YX(3),YZ(3),ZX(3),ZY(3))=(1,3,1,1,0,1)$$ "
            + "$$(XY(4),XZ(4),YX(4),YZ(4),ZX(4),ZY(4))=(4,3,1,4,2,1)$$ "
            + "$$(XY(5),XZ(5),YX(5),YZ(5),ZX(5),ZY(5))=(4,9,6,4,2,6).$$ "
            + "Iegūstam, ka visu $5$ disku pārvietošanai no 1. uz 3.stieni vajadzīgas $XY(5)=4$ "
            + "atsevišķo disku pārcelšanas no 1. uz 2.stieni."

        },
        /* 6 */
        {
            "id": "c.recurrence.intro.q6",
            "questionType": "INPUT",
            "length": "8",
            "question": "Uzzīmētas vairākas parabolas $y=a_nx^2+c_n$ ar kopīgu vertikālo simetrijas asi $Oy$. "
            + "Koeficienti $a_n$ ir pozitīvi, $c_n$ ir jebkādi reāli skaitļi. Tie izvēlēti tā, ka katras divas no šīm parabolām krustojas, "
            + "nekādas trīs neiet caur to pašu punktu, katrai no parabolām eksistē tādi $x$, kuriem šīs parabolas "
            + "vērtība ir mazāka nekā visām citām uzzīmētajām parabolām. "
            + "Ja šādi uzzīmē $100$ parabolas, cik gabalos tās sagriež plakni? "
            + "Par 'gabalu' uzskatām tādu plaknes daļu, kuru no citām daļām atdala parabolu loki.",
            "answer": "10001",
            "explanation": "Pirmā parabola dala plakni $2$ gabalos. Otrā parabola krusto pirmo parabolu 2 punktos, "
            + "šie divi krustpunkti izveido 3 lokus uz šīs otrās parabolas, un katrs no lokiem nodala jaunu plaknes gabalu.<br/>"
            + "Pieņemsim, ka ir jau novilktas $n$ parabolas. Tad $n+1$ parabola radīs 2 jaunus krustpunktus ar katru esošo parabolu "
            + "un visi šie $2n$ krustpunkti sadalīs jauno parabolu $2n+1$ lokos. Esam ieguvuši, ka pašā sākumā (kad parabolu vēl nebija) "
            + "visa plakne bija viens gabals, 1.parabola nogrieza $1$ jaunu gabalu, 2.parabola nogrieza $3$ jaunus gabalus, "
            + "3.parabola $5$ jaunus gabalus, utt. Tātad $100$ parabolu izveidoto gabalu skaits: "
            + "$$1 + (1 + 3 + 5 + \\ldots + 199) = 1 + (1+199) + (3+197) + \\ldots + (99+101).$$ "
            + "Pavisam augšminētajā izteiksmē ir $50$ pārīši, katram pārītim summa ir $200$. Tātad rezultāts ir "
            + "$1 + 50 \\cdot 200 = 10001$."
        },
        /* 7 */
        {
            "id": "c.recurrence.intro.q7",
            "questionType": "INPUT",
            "length": "3",
            "question": "Fibonači virkni definē šādi: $F(0)=0$, $F(1)=1$ un katrs nākamais "
            + "loceklis ir divu iepriekšējo summa: $F(n+2)=F(n)+F(n+1)$. Visiem Fibonači skaitļiem aprēķināja "
            + "atlikumus, tos dalot ar $5$ un izrādījās, ka iegūtā atlikumu virkne ir periodiska. Atrast šīs atlikumu "
            + "virknes periodu, t.i. mazāko skaitli $T$, kuram $F(n)$ un $F(n+T)$ dod vienādus atlikumus, dalot ar $5$, "
            + "neatkarīgi no $n$ izvēles.",
            "answer": "20",
            "explanation": "Turpina Fibonači virkni, līdzkamēr atkal iegūst pēc kārtas abus atlikumus $0$ un $1$. "
            + "Tas notiek pie $F(20)=6765$ un $F(21)=10946$. Pēc tam visi atlikumi, dalot ar $5$ sāks atkārtoties, jo "
            + "katra nākamā skaitļa atlikums, dalot ar $5$, atkarīgs tikai no divu iepriekšējo skaitļu atlikumiem. "
            + "Tādēļ atlikumu virknes periods ir $20$."
        },
        /* 8 */
        {
            "id": "c.recurrence.intro.q8",
            "questionType": "MC",
            "question": "Dota rekurenta virkne: $G(0)=0$, $G(1)=1$, $G(n+2)=2G(n+1)+G(n)$. Tās pirmie locekļi ir "
            + "$0,1,2,5,12,\\ldots$.<br/> Ja ļoti lieliem $n$ aprēķinām divu blakusesošu virknes locekļu attiecības "
            + "$G(n+1)/G(n)$, kura kvadrātvienādojuma saknei šīs attiecības ir vistuvāk?",
            "alternatives": [
                "$x^2-2x-1=0$",
                "$x^2+2x+1=0$",
                "$x^2-x-1=0$",
                "$x^2-x-2=0$"
            ],
            "answer": "a",
            "explanation": "Ja meklējam atrisinājumu kā ģeometrisku progresiju $G(n)=b_0q^n$, "
            + "iegūsim vienādojumu $q^{n+2}=2q^{n+1}+q{n}$. Saīsinot ar $q^{n}$ iegūsim kvadrātvienādojumu "
            + "$q^2-2q-1=0$.<br/> "
            + "Šī kvadrātvienādojuma atrisinājumi ir $q_{1,2}=1 \\pm \\sqrt{2}$. Lielākā no saknēm ir "
            + "$1+\\sqrt{2}$. Tā arī ir sakne, kurai vistuvāk nonāk attiecības $G(n+1)/G(n)$ lieliem $n$. "
        },
        /* 9 */
        {
            "id": "c.recurrence.intro.q9",
            "questionType": "MC",
            "question": "Katram skaitlim no $1$ līdz $2^n$ atrodam lielāko nepāru skaitli, ar kuru tas dalās. "
            + "Visus šos dalītājus saskaitām, apzīmējam rezultātu ar $S(n)$. Atrast rekurento sakarību, kas "
            + "izsaka $S(n+1)$ ar $S(n)$.",
            "alternatives": [
                "$S(n+1)=2S(n)+2^n$",
                "$S(n+1)=2S(n)+4^n$",
                "$S(n+1)=S(n)+4^n$",
                "$S(n+1)=S(n)+2^n$"
            ],
            "answer": "c",
            "explanation": "Lielākie nepāru dalītāji skaitļiem $(1,2,3,4,\\ldots,2^n)$ ir tieši tādi paši kā "
            + "divreiz lielākiem pāru skaitļiem: $(2,4,6,8,\\ldots,2^{n+1})$. Tādēļ $S(n+1)$ atšķiras no $S(n)$ "
            + "tikai par to summu, ko veido nepāru skaitļu lielākie nepāru dalītāji. Bet katram nepāru skaitlim "
            + "lielākais nepāru dalītājs ir viņš pats. Tāpēc "
            + "$$S(n+1)=S(n)+(1+3+5+\\cdots + (2^{n+1}-1))=S(n)+4^n.$$"
        },
        /* 10 */
        {
            "id": "c.recurrence.intro.q10",
            "questionType": "MC",
            "question": "Katram skaitlim no $1$ līdz $2^n$ atrodam lielāko divnieka pakāpi ($1,2,4$ utt.), ar kuru tas dalās. "
            + "Visus šos dalītājus saskaitām, apzīmējam rezultātu ar $T(n)$. Atrast rekurento sakarību, kas "
            + "izsaka $T(n+1)$ ar $T(n)$.",
            "alternatives": [
                "$T(n+1)=2T(n)+2^n$",
                "$T(n+1)=2T(n)+4^n$",
                "$T(n+1)=T(n)+4^n$",
                "$T(n+1)=T(n)+2^n$"
            ],
            "answer": "a",
            "explanation": "Lielākās divnieku pakāpes, ar ko dalās $(1,2,3,4,\\ldots,2^n)$ ir tieši divreiz mazākas "
            + "nekā pāru skaitļiem: $(2,4,6,8,\\ldots,2^{n+1})$. Tādēļ $T(n+1)=2T(n)+C$, kur $C$ ir nepāru skaitļu "
            + "skaits intervālā no $1$ līdz $2^{n+1}-1$. Jo katram nepāru skaitlim lielākā divnieka pakāpe, ar ko tas dalās ir $1$. "
            + "Iegūstam, ka $T(n+1)=2T(n)+2^n$."
        },
        /* 11 */
        {
            "id": "c.recurrence.intro.q11",
            "questionType": "MC",
            "question": "Katram skaitlim no $1$ līdz $3^n$ atrodam lielāko dalītāju $d$, kuram $d$ nedalās ar $3$. "
            + "Visus šos dalītājus saskaitām, apzīmējam rezultātu ar $U(n)$. Atrast rekurento sakarību, kas "
            + "izsaka $U(n+1)$ ar $U(n)$.",
            "alternatives": [
                "$U(n+1)=U(n) + 2 \\cdot 3^n$",
                "$U(n+1)=U(n) + 3^{2n}$",
                "$U(n+1)=U(n) + 2 \\cdot 3^{2n+1}$",
                "$U(n+1)=U(n) + 3^{2n+1}$"
            ],
            "answer": "d",
            "explanation": "Lielākie (ar trīs nedalāmie) dalītāji $d$ skaitļiem $(1,2,3,4,\\ldots,3^n)$ ir tieši tādi paši kā "
            + "trīsreiz lielākajiem skaitļiem: $(3,6,9,12,\\ldots,3^{n+1})$. Tādēļ $U(n+1)$ atšķiras no $U(n)$ "
            + "tikai par to summu, ko veido visu atlikušo skaitļu dalītāji $d$, kuri nedalās ar trīs. Bet atlikuši "
            + "ir tieši visi tie skaitļi līdz $3^{n+1}$, kas ar trīs nedalās (un kuriem lielākais nosacījumu apmierinošais dalītājs ir viņš pats): "
            + "$$U(n+1)=U(n)+(1+2+4+5+7+8+\\cdots + (3^{n+1}-1))=U(n)+3^{2n+1}.$$"
        },
        /* 12 */
        {
            "id": "c.recurrence.intro.q12",
            "questionType": "INPUT",
            "length": "5",
            "question": "Kādā valodā ir četri burti: $2$ patskaņi un $2$ līdzskaņi. Valodai pieder visi vārdi, kurus "
            + "var izveidot, izmantojot dotos burtus ar sekojošiem izņēmumiem: (1) neviens vārds nevar beigties ar patskani, "
            + "(2) neviens vārds nevar saturēt divus līdzskaņus blakus vienu otram, (3) neviens vārds nevar saturēt trīs patskaņus blakus vienu otram. "
            + "Cik šajā valodā ir vārdu, kuros ir tieši $8$ burti?",
            "answer": "448",
            "explanation": "Apzīmējam ar $a_n$ vārdu skaitu garumā $n$, kas sākas ar līdzskani, $b_n$ - vārdu skaitu garumā $n$, kas "
            + "sākas ar vienu patskani (aiz kura seko līdzskanis vai vārda beigas), $c_n$ - vārdu skaits garumā $n$, kas "
            + "sākas ar diviem patskaņiem. Acīmredzot, $a_1=0$, $b_1=1$, $c_1=0$ un $a_2 = 4$, $b_2 = 0$, $c_2=4$. "
            + "Iegūstam rekurentas sakarības: "
            + "$$a_{n+1}=b_{n}+c_{n},\\;b_{n+1}=2a_n,\\;c_{n+1}=2b_n.$$ "
            + "Sākam rakstīt trijniekus $(a_n,b_n,c_n)$ visām $n$ vērtībām: "
            + "$$(0,1,0),\\;(4,0,4),\\;(4,8,0),\\;(8,8,16)$$ "
            + "$$(24,16,16),\\;(32,48,32),\\;(80,64,96),\\;(160,160,128).$$ "
            + "Saskaitot $(a_8,b_8,c_8)$ pēdējā skaitļu trijniekā, iegūstam, ka vārdu skaits garumā $8$ burti ir $160+160+128=448$."
        },
        /* 13 */
        {
            "id": "c.recurrence.intro.q13",
            "questionType": "INPUT",
            "question": "No skaitļiem $1,2,\\ldots,n$ izveidotas visas iespējamās $3$-skaitļu virknes (virknē var būt arī vienādi skaitļi). "
            + "Katrai virknei atrodam tās mazāko elementu. Visu $3$-skaitļu virkņu mazāko elementu summu apzīmējam ar $S(n)$. "
            + "Atrast $S(1)$,$S(2)$,$S(3)$,$S(4)$,$S(5)$.",
            "instruction": "Ierakstīt piecus skaitļus, atdalot tos ar komatiem.",
            "answer": "1,9,36,100,225",
            "explanation": "Šādu virkņu pavisam ir $n^3$, tādu virkņu, kam mazākais elements ir vismaz $2$ ir $(n-1)^3$ utt. "
            + "Visu saskaitot, iegūstam, ka $S(n)=n^3+(n-1)^3+(n-2)^3+\\ldots+2^3+1^3$, t.i. pirmie pieci locekļi šai virknei būs "
            + "$1,9,36,100,225$."
        },
        /* 14 */
        {
            "id": "c.recurrence.intro.q14",
            "questionType": "INPUT",
            "length": "4",
            "question": "Rindā ir $12$ krēslu; uz katra no tiem sēž pa skolēnam. Skolēni vienu reizi var visi reizē piecelties un "
            + "apsēsties citā kārtībā, pie tam katrs drīkst apsēsties vai nu iepriekšējā vietā, vienu vai divas vietas pa labi "
            + "vai arī vienu vietu pa kreisi (ja vien krēslu rinda nebeidzas ātrāk). Piemēram, no 1.vietas var pārsēsties uz 1.,2.,3. vietu, "
            + "no 2.vietas uz 1.,2.,3.,4. vietu, no 3.vietas uz 2.,3.,4.,5. vietu utt."
            + "Ar $A(n)$ apzīmējam $n$ skolēnu iespējamo izvietojumu skaitu pēc pārkārtošanās. Atrast $A(12)$ - cik dažādos veidos var "
            + "pārkārtoties $12$ skolēni.",
            "answer": "927",
            "explanation": "$A(1)=1$, $A(2)=2$, $A(3)=4$ - to iegūst ar pilno pārlasi. Tālāk var pamatot, ka "
            + "$$A(n+3)=A(n)+A(n+1)+A(n+2).$$ "
            + "Pieņemsim, ka mums ir $n+3$ skolēni, $n \\geq 1$. Tad ir trīs lielas iespējas pirmajam skolēnam: "
            + "Ja 1.skolēns pārsēžas turpat 1.vietā, tad pārējie var pārkārtoties $A(n+2)$ veidos (reducējas uz šo pašu uzdevumu, tikai "
            + "skolēnu ir par vienu mazāk, jo viens jau nosēdināts turpat).<br/> "
            + "Ja 1.skolēns pārsēžas 2.vietā, tad 2.skolēnam noteikti jāpārsēžas 1.vietā (neviens cits uz 1.vietu netiek). Tad visi pārējie "
            + "var pārkārtoties $A(n+1)$ veidos.<br/> "
            + "Ja 1.skolēns pārsēžas 3.vietā, tad 2. un 3. skolēnam noteikti jāpārsēžas katram par vienu vietu atpakaļ. Visi pārējie tad "
            + "var pārkārtoties $A(n)$ veidos.<br/> "
            + "Paturpinām virkni, ko veido rekurentā sakarība (katrs nākamais loceklis ir iepriekšējo $3$ locekļu summa): "
            + "$$1,2,4,7,13,24,44,81,149,274,504,927.$$ "
            + "Esam pamatojuši, ka $A(12)=927$."
        },
        /* 15 */
        {
            "id": "c.recurrence.intro.q15",
            "questionType": "INPUT",
            "length": "6",
            "question": "Naturālu skaitļu virknes $1,2,2,4,8,32,48,\\ldots$ katrs loceklis, sākot ar trešo, ir vienāds ar "
            + "divu iepriekšējo locekļu nenulles ciparu reizinājumu. Kāds ir šīs virknes 2018. loceklis?",
            "answer": "192",
            "explanation": "Turpinām virkni pēc norādītā likuma: "
            + "$$1,2,2,4,8,32,48,192,576,3780,$$ "
            + "$$35280,40320,5760,5040,4200,160,48,192,\\ldots$$ "
            + "Esam ieguvuši $10$ skaitļu periodu: "
            + "$$(48,192,576,3780,35280,40320,5760,5040,4200,160),$$ "
            + "kurš turpmāk visu laiku atkārtosies. Tādēļ virknes 2018.loceklis būs tāds pats kāds virknes 8. un 18. loceklis, "
            + "t.i. $192$."
        },
        /* 16 */
        {
            "id": "c.recurrence.intro.q16",
            "questionType": "INPUT",
            "length": "4",
            "question": "Puzles gabaliņam $A$ labajā pusē var pievienot gabaliņu $B$ vai $C$; puzles gabaliņam $B$ - "
            + "gabaliņus $A$ vai $B$, bet gabaliņam $C$ - tikai gabaliņu $A$. Cik dažādu ķēdīšu var izveidot no $6$ puzles gabaliņiem?",
            "answer": "42",
            "explanation": "Ar $A(n)$ apzīmējam to ķēdīšu skaitu garumā $n$, kas sākas ar puzles gabaliņu $A$; analoģiski apzīmējam arī "
            + "$B(n)$ un $C(n)$. Tad ir spēkā rekurentas sakarības: "
            + "$$A(n+1) = B(n)+C(n),\\;B(n+1) = A(n)+B(n),\\;C(n+1)=A(n).$$ "
            + "Tā kā $A(1)=B(1)=C(1)=1$, tad varam pakāpeniski veidot skaitļu trijniekus "
            + "$(A(n),B(n),C(n)$, $n=1,2,3,4,5,6$. "
            + "$$(1,1,1),\\;(2,2,1),\\;(3,4,2),\\;(6,7,3)\\;(10,13,6)\\;(19,23,10).$$ "
            + "Saskaitot pēdējo skaitļu trijnieku, iegūsim $19+23+10=42$ ķēdītes garumā seši."
        },
        /* 17 */
        {
            "id": "c.recurrence.intro.q17",
            "questionType": "INPUT",
            "length": "4",
            "question": "Pastmarku vērtības ir $2,4,6,8$ centi. Cik dažādos veidos uz aploksnes var uzlīmēt šādas pastmarkas "
            + "vienā rindiņā tā, lai to kopējā vērtība būtu $10$ centi. Veidi, kas atšķiras ar pastmarku secību uzskatāmi par "
            + "dažādiem.",
            "answer": "15",
            "explanation": "$a_2=1$, $a_4=2$, $a_6=4$, $a_8=8$, bet katru nākamo virknes locekli iegūstam, saskaitot četrus iepriekšējos. "
            + "Tāpēc $a_{10}=1+2+4+8=15$. Nepāru summas uzlīmēt nevar, tāpēc tās virknē nerakstām."
        },
        /* 18 */
        {
            "id": "c.recurrence.intro.q18",
            "questionType": "INPUT",
            "length": "4",
            "question": "Plaknē novilktas  taisnes; nekādas divas nav paralēlas; nekādas trīs neiet caur vienu punktu. "
            + "Cik gabalos šīs taisnes sagriež plakni?",
            "answer": "56",
            "explanation": "Ja novilktas $0$ taisnes, tad visa plakne sastāv no viena gabala, t.i. $L_0=1$. "
            + "Aplūkosim, par cik atšķiras $L_{k-1}$ un $L_k$. "
            + "Ja novilktas $k-1$ taisnes un plakne jau sadalīta $L_{k-1}$ gabalos, tad nākamā taisne krustojas "
            + "ar katru no $k-1$ jau novilktajām taisnēm (jo tā nevar būt paralēla nevienai no tām vai arī iet "
            + "caur kādu no jau esošiem krustpunktiem). Visi  krustpunkti sagriež šo $k$-to taisni tieši $k$ posmos "
            + "(abi malējie posmi ir stari, bet visi vidējie posmi ir nogriežņi). Katrs šāds stars/nogrieznis pārgriež "
            + "kādu jau esošu plaknes gabalu divās daļās. T.i. $L_k$, salīdzinot ar $L_{k-1}$ pieaug par $k$. "
            + "Iegūstam, ka "
            + "$$L_{10} = 1 + (1 + 2 + \\ldots + 10) = 56.$$"
        },
        /* 19 */
        {
            "id": "c.recurrence.intro.q19",
            "questionType": "INPUT",
            "length": "2",
            "question": "Aplī sastājušies $41$ bērni, kuri sanumurēti pa apli ar skaitļiem $1,\\ldots,41$. "
            + "Viņi, sākot ar 1.bērnu, skaita skaitāmpantu, kurā ir tikai divas zilbes; katrs bērns, "
            + "pie kura beidzas kārtējais skaitāmpants, iziet no apļa un aplis visu laiku samazinās. "
            + "Kurš bērns, šādi spēlējot, paliks pēdējais? T.i. vispirms no apļa izstājas bērni ar pāru numuriem, "
            + "bet skaitāmpantu turpina arī pēc tam - un tad izstājas arī bērni ar nepāra numuriem, "
            + "ikreiz vienu izlaižot, utt.<br/> (Līdzīgu spēli piemin rakstnieks Jozefs Flāvijs, "
            + "kuru m.ē. 67.gadā kādas sacelšanās laikā kopā ar $40$ cīņubiedriem romieši bija iesprostojuši "
            + "kādā alā pie Jodfatas (ciemats tagadējā Izraēlā). Tiesa, viņu gadījumā no apļa izstājās katrs trešais.)",
            "instruction": "Ierakstīt naturālu skaitli - bērna numuru, kurš paliek pēdējais.",
            "answer": "19",
            "explanation": "Ja sākumā ir $n$ bērni, tad apzīmējam pēdējo bērnu, kurš paliek aplī ar $J(n)$. "
            + "Viegli redzēt, ka $J(1)=1$. Lielākām  vērtībām aplūkojam divus gadījumus:<br/> "
            + "(1) $n$ ir pāru skaitlis $n=2k$. Tad pēc $k$ skaitāmpantiem paliks visi bērni ar "
            + "nepāru numuriem un faktiski turpināsies spēle $k$ bērniem, kurā pēdējais palikušais bērns "
            + "(jaunajā numerācijā) būs $J(k)$. Bet nepāru skaitlis, kurš ir $J(k)$-tais nepāru skaitlis pēc kārtas, "
            + "sākotnējā numerācijā ir ar numuru $2J(k)-1$. Tādēļ pastāv rekurenta sakarība: "
            + "$$J(2k)=2J(k)-1.$$ "
            + "(2) $n$ ir nepāru skaitlis $n=2k+1$. Tad pēc $k+1$ skaitāmpantiem no apļa pazudīs visi "
            + "bērni ar pāru numuriem un arī bērns ar numuru '1'. "
            + "Palikušajiem  bērniem (nepāru skaitļi, sākot ar skaitli '3') turpināsies spēle, "
            + "kurā pēdējais palikušais bērns (jaunajā numerācijā) būs $J(k)$. Bet vecajā numerācijā tas ir $J(k)$-tais "
            + "nepāru skaitlis, sākot ar '3'. Tādēļ pastāv rekurenta sakarība: "
            + "$$J(2k+1)=2J(k)+1.$$"
            + "Ievietojam $J(41)=2J(20)+1=2(2J(10)-1))+1=4J(10)-1$.<br/> "
            + "Savukārt $J(10)=2J(5)-1=2(2J(2)+1))-1=4J(2)+1=5$.<br/> "
            + "Ievietojot otro vienādību pirmajā: $J(41)=4 \\cdot 5 - 1=19$."
        },
        /* 20 */
        {
            "id": "c.recurrence.intro.q20",
            "questionType": "INPUT",
            "length": "3",
            "question": "Brunhilde un Sigruna spēlē sekojošu spēli: Uz galda ir $n$ sērkociņi. "
            + "Viņas pārmaiņus izdara gājienus - ar vienu gājienu paņemot $1,2,4,\\cdots$ sērkociņus "
            + "(jebkuru veselu divnieka pakāpi). Uzvar tā spēlētāja, kura paņēma pēdējo sērkociņu. "
            + "Skaitļus, pie kuriem uzvar otrā spēlētāja sauksim par 'zaļiem', visus pārējos sauksim par "
            + "'sarkaniem'. Atrast mazāko trīsciparu 'zaļo' skaitli.",
            "answer": "102",
            "explanation": "Ir spēkā šāda rekurenta sakarība:<br/> "
            + "(1) $0$ ir 'zaļš' skaitlis (ja šādā pozīcijā Brunhildei jāizdara pirmais gājiens, "
            + "to nevar izdarīt un viņa zaudē).<br/> "
            + "(2) Ja visi skaitļi no $0$ līdz $n$ ir izkrāsoti, tad<br/> "
            + "(2A) $n+1$ ir 'zaļš', ja no tā atņemot jebkuru divnieka pakāpi $2^k \\leq n+1$, "
            + "iegūst sarkanu skaitli.<br/> "
            + "(2B) $n+1$ ir 'sarkans', ja eksistē tāda divnieka pakāpe, kuru atņemot no $n+1$ var iegūt zaļu skaitli.<br/><br/> "
            + "Tālāk pamatosim, ka zaļie skaitļi ir visi tie, kuri dalās ar $3$. Indukcijas bāze ir spēkā "
            + "($0$ dalās ar $3$ un ir 'zaļš' skaitlis). Pieņemsim, ka apgalvojums ir pamatots no $0$ "
            + "līdz $n$ (un zaļie ir tieši tie, kuri dalās ar $3$). Aplūkojam divus gadījumus:<br/> "
            + "(1) Ja $n+1$ dalās ar $3$, tad no tā atņemot jebkuru divnieka pakāpi (kas nekad nedalās ar $3$) "
            + "dabūsim starpību $n-2^k$, kas nedalās ar $3$ un ir sarkans skaitlis (induktīvais pieņēmums).<br/> "
            + "(2) Ja $n+1$ nedalās ar $3$, tad no tā var atņemt vai nu $1$ vai $2$ un iegūt skaitli kas dalās ar $3$ "
            + "un ir zaļš (induktīvais pieņēmums).<br/> "
            + "Tātad atbilde ir $102$, kas ir mazākais trīsciparu skaitlis, kas dalās ar $3$."
        },
/* THE END */
    ]
};

module.exports = examData