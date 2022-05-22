import { useMoralisDapp } from "../MoralisDappProvider/MoralisDappProvider";
import { useMoralisQuery } from "react-moralis";
// import { motion } from "framer-motion";
// import { Downvote, Upvote } from 'styled-icons/boxicons-regular';
// import { Share } from 'styled-icons/bootstrap';
// import { CommentAlt } from 'styled-icons/fa-regular';
// import { defaultImgs } from '../defaultimgs';
// import './CSS/Post.css';
// import { Moralis } from "moralis"
// import { Link } from 'react-router-dom';
// import { message } from 'antd';
import Post from './Post';

const Posts = () => {
    const { selectedCategory } = useMoralisDapp();
    // console.log(selectedCategory)
    
    const queryPost = useMoralisQuery(
        "Posts",
        (query) => query.equalTo("postCategory", selectedCategory),
        [selectedCategory],
        { live: true }
    );
    // console.log(queryPost)

    const fetchedPosts = JSON.parse(JSON.stringify(queryPost.data, ["postId", "contentId", "postOwner"])).reverse();
    const havePosts = fetchedPosts.length > 0 ? true : false;
    console.log(fetchedPosts)

    const emptyResult = (
        <div>
            <h3 className="text-white">Be the first to post here for</h3>
            <h3>{selectedCategory["category"]} </h3>
        </div>
    );

    // function vote(input) {
    //     message.success("message")
    // }
    
    const postResult = (
        <div>
            {fetchedPosts.map((post) => (
                <Post key={post["postId"]} post={post} profile={false}/>
            ))}
        </div>        
    )
    
    return havePosts ? postResult : emptyResult;
}

export default Posts