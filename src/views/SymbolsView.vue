<template>
  <div class="content">
    <div class="symbol-display">
      <SymbolSearch :symbols="symbols" @search="filterSymbols" @view="viewSymbol" />
    </div>
    <div class="add-symbol">
      <AddNewSymbol @add="addSymbol" />
    </div>
  </div>
</template>


<script>
import SymbolSearch from '@/components/SymbolSearch.vue';
import AddNewSymbol from '@/components/AddNewSymbol.vue';
import { mapState } from 'vuex';

export default {
  components: {
    SymbolSearch,
    AddNewSymbol,
  },
  computed: {
    ...mapState(['symbols']),
  },
  methods: {
     async addSymbol(newSymbol) {
    try {
      await this.$store.dispatch('addSymbol', newSymbol);
    } catch (error) {
      console.error('Error adding symbol:', error);
    }
    },
    viewSymbol(symbolId) {
      this.$router.push({ name: 'data-entries', params: { id: symbolId } });
    },
  },
  created() {
    this.$store.dispatch("fetchSymbols");
  }
};
</script>

<style scoped>
.content {
  padding: 20px;
  max-width: 800px; 
  margin: 0 auto; 
}

h1 {
  text-align: center; 
  margin-bottom: 20px; 
}

.symbol-display {
  margin-bottom: 20px; 
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  background-color: #f9f9f9;
}

.add-symbol {
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
}

button:hover {
  background-color: #0056b3; 
}

/* Media Query for mobile view */
@media (max-width: 425px) {
  .content {
    padding: 15px; 
  }

  h1 {
    font-size: 1.5em; 
  }

  .symbol-display {
    padding: 10px;
  }

  .add-symbol {
    display: flex; 
    flex-direction: column; 
    align-items: center; 
  }

  button {
    width: 100%; 
    padding: 12px;
    margin: 5px 0; 
  }
}
</style>

