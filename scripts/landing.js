var mainView = new Vue({
    el: "#main",
    data: {
        information: []

    },
    mounted: function() {
        axios.get("./json/questions.json").then(response => {
            this.information = response.data;
        });
        console.log("here1");

        for (var i = 0; i < this.information.length; i++) {
            console.log("here2");
        }
        console.log("here3");

    },
    methods: {
    }
});