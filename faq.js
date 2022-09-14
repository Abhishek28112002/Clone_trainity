document.body.classList.add("font-sans");
const newQuestionArray = [
  [
    {
      question:
        "Q. Do I need to have a laptop or desktop to do the specialization or can I do it on mobile too?",
      answer:
        "You can watch the videos and take quizzes & tests on any device including mobile. However, for assignments and projects, use of a desktop or laptop will be needed and hence it is advised that you do this full-stack development course on a laptop or desktop.",
    },
  ],
  [
    {
      question: " Q. I'm not able to make payment. What should you do now?",
      answer:
        "You could try making the payment from a different card or account (of a friend or family). Otherwise, you can follow the instructions on how to make an offline payment here.",
    },
    {
      question:
        " Q. What are the different options available to pay the program fee?",
      answer:
        "You can pay the specialization fee online using any of the following payment methods - debit card, credit card, netbanking, UPI, and wallets. You will receive the link to make the payment once your application is successful.",
    },
    {
      question: "Q. My payment got deducted twice. What should I do now?",
      answer:
        "Just let us know your registered email id along with the screenshot of the payment receipt or transaction history. You can submit your request using the using the Need further assistance? section. Once verified, the additional amount you paid will be refunded.",
    },
    {
      question:
        "Q. I can not pay the entire fee in one go and would like to pay it in installments. What should I do?",
      answer:
        "Depending on your payment method, you can opt for no cost EMI where a certain amount will be deducted from your account every month over a period of EMI duration that you choose. Please note that the no-cost EMI is available only select payment methods that you can see here.",
    },
    {
      question:
        "Q. The payment shows failed but money got deducted? What should I do now?",
      answer:
        "The amount deducted will come back to your account within 7-10 working days. This is the normal duration your bank will take to credit the amount back into your account.",
    },
    {
      question:
        "Q. How does the EMI option work? How much amount will I need to pay every month? Do I need to pay extra as interest cost?",
      answer:
        "If you choose to pay via EMI, a certain amount will be deducted from your account every month. For example, if the total program fee (including taxes) is Rs. 100 and you choose to pay via 12 months EMI then you will be charged Rs. 8.33 (100/12) every month. Since these are no cost EMIs, you don't need to pay anything extra as interest or processing fee. The total program fee you would pay over the duration of the EMI will remain the same as it would have been if you paid all of it upfront.",
    },
    {
      question:
        "Q. The payment was successful but it still shows 'Make Payment' on my dashboard? What should I do?",
      answer:
        "At times, there may be a slight delay in your payment reflecting on your Internshala Trainings dashboard. However, if your payment is not reflecting even after 30 minutes, please let us know your registered email id along with the screenshot of the payment receipt or transaction history. You can submit your request using the using the Need further assistance? section. Once verified, we will update your payment status from the backend.",
    },
    {
      question:
        "Q. Can I stop or cancel the EMIs later if I decide not to continue with the specialization?",
      answer:
        "No, you can not cancel or stop the EMIs at a later date since your bank would have already paid the entire program fee on your behalf to Internshala",
    },
    {
      question:
        "Q. I faced a problem while making the payment, what should I do?",
      answer:
        "Please write to us on jos@internshala.com with details and we would be happy to help.",
    },
    {
      question: "Q. Can I get a refund from the program?",
      answer:
        "Once the user has made the payment and accessed the training content, no refund would be permitted if the user does not graduate from the program. For the process for a student to claim a refund under the internship guarantee and stipend guarantee, please refer to Guaranteed Internship Program in FAQ.",
    },
  ],
  [
    {
      question:
        "Q. Once my application is accepted, when will the program start?",
      answer:
        "At the time of making the payment, you will have the option to choose your preferred batch start date.",
    },
    {
      question:
        "Q. My application has been accepted but I would like to start the program at a later date, can I?",
      answer:
        "Yes, you can. Just choose a suitable later date batch while making the payment. If a suitable date is not available, please write to us at jos@internshala.com so that we can help you with it.",
    },
    {
      question:
        "Q. How will the courses in the specialization be taught? What will be the timing of the online classes?",
      answer:
        "The specialization consists of 2 video-based courses that you would complete one after another. The videos are pre-recorded so you can watch them any time of the day as convenient to you. The courses also consist of exercises, quizzes, tests, and projects that you will undergo as you learn.",
    },
    {
      question:
        "Q. What is the duration of the specialization? How many hours a day do I need to spend on the program to complete it in the given duration?",
      answer:
        "You need to complete the full-stack development specialization training within 6 months from your chosen batch start date. If you spend ~2 hours every day, you should be able to complete the program comfortably in 6 months including all the projects, tests, vivas etc.",
    },
    {
      question:
        "Q. What if I am not able to complete the entire specialization in the given duration? Will I get an extension?",
      answer:
        "If you are not able to complete the specialization in 3 months due to any unforeseen reasons, you will be able to get an extension of 2 weeks on paying Rs. 4999 or an extension of 1 month on paying Rs. 7999.",
    },
  ],
  [
    {
      question:
        "Q. What certificate will I receive from Internshala upon completing the specialization?",
      answer:
        "Upon successful completion of the specialization, you will receive a Full-Stack Development Specialization certificate from Internshala Trainings.",
    },
    {
      question:
        "Q. What is the criteria for one to receive the specialization certificate upon completion?",
      answer:
        "The necessary requirements to be eligible for the specialization certificate are as follows -1. Min. 75% aggregate marks 2. Submission of the mandatory projects 3. Attending the viva and career planning session",
    },
  ],
  [
    {
      question:
        "Q. Who will be the mentor for my career planning session and how would this session help me in my career?",
      answer:
        "The Career Planning Session will take place along with the viva and your mentor for these sessions would be an expert with 5+ years of experience in the industry. This session will be an opportunity for you to discuss your career goals and get personalised feedback and guidance from the mentor.",
    },
    {
      question:
        "Q. What kind of internship can I expect upon completion of the program and where?",
      answer:
        "For graduating specialization students, we will curate Full-Stack Development internships with stipends. These internships come from the pool of recruiters who use Internshala for hiring and can be anywhere in India (including work from home) and you can apply to them as per your choice.",
    },
    {
      question: "Q. What is the internship guarantee?",
      answer:
        "Internshala guarantees that every eligible specialization student will be able to secure an internship (or a full-time employment) within 12 months from the start of the specialization program (Internship Guarantee Period); failing which Internshala will refund the specialization fee paid by the student.",
    },
    {
      question: "Q. What internship will be considered towards this guarantee?",
      answer:
        "Any internship or full-time employment that a student gets, in a profile directly related to the specialization program or otherwise, through their own efforts, via Internshala, or any other medium, will be considered.",
    },
    {
      question:
        "Q. What is the process for a student to claim a refund under the internship guarantee?",
      answer:
        "If you satisfy the eligibility criteria and still fail to get any internship (or full time employment) with-in Internship Guarantee Period, please write to jos@internshala.com upon completion of the Internship Guarantee Period. We will let you know of the documents required to process your claim.",
    },
    {
      question:
        "Q. What is the process for a student to claim a refund under the stipend guarantee?",
      answer:
        "If you satisfy the eligibility criteria and get an internship whose stipend/salary does not match the guaranteed stipend, please write to us on jos@internshala.com with details and documents (like offer letter or appointment letter) upon completion of your internship/full time employment. We will let you know of the remaining documents required to process your claim.",
    },
    {
      question: "Q. How would the internship placement process work?",
      answer:
        "After graduating from the specialization, on regular intervals, Internshala will share with you relevant full-stack development internships that you can apply to as per your choice. As a specialization student, your application will be highlighted to the recruiters. Companies will shortlist and assess you as per their respective policies.",
    },
    {
      question: "Q. What are placement preparation sessions?",
      answer:
        "Placement preparation sessions are 1:1 sessions for specialization students so as to prepare them for interviews. These include sessions on cover letter writing, resume writing, LinkedIn profile building, and mock interviews.These are mandatory sessions and in case the user isn't attending any session, they will be debarred from the guaranteed internship program. The user will still be able to access the learning content.",
    },
  ],
];
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

const newQuestionArrayPP = [
  {
    question: "Enter new question1 for program and preq...",
    answer: "Enter new answer1",
  },
  {
    question: "Enter new question2 for program and preq...",
    answer: "Enter new answer2",
  },
  {
    question: "Enter new question3 for program and preq...",
    answer: "Enter new answer3",
  },
  {
    question: "Enter new question4 for program and preq...",
    answer: "Enter new answer4",
  },
  {
    question: "Enter new question5 for program and preq...",
    answer: "Enter new answer5",
  },
  {
    question: "Enter new question6 for program and preq...",
    answer: "Enter new answer6",
  },
];
// const newQuestionArraysdd = [
//   { question: "Q. Once my application is accepted, when will the program start?",
//   answer: "At the time of making the payment, you will have the option to choose your preferred batch start date."},
// { question: "Q. My application has been accepted but I would like to start the program at a later date, can I?",
// answer: "Yes, you can. Just choose a suitable later date batch while making the payment. If a suitable date is not available, please write to us at jos@internshala.com so that we can help you with it."},
// { question: "Q. How will the courses in the specialization be taught? What will be the timing of the online classes?",
// answer: "The specialization consists of 2 video-based courses that you would complete one after another. The videos are pre-recorded so you can watch them any time of the day as convenient to you. The courses also consist of exercises, quizzes, tests, and projects that you will undergo as you learn."},
// { question: "Q. What is the duration of the specialization? How many hours a day do I need to spend on the program to complete it in the given duration?
// answer: "You need to complete the full-stack development specialization training within 6 months from your chosen batch start date. If you spend ~2 hours every day, you should be able to complete the program comfortably in 6 months including all the projects, tests, vivas etc."},
// { question: "Q. What if I am not able to complete the entire specialization in the given duration? Will I get an extension?",
// answer: "If you are not able to complete the specialization in 3 months due to any unforeseen reasons, you will be able to get an extension of 2 weeks on paying Rs. 4999 or an extension of 1 month on paying Rs. 7999."},
// ];

const newQuestionArraypdds = [
  {
    question: "Enter new question1 for program delivery doubt....",
    answer: "Enter new answer1",
  },
  {
    question: "Enter new question2 for program delivery doubt....",
    answer: "Enter new answer2",
  },
  {
    question: "Enter new question3 for program delivery doubt....",
    answer: "Enter new answer3",
  },
  {
    question: "Enter new question4 for program delivery doubt....",
    answer: "Enter new answer4",
  },
  {
    question: "Enter new question5 for program delivery doubt....",
    answer: "Enter new answer5",
  },
  {
    question: "Enter new question6 for program delivery doubt....",
    answer: "Enter new answer6",
  },
];

let sectionArray = [
  { id: 1, title: "Eligibility & Application" },
  { id: 2, title: "Program prerequisites" },
  { id: 3, title: "Payment" },
  { id: 4, title: "Start date & duration" },
  { id: 5, title: "Certifications" },
  { id: 6, title: "Guaranteed Internship Program" },
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
  .classList.add("text-green-500", "underline", "underline-offset-[30px]");

function makeActive(className, sectionIndex) {
  if (
    document
      .getElementsByClassName(className)[0]
      .classList.contains("text-green-500")
  ) {
    document
      .getElementsByClassName(className)[0]
      .classList.remove(
        "text-green-500",
        "underline",
        "underline-offset-[30px]"
      );
  } else {
    for (let i = 0; i < sectionArray.length; i++) {
      document
        .getElementsByClassName(`section-elem-${i}`)[0]
        .classList.remove(
          "text-green-500",
          "underline",
          "underline-offset-[30px]"
        );
    }
    document
      .getElementsByClassName(className)[0]
      .classList.add("text-green-500", "underline", "underline-offset-[30px]");

    ////// section wise if else condtn to display question in that perticular page
    if (
      document.getElementsByClassName(`section-elem-${sectionIndex}`)[0]
        .innerText === "Eligibility & Application"
    ) {
      changeDisplayedQuestions(questionArray);
    } else if (
      document.getElementsByClassName(`section-elem-${sectionIndex}`)[0]
        .innerText === "Start date & duration"
    ) {
      changeDisplayedQuestions(newQuestionArray[2]);
    } else if (
      document.getElementsByClassName(`section-elem-${sectionIndex}`)[0]
        .innerText === "Program prerequisites"
    ) {
      changeDisplayedQuestions(newQuestionArray[0]);
    } else if (
      document.getElementsByClassName(`section-elem-${sectionIndex}`)[0]
        .innerText === "Payment"
    ) {
      changeDisplayedQuestions(newQuestionArray[1]);
    } else if (
      document.getElementsByClassName(`section-elem-${sectionIndex}`)[0]
        .innerText === "Certifications"
    ) {
      changeDisplayedQuestions(newQuestionArray[3]);
    } else {
      changeDisplayedQuestions(newQuestionArray[4]);
    }
  }
}

function changeDisplayedQuestions(questionArr) {
  for (let i = 0; i < questionArray.length; i++) {
    document.getElementsByClassName("questions")[i].children[0].innerText = `${
      questionArr[i] ? questionArr[i].question : ""
    }`;
    document.getElementsByClassName("questions")[i].children[1].innerText = `${
      questionArr[i] ? questionArr[i].answer : ""
    }`;
    if (
      document.getElementsByClassName("questions")[i].children[0].innerText ==
      ""
    ) {
      document.getElementsByClassName("questions")[i].classList.add("hidden");
    } else {
      document
        .getElementsByClassName("questions")
        [i].classList.remove("hidden");
    }
  }
}

