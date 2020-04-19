var mainView = new Vue({
    el: "#main",
    data: {
        questions: []
    },
    mounted: function() {
        axios.get("./json/questions.json").then(response => {
            this.questions = response.data;
            console.log(this.questions);
        });
    },
    methods: {
    }
});