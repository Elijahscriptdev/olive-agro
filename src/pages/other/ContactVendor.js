import { Modal, Button, Row, Col, Form, FormGroup } from "react-bootstrap";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "../../redux/actions/auth";
import { setAlert } from "../../redux/actions/alert";

const ContactVendor = ({ product }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    if (name === "" || seller_email === "" || message === "") {
      return;
    }
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    name: "",
    seller_email: localStorage.getItem("vendor email"),
    message: "",
  });

  const { name, seller_email, message } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getVendorEmail = async () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const res = await axios.get(
        `https://www.api.oliveagro.org/api/merchant/${product.user}`,
        config
      );
      localStorage.setItem("vendor email", res.data.merchant.email);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVendorEmail();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(loadUser());
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const res = await axios.post(
        "https://www.api.oliveagro.org/api/users/create/messsage",
        formData,
        config
      );
      console.log(res);
      dispatch(setAlert("Message has been sent to the vendor", "success"));
    } catch (error) {
      dispatch(setAlert("Message was not sent, try again", "danger"));
    }
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
                <Row>
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
                        name='seller_email'
                        value={seller_email}
                        // onChange={(e) => onChange(e)}
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
