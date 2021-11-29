import React from 'react';
import { Card, Container, Image, Row } from 'react-bootstrap';

const Reviews = () => {
    return (
        <div>
           <Container>
           <Row xs={1} md={3} className="g-4">

          <div> <Card style={{ width: '22rem' }}>
  <Image style={{margin:"0 auto",height:"150px",width:"150px"}}  src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg" roundedCircle  fluid />
  <Card.Body>
    <Card.Title>John babu</Card.Title>
    <Card.Text>
    &ldquo; Worlds longest Sea beach it is…feel proud of Coxbazar Sea beach… time and again coming back again and again… I have seen many sea beach in many countries.. this beach is the best.   &rdquo;
    </Card.Text>
  </Card.Body>
</Card></div>
          <div> <Card style={{ width: '22rem' }}>
  <Image style={{margin:"0 auto",height:"150px",width:"150px"}}  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" roundedCircle  fluid />
  <Card.Body>
    <Card.Title>solaiman khan</Card.Title>
    <Card.Text>
    &ldquo; It's a really wonderful place. Especially at night the sea fun comes when the tide is very close or up. Then it looks different to see the sea and different to see during the day.&rdquo;
    </Card.Text>
  </Card.Body>
</Card></div>
          <div> <Card style={{ width: '22rem' }}>
  <Image style={{margin:"0 auto",height:"150px",width:"150px"}}  src="https://img.freepik.com/free-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?size=626&ext=jpg" roundedCircle  fluid />
  <Card.Body>
    <Card.Title>George W. Smith
</Card.Title>
    <Card.Text>
    &ldquo;  Really very awesome place. It's a really wonderful place.  Especially at night the sea fun comes when the tide is very close or up.  Then it looks different to see the sea and different to see during the day&rdquo;
    </Card.Text>
  </Card.Body>
</Card></div>
          

</Row>
           </Container>
        </div>
    );
};

export default Reviews;