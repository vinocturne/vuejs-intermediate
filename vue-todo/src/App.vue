<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input v-on:addTodoItem="addOneItem"></todo-input>
    <todo-list v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></todo-list>
    <todo-footer v-on:clearStorage="clearAllItems"></todo-footer>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue'
  import TodoInput from './components/TodoInput.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'

  export default {
    data : function() {
      return {
        todoItems: []
      }
    },
    methods: {
      addOneItem: function(todoItem) {
        var obj = {completed: false, item: todoItem};
        //저장하는 로직
        localStorage.setItem(todoItem, JSON.stringify(obj)); 
         //JSON.stringfy는 객체를 스트링화 시켜주는 것. 그냥 obj를 넣으면 변환이 안되서 localStorage에서 확인 불가능.
        this.todoItems.push(obj);
      },
      removeOneItem: function(todoItem, index) {
        localStorage.removeItem(todoItem.item);
        //event로 넘어오는 아이템이 객체 형태로 이루어져있다.
        //해당 키값이 아이템 이름과 같으므로, todoItem.item으로 해당 키를 삭제해주는 방식.
        this.todoItems.splice(index, 1);
      },
      toggleOneItem: function(todoItem, index) {
        // todoItem.completed = !todoItem.completed;
        this.todoItems[index].completed = !this.todoItems[index].completed;
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      },
      clearAllItems: function() {
        localStorage.clear();
        this.todoItems = [];
      }
      
    },
    created: function() {
        if(localStorage.length > 0) {
            for(var i=0; i<localStorage.length; i++) {
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                //    this.todoItems.push(localStorage.key(i));
                }
            }
        }
        
    },
    components : {
      'TodoHeader' : TodoHeader,
      'TodoInput' : TodoInput,
      'TodoList' : TodoList,
      'TodoFooter' : TodoFooter
    }
  }
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F6;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
