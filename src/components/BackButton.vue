<template>
  <button @click="goBack" class="back-button">
    Back to Home
  </button>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push('/'); 
    },
  },
};
</script>

<style scoped>
.back-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}

.back-button:hover {
  background-color: #0056b3;
}
</style>
