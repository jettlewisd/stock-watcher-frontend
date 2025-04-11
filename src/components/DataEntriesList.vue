<template>
    <div>
      <h2>Market Data:</h2>
      <ul>
        <li v-for="entry in dataEntries" :key="entry.dataEntryId">
          {{ entry.tradingDate }}: Open {{ entry.openPrice }}, Close {{ entry.closePrice }}, High {{ entry.highPrice }}, Low {{ entry.lowPrice }}
        </li>
      </ul>
      <p v-if="!dataEntries.length">No market data available for this symbol.</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      dataEntries: {
        type: Array,
        required: true,
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
  color: #333;
}

ul {
  list-style-type: none; 
  padding: 0;
}

li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
}

li:last-child {
  border-bottom: none; 
}

p {
  color: #999; 
  margin-top: 10px;
}
</style>

  