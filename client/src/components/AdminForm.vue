<template>
  <div class="container">
    <h1>Admin Form</h1>
    <form @submit.prevent="submitForm">
      <label for="adminID">Admin ID:</label>
      <input type="text" id="adminID" v-model="formData.adminID" />
      <br/>
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="formData.firstName" />
      <br/>
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" v-model="formData.lastName" />
      <br/>
      <label for="department">Department:</label>
      <input type="text" id="department" v-model="formData.department" />
      <br/><br/>
      <label for="file">Select a File to Upload:</label>
      <br />
      <input type="file" name="file" id="file" @change="handleFileUpload" required>
      <br /><br />
      <input type="submit" value="Submit Admin Data" />
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AdminForm',
  data() {
    return {
      formData: {
        adminID: '',
        firstName: '',
        lastName: '',
        department: '',
      },
      selectedFile: null
    };
  },
  methods: {
    handleFileUpload(event) {
      // Get the selected file from the input
      this.selectedFile = event.target.files[0];
    },
    async submitForm() {
      if (!this.selectedFile) {
        alert('Please select a file to upload.');
        return;
      }

      // We use FormData to send files along with other form fields
      const uploadData = new FormData();
      uploadData.append('file', this.selectedFile);

      // Append all other form data fields
      for (const key in this.formData) {
        uploadData.append(key, this.formData[key]);
      }

      try {
        const response = await axios.post('/api/admin', uploadData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        
        console.log('Server response:', response.data);
        alert('Admin data and file submitted successfully!');
        // You would also reset the form fields here
      } catch (error) {
        console.error('Error submitting admin form:', error);
        alert('There was an error submitting the admin form.');
      }
    }
  }
}
</script>