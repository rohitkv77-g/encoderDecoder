import { Container, Form, Row } from "react-bootstrap";
import React, { useState } from "react";

import encrypt from "../../algorithms/atBashCipher/encrypt.js";
import decrypt from "../../algorithms/atBashCipher/decrypt.js";

const AtBASHCipher = () => {
  const [form, setForm] = useState({});
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const handleEncrypt = (e) => {
    e.preventDefault();
    // get our new errors
    setField("toDecrypt", form.toEncrypt.encrypt());
    // No errors! Put any logic here for the form submission!
    //console.log(form.toEncrypt.encrypt());
    console.log(form);
    //alert('Thank you for your feedback!')
  };

  const handleDecrypt = (e) => {
    e.preventDefault();
    // get our new errors
    setField("toEncrypt", form.toDecrypt.decrypt());
    // No errors! Put any logic here for the form submission!
    //console.log(form.toDecrypt.decrypt());
    console.log(form);
    //alert('Thank you for your feedback!')
  };

  return (
    <div className="Flex">
      <div className="row justify-content-center">AtBash Cipher</div>
      <Form className="row">
        <Form.Group className="col-5" controlId="exampleForm.ControlTextarea1">
          <Form.Label>To Encrypt(Decrypted Text)</Form.Label>
          <Form.Control
            as="textarea"
            //defaultValue="The quick brown fox jumps over the lazy dog."
            value={form.toEncrypt}
            onChange={(e) => setField("toEncrypt", e.target.value)}
            rows={10}
          />
        </Form.Group>
        <div className="col-2">
          <Container fluid className="justify-content-center">
            <Row>
                <Form.Label>Key</Form.Label>
                <Form.Control
                    // as="text"
                    // //defaultValue="The quick brown fox jumps over the lazy dog."
                    // value={form.toEncrypt}
                    // onChange={(e) => setField("toEncrypt", e.target.value)}
                    // rows={10}
                />
            </Row>
            <Row>
                <button
                type="button"
                className="btn btn-primary col-6 m-auto"
                onClick={handleEncrypt}
                aria-pressed="false"
                >
                Encrypt Left
                </button>
                <button
                type="button"
                onClick={handleDecrypt}
                className="btn btn-primary col-6 m-auto"
                aria-pressed="true"
                >
                Decrypt Right
                </button>
            </Row>
          </Container>
        </div>
        <Form.Group className="col-5" controlId="exampleForm.ControlTextarea1">
          <Form.Label>To Decrypt(Encrypted Text)</Form.Label>
          <Form.Control
            as="textarea"
            value={form.toDecrypt}
            onChange={(e) => setField("toDecrypt", e.target.value)}
            rows={10}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default AtBASHCipher;
