import "./App.css";
import { useEffect, useState } from "react";
import Post from "./Post/Post";
import Pagination from "./Pagination/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(posts => setPosts(posts))
      .catch(error => setError(error.message));
  }, []);

  if (error) return <h2>{error}</h2>;

  return (
    <div className="  ">
      {posts.length > 0 ? (
        <>
          <Pagination
            className="container"
            data={posts}
            RenderComponent={Post}
            title="Posts"
            pageLimit={5}
            dataLimit={9}
          />
        </>
      ) : (
        <h1>No Posts to display</h1>
      )}
    </div>
  );
}

export default App;
