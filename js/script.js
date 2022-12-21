const{
    createApp
} = Vue;

createApp({
    data(){
        return{
            newTask: '',
            todolist:[
                {
                    text:'Andare a fare la spesa per la Vigilia di Natale e per Capodanno',
                    done: false,
                },
                {
                    text:'Comprare prosecco e spumante',
                    done: false,
                },
                {
                    text:'Comprare Pandoro e Panettone',
                    done: true,
                },
                {
                    text:'Comprare Cotechino e Lenticchie',
                    done: true,
                },
                {
                    text:'Fare shopping per outfit di Capodanno',
                    done: true,
                },
                {
                    text:'Decidere location per festa di Capodanno',
                    done: false,
                },
                {
                    text:'Fare gli auguri al Team Boolean',
                    done: false,
                },
            ]
        }
    },

    methods:{
        // Aggiungo elementi alla lista 
        addTask(){
            let object = {
                text: this.newTask,
                done: false,
                edit: false,
            }
            this.todolist.push(object);
            // per non lasciare la voce nella barra
            this.newTask = '';
        },
        // Rimuovo elementi dalla lista
        removeTask(index){
            this.todolist.splice(index, 1);
        },
        // Controllo se gli elementi nella lista hanno done = true.
        checkTask(index){
            let task = this.todolist[index];
            if(task.done == true){
                task.done = false;
            }
            else{
                task.done = true;
            }
        },
    }
}).mount('#app')