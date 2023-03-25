import React from "react";
import {ImageList, Box, Typography, AvatarGroup, Avatar, ImageListItem} from "@mui/material";

const RightBar = () => {
    return(
            <Box sx= {{display: {xs: 'none', sm: 'block'}}} flex={2}>
                <Box sx={{position:'fixed', justifyContent: 'center'}}>
                    <Typography variant="h6" fontWeight={200}>Online Friends</Typography>
                    <AvatarGroup max={4} sx={{justifyContent:'start'}}>
                        <Avatar src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"/>
                        <Avatar src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"/>
                        <Avatar src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg" />
                        <Avatar src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg" />
                        <Avatar src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg" />
                    </AvatarGroup>

                    <Typography mt={3} mb={3} variant="h6" fontWeight={200}>Most Popular Posts</Typography>
                    <ImageList cols={2} rowHeight={250} gap={5}>
                        <ImageListItem>
                            <img
                                src={"https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"}
                                loading="lazy" alt="" 
                            /></ImageListItem>
                        <ImageListItem>
                            <img
                                src={"https://images.unsplash.com/photo-1679652943104-8a098d82d3c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}
                                loading="lazy" alt=""
                            /></ImageListItem>
                        <ImageListItem>
                            <img
                                src={"https://images.unsplash.com/photo-1679656127544-c4db649775cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}
                                loading="lazy" alt=""
                            /></ImageListItem>
                    </ImageList>
                </Box>
            </Box>
            )
}

export default RightBar;