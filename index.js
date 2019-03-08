const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Hello Fucking World</h1>');
});

var childAbility = {
  "ability_group_one" : "1.0",
  "ability_group_two" : "0.30",
  "ability_group_three" : "2.0",
  "ability_group_four" : "0.5",
  "ability_group_five" : "1.5",
  "next_activity" : {
      "activity" : "button",
      "level": "easy",
      "questions" : [
        {
          "item_id": 1,
          "question": "ช้าง",
          "question_content_id": 1,
          "member_question_content_id": 1,
          "difficulty": 1.234,
          "discrimination": 2.345,
          "choices": [
            {
              "id": 1,
              "item_id": 1,
              "choice": "ช",
              "correct_answer": 1
            },
            {
              "id": 2,
              "item_id": 1,
              "choice": "ก",
              "correct_answer": 0
            },
            {
              "id": 3,
              "item_id": 1,
              "choice": "ค",
              "correct_answer": 0
            },
          ],
        },
        {
          "item_id": 1,
          "question": "ช้าง",
          "question_content_id": 1,
          "member_question_content_id": 1,
          "difficulty": 1.234,
          "discrimination": 2.345,
          "choices": [
            {
              "id": 1,
              "item_id": 1,
              "choice": "ช",
              "correct_answer": 1
            },
            {
              "id": 2,
              "item_id": 1,
              "choice": "ก",
              "correct_answer": 0
            },
            {
              "id": 3,
              "item_id": 1,
              "choice": "ค",
              "correct_answer": 0
            },
          ],
        },
      ]
  }
}
;

app.get('/api/childAbility', (req, res) => {
  res.send(childAbility);
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port${port}...`) );