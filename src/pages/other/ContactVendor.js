import { Modal, Button, Row, Col, Form, FormGroup } from "react-bootstrap";
import React, { useState } from "react";

const ContactVendor = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log("form submitted");

    // resetForm();
  };

  return (
    <>
      <Button className='product-detail-btn' onClick={handleShow}>
        Contact Vendor
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Vendor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs='12' md='6' className='m-auto'>
              <Form onSubmit={(e) => onSubmit(e)}>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <label for='exampleEmail'>Name</label>
                      <input
                        type='text'
                        name='name'
                        id='exampleEmail'
                        value={name}
                        onChange={(e) => onChange(e)}
                        required
                        //   placeholder='with a placeholder'
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <label for='examplePassword'>Email</label>
                      <input
                        type='email'
                        name='email'
                        id='examplePassword'
                        value={email}
                        onChange={(e) => onChange(e)}
                        required
                        //   placeholder='password placeholder'
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <FormGroup>
                      <label for='exampleText'>Message</label>
                      <input
                        type='textarea'
                        className='textarea'
                        name='message'
                        // id='exampleText'
                        value={message}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <input
                      type='submit'
                      className='product-detail-btn'
                      value='Contact Vendor'
                      onClick={handleClose}
                    />
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ContactVendor;
