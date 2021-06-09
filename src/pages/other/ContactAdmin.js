import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Modal, Button, Row, Col, Form, FormGroup } from "react-bootstrap";
import { setAlert } from "../../redux/actions/alert";

const ContactAdmin = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [seller_email, setSeller_email] = useState("Support@oliveagro.org");
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  const getImageUrl = async () => {
    const image = new FormData();
    image.append("image", imageUrl);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "https://www.api.oliveagro.org/api/users/upload",
        image,
        config
      );
      return res.data.image;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sImg = await getImageUrl();

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const res = await axios.post(
        "https://www.api.oliveagro.org/api/users/create/messsage",
        { name, seller_email, message, imageUrl: sImg },
        config
      );
      console.log(res);
      dispatch(setAlert("Message has been sent to the Admin", "success"));
    } catch (error) {
      dispatch(setAlert("Message was not sent, try again", "danger"));
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
              <Form onSubmit={(e) => handleSubmit(e)}>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <label>Name</label>
                      <input
                        type='text'
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <FormGroup>
                      <label>Upload</label>
                      <input
                        type='file'
                        placeholder=''
                        name='imageUrl'
                        onChange={(e) => setImageUrl(e.target.files[0])}
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
