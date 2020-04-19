var infoView = new Vue({
    el: "#info",
    data: {
        category: '',
        subtopic: '', 
        json_file: '', 
        title: '', 
        equipmentInfo: {}, 
        header_img: ''
    },
    mounted: function() {

        var dict = new URLSearchParams(window.location.search)
    
        this.json_file = dict.get("data");
        console.log(this.json_file)
        this.subtopic = dict.get("sub");
        path = "./json/" + String(this.json_file);
        axios.get(path).then(response => {
            this.equipmentInfo = response.data;
            console.log(response.data);
        }).then(()=>{
            this.title = this.equipmentInfo.name;
            this.category = String(this.equipmentInfo['name']).toLowerCase();
            this.header_img = this.equipmentInfo.img;
            console.log(this.header_img)
        }).then(() => {
            if(this.subtopic !== null) {
                this.scrollMeTo(this.subtopic);
            }
        });
      
        
    },
    methods: {
        scrollMeTo(refName) {
            var element = this.$refs[refName];
            var top = element[0].offsetTop;
            
            window.scrollTo(0, top);
        }
    }
});