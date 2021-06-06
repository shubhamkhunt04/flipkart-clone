import { Container } from '@chakra-ui/layout';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Container maxW='97%'>
        <Dashboard />
      </Container>
    </>
  );
}

export default App;
