
import axios from "axios";

const stockService = {
    getSymbols () {
        return axios.get('/symbols');
    },
    getSymbolById(symbolId) {
        return axios.get(`symbols/${symbolId}`);
    },
    createSymbol(symbol) {
        return axios.post('/symbols', symbol);
    },
    deleteSymbolById(symbolId) {
        return axios.delete(`symbols/${symbolId}`);
    },
    getSymbolsByExchangeId(exchangeId) {
        return axios.get(`/exchanges/${exchangeId}/symbols`);
    },
    getDataEntriesBySymbolId(symbolId) {
        return axios.get(`/symbols/${symbolId}/data_entries`);
    }    
}

export default stockService;