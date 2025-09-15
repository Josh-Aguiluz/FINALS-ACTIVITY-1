<template>
  <div class="showcase-container">
    <h1>CHOOSE YOUR POWER</h1>
    <p>Select an option to submit your information.</p>
    <div class="card-layout">
      
      <div class="gpu-card nvidia" @click="goToAdmin">
        <div class="card-content">
          <h2>NVIDIA</h2>
          <p>The ultimate platform for gamers and creators.</p>
          <button>Admin Entry</button>
        </div>
      </div>

      <div class="gpu-card amd" @click="goToStudent">
        <div class="card-content">
          <h2>AMD</h2>
          <p>High-performance computing and visualization.</p>
          <button class="amd-button">Student Entry</button>
        </div>
      </div>
      
      <div class="gpu-card hybrid" @click="goToUser">
        <div class="card-content">
          <h2>GENERAL USER</h2>
          <p>For all other user submissions.</p>
          <button class="hybrid-button">User Entry</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    goToAdmin() {
      this.$router.push('/admin');
    },
    goToStudent() {
      this.$router.push('/student');
    },
    // New method to navigate to the User Form
    goToUser() {
      this.$router.push('/user');
    }
  }
}
</script>

<style scoped>
.showcase-container {
  text-align: center;
}

.card-layout {
  display: flex;
  flex-wrap: wrap; /* Allows cards to wrap on smaller screens */
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
}

.gpu-card {
  width: 350px;
  height: 450px;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease;
  display: flex;
  align-items: flex-end;
}

.gpu-card:hover {
  transform: scale(1.03);
}

.card-content {
  background: linear-gradient(to top, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0));
  color: white;
  width: 100%;
  padding: 1.5rem;
  text-align: left;
  box-sizing: border-box;
}

.nvidia {
  background-image: url('https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/geforce-ada-4090-web-og-1200x630.jpg');
  border: 2px solid var(--nvidia-green);
}

/* FIXED: Using a more stable image link for AMD */
.amd {
  background-image: url('https://cdn.mos.cms.futurecdn.net/6e2eGX2VSocFcNeEdt85NB.jpg');
  border: 2px solid var(--amd-red);
}

/* NEW: Styling for the third "User" card */
.hybrid {
  background-image: url('https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2940&auto=format&fit=crop');
  border: 2px solid #555;
}

.amd-button {
  background-color: var(--amd-red);
}
.amd-button:hover {
  background-color: #ff3d44;
}

.hybrid-button {
  background: linear-gradient(90deg, var(--nvidia-green), var(--amd-red));
}
.hybrid-button:hover {
  opacity: 0.9;
}
</style>