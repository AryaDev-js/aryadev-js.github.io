const app = Vue.createApp({
  data() {
    return {
      articles: [],
      posts: [],
    };
  },
  async mounted() {
    if (localStorage.getItem("articles") != null) {
      this.articles = JSON.parse(localStorage.getItem("articles"));
    }

    if (localStorage.getItem("posts") != null) {
      this.posts = JSON.parse(localStorage.getItem("posts"));
    }
    
    this.articles = await getAllArticles().catch(console.log);
    this.posts = await getFromApi(
      "https://aryadev-js.github.io/posts/posts.json"
    ).catch(console.log);

    localStorage.setItem("articles", JSON.stringify(this.articles));
    localStorage.setItem("posts", JSON.stringify(this.posts));
  },
});

app.mount("#app");
