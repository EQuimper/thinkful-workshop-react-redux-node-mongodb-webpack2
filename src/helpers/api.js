const fetchData = url =>
  fetch(`/api/v1/${url}`)
    .then(res => res.json())
    .catch(e => console.log(e));

export const fetchPosts = async () => {
  try {
    return await fetchData('posts');
  } catch (e) {
    console.log(e);
  }
};
