<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input></todo-input>
    <todo-list></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue'
  import TodoInput from './components/TodoInput.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'

  export default {
    // data : function() {
    //   return {
    //     todoItems: []
    //   }
    // },
    // methods: {
      // addOneItem(todoItem) {
      //   const obj = {completed: false, item: todoItem};
      //   //저장하는 로직
      //   localStorage.setItem(todoItem, JSON.stringify(obj)); 
      //    //JSON.stringfy는 객체를 스트링화 시켜주는 것. 그냥 obj를 넣으면 변환이 안되서 localStorage에서 확인 불가능.
      //   this.todoItems.push(obj);
      // },
      // removeOneItem(todoItem, index) {
      //   localStorage.removeItem(todoItem.item);
      //   //event로 넘어오는 아이템이 객체 형태로 이루어져있다.
      //   //해당 키값이 아이템 이름과 같으므로, todoItem.item으로 해당 키를 삭제해주는 방식.
      //   this.todoItems.splice(index, 1);
      // },
      // toggleOneItem(todoItem, index) {
      //   // todoItem.completed = !todoItem.completed;
      //   this.todoItems[index].completed = !this.todoItems[index].completed;
      //   localStorage.removeItem(todoItem.item);
      //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      // },
      // clearAllItems() {
      //   localStorage.clear();
      //   this.todoItems = [];
      // }
    // },
    components : {
      TodoHeader,
      TodoInput,
      TodoList,
      TodoFooter
      //향상된 객체 리터럴로, 객체 속성명과 값 명이 동일할때, 축약 가능.
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
