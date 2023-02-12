import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

function Welcome() {
    return (
        <Jumbotron>
        <h1>EpiBooks</h1>
        <p>
         Descrizione EpiBooks    
        </p>
        <p>
            <Button>Per saperne di più</Button>
        </p>
        </Jumbotron>
      );
}

export default Welcome;