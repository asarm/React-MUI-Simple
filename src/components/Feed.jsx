import React from "react";
import {Box} from "@mui/material";
import PostCard from "./PostCard";

const Feed = () => {
    return(
            <Box sx= {{}} flex={4}>
                <PostCard
                    username="John"
                    imgUrl="https://images.unsplash.com/photo-1670272502307-5539ca02550a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/>
                <PostCard
                    username="Nicola"
                    imgUrl="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/>

            </Box>
            )
}

export default Feed;