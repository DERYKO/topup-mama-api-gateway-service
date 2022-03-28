import Vue from 'vue'
import Vuex from 'vuex'
import api from "../api";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        books: [],
        book: {},
        characters: [],
        comments: []
    },
    getters: {
        books: state => state.books,
        book: state => state.book,
        characters: state => state.characters,
        comments: state => state.comments
    },
    mutations: {
        setBooks(state, books) {
            state.books = books;
        },
        setBook(state, book) {
            state.book = book;
        },
        setCharacters(state, characters) {
            state.characters = characters;
        },
        setComments(state, comments) {
            state.comments = comments;
        }
    },
    actions: {
        async getBooks({commit}, filters) {
            try {
                const {data} = await api.getBooks(filters);
                commit('setBooks', data);
            } catch (e) {
                alert(e.response.data.message);
            }
        },
        async getBook({commit}, id) {
            try {
                commit('setBook', {});
                const {data} = await api.getBook(id);
                commit('setBook', data);
            } catch (e) {
                alert(e.response.data.message);
            }
        },
        async getCharacters({commit}, filters) {
            try {
                const {data} = await api.getCharacters(filters);
                commit('setCharacters', data);
            } catch (e) {
                alert(e.response.data.message);
            }
        },
        async getComments({commit}, filters) {
            try {
                const {data} = await api.getComments(filters);
                commit('setComments', data);
            } catch (e) {
                alert(e.response.data.message);
            }
        },
        async createComment({commit, dispatch}, payload) {
            try {
                const {data} = await api.createComment(payload);
                dispatch('getComments', {
                    isbn: payload.isbn
                })
                commit('setComments', data);
            } catch (e) {
                alert(e.response.data.message);
            }
        }
    }
})
