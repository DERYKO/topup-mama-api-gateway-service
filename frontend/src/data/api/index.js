import client from "./client";

export default {
    async getBooks(filters) {
        return client.parseResponse(await client.get('/books', filters));
    },
    async getBook(id) {
        return client.parseResponse(await client.get('/books/' + id));
    },
    async getCharacters(filters) {
        return client.parseResponse(await client.get('/characters', filters));
    },
    async getComments(filters) {
        return client.parseResponse(await client.get('/comments', filters));
    },
    async createComment(payload) {
        return client.parseResponse(await client.post('/comments', payload));
    }
}
