import {Button, Stack, styled, Box} from "@mui/material";
import {Settings, DeleteForever} from "@mui/icons-material";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import Navbar from "./components/Navbar";
function App() {
  const BlueButton = styled(Button)({
    backgroundColor: 'skyblue', color: 'black', '&:hover':{
      backgroundColor: 'grey'
    }
  })

  return (
    <div className="App">
      <Box>
        <Navbar />
        <Stack direction='row' justifyContent='space-between' spacing={3}>
          <SideBar />
          <Feed />
          <RightBar />
        </Stack>
      </Box>
    </div>
  );
}

export default App;
