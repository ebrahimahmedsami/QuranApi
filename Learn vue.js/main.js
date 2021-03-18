
Vue.component('language-list',{

    template : '<div><language v-for="i in languages"> {{ i.language}} </language></div>',

    data(){
        return{
            languages :[
                    {language : 'arabic'},
                    {language : 'english'},
                    {language : 'france'}
            ]
        }
    }
});

//more rhan one slot
Vue.component('slot-test',{

    template : '<h1><slot name="header"></slot></h1>'

});

//inline template
Vue.component('inline-templates',{

    data(){
        return{
            ratio : 50
        }
    }

});

Vue.component('language',{

    template : "<li><slot></slot></li>"

});


//using an emit listner
Vue.component('copoun',{

    template :"<input placeholder='enter copoun' @blur='copounIsApplied'>",
    methods : {
        copounIsApplied(){
            this.$emit('applied');
        }
    }

});

var app = new Vue({

    el : '#root',
    data : {
        message : 'Hello world',
        names : ['ahmed','hima','reda','saad'],
        newName : ' ',
        title : 'title from vue.js',
        className : "red",
        tasks : [
            {description : "new home", doing : true},
            {description : "new town", doing : false},
            {description : "new country", doing : true}
        ]
    },
    methods :{

        addName(){

            this.names.push(this.newName);
            this.newName = " ";

        },
        copounIsApplied(){
            alert("copoun is applied");
        }
    },

    computed : {

        IncopmletedTasks(){

            return this.tasks.filter(task => task.doing);

        }

    }

});