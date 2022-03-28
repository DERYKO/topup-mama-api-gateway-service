<template>
    <div class="container mx-auto p-10">
        <div class="flex flex-1">
            <h6 class="font-bold text-2xl">{{ book.name }}</h6>
        </div>
        <div class="flex flex-row">
            <div class="flex w-1/2 flex-col p-1">
                <h6>Characters</h6>
                <div class="grid grid-cols-3 gap-4">
                    <div v-for="player in records" :key="player.id">
                        <div class="rounded-md border overflow-hidden shadow-md max-w-xs my-3">
                            <div class="text-center px-3 pb-6 pt-2">
                                <h3 class="text-sm bold font-sans">{{ player.name ? player.name : 'Unknown' }}</h3>
                                <p class="mt-2 font-sans font-light">{{ player.gender ? player.gender : 'Unknown' }}</p>
                            </div>
                            <div class="flex justify-center pb-3">
                                <div class="text-center mr-3 border-r pr-3">
                                    <h2>DOB</h2>
                                    <span>{{ player.born ? player.born : 'Unknown' }}</span>
                                </div>
                                <div class="text-center">
                                    <h2>SPOUSE</h2>
                                    <span>{{ player.spouse ? player.spouse : 'Unknown' }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex w-1/2 flex-col p-1">
                <h6 class="align-content-center">Comments</h6>
                <br/>
                <ul>
                    <li v-for="comment in comments" :key="comment.id">
                        <a
                            class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                            <div class="w-full pb-2">
                                <div class="flex justify-between">
                                    <div class="flex justify-around">
                                        <div class="w-10 h-10 bg-gray-500 rounded-full">

                                        </div>
                                        <span class="block ml-4 text-sm text-gray-600">{{comment.comment}}</span>
                                    </div>
                                    <span class="block ml-2 text-sm text-gray-600">{{comment.created_at}}</span>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
                <br/>
                <div v-if="!comments.length" class="flex flex-1 items-center justify-center">
                    No Comments
                </div>
                <form @submit.prevent="addComment" class="flex flex-col flex-1">
                    <textarea v-model="comment" class="px-7 py-6 outline-none border" cols="9" placeholder="Type a comment" required></textarea>
                    <button class="border mt-2 py-2 px-9  bg-blue-600 text-white">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    mounted() {
        this.getBook(this.$route.params.id).then(() => {
            this.getCharacter({
                book_id: this.book.url.charAt(this.book.url.length - 1)
            })
            this.getComments({
                isbn: this.book.isbn
            })
        });
    },
    data(){
      return {
          comment: ''
      }
    },
    computed: {
        ...mapGetters({
            book: 'book',
            records: 'characters',
            comments: 'comments'
        })
    },
    methods: {
        ...mapActions({
            getBook: 'getBook',
            getCharacter: 'getCharacters',
            getComments: 'getComments',
            createComment: 'createComment'
        }),
        addComment(){
            this.createComment({
                comment:  this.comment,
                isbn: this.book.isbn,
                ip_address: window.location.host
            }).then(()=>{
                this.comment = '';
            })
        }
    }
}
</script>
