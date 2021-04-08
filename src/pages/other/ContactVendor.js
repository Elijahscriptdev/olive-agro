import { Modal, Button, Row, Col, Form, FormGroup } from "react-bootstrap";
import axios from "axios";
import React, { useState } from "react";
import { contactVendor } from "../../redux/actions/contactAdminVendorActions";
import { useDispatch } from "react-redux";

const ContactVendor = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    name: "",
    buyer_email: "",
    message: "",
  });

  const { name, buyer_email, message } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(contactVendor({ name, buyer_email, message }));
    console.log(formData)
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
                      <label>Name</label>
                      <input
                        type='text'
                        name='name'
                        value={name}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <label>Email</label>
                      <input
                        type='email'
                        name='buyer_email'
                        value={buyer_email}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <FormGroup>
                      <label>Message</label>
                      <input
                        type='textarea'
                        className='textarea'
                        name='message'
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
