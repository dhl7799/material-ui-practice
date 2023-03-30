import React, {useState} from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Header() {
  return(
    <header>
      <h1>welcome</h1>
    </header>
  );
}

function Nav(){
  return (
    <nav style={{border: '1px solid gray'}}>
      <ol>
        <li>html</li>
        <li>css</li>
      </ol>
    </nav>
  )
}

function Article() {
  const [open,setOpen] = useState(false);
  return (
    <article style={{border: '1px solid gray'}}>
      <h2>Welcome</h2>
      Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!
      <br />
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button variant="outlined" onClick={()=>{
        setOpen(true);
      }
      }>Create</Button>
      <Button variant="outlined">Update</Button>
    </ButtonGroup>
      <Button variant="outlined">Delete</Button>
      <Dialog open={open}>
        <DialogTitle>Create</DialogTitle>
        <DialogContent>
          <DialogContentText>Hello Web!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined">Create</Button>
          <Button variant="outlined" onClick={()=> {
            setOpen(false);
          }}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </article>
  )
}
const App = () => {
  return (
    <Container fixed>
      <Header/>
      <Grid container>
        <Grid item xs="2">
         <Nav/>
        </Grid>
        <Grid item xs="10">
         <Article/>
        </Grid>
      </Grid>
      
    </Container>
  );
};

export default App;