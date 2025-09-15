<template>
  <div class="container data-manager">
    <h1>Data Management</h1>
    
    <div class="data-section">
      <h2>Admins (NVIDIA)</h2>
      <ul>
        <li v-for="admin in admins" :key="admin.id">
          <span>{{ admin.firstName }} {{ admin.lastName }}</span>
          <div class="actions">
            <button class="edit-btn" @click="openEditModal(admin, 'admin')">Edit</button>
            <button class="delete-btn" @click="deleteItem('admin', admin.id)">Delete</button>
          </div>
        </li>
      </ul>
    </div>

    <div class="data-section">
      <h2>Students (AMD)</h2>
      <ul>
        <li v-for="student in students" :key="student.id">
          <span>{{ student.firstName }} {{ student.lastName }}</span>
          <div class="actions">
            <button class="edit-btn" @click="openEditModal(student, 'student')">Edit</button>
            <button class="delete-btn" @click="deleteItem('student', student.id)">Delete</button>
          </div>
        </li>
      </ul>
    </div>

    <div class="data-section">
      <h2>Users</h2>
       <ul>
        <li v-for="user in users" :key="user.id">
          <span>{{ user.firstName }} {{ user.lastName }}</span>
          <div class="actions">
            <button class="edit-btn" @click="openEditModal(user, 'user')">Edit</button>
            <button class="delete-btn" @click="deleteItem('user', user.id)">Delete</button>
          </div>
        </li>
      </ul>
    </div>

    <EditModal 
      v-if="isModalVisible" 
      :item="selectedItem" 
      :itemType="selectedItemType"
      @close="closeEditModal" 
      @save="saveItem"
    />

  </div>
</template>

<script>
import axios from 'axios';
import EditModal from './EditModal.vue'; // Import the new component

export default {
  name: 'DataManager',
  components: {
    EditModal // Register the component
  },
  data() {
    return {
      admins: [],
      students: [],
      users: [],
      // Data properties to manage the modal
      isModalVisible: false,
      selectedItem: null,
      selectedItemType: ''
    };
  },
  async created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const [adminsRes, studentsRes, usersRes] = await Promise.all([
          axios.get('/api/admins'),
          axios.get('/api/students'),
          axios.get('/api/users')
        ]);
        this.admins = adminsRes.data;
        this.students = studentsRes.data;
        this.users = usersRes.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async deleteItem(type, id) {
      if (!confirm('Are you sure you want to delete this item?')) return;
      try {
        await axios.delete(`/api/${type}/${id}`);
        this.fetchData(); 
      } catch (error) {
        console.error(`Error deleting ${type}:`, error);
      }
    },
    // Methods for handling the modal
    openEditModal(item, type) {
      this.selectedItem = item;
      this.selectedItemType = type;
      this.isModalVisible = true;
    },
    closeEditModal() {
      this.isModalVisible = false;
      this.selectedItem = null;
      this.selectedItemType = '';
    },
    async saveItem(updatedItem) {
      try {
        await axios.put(`/api/${this.selectedItemType}/${updatedItem.id}`, updatedItem);
        this.fetchData(); // Refresh data after saving
        this.closeEditModal(); // Close the modal
        alert(`${this.selectedItemType} updated successfully!`);
      } catch (error) {
        console.error(`Error updating ${this.selectedItemType}:`, error);
      }
    }
  }
}
</script>

<style scoped>
.data-section {
  text-align: left;
  margin-bottom: 2rem;
  background-color: #2a2a2a;
  padding: 1.5rem;
  border-radius: 8px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 10px;
  border-bottom: 1px solid var(--border-color);
}
.actions {
  display: flex;
  gap: 10px;
}
.edit-btn {
  background-color: #007bff;
  padding: 8px 15px;
  font-size: 0.9rem;
  margin: 0;
}
.edit-btn:hover {
  background-color: #0069d9;
}
.delete-btn {
  background-color: var(--amd-red);
  padding: 8px 15px;
  font-size: 0.9rem;
  margin: 0;
}
</style>