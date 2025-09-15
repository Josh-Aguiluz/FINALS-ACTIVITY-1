<template>
  <div class="container">
    <h1>User Form</h1>
    <form @submit.prevent="submitForm">
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="formData.firstName" />
      <br />
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" v-model="formData.lastName" />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserForm',
  data() {
    return {
      formData: {
        firstName: '',
        lastName: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        // Send a POST request to the /api/user endpoint on your server
        const response = await axios.post('/api/user', this.formData);
        console.log('Server response:', response.data);
        alert('User data submitted successfully!');
        // Optionally, clear the form
        this.formData.firstName = '';
        this.formData.lastName = '';
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting the form.');
      }
    }
  }
}
</script>