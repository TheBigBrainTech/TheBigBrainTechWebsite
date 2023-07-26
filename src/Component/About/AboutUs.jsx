import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import Navigation from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";
import AboutText from "../../Assets/Data/AboutData.json";

const AboutUs = () => {
  const [currentId, setCurrentId] = useState(1);

  const handleBack = () => {
    if (currentId > 1) {
      setCurrentId(currentId - 1);
    }
  };

  const handleForward = () => {
    if (currentId < AboutText.length) {
      setCurrentId(currentId + 1);
    }
  };

  const currentData = AboutText.find((data) => data.id === currentId);

  const textStyles = {
    color: "darkgray",
    listStyleType: "none",
    padding: 10,
  };

  return (
    <div>
      <section>
        <Navigation />
      </section>
      {/* Hero Section */}
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col md={6}>
            <h1 style={textStyles}>
              The most important things we develop are people
            </h1>
            <p style={textStyles}>
              We&apos;re a diverse digital community with a mission to change
              lives for the better.
            </p>
            <p style={textStyles}>
              Whether you are eager to kickstart your tech journey or seeking a
              new direction in your tech career, Teksyntax Inc. is the ultimate
              destination for your success. Our supportive community,
              unparalleled resources, and commitment to your growth make us the
              perfect choice for coding bootcamps and placements. Get ready to
              unlock your full potential with Teksyntax Inc. Apply now for our
              coding bootcamps or placement services, and let&apos;s embark on a
              transformative tech journey together. The future of technology
              awaits you!
            </p>
            <Button variant="warning">Apply Now</Button>
          </Col>
          <Col md={6}>
            <img
              src="https://downloader.la/temp/[Downloader.la]-64bdc16c9242a.jpg"
              alt="hero"
              style={{ width: "120%" }}
            />
          </Col>
        </Row>
      </Container>
      <Container>
        {/* Our Mission Section */}
        <Card style={{ position: "relative", marginBottom: "20px" }}>
          <Card.Body>
            <h1>
              <b style={textStyles}>Our Mission</b>
            </h1>
            <Card.Title style={textStyles}>{currentData.Heading}</Card.Title>
            <h2 style={textStyles}>{currentData.subHeading}</h2>
            <Row>
              <Col md={6}>
                <p style={textStyles}>{currentData.text1}</p>
              </Col>
              <Col md={6}></Col>
            </Row>
            <ButtonGroup>
              <Button
                variant="warning rounded-circle mx-4"
                style={{ height: "85px", width: "85px" }}
                onClick={handleBack}
              >
                Back
              </Button>
              <Button
                variant="warning rounded-circle"
                style={{ height: "85px" }}
                onClick={handleForward}
              >
                Forward
              </Button>
            </ButtonGroup>
            <img
              src="https://downloader.la/temp/[Downloader.la]-64bdcb1ae1e6d.jpg"
              alt="overlap"
              style={{
                position: "absolute",
                right: "0",
                bottom: "0",
                width: "400px",
              }}
            />
          </Card.Body>
        </Card>
      </Container>

      {/* Third Section */}
      <Container
        className="py-5"
        style={{ marginBottom: "20px", backgroundColor: "rgb(248,248,248)" }}
      >
        <Row>
          <Col md={12}>
            <h1 style={textStyles}>What goes on in the Teksyntax community?</h1>
            <h3 style={textStyles}>
              You&apos;ll find plenty of the support you need in the Teksyntax
              community, as well as sociable gatherings and the chance to make
              new friends and recruiters. Support and mentorship at Teksyntax
              coders
            </h3>
          </Col>
          <Col md={6}>
            <ul style={textStyles}>
              <li>
                <h2 style={textStyles}>
                  {" "}
                  <i className="fa-solid fa-chalkboard-user fa-2xl"></i> Support
                  & Mentorship
                </h2>
                <p style={textStyles}>
                  From coding questions to personal welfare and career advice,
                  we&apos;ll be there. You&apos;ll also find support and
                  guidance on the Teksyntax Slack community.
                </p>
              </li>
              <li>
                <h1 style={textStyles}>
                  <i className="fa-brands fa-stack-overflow fa-2xl"></i> Talks &
                  Hackathons
                </h1>
                <p style={textStyles}>
                  Whether you&apos;re learning online or in-person, you&apos;ll
                  have the chance to learn about related topics, share your
                  research, practice presenting, work on projects and solve team
                  challenges.
                </p>
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <ul style={textStyles}>
              <li>
                <h2 style={textStyles}>
                  <i className="fa-solid fa-people-arrows fa-2xl"></i> Social
                  Gatherings
                </h2>
                <p style={textStyles}>
                  We run online and in-person social activities, from
                  show-and-tell events to games or ping-pong evenings to help
                  you make friends for life – COVID-19 permitting, of course.
                </p>
              </li>
              <li>
                <h2 style={textStyles}>
                  <i className="fa-solid fa-arrows-down-to-people fa-2xl"></i>{" "}
                  An Inclusive Atmosphere
                </h2>
                <p style={textStyles}>
                  embraces diversity in all its forms, and provides a warm,
                  supportive and inclusive experience for every single student.
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container
        className="py-5"
        style={{ marginBottom: "20px", backgroundColor: "rgb(248,248,248)" }}
      >
        <h2 style={textStyles}>
          At Teksyntax Inc., we are more than just an IT company; we are a
          thriving community of passionate technologists on a mission to change
          lives for the better. As a leading organization in the tech industry,
          we specialize in offering cutting-edge coding bootcamps and top-notch
          placement services, paving the way for aspiring programmers to embark
          on their dream tech careers.
        </h2>
        <Row>
          <Col md={6}>
            <h3 style={textStyles}>
              <strong>Our Coding Bootcamps:</strong>
            </h3>
            <p style={textStyles}>
              Our intensive and immersive coding bootcamps are designed to equip
              you with the practical skills and knowledge necessary to excel in
              the dynamic world of technology. Whether you are an absolute
              beginner or a seasoned coder seeking to upskill, our comprehensive
              programs cater to all skill levels. Led by industry experts and
              experienced mentors, our bootcamps cover a wide array of
              programming languages, frameworks, and the latest tech trends to
              ensure you stay at the forefront of innovation.
            </p>

            <h3 style={textStyles}>
              <strong>Why Choose Teksyntax Bootcamps?</strong>
            </h3>
            <p style={textStyles}>
              Our bootcamps focus on hands-on learning, allowing you to work on
              real-world projects and gain practical experience that employers
              value. Career Support: We don&apos;t just stop at teaching you how
              to code; our dedicated career support team provides guidance,
              interview preparation, and networking opportunities to help you
              land your dream job. Inclusive Environment: At Teksyntax, we
              celebrate diversity and foster an inclusive atmosphere where
              everyone feels welcome and empowered to thrive.
            </p>
          </Col>
          <Col md={6}>
            <h3 style={textStyles}><strong> Our Placement Services:</strong></h3>
            <p style={textStyles}>
            Securing a job in the tech industry can be a
            daunting task, but not with Teksyntax by your side. Our unparalleled
            placement services connect you with leading companies actively
            seeking tech talent. Whether you&apos;re a recent bootcamp graduate or an
            experienced professional looking for new opportunities, our
            extensive network of tech partners ensures that your skills and
            talents are showcased to the right employers. 
            </p>
            <h3 style={textStyles}><strong>Why Teksyntax Placements?</strong></h3>
           <p style={textStyles}>
            We have forged strong
            relationships with top tech companies, giving you access to
            exclusive job openings and internships. Personalized Approach: Our
            placement team takes the time to understand your unique strengths
            and career aspirations, tailoring job opportunities that align with
            your goals. Ongoing Support: Even after you secure a position, we
            continue to support your professional growth, providing mentorship
            and resources to help you thrive in your new role.
           </p>
             
          </Col>
        </Row>
      </Container>

      {/* Last Section */}
      <Container className="py-5" style={{ backgroundColor: "#F8B105" }}>
        <Row>
          <Col md={12}>
            <h1 style={{ color: "white" }}>Ready to Join Teksyntax Inc. ?</h1>
            <Button variant="warning text-light mx-4">
              Apply for Bootcamp
            </Button>
            <Button variant="warning text-light">Apply for Placement</Button>
          </Col>
        </Row>
      </Container>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default AboutUs;
