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


npm run build
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


CREATE TABLE IF NOT EXISTS answers (
    answer_id INT AUTO_INCREMENT,
    test_label VARCHAR(25) NOT NULL,
    q_id INT NOT NULL,
    value VARCHAR(255) NOT NULL,
    PRIMARY KEY (answer_id)
);

CREATE TABLE IF NOT EXISTS tests (
   test_id INT AUTO_INCREMENT, 
   test_label VARCHAR(25) NOT NULL,
   title VARCHAR(50) NOT NULL,
   description VARCHAR(255) NOT NULL,
   PRIMARY KEY(test_id)
);

INSERT INTO tests VALUES (NULL,"carousel1", 
    'G10+: Skaitl@u teorija: Dala@mi@ba',
    'Dali@s@sana pirmreizina@ta@jos');
    
    
INSERT INTO answers VALUES (NULL,'carousel1',0,'a');
INSERT INTO answers VALUES (NULL,'carousel1',1,'c');
INSERT INTO answers VALUES (NULL,'carousel1',2,'a');
INSERT INTO answers VALUES (NULL,'carousel1',3,'b');
INSERT INTO answers VALUES (NULL,'carousel1',4,'d');
INSERT INTO answers VALUES (NULL,'carousel1',5,'c');
INSERT INTO answers VALUES (NULL,'carousel1',6,'d');
INSERT INTO answers VALUES (NULL,'carousel1',7,'c');
INSERT INTO answers VALUES (NULL,'carousel1',8,'b');
INSERT INTO answers VALUES (NULL,'carousel1',9,'a');
INSERT INTO answers VALUES (NULL,'carousel1',10,'1/25');
INSERT INTO answers VALUES (NULL,'carousel1',11,'6,7,11');


