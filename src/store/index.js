import { createStore as _createStore } from 'vuex';
import axios from 'axios';
import stockService from '../services/StocksService';

export function createStore(currentToken, currentUser) {
  let store = _createStore({
    state: {
      token: currentToken || '',
      user: currentUser || {},
      symbols: []
    },
    mutations: {
      SET_AUTH_TOKEN(state, token) {
        state.token = token;
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      },
      SET_USER(state, user) {
        state.user = user;
        localStorage.setItem('user', JSON.stringify(user));
      },
      LOGOUT(state) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        state.token = '';
        state.user = {};
        axios.defaults.headers.common = {};
      },
      SET_SYMBOLS(state, symbols) {
        state.symbols = symbols;
      }, 
      ADD_SYMBOL(state, symbol) {
        state.symbols.push(symbol);
      },
      REMOVE_SYMBOL(state, symbolId) {
        state.symbols = state.symbols.filter(symbol => symbol.id !== symbolId);
      },
    },


    actions: {
        async fetchSymbols({ commit }) {
          try {
            const response = await stockService.getSymbols();
            commit('SET_SYMBOLS', response.data);
          } catch (error) {
            console.error('Error fetching symbols:', error);
          }
        },
        async addSymbol({ commit }, symbol) {
          try {
            const response = await stockService.createSymbol(symbol);
            commit ('ADD_SYMBOL', response.data);
          } catch (error) {
            console.error('Error adding symbol:', error);
            throw error;
          }
        },
        async deleteSymbol({ commit }, symbolId) {
          try {
            await stockService.deleteSymbolById(symbolId);
            commit('REMOVE_SYMBOL', symbolId);
          } catch (error) {
            console.error('Error deleting symbol:', error);
          }
        }
    }
  })
  return store;
}