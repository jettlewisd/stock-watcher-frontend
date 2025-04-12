<template>
  <div class="add-symbol">
    <h2>Add New Symbol</h2>
    <form @submit.prevent="submitSymbol">
      <div class="form-group">
        <label for="symbolName">Symbol Name:</label>
        <input
          type="text"
          id="symbolName"
          v-model="symbolName"
          required
          placeholder="Enter symbol name"   
        />
      </div>
      <div class="form-group">
        <label for="tickerSymbol">Ticker Symbol:</label>
        <input
          type="text"
          id="tickerSymbol"
          v-model="tickerSymbol"
          required
          placeholder="Enter ticker symbol"
        />
      </div>
      <button type="submit" class="submit-button">Add Symbol</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      symbolName: '',
      tickerSymbol: '',
    };
  },
  methods: {
    submitSymbol() {
      const newSymbol = {
        name: this.symbolName,
        tickerSymbol: this.tickerSymbol,
        exchangeId: 1
      };
      this.$emit('add', newSymbol);
      this.symbolName = ''; 
      this.tickerSymbol = ''; 
    },
  },
};
</script>

<style scoped>
.add-symbol {
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: auto;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input:focus {
  border-color: #007bff; 
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.submit-button:hover {
  background-color: #0056b3; 
}
</style>

  