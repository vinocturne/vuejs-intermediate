<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <!-- <button v-on:click="addTodo">add</button> -->
      <span class="addContainer" v-on:click="addTodo">
          <i class="fas fa-plus-square addBtn"></i>
      </span>
      <Modal v-if="showModal" @close="showModal = false">
        <!--
        you can use custom content here to overwrite
        default content
        -->
        <h3 slot="header">경고!
            <i class="closeModalBtn fas fa-times" @click="showModal=false"></i>
        </h3>

        <p slot="body">내용을 입력해주세요</p>
      </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'
export default {
    data: function() {
        return {
            newTodoItem: "",
            showModal: false
        }
    },
    methods: {
        addTodo(){
            if(this.newTodoItem !== '') {
                // this.$emit('이벤트 이름', 인자1, 인자2, ...);
                // this.$emit('addTodoItem', this.newTodoItem);
                this.$store.commit('addOneItem', this.newTodoItem); 
                this.clearInput();
            }else {
                this.showModal = !this.showModal;
            }
            
        },
        clearInput() {
            //input 박스 비워주기
            this.newTodoItem = '';
        }
    },
    components: {
        Modal
    }
}
</script>

<style scoped> 
/* scoped는 해당 뷰 파일에서만 스타일을 적용시킨다는 뜻 */
input:focus {
    outline: none;
}
.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: white;
    vertical-align: middle;
}
.closeModalBtn {
    color: #42b983;
}
</style>