import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function App() {
  return (
    <Form className="container" >
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <div className='form-items'>
        <h3 >Register Today</h3>
        <p>Fill in the data below.</p>
        </div>
        <Form.Label className='Title'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='Title'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check className='Title' type="checkbox" label="Check me out" />
      </Form.Group>
      <div className='gender'>
      <label class="mb-3 mr-1">Gender : </label>
      <label class="btn btn-sm btn-outline-secondary">Male</label>
      <label class="btn btn-sm btn-outline-secondary">Female</label>
       </div>
      <Button className='click' variant="secondary" type="submit" size="lg" active>
        Submit
      </Button>
    </Form>
  );
}


