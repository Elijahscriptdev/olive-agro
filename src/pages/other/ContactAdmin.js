import React, { useState } from "react";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Row, Col, Form, FormGroup } from "react-bootstrap";

const ContactAdmin = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    document: null,
    description: "",
  });

  const { document, description } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFile = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files,
    });
  };

  const onSubmit = async(e) => {
    e.preventDefault();
    console.log("test1", formData);
    console.log("test2", formData.document[0]);

    // const document = new FormData();
    // document.append('document', formData.document[0]);
    // console.log("doc", document);
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const document = formData.document[0];

    const body = { document, description };
    try {
      const res = await axios.post(
        "https://www.api.oliveagro.org/api/individual/upload/doc",
        body,
        config
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button className='product-detail-btn' onClick={handleShow}>
        Contact Admin
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs='12' md='6' className='m-auto'>
              <Form onSubmit={(e) => onSubmit(e)}>
                <Row form>
                  <Col md={12}>
                    <FormGroup>
                      <label>Document</label>
                      <input
                        type='file'
                        name='document'
                        onChange={(e) => handleFile(e)}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <FormGroup>
                      <label>Description</label>
                      <input
                        type='textarea'
                        className='textarea'
                        name='description'
                        value={description}
                        onChange={(e) => handleChange(e)}
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
                      value='Contact Admin'
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

export default ContactAdmin;
