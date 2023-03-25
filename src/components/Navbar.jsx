import React, {useState} from "react";
import {AppBar, styled, Toolbar, Typography, Box, Badge, Avatar, Menu, MenuItem} from "@mui/material";
import {Mail, AddReaction} from "@mui/icons-material";

const Icons = styled(Box)(({ theme }) => ({
    display: "flex", gap: "30px", alignItems: 'center'
}));

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return(
            <AppBar position='static'>
                <Toolbar sx={{
                    display: 'flex', justifyContent: 'space-between'
                }}>
                    <Typography sx={{display: {xs: 'none', sm: 'block'}}}> Navbar </Typography>
                    <AddReaction sx={{display: {xs: 'block', sm: 'none'}}} />

                    <Icons>
                        <Badge badgeContent={2} color="warning">
                            <Mail />
                        </Badge>
                        <Avatar src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/155112600/original/6f4715794befecfc5997d192b75ea88062bd1a7f/draw-you-some-fancy-profile-pictures.png"
                            onClick = {(e)=>setOpen(!open) }
                        />
                    </Icons>
                    <Menu
                        sx={{marginTop: '2%'}}
                        id="positioned-menu"
                        aria-labelledby="positioned-button"
                        anchorOrigin={{
                        vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={e => setOpen(false)}
                        transformOrigin={{
                        vertical: 'top',
                            horizontal: 'right',
                        }}
                        >
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>My account</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </Menu
>
                </Toolbar>
            </AppBar>
    )
}

export default Navbar;