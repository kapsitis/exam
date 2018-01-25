(Install node.js) - also gets you 'npm'
npm init


npm install --save-dev webpack
npm install --save-dev babel-loader
npm install --save-dev babel-core
npm install --save-dev babel-preset-es2015
npm install --save-dev babel-preset-react
npm install --save-dev react
npm install --save-dev react-dom

npm run dev

npm install --save-dev webpack-dev-server


nmp run build
mvn clean package
... upload to tomcat ... 



dependencies



(Fixing UTF-8 encoding in servlets:
https://stackoverflow.com/questions/138948/how-to-get-utf-8-working-in-java-webapps )




                {
                    "id": "nt-part1-01.q3",
                    "question": "Izteikt kā divu naturālu skaitļu reizinājumu (kas abi pārsniedz 1):<br/> $5^4 + 4\\cdot 6^4$.",
                    "instruction": "Atdalīt reizinātājus ar zvaigznīti: a*b",
                    "answerForm": ["text.10"],
                    "validation": "^\\d+\\*\\d+$",
                    "normalize": ["asteriskSplit", "sort", "asteriskJoin"],
                    "correct": "157*37"
                },

