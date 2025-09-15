<template>
  <div class="container">
    <h1>Student Form</h1>
    <form @submit.prevent="submitForm">
      <label for="studentID">Student ID:</label>
      <input type="text" id="studentID" v-model="formData.studentID" />
      <br/>
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="formData.firstName" />
      <br/>
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" v-model="formData.lastName" />
      <br/>
      <label for="section">Section:</label>
      <input type="text" id="section" v-model="formData.section" />
      <br/>
      <input type="submit" value="Submit Student Data" />
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'StudentForm',
  data() {
    return {
      formData: {
        studentID: '',
        firstName: '',
        lastName: '',
        section: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        // Send a POST request to the /api/student endpoint
        const response = await axios.post('/api/student', this.formData);
        console.log('Server response:', response.data);
        alert('Student data submitted successfully!');
        // Reset form
        Object.keys(this.formData).forEach(key => this.formData[key] = '');
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting the student form.');
      }
    }
  }
}
</script>