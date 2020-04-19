var resultView = new Vue({
  el: '#quiz',
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('data');
    const url = "./json/" + category + "Quiz.json"
    console.log(category)
    axios.get(url).then((response) => {
      this.quizData = response.data;
      this.questions = this.quizData.questions;
      this.title =  this.quizData.title;
    })
  },
  data: {
    startPage: true,
    quizPage: false,
    resultsPage: false,
    quizData: [],
    title: "",
    questions: [],
    currentQuestion: 0,
    numCorrect: 0,
    percent: 0,
    chosenAnswer: "",
  },
  methods: {
  	onClickStart: function() {
      this.startPage = false;
      this.quizPage = true;
  	},
    submitAnswer: function(answer) {
      if (this.currentQuestion < this.questions.length) {
        if (this.chosenAnswer === this.questions[this.currentQuestion].answer) {
          this.numCorrect += 1;
        }
        this.currentQuestion += 1;
      }
      if (this.currentQuestion === this.questions.length) {
        // Finished quiz
        this.percent = 100*(this.numCorrect / this.questions.length)
        this.quizPage = false;
        this.resultsPage = true;
      }
    },
    resetQuiz: function() {
      this.startPage = false;
      this.quizPage = true;
      this.resultsPage = false;
      this.currentQuestion = 0;
      this.numCorrect = 0;
      this.percent = 0;
      this.chosenAnswer = "";
    },
  }
});
