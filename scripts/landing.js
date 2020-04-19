var mainView = new Vue({
    el: "#main",
    data: {
        questions: [], 
        answers: {}
    },
    mounted: function() {
        axios.get("./json/questions.json").then(response => {
            this.questions = response.data;
        });
    },
    methods: {
    }
});