import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import {
  removeProduct,
  updateProduct,
  addProduct,
} from '../store/actions/productsActions';
import { useDispatch, useSelector } from 'react-redux';
const HomePage = ({}) => {
  const { products } = useSelector((state) => state.products);
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setSelected({ ...selected, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    selected?.ID
      ? dispatch(updateProduct(selected))
      : dispatch(addProduct(selected));

    setSelected((prev) => !prev);
  };
  console.log(selected);
  return (
    <Container fluid className='px-3'>
      <Row>
        <h1 className='text-center mt-3'>MY STORE</h1>
      </Row>
      <Row>
        <Col className='mt-3 '>
          <Button onClick={() => setSelected(true)}>Add product</Button>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col xs={12} md={7}>
          {products &&
            products.map((item) => (
              <Row
                key={item.ID}
                className='mb-3 d-flex justify-content-center '
              >
                <Card
                  style={{
                    backgroundColor: selected?.ID === item.ID ? '#256EFD' : '',
                  }}
                  className='p-3 d-flex flex-row flex-wrap align-items-center justify--between'
                  onClick={() => setSelected(item)}
                >
                  <Col xs={3}>
                    <Card.Img className='product-img' src={item.image} />
                  </Col>
                  <Col xs={5}>
                    <Card.Body className='align-self-start'>
                      <Card.Title>{item.Name}</Card.Title>
                      <Card.Text>{item.Description}</Card.Text>
                    </Card.Body>
                  </Col>
                  <Col xs={4}>
                    <Button
                      className='align-self-end'
                      onClick={() => dispatch(removeProduct(item.ID))}
                      variant='danger'
                    >
                      Delete
                    </Button>
                  </Col>
                </Card>
              </Row>
            ))}
        </Col>
        {selected && (
          <Col xs={12} md={5}>
            <Form onSubmit={handleSubmit} className='border p-3'>
              <h3 className='text-dark'>
                {!selected.ID
                  ? `Add new product`
                  : `Product ${selected.ID} Details`}
              </h3>
              <Card.Img
                className='product-img mb-3'
                src={
                  selected?.image ||
                  'https://thumbs.dreamstime.com/b/new-item-sticker-label-editable-vector-illustration-isolated-white-background-new-item-sticker-123424289.jpg'
                }
              />
              <Form.Group className='mb-3'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  value={selected?.Name || ''}
                  type='text'
                  name='Name'
                  placeholder='change name...'
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  name='Description'
                  onChange={handleChange}
                  value={selected?.Description || ''}
                  as='textarea'
                  rows={3}
                  placeholder='change dec...'
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  name='Price'
                  onChange={(e) => handleChange(e)}
                  value={selected?.Price || ''}
                  type='number'
                  placeholder='change price...'
                />
              </Form.Group>
              <div className='d-grid gap-2'>
                <Button variant='primary' type='submit'>
                  Save
                </Button>
              </div>
            </Form>
          </Col>
        )}
      </Row>
    </Container>
  );
};
export default HomePage;
