<template>
    <div>
      <h1>Data for: {{ symbol.name }}</h1>
      <DataEntriesList :dataEntries="dataEntries" />
      <button @click="deleteSymbol">Delete Symbol</button>
      <BackButton />
    </div>
  </template>
  
  <script>
  import stockService from '@/services/StocksService'; 
  import DataEntriesList from '@/components/DataEntriesList.vue'; 
  import BackButton from '@/components/BackButton.vue'; 
  
  export default {
    components: {
      DataEntriesList,
      BackButton,
    },
    data() {
      return {
        symbol: {}, 
        dataEntries: [],
      };
    },
    async created() {
      const symbolId = this.$route.params.id;
      await this.fetchDataEntries(symbolId);
    },
    methods: {
      async fetchDataEntries(symbolId) {
    try {
        const response = await stockService.getDataEntriesBySymbolId(symbolId); 
        console.log('Data Entries Response:', response.data);
        this.dataEntries = response.data; 

        this.symbol = await stockService.getSymbolById(symbolId);


    } catch (error) {
        console.error('Error fetching data entries:', error);
        }
      },

      async deleteSymbol() {
        const symbolId = this.$route.params.id; 
        console.log('Attempting to delete symbol with ID:', symbolId);
        try {
          await stockService.deleteSymbolById(symbolId); 
          console.log('Symbol deleted successfully'); 
          this.$router.push({ name: 'symbols' }); 
        } catch (error) {
          console.error('Error deleting symbol:', error.response.data);
        }
      },
    },
  };
  </script>
  
  <style scoped>
div {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 20px auto; 
}

h1 {
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

button {
  padding: 10px 15px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: block; 
  margin: 20px auto; 
}

button:hover {
  background-color: #0056b3; 
}

.back-button {
  display: block; 
  margin-top: 10px;
}
</style>
