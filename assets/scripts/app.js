const app = Vue.createApp({
  data() {
    return {
      articles: [],
    };
  },
  async mounted() {
    this.articles = await getAllArticles();
    console.log(this.articles);
  },
});

app.mount("#app");
