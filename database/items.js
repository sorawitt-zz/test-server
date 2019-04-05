
const items = [
    {
        "id": 139,
        "topic_id": 1,
        "question_type_id": 3,
        "question": "ไก่",
        "difficulty": 0,
        "discrimination": 0,
        "level": "easy",
        "se": 0,
        "module_type_id": 3,
        "choices": [
            {
                "id": 455,
                "item_id": 139,
                "choice": "ก",
                "correct_answer": 1
            },
            {
                "id": 456,
                "item_id": 139,
                "choice": "ข",
                "correct_answer": 0
            },
            {
                "id": 457,
                "item_id": 139,
                "choice": "ค",
                "correct_answer": 0
            },
            {
                "id": 458,
                "item_id": 139,
                "choice": "ง",
                "correct_answer": 0
            }
        ]
    },
    {
        "id": 13,
        "topic_id": 1,
        "question_type_id": 2,
        "question": "ไข่",
        "difficulty": 0,
        "discrimination": 0,
        "level": "easy",
        "se": 0,
        "module_type_id": 1,
        "choices": [
            {
                "id": 37,
                "item_id": 13,
                "choice": "ข",
                "correct_answer": 1
            },
            {
                "id": 38,
                "item_id": 13,
                "choice": "ฮ",
                "correct_answer": 0
            },
            {
                "id": 39,
                "item_id": 13,
                "choice": "บ",
                "correct_answer": 0
            }
        ]
    },
    {
        "id": 3,
        "topic_id": 1,
        "question_type_id": 2,
        "question": "ควาย",
        "difficulty": 0,
        "discrimination": 0,
        "level": "easy",
        "se": 0,
        "module_type_id": 1,
        "choices": [
            {
                "id": 7,
                "item_id": 3,
                "choice": "ค",
                "correct_answer": 1
            },
            {
                "id": 8,
                "item_id": 3,
                "choice": "ห",
                "correct_answer": 0
            },
            {
                "id": 9,
                "item_id": 3,
                "choice": "ซ",
                "correct_answer": 0
            }
        ]
    },
    {
        "id": 73,
        "topic_id": 1,
        "question_type_id": 2,
        "question": "พาน",
        "difficulty": 0,
        "discrimination": 0,
        "level": "hard",
        "se": 0,
        "module_type_id": 1,
        "choices": [
            {
                "id": 217,
                "item_id": 73,
                "choice": "พ",
                "correct_answer": 1
            },
            {
                "id": 218,
                "item_id": 73,
                "choice": "ภ",
                "correct_answer": 0
            },
            {
                "id": 219,
                "item_id": 73,
                "choice": "ถ",
                "correct_answer": 0
            }
        ]
    },
    {
        "id": 164,
        "topic_id": 1,
        "question_type_id": 3,
        "question": "ม้า",
        "difficulty": 0,
        "discrimination": 0,
        "level": "hard",
        "se": 0,
        "module_type_id": 5,
        "choices": [
            {
                "id": 555,
                "item_id": 164,
                "choice": "ม",
                "correct_answer": 1
            },
            {
                "id": 556,
                "item_id": 164,
                "choice": "ป",
                "correct_answer": 0
            },
            {
                "id": 557,
                "item_id": 164,
                "choice": "พ",
                "correct_answer": 1
            },
            {
                "id": 558,
                "item_id": 164,
                "choice": "ส",
                "correct_answer": 0
            }
        ]
    },
    {
        "id": 119,
        "topic_id": 1,
        "question_type_id": 3,
        "question": "ว่าว",
        "difficulty": 0,
        "discrimination": 0,
        "level": "easy",
        "se": 0,
        "module_type_id": 2,
        "choices": [
            {
                "id": 375,
                "item_id": 119,
                "choice": "ว",
                "correct_answer": 1
            },
            {
                "id": 376,
                "item_id": 119,
                "choice": "อ",
                "correct_answer": 0
            },
            {
                "id": 377,
                "item_id": 119,
                "choice": "อี",
                "correct_answer": 0
            },
            {
                "id": 378,
                "item_id": 119,
                "choice": "อือ",
                "correct_answer": 0
            }
        ]
    },
    {
        "id": 5,
        "topic_id": 1,
        "question_type_id": 2,
        "question": "จาน",
        "difficulty": 0,
        "discrimination": 0,
        "level": "easy",
        "se": 0,
        "module_type_id": 1,
        "choices": [
            {
                "id": 13,
                "item_id": 5,
                "choice": "จ",
                "correct_answer": 1
            },
            {
                "id": 14,
                "item_id": 5,
                "choice": "ฝ",
                "correct_answer": 0
            },
            {
                "id": 15,
                "item_id": 5,
                "choice": "ง",
                "correct_answer": 0
            }
        ]
    }
]

  const childAbility = {
    "ability_group_one" : 1.0,
    "ability_group_two" : 0.30,
    "ability_group_three" : 2.0,
    "ability_group_four" : 0.5,
    "ability_group_five" : 1.5,
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

  
module.exports.getItems = items
module.exports.getChildAbility = childAbility