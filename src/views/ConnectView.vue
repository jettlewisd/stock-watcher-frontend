<template>
    <div class="connect-view">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>
      
      <h2>Contact Information</h2>
      <ul>
        <li>Email: contact@example.com</li>
        <li>Phone: (123) 456-7890</li>
        <li>Address: 123 Main St, Anytown, USA</li>
      </ul>
  
      <BackButton />
    </div>
  </template>
  
  <script>
  import AppHeader from '../components/AppHeader.vue';
  import BackButton from '@/components/BackButton.vue';
  
  export default {
    components: {
      BackButton,
    },
  };
  </script>
  
  <style scoped>
  .connect-view {
    display: flex;
    flex-direction: column; 
    align-items: center; 
    padding: 20px;
    background-color: #f9f9f9; 
    border-radius: 8px; 
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
  }
  
  h1 {
    margin-bottom: 20px;
    color: #007BFF; 
  }
  
  h2 {
    margin-top: 20px;
    margin-bottom: 10px;
    color: #333; 
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    display: flex; 
    flex-direction: column; 
    align-items: center; 
  }
  
  li {
    margin: 5px 0;
    font-size: 1.1em;
  }
  </style>
  
