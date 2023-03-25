import { Typography, Card, CardActions,
    CardContent, CardHeader, IconButton, Avatar, CardMedia} from "@mui/material";
import {MoreVert, Favorite, Share} from "@mui/icons-material";


const PostCard = (props) => {
    return (
            <Card sx= {{ marginTop: "1%"}}>
                <CardHeader
                    avatar={
                          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                              {props.username[0]}
                          </Avatar>
                        }
                    action={
                          <IconButton aria-label="settings">
                              <MoreVert />
                          </IconButton>
                        }
                    title={props.username}
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="250"
                    image={props.imgUrl}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Favorite />
                    </IconButton>
                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>
                </CardActions>
            </Card>
    )
}

export default PostCard;