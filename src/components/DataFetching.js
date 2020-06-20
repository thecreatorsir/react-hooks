import React, { useEffect, useState } from "react";
import axios from "axios";
function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setid] = useState(1);
  const [idfromButtonClick, setIdFromButtomClick] = useState(1);
  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts/${idfromButtonClick}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [idfromButtonClick]);

  const clickhandler = () => {
    setIdFromButtomClick(id);
  };
  return (
    <div>
      <input type='text' value={id} onChange={(e) => setid(e.target.value)} />
      <button type='submit' onClick={clickhandler}>
        fetch data
      </button>
      <div>{post.title}</div>
      {/* <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul> */}
    </div>
  );
}

export default DataFetching;
