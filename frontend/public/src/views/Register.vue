<template>
    <div>
      <h1>Register</h1>
      <form @submit.prevent="register">
        <input v-model="name" type="text" placeholder="Name" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
      };
    },
    methods: {
      async register() {
        try {
          const response = await axios.post('http://localhost:8000/api/register', {
            name: this.name,
            email: this.email,
            password: this.password,
          });
          localStorage.setItem('token', response.data.token);
          this.$router.push('/');
        } catch (error) {
          alert('Registration failed');
        }
      },
    },
  };
  </script>