<template>
    <div v-loading="loading" class="container mx-auto p-10 w-screen">
        <div class="flex flex-1 mb-10">
            <button @click="toggleSortDir" class="py-2 px-6 border">
                <svg v-if="sort_dir==='desc'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"/>
                </svg>
                <svg v-if="sort_dir==='asc'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"/>
                </svg>
            </button>
        </div>
        <div class="grid grid-cols-3 gap-4">
            <div v-for="book in books" :key="book.id">
                <router-link :to="'/books/'+book.url.charAt(book.url.length - 1)"
                             class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="https://apilist.fun/images/social/api/an-api-of-ice-and-fire.png"
                         alt="Sunset in the mountains">
                    <div class="px-6 py-4">
                        <div class="flex justify-between">
                            <span class="font-bold text-xl mb-2">{{ book.name }}</span>
                            <router-link :to="'/books/'+book.url.charAt(book.url.length - 1)" class="px-4 py-1 border bg-blue-500 rounded-md">View Book</router-link>
                        </div>
                        <p class="text-gray-700 text-base">
                            Authors: {{ book.authors.join(',') }}
                        </p>
                        <p>
                            Comments Count: {{ book.comments_count }}
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span
                            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{
                                book.publisher
                            }}</span>
                        <span
                            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{
                                book.country
                            }}</span>
                        <span
                            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{
                                book.country
                            }}</span>
                        <span
                            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{
                                book.released
                            }}</span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex';

export default {
    mounted() {
        this.getBooks({});
    },
    data() {
        return {
            sort_dir: 'desc'
        }
    },
    watch: {
        sort_dir(val) {
            this.getBooks({
                sort_dir: val
            })
        }
    },
    computed: {
        ...mapGetters({
            books: 'books',
            loading: 'loading'
        })
    },
    methods: {
        ...mapActions({
            getBooks: 'getBooks'
        }),
        toggleSortDir() {
            if (this.sort_dir === 'desc') {
                this.sort_dir = 'asc';
            } else {
                this.sort_dir = 'desc';
            }
        }
    }
}
</script>
