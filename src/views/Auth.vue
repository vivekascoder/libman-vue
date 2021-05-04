<template>
  <div class="min-h-screen">
    <navbar/>
    <div class="bg-gray-800 p-4 mx-4 mt-20">
      <TabsWrapper :tabs="['Login', 'Register']" :selected="selected" @selected="setSelected">
        <Tab :isSelected="selected==='Login'" class="tab">
          <h1 class="form__heading">Login 🔐 Here</h1>
          <form @submit.prevent="loginUser()">
            <input v-model="loginEmail" class="input__text" type="text" placeholder="example@mail.com">
            <input v-model="loginPassword" class="input__password" type="password" placeholder="********">
            <div v-if="loginError" class="px-4 py-2 bg-pink-600 bg-opacity-30 text-pink-700 tracking-wide">* {{loginError.message}}</div>
            <button class="block__btn">Login Now</button>
          </form>
        </Tab>
        <Tab :isSelected="selected==='Register'" class="tab">
          <h1 class="form__heading">Register 🧑 Now</h1>
          <form @submit.prevent="registerNewUser()">
            <input v-model="registerEmail" class="input__text" type="text" placeholder="example@mail.com" required>
            <input v-model="registerPassword" class="input__password" type="password" placeholder="********" required>
            <div v-if="registerError" class="px-4 py-2 bg-pink-600 bg-opacity-30 text-pink-700 tracking-wide">* {{registerError.message}}</div>
            <button class="block__btn">Register</button>
          </form>
        </Tab>
      </TabsWrapper>
    </div>
  </div>
</template>

<script>
import TabsWrapper from '@/components/tab/TabsWrapper'
import Tab from '@/components/tab/Tab'
import Navbar from '../components/Navbar.vue'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  components: {
    TabsWrapper,
    Tab,
    Navbar
  },
  inject: ['showLoader'],
  data() {
    return {
      selected: 'Login',
      registerEmail: '',
      registerPassword: '',
      registerError: '',
      loginEmail: '',
      loginPassword: '',
      loginError: '',
    }
  },
  methods: {
    setSelected(tab) {
      this.selected = tab
      console.log(this.selected);
    },
    registerNewUser() {
      this.showLoader.value = true
      if (this.registerEmail && this.registerPassword){
        firebase.auth().createUserWithEmailAndPassword(this.registerEmail, this.registerPassword)
        .then( (userCredential) => {
          var user = userCredential.user
          console.log(user)
          this.showLoader.value = false
          this.$router.push({name: 'Dashboard'})
          
        })
        .catch( (error) => {
          this.registerError = error
          this.showLoader.value = false
          console.log(error);
        })
      }
    },
    loginUser() {
      if (this.loginEmail && this.loginPassword) {
        this.showLoader.value = true
        firebase.auth().signInWithEmailAndPassword(this.loginEmail, this.loginPassword)
        .then( (userCredential) => {
          var user = userCredential.user
          this.showLoader.value = false
          this.$router.push({name: 'Dashboard'})
        })
        .catch( (error) => {
          this.loginError = error
          this.showLoader.value = false
        })
      }
    }
  }
}
</script>

<style lang="postcss">
.tab {
  @apply text-gray-200;
}
.form__heading {
  @apply text-xl text-center uppercase text-gray-200 mt-6 mb-3;
}
.input__text, .input__password {
  @apply w-full px-2 py-2 bg-transparent border-b-2 border-pink-600 my-4 focus:outline-none text-pink-600;
}
.block__btn {
  @apply w-full px-4 py-3 text-sm bg-pink-600 mt-6 hover:bg-pink-500 focus:outline-none;
}
</style>