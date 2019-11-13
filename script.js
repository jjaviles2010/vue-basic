Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})

var app  = new Vue({
    el: '#app',
    data: {
        message: "Hello Vue!",
        lista: [
            {id: 0, text: "tomate"},
            {id: 1, text: "laranja"},
            {id: 2, text: "ovo"}
        ]
    }
});