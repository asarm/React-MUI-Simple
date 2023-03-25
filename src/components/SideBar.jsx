import React from "react";
import {Button, Stack, styled, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {Home, Message, People, Person2, Settings} from "@mui/icons-material";

const SideBar = () => {
    return(
            <Box sx={{display: {xs: 'none', sm: 'block', backgroundColor: '#edeef0'}}} flex={1}>
                <Box sx={{position:'fixed'}}>
                    <List>
                        <ListItem disablePadding >
                            <ListItemButton component="a" href="/home">
                                <ListItemIcon>
                                    <Home />
                                </ListItemIcon>
                                <ListItemText primary="Homepage"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding >
                        <ListItemButton component="a" href="/home">
                            <ListItemIcon>
                                <Message />
                            </ListItemIcon>
                            <ListItemText primary="Inbox"/>
                        </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding >
                            <ListItemButton component="a" href="/home">
                                <ListItemIcon>
                                    <People />
                                </ListItemIcon>
                                <ListItemText primary="Friends"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding >
                            <ListItemButton component="a" href="/home">
                                <ListItemIcon>
                                    <Person2 />
                                </ListItemIcon>
                                <ListItemText primary="Profile"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding >
                            <ListItemButton component="a" href="/home">
                                <ListItemIcon>
                                    <Settings />
                                </ListItemIcon>
                                <ListItemText primary="Settings"/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Box>
            )
}

export default SideBar;