<template>
    <div class="exchange-view">
      <h1>Exchange Information</h1>
      
      <div class="exchange-buttons">
        <button @click="fetchStocks('1')">NYSE</button>
        <p>New York Stock Exchange: The largest stock exchange in the world by market capitalization.</p>
        
        <button @click="fetchStocks('2')">NASDAQ</button>
        <p>NASDAQ: Known for its technology stocks and electronic trading.</p>
        
        <button @click="fetchStocks('3')">HKEX</button>
        <p>Hong Kong Stock Exchange: The primary stock exchange in Hong Kong.</p>
      </div>
      
      <div v-if="stocks.length">
        <h2>Stocks in Selected Exchange</h2>
        <ul>
          <li v-for="stock in stocks" :key="stock.id">{{ stock.name }}</li>
        </ul>
      </div>
      
      <BackButton />
    </div>
  </template>
  
  <script>
  import BackButton from '@/components/BackButton.vue';
  import stockService from '@/services/StocksService';
  
  export default {
    components: {
      BackButton,
    },
    data() {
      return {
        stocks: [],
      };
    },
    methods: {
      async fetchStocks(exchangeId) {
        try {
          const response = await stockService.getSymbolsByExchangeId(exchangeId);
          console.log('Fetched stocks:', response.data);
          this.stocks = response.data;
          console.log(this.stocks.length);
        } catch (error) {
          console.error('Error fetching stocks:', error);
        }
      },
    },
  };
  </script>
  

  <style scoped>
.exchange-view {
  padding: 20px;
  text-align: center;
}

.exchange-buttons {
  display: flex; 
  justify-content: center; 
  margin-bottom: 20px;
}

button {
  margin: 10px; 
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s; 
}

button:hover {
  background-color: #0056b3;
}
</style>
