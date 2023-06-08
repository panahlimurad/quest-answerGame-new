$(document).ready(function () {

  const HTML = [
    {
      question: "What is HTML ?",
      optins_a: "Hypertext Markup Language",
      optins_b: "Hyper Tool Markup Language",
      optins_c: "High Tech Markup Language",
      optins_d: "Home Text Markup Language",
      answers: "a",
    },
    {
      question: "Which element is used to represent heading tags in HTML?",
      optins_a: "<p>",
      optins_b: "<h1>",
      optins_c: "<head>",
      optins_d: "<title>",
      answers: "b",
    },
    {
      question: "Which tag is used to insert an image in HTML?",
      optins_a: "<img>",
      optins_b: "<a>",
      optins_c: "<div>",
      optins_d: "<span>",
      answers: "a",
    },
    {
      question: "Which tag is used to create a list in HTML?",
      optins_a: "<li>",
      optins_b: "<ol>",
      optins_c: "<ul>",
      optins_d: "<dl>",
      answers: "c",
    },
    {
      question: "Which tag is used to group HTML form elements together?",
      optins_a: "<input>",
      optins_b: "<form>",
      optins_c: "<select>",
      optins_d: "<fieldset>",
      answers: "d",
    },
  ];

  const CSS = [
    {
      question:
        "In CSS, which selector type is used to select a specific HTML element?",
      optins_a: "Class selector (.)",
      optins_b: "ID selector (#)",
      optins_c: "Element selector",
      optins_d: "Universal selector (*)",
      answers: "c",
    },
    {
      question: "What is the box model in CSS?",
      optins_a: "It represents the amount of text contained within an element.",
      optins_b: "It is used to style the content of an element.",
      optins_c: "It determines the size and margin of an element.",
      optins_d:
        "It defines the alignment and position of an element.Universal selector (*)",
      answers: "c",
    },
    {
      question: "In CSS, how is inline style applied to an element?",
      optins_a: "Within the <style> tag",
      optins_b: "Using the style attribute",
      optins_c: "Defined in a separate CSS file",
      optins_d: "Programmatically with JavaScript",
      answers: "b",
    },
    {
      question: "What is the purpose of the float property in CSS?",
      optins_a: "It determines the background color of an element.",
      optins_b: "It positions an element next to other elements.",
      optins_c: "It specifies the margin of an element.",
      optins_d: "It controls the visibility of an element.",
      answers: "b",
    },
    {
      question: "What does the CSS property display: none mean?",
      optins_a: "It makes an element invisible.",
      optins_b: "It adjusts the size of an element.",
      optins_c: "It aligns an element horizontally.",
      optins_d: "It sets the background color of an element.",
      answers: "a",
    },
  ];

  const JavaScript = [
    {
      question:
        "JavaScript has a similar structure to which programming language?",
      optins_a: "JAVA",
      optins_b: "PYTHON",
      optins_c: "C++",
      optins_d: "HTML",
      answers: "a",
    },
    {
      question: "In JavaScript, what is the purpose of variables?",
      optins_a: "To store and manipulate data",
      optins_b: "To call functions",
      optins_c: "To select HTML elements",
      optins_d: "To control loops",
      answers: "a",
    },
    {
      question: "What is the difference between  ===  and  == in JavaScript?",
      optins_a: "=== compares values only, while == compares values and types.",
      optins_b: "=== compares values, while ==  compares types",
      optins_c: "=== compares types, while  ==  compares values.",
      optins_d: "Both have exactly the same functionality.",
      answers: "a",
    },
    {
      question:
        "What is the difference between for and while loops in JavaScript?",
      optins_a:
        "for loop is repeated a specific number of times, while while loop is repeated based on a specific condition.",
      optins_b: "for loop runs once, while while loop runs continuously.",
      optins_c: "for loop uses a loop variable, while while loop does not.",
      optins_d: "Both have exactly the same functionality.",
      answers: "a",
    },
    {
      question: "What does NaN mean in JavaScript?",
      optins_a: "Not a Number, represents a non-numeric value.",
      optins_b: "Null and None, represents an empty or null value.",
      optins_c: "Negative or Null, represents a negative or zero value.",
      optins_d: "New and Null, represents a new or empty value.",
      answers: "a",
    },
  ];

  const webDevelopmentTools = [
    {
      question:
        "Which tool is commonly used to apply CSS styles quickly in the web development process?",
      optins_a: "Bootstrap",
      optins_b: "Sublime Text",
      optins_c: "Sass",
      optins_d: "Adobe Photoshop",
      answers: "a",
    },
    {
      question:
        "Which JavaScript library used in front-end development has a component-based architecture?",
      optins_a: "jQuery",
      optins_b: "React",
      optins_c: "Laravel",
      optins_d: "Django",
      answers: "b",
    },
    {
      question:
        "Which browser-based tool is used to edit web pages live and visualize designs?",
      optins_a: "Git",
      optins_b: "Node.js",
      optins_c: "Visual Studio Code",
      optins_d: "Chrome Developer Tools",
      answers: "d",
    },
    {
      question:
        "Which tool is used to analyze and improve website performance?",
      optins_a: "Google Analytics",
      optins_b: "Figma",
      optins_c: "GIMP",
      optins_d: "Lighthouse",
      answers: "d",
    },
    {
      question:
        "Which popular tool is used for version control and collaboration in web development ",
      optins_a: "Git",
      optins_b: "Photoshop",
      optins_c: "Chrome DevTools",
      optins_d: "FileZilla",
      answers: "a",
    },
  ];

  const webDesignUserExperience = [
    {
      question:
        "In web design, which color is preferred to grab users' attention?",
      optins_a: "Dark blue",
      optins_b: "Bright yellow",
      optins_c: "Pastel green",
      optins_d: "Orange",
      answers: "d",
    },
    {
      question: "What does the concept of white space mean in web design?",
      optins_a:
        "It refers to a white background color used in the design process.",
      optins_b:
        "It refers to the empty space between text and elements on a page.",
      optins_c: "It refers to an empty space at the top of a page.",
      optins_d: "It refers to the text on top of a design element.",
      answers: "b",
    },
    {
      question:
        "Which feature is important for creating a user-friendly navigation menu in web design?",
      optins_a: "Large and prominent buttons",
      optins_b: "Dense text content",
      optins_c: "Different colors of sparkling animations",
      optins_d:
        "Unusual layout that requires users to guess expected information",
      answers: "a",
    },
    {
      question:
        "Which of the following methods can be used to improve user experience?",
      optins_a: "Fast-loading pages",
      optins_b: "Complex and eye-catching graphics",
      optins_c: "Numerous mandatory form fields",
      optins_d: "Frequently showing error messages",
      answers: "a",
    },
    {
      question: "What does responsive design mean in web design?",
      optins_a:
        "It means a design that is compatible and flexible on mobile devices.",
      optins_b: "It means a design with attractive and vibrant colors.",
      optins_c: "It means a design that looks good only in a specific browser.",
      optins_d:
        "It means a page that has no text content and is solely designed with images.",
      answers: "a",
    },
  ];

  let answers = "";
  let point = 0;
  let nextQuestion = 0;
  let currentCategory = HTML;

  function restartGame() {
    $(".result").hide(1000);
    $("header").show(1500);
    $(".container").addClass("flex-container").show(1500);

    answers = "";
    point = 0;
    nextQuestion = 0;
  }

  function startGame(q) {
    if (nextQuestion === q.length) {
      $("#score").text("Your Score: " + point);
      $(".panel").hide();
      $(".result").show();

      return;
    }

    let currentQuestion = q[nextQuestion];

    let questionText = currentQuestion.question;
    let firstOption = currentQuestion.optins_a;
    let secondOption = currentQuestion.optins_b;
    let thirdOption = currentQuestion.optins_c;
    let fourthOption = currentQuestion.optins_d;
    answers = currentQuestion.answers;

    $(".text").text(questionText);
    $("#optionFirst").text("A: " + firstOption);
    $("#optionSecond").text("B: " + secondOption);
    $("#optionThird").text("C: " + thirdOption);
    $("#optionFourth").text("D: " + fourthOption);

    console.log(questionText);
    console.log(firstOption);
    console.log(secondOption);
    console.log(thirdOption);
    console.log(fourthOption);
    console.log(answers);
  }

  function changeGame(category) {
    $(".option").on("click", function () {
      let value = $(this).data("value");

      if (value === answers) {
        point += 20;
        nextQuestion++;
        startGame(category);
        console.log(nextQuestion);
        console.log(point);
      } else {
        nextQuestion++;
        startGame(category);
      }
    });
  }
  
  function openAnswer() {
    $(".container").fadeOut("slow");
    $("header").fadeOut("slow");
    $(".panel").fadeIn(3000);
  }
  
  $(document).on("click", "#HTML", function () {
    currentCategory = HTML
    startGame(currentCategory);
    changeGame(currentCategory)
  });
  
  
  
  $(document).on("click", ".card", openAnswer);
  $(document).on("click", "button", restartGame);
  


  $(document).on("click", "#CSS", function () {
    currentCategory = CSS;
    startGame(currentCategory);
    changeGame(currentCategory);
  });
  
  $(document).on("click", "#JS", function () {
    currentCategory = JavaScript;
    startGame(currentCategory);
    changeGame(currentCategory);
  });
  $(document).on("click", "#WBT", function () {
    currentCategory = webDevelopmentTools;
    startGame(currentCategory);
    changeGame(currentCategory);
  });
  $(document).on("click", "#WDUE", function () {
    currentCategory = webDesignUserExperience;
    startGame(currentCategory);
    changeGame(currentCategory);
  });


});