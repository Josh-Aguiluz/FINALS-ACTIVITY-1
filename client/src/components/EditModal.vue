<template>
  <div class="modal-backdrop" @click.self="close">
    <div class="modal-container">
      <div class="modal-header">
        <h2>Edit {{ itemType }}</h2>
        <button class="close-btn" @click="close">&times;</button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="save">
          <div v-for="(value, key) in editableData" :key="key" class="form-group">
            <label :for="key">{{ formatLabel(key) }}</label>
            <input v-if="key !== 'id' && key !== 'filePath'" type="text" :id="key" v-model="editableData[key]">
            <p v-else class="static-field">{{ value }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="cancel-btn" @click="close">Cancel</button>
            <button type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditModal',
  props: {
    item: {
      type: Object,
      required: true
    },
    itemType: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      // Create a local, editable copy of the item data
      editableData: {}
    };
  },
  created() {
    // When the modal is created, clone the prop to avoid modifying it directly
    this.editableData = { ...this.item };
  },
  methods: {
    close() {
      this.$emit('close');
    },
    save() {
      this.$emit('save', this.editableData);
    },
    formatLabel(key) {
      // Makes field names more readable (e.g., "firstName" becomes "First Name")
      const result = key.replace(/([A-Z])/g, ' $1');
      return result.charAt(0).toUpperCase() + result.slice(1);
    }
  }
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-container {
  background-color: var(--light-bg);
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  box-shadow: 0 5px 20px rgba(0,0,0,0.5);
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--border-color);
}
.modal-header h2 {
  margin: 0;
}
.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--text-color);
  cursor: pointer;
  padding: 0;
  margin: 0;
}
.modal-body {
  padding: 1.5rem;
}
.form-group {
  margin-bottom: 1rem;
  text-align: left;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
}
.static-field {
  background-color: #444;
  padding: 10px;
  border-radius: 4px;
  font-family: monospace;
}
.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}
.cancel-btn {
  background-color: #555;
}
.cancel-btn:hover {
  background-color: #666;
}
</style>