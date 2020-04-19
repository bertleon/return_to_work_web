var mainView = new Vue({
    el: "#main",
    data: {
        information: []

    },
    mounted: function() {
        axios.get("./json/questions.json").then(response => {
            this.information = response.data;
        });

        for (let page of this.information) {
            console.log(page.page);
        }
    },
    methods: {
    }
});