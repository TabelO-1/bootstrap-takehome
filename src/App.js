import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./App.css";
import img from "./1.jpg"


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <p>Hello World!</p>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>Mr. Roldie Puggleson</Card.Title>
            <Card.Text>
              This is Mr. Roldie Puggleson, he is a good boy and loves food. He goes by many names such as: Mr Pugglesworth, Mr. Puggleson, Puggles, The puggle-wuggle-up-agis, and many more!
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