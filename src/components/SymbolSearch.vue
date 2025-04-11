<template>
    <div>
      <h2>Stock Watchlist</h2>
      
      <!-- Search Bar -->
      <input
        type="text"
        v-model="searchQuery"
        @input="onSearch"
        placeholder="Search symbols..."
      />
      
      <!-- Symbol List -->
      <ul>
        <li v-for="symbol in filteredSymbols" :key="symbol.symbolId">
          {{ symbol.name }}
          <button @click="$emit('view', symbol.symbolId)">View Details</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      symbols: Array,
    },
    data() {
      return {
        searchQuery: '',
      };
    },
    computed: {
      filteredSymbols() {
        return this.symbols.filter(symbol =>
          symbol.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    methods: {
      onSearch() {
        this.$emit('search', this.searchQuery);
      },
    },
  };
  </script>
  
  <style scoped>
div {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 15px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 15px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

button {
  padding: 5px 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>

  