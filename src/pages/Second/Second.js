import React from 'react'
import { Form, Button, Container, Card } from "react-bootstrap";



const Second = () => {
  return (
    <div className="loginContainer">
      <Form className="mt-5">
        <Container>
          <Card className="mx-auto card" style={{ width: "24rem"}}>
            <h1 className="text-dark mx-auto my-3">Hi,Demo</h1>
            <div className='mx-auto icon'>
                <img style={{width:"150px",height:"120px"}} src="https://imgs.search.brave.com/v_TOoJ7h1TyowlrFklsMhLxOLQ9FQ0Q1j_QMgH8wzeM/rs:fit:920:778:1/g:ce/aHR0cHM6Ly9jbGlw/YXJ0Y3JhZnQuY29t/L2ltYWdlcy90cmFu/c3BhcmVudC1jaXJj/bGUtZ2xvd2luZy01/LnBuZw" alt="" />
            </div>
            <Form.Group className="mt-4" controlId="formBasicEmail">
              <Form.Control
                type="text"
                className="mx-auto"
                style={{ width: "18rem", }}
                placeholder="Enter input"
              />
            </Form.Group>
            <Button variant="outline-success" type="submit" className="mx-auto my-5">
              Submit
            </Button>
          </Card>
        </Container>
      </Form>
    </div>
  );
}

export default Second
