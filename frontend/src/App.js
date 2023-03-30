import React from 'react';
import Dashboard from './Dashboard';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Header() {
  return(
    <header>
      <h1>welcome</h1>
    </header>
  );
}

function Nav(){
  return (
    <nav>
      <ol>
        <li>html</li>
        <li>css</li>
      </ol>
    </nav>
  )
}

function Article() {
  return (
    <article>
      <h2>Welcome</h2>
      Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!
      Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!
      Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!
      Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!
      Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!
      Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!
      Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!
      Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!
      Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!

      <br />
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button variant="outlined">Create</Button>
      <Button variant="outlined">Update</Button>
    </ButtonGroup>
      <Button variant="outlined">Delete</Button>
    </article>
  )
}
const App = () => {
  return (
    <Container fixed>
      <Header/>
      <Nav/>
      <Article/>
    </Container>
  );
};

export default App;