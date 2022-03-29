<h2>This is the entry point for all API being consumed by the fronted</h3>
<h6>Technologies</h6>
<ul>
<li>Lumen</li>
<li>Vue</li>
<li>Vuex</li>
<li>Vue CLI</li>
</ul>

<h6>Endpoints</h6>
<ul>
<li>
<code>/books</code> - GET - List all books
</li>
<li>
<code>/books/{id}</code> - GET - Lists a specific book
</li>
<li>
<code>/characters</code> - GET - Params: book_id - list characters for a specific book
</li>
<li>
<code>/comments</code> - GET - Params: isbn - list comments for a specific book
</li>
<li>
<code>/comments</code> - POST - Params: isbn - add anonymous comments for a specific book
</li>
</ul>
