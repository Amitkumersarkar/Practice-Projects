import { use } from "react";

const Posts = ({ postsPromise }) => {
    const posts = use(postsPromise);
    console.log(posts);
    return (
        <div>
            <h3>post : {posts.length}</h3>
        </div>
    );
};

export default Posts;