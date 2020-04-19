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

        for (var page of this.information) {
            console.log(page.page);
            console.log("here2");
        }
        console.log("here3");

    },
    methods: {
    }
});