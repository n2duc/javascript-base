// 1. api = Application Programming Interface
{
  const endpoint = `https://api.github.com/users/evondev`;
  async function getGithubUserInfo() {
    try {
      const response = await fetch(endpoint);
      response.json().then((value) => {
        console.log(value);
        return value;
      });
    } catch (error) {
      if (error) {
        console.log("It seems your api was wrong!");
      }
    }
  }
  // getGithubUserInfo();
}
// 2. Get hits from hackernews api
{
  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }
  /*
  endpoint: https://hn.algolia.com/api/v1/search?query=react
  <a href="#" class="news-item"
        >Facebook Announces React Fiber, a Rewrite of Its React Framework</a
      >
  let isLoading = true;

  const newsList = document.querySelector(".news-list");
  const searchInput = document.querySelector(".search");
  const loading = document.createElement("div");
  loading.classList.add("loading");
  searchInput.addEventListener("input", debounce(handleUpdateQuery, 500));
  function handleUpdateQuery(event) {
    getHackerNewsList(event.target.value);
  }
  function renderHitItem(data) {
    const template = `<a href="${data.url}" class="news-item"
    >${data.title}</a
  >`;
    newsList.insertAdjacentHTML("afterbegin", template);
  }
  async function getHackerNewsList(query) {
    newsList.innerHTML = "";
    newsList.appendChild(loading);
    try {
      const response = await fetch(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      const data = await response.json();
      const hits = data?.hits || [];
      if (hits.length > 0 && Array.isArray(hits)) {
        hits.forEach((item) => renderHitItem(item));
      }
    } catch (error) {
      console.log(error);
    } finally {
      loading.parentNode?.removeChild(loading);
    }
  }
  // getHackerNewsList("");
  */
}
// 3.
{
  // json-server
  // http://localhost:3000/posts
  const endpoint = `http://localhost:3000`;
  const createPostForm = document.querySelector(".create-post");
  const postList = document.querySelector(".post-list");
  createPostForm.addEventListener("submit", handleCreateNewPost);
  postList.addEventListener("click", handleRemovePost);
  async function getPosts() {
    postList.innerHTML = "";
    try {
      const response = await axios.get(`${endpoint}/posts`);
      if (
        response &&
        response.data &&
        Array.isArray(response.data) &&
        response.data.length > 0
      ) {
        const data = response.data || [];
        if (Array.isArray(data)) {
          data.forEach((item) => renderPostItem(item));
        }
      }
    } catch (error) {}
  }
  async function handleRemovePost(event) {
    if (!event.target.matches(".post-remove")) return;
    const id = Number(event.target.dataset.id);
    if (!id) return;
    try {
      // const response = await axios.put(`${endpoint}/posts/${id}`, {
      /**
       * title
       * image
       * slug
       * author
       */
      // });
      // const response = await axios.delete(`${endpoint}/posts/${id}`);
      const response = await axios({
        method: "delete",
        url: `${endpoint}/posts/${id}`,
      });
      console.log("handleRemovePost ~ response:", response);
      console.log("Remove post successfully");
    } catch (error) {}
  }
  function renderPostItem(data) {
    const template = `<div class="post-item">
    <button class="post-remove" data-id="${data.id}">Remove</button>
    <img
      src="${data.image}"
      alt=""
      class="post-image"
    />
    <div class="post-content">
      <h3 class="post-title">${data.title}</h3>
      <span class="post-author">${data.author}</span>
    </div>
  </div>`;
    postList.insertAdjacentHTML("afterbegin", template);
  }
  async function handleCreateNewPost(event) {
    event.preventDefault();
    const title = this.elements["title"].value;
    const author = this.elements["author"].value;
    const slug = this.elements["slug"].value;
    const image = this.elements["image"].value;
    if (!title || !author || !slug || !image) return;
    const response = await axios.post("http://localhost:3000/posts", {
      title,
      author,
      slug,
      image,
    });
    if (response && response.status === 201) {
      console.log("Created new post successfully");
    }
    this.reset();
  }
  getPosts();
}
