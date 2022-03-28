(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["auth"],{2821:function(t,s,e){"use strict";e.r(s);var o,n,a=e("2877"),r={},i=Object(a["a"])(r,o,n,!1,null,null,null);s["default"]=i.exports},"6bb7":function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container mx-auto p-10"},[e("div",{staticClass:"flex flex-1 mb-10"},[e("button",{staticClass:"py-2 px-6 border",on:{click:t.toggleSortDir}},["desc"===t.sort_dir?e("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"}})]):t._e(),"asc"===t.sort_dir?e("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"}})]):t._e()])]),e("div",{staticClass:"grid grid-cols-3 gap-4"},t._l(t.books,(function(s){return e("div",{key:s.id},[e("router-link",{staticClass:"max-w-sm rounded overflow-hidden shadow-lg",attrs:{to:"/books/"+s.url.charAt(s.url.length-1)}},[e("img",{staticClass:"w-full",attrs:{src:"https://apilist.fun/images/social/api/an-api-of-ice-and-fire.png",alt:"Sunset in the mountains"}}),e("div",{staticClass:"px-6 py-4"},[e("div",{staticClass:"flex justify-between"},[e("span",{staticClass:"font-bold text-xl mb-2"},[t._v(t._s(s.name))]),e("router-link",{staticClass:"px-4 py-1 border bg-blue-500 rounded-md",attrs:{to:"/books/"+s.url.charAt(s.url.length-1)}},[t._v("View Book")])],1),e("p",{staticClass:"text-gray-700 text-base"},[t._v(" Authors: "+t._s(s.authors.join(","))+" ")]),e("p",[t._v(" Comments Count: "+t._s(s.comments_count)+" ")])]),e("div",{staticClass:"px-6 pt-4 pb-2"},[e("span",{staticClass:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},[t._v("#"+t._s(s.publisher))]),e("span",{staticClass:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},[t._v("#"+t._s(s.country))]),e("span",{staticClass:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},[t._v("#"+t._s(s.country))]),e("span",{staticClass:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},[t._v("#"+t._s(s.released))])])])],1)})),0)])},n=[],a=e("5530"),r=e("2f62"),i={mounted:function(){this.getBooks({})},data:function(){return{sort_dir:"desc"}},watch:{sort_dir:function(t){this.getBooks({sort_dir:t})}},computed:Object(a["a"])({},Object(r["c"])({books:"books"})),methods:Object(a["a"])(Object(a["a"])({},Object(r["b"])({getBooks:"getBooks"})),{},{toggleSortDir:function(){"desc"===this.sort_dir?this.sort_dir="asc":this.sort_dir="desc"}})},l=i,c=e("2877"),d=Object(c["a"])(l,o,n,!1,null,null,null);s["default"]=d.exports},"7c57":function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container mx-auto p-10"},[e("div",{staticClass:"flex flex-1"},[e("h6",{staticClass:"font-bold text-2xl"},[t._v(t._s(t.book.name))])]),e("div",{staticClass:"flex flex-row"},[e("div",{staticClass:"flex w-1/2 flex-col p-1"},[e("h6",[t._v("Characters")]),e("div",{staticClass:"grid grid-cols-3 gap-4"},t._l(t.records,(function(s){return e("div",{key:s.id},[e("div",{staticClass:"rounded-md border overflow-hidden shadow-md max-w-xs my-3"},[e("div",{staticClass:"text-center px-3 pb-6 pt-2"},[e("h3",{staticClass:"text-sm bold font-sans"},[t._v(t._s(s.name?s.name:"Unknown"))]),e("p",{staticClass:"mt-2 font-sans font-light"},[t._v(t._s(s.gender?s.gender:"Unknown"))])]),e("div",{staticClass:"flex justify-center pb-3"},[e("div",{staticClass:"text-center mr-3 border-r pr-3"},[e("h2",[t._v("DOB")]),e("span",[t._v(t._s(s.born?s.born:"Unknown"))])]),e("div",{staticClass:"text-center"},[e("h2",[t._v("SPOUSE")]),e("span",[t._v(t._s(s.spouse?s.spouse:"Unknown"))])])])])])})),0)]),e("div",{staticClass:"flex w-1/2 flex-col p-1"},[e("h6",{staticClass:"align-content-center"},[t._v("Comments")]),e("br"),e("ul",t._l(t.comments,(function(s){return e("li",{key:s.id},[e("a",{staticClass:"flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none"},[e("div",{staticClass:"w-full pb-2"},[e("div",{staticClass:"flex justify-between"},[e("div",{staticClass:"flex justify-around"},[e("div",{staticClass:"w-10 h-10 bg-gray-500 rounded-full"}),e("span",{staticClass:"block ml-4 text-sm text-gray-600"},[t._v(t._s(s.comment))])]),e("span",{staticClass:"block ml-2 text-sm text-gray-600"},[t._v(t._s(s.created_at))])])])])])})),0),e("br"),t.comments.length?t._e():e("div",{staticClass:"flex flex-1 items-center justify-center"},[t._v(" No Comments ")]),e("form",{staticClass:"flex flex-col flex-1",on:{submit:function(s){return s.preventDefault(),t.addComment.apply(null,arguments)}}},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"px-7 py-6 outline-none border",attrs:{cols:"9",placeholder:"Type a comment",required:""},domProps:{value:t.comment},on:{input:function(s){s.target.composing||(t.comment=s.target.value)}}}),e("button",{staticClass:"border mt-2 py-2 px-9  bg-blue-600 text-white"},[t._v("Submit")])])])])])},n=[],a=e("5530"),r=e("2f62"),i={mounted:function(){var t=this;this.getBook(this.$route.params.id).then((function(){t.getCharacter({book_id:t.book.url.charAt(t.book.url.length-1)}),t.getComments({isbn:t.book.isbn})}))},data:function(){return{comment:""}},computed:Object(a["a"])({},Object(r["c"])({book:"book",records:"characters",comments:"comments"})),methods:Object(a["a"])(Object(a["a"])({},Object(r["b"])({getBook:"getBook",getCharacter:"getCharacters",getComments:"getComments",createComment:"createComment"})),{},{addComment:function(){var t=this;this.createComment({comment:this.comment,isbn:this.book.isbn,ip_address:window.location.host}).then((function(){t.comment=""}))}})},l=i,c=e("2877"),d=Object(c["a"])(l,o,n,!1,null,null,null);s["default"]=d.exports}}]);
//# sourceMappingURL=auth.6bda0a82.js.map