var mainView = new Vue({
    el: "#main",
    data: {
        categories: []
    },
    mounted: function() {
        axios.get("./json/categories.json").then(response => {
            this.categories = response.data;
        });
    },
    methods: {
    }
});