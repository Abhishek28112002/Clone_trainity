document.body.classList.add("font-sans");

let questionArray = [
  {
    question: "Q. Who is eligible to apply for the specialization?",
    answer:
      "The specialization program is meant for pre-final and final year students, recent graduates, and young professionals who wish to build a career in Full Stack Development. You should also be authorized and available to work in India upon completion of the program if you wish to avail of the internship guarantee benefits.",
  },

  {
    question:
      "Q. I am in the early years of college and will NOT be graduating in the next 12 months, can I still apply?",
    answer:
      "Yes, if you have decided to make a career in full-stack development and are ready to put in the required time and effort to complete the program, you can still apply and we will evaluate your application based on its quality. You would be able to apply to the short-term or work-from-home internships that are published on Internshala.",
  },
  {
    question:
      "Q. I have more than 3 years of work experience in a different field and now I want to switch to Full Stack Development, can I apply?",
    answer:
      "Yes, you can. However, please note that the placement opportunities that we would be curating for the students of the specializations would be those of internships and the same will be made available to you too. Different companies may factor in your prior work experience in their hiring decisions differently and it will be at the sole discretion of the companies.",
  },
  {
    question:
      "Q. I have more than 3 years of work experience in a different field and now I want to switch to Full Stack Development, can I apply?",
    answer:
      "Yes, you can. However, please note that the placement opportunities that we would be curating for the students of the specializations would be those of internships and the same will be made available to you too. Different companies may factor in your prior work experience in their hiring decisions differently and it will be at the sole discretion of the companies.",
  },
  {
    question: "Q. What questions will the application process consist of?",
    answer:
      "The application form would consist of questions on your education, your motivation to build a career in full-stack development, and questions to test your communication skills.",
  },
  {
    question: "Q. On what parameters would my application be evaluated?",
    answer:
      "Your application would be evaluated on the basis of your written communication skills in this full-stack development specialization course.",
  },
  {
    question:
      "Q. My application was rejected, can I still pay the fee and join the program?",
    answer: "No, you can not.",
  },
  {
    question: "Q. My application was rejected, can I re-apply?",
    answer:
      "You can. However, it is recommended that you speak to us first to understand shortcomings in your previous application before deciding to re-apply.",
  },
];

const newQuestionArray = [
  { question: "Enter new question1", answer: "Enter new answer1" },
  { question: "Enter new question2", answer: "Enter new answer2" },
  { question: "Enter new question3", answer: "Enter new answer3" },
  { question: "Enter new question4", answer: "Enter new answer4" },
  { question: "Enter new question5", answer: "Enter new answer5" },
  { question: "Enter new question6", answer: "Enter new answer6" },
];

let sectionArray = [
  { id: 1, title: "Eligibility & Application" },
  { id: 2, title: "Program prerequisites" },
  { id: 3, title: "Start date & duration" },
  {
    id: 4,
    title: "Program delivery, doubt solving, tests, projects, and vivas",
  },
  { id: 5, title: "Eligibility & Application" },
  { id: 6, title: "Certifications" },
];

const sectionContainer = document.getElementById("sections");
for (let index = 0; index < sectionArray.length; index++) {
  const newSectionElement = document.createElement("section");
  newSectionElement.classList.add(
    "cursor-pointer",
    "font-bold",
    "text-sm",
    "overflow-hidden",
    "min-width-max",
    "truncate",
    `section-elem-${index}`
  );
  const newSectionTextElement = document.createTextNode(
    sectionArray[index].title
  );
  newSectionElement.appendChild(newSectionTextElement);
  sectionContainer.appendChild(newSectionElement);
}

const questionContainer = document.getElementById("Question-container");

function displayQuestion(questionArr) {
  for (let index = 0; index < questionArr.length; index++) {
    const newQuestionElement = document.createElement("div");
    newQuestionElement.classList.add(
      "questions",
      "py-5",
      "border-b",
      "hover:bg-slate-50",
      "flex",
      "tesxt-sm",
      "flex-col",
      "space-y-2",
      "cursor-pointer",
      `q${index}`
    );
    const questionParaElement = document.createElement("p");
    const newQuestionText = document.createTextNode(
      questionArr[index].question
    );
    questionParaElement.appendChild(newQuestionText);
    newQuestionElement.appendChild(questionParaElement);

    const newAnswerPara = document.createElement("p");
    newAnswerPara.classList.add(`ans${index}`, "answer", "hidden");
    const newAnswerNode = document.createTextNode(questionArr[index].answer);
    newAnswerPara.appendChild(newAnswerNode);
    newQuestionElement.appendChild(newAnswerPara);

    questionContainer.appendChild(newQuestionElement);
  }
}

displayQuestion(questionArray);

const allQuestionElement = document.getElementsByClassName("questions");
for (let index = 0; index < allQuestionElement.length; index++) {
  const question = allQuestionElement[index];
  question.addEventListener("click", (e) => {
    togggleClass(`ans${index}`);
  });
}

function togggleClass(className) {
  if (
    document.getElementsByClassName(className)[0].classList.contains("hidden")
  ) {
    document.getElementsByClassName(className)[0].classList.remove("hidden");
  } else {
    document.getElementsByClassName(className)[0].classList.add("hidden");
  }
}

for (let i = 0; i < sectionArray.length; i++) {
  document
    .getElementsByClassName(`section-elem-${i}`)[0]
    .addEventListener("click", () => {
      makeActive(`section-elem-${i}`, i);

      console.log(
        document.getElementsByClassName(`section-elem-${i}`)[0].innerText
      );
    });
}

document
  .getElementsByClassName(`section-elem-${0}`)[0]
  .classList.add("text-blue-500", "underline", "underline-offset-[30px]");

function makeActive(className, sectionIndex) {
  if (
    document
      .getElementsByClassName(className)[0]
      .classList.contains("text-blue-500")
  ) {
    document
      .getElementsByClassName(className)[0]
      .classList.remove(
        "text-blue-500",
        "underline",
        "underline-offset-[30px]"
      );
  } else {
    for (let i = 0; i < sectionArray.length; i++) {
      document
        .getElementsByClassName(`section-elem-${i}`)[0]
        .classList.remove(
          "text-blue-500",
          "underline",
          "underline-offset-[30px]"
        );
    }
    document
      .getElementsByClassName(className)[0]
      .classList.add("text-blue-500", "underline", "underline-offset-[30px]");

    ////// section wise if else condtn to display question in that perticular page
    if (
      document.getElementsByClassName(`section-elem-${sectionIndex}`)[0]
        .innerText === "Eligibility & Application"
    ) {
      changeDisplayedQuestions(questionArray);
    } else {
      changeDisplayedQuestions(newQuestionArray);
    }
  }
}

function changeDisplayedQuestions(questionArr) {
  for (let i = 0; i < questionArray.length; i++) {
    document.getElementsByClassName("questions")[i].children[0].innerText = `${
      questionArr[i] ? questionArr[i].question : ""
    }`;
    document.getElementsByClassName("questions")[
      i
    ].children[1].innerText = `${questionArr[i]?.answer}`;
  }
}
