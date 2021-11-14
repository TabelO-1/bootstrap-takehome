import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./App.css";
import img from "./1.jpg";
import Form from "react-bootstrap/Form";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <p>Hello World!</p>
        <Form id="sizingF">
          <Form.Select aria-label="Default select example">
            <option>Select how much you love dogs, if this is below 7, you die.</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
          </Form.Select>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Address</Form.Label>
            <Form.Control type="address" placeholder="Address" />
            <Form.Text className="text-muted">
              You don't need to know why we need to know your address.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              Why you love dogs so much(or why you don't...)
            </Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>Mr. Roldie Puggleson</Card.Title>
            <Card.Text>
              This is Mr. Roldie Puggleson, he is a good boy and loves food. He
              goes by many names such as: Mr Pugglesworth, Mr. Puggleson,
              Puggles, The puggle-wuggle-up-agis, and many more!
            </Card.Text>
            <Button variant="primary">Go....HERE!</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default App;
/*More Puggle Images Here: https://drive.google.com/drive/folders/15kn4qMlZJdLYW-xG8S3m8r1u8r7MPNC9?usp=sharing*/
