import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import questionData from "../../../Assets/Data/FAQ.json";

export default function StaticFaqSection() {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    if (index === expandedQuestion) {
      setExpandedQuestion(null); // Collapse the expanded question if clicked again
    } else {
      setExpandedQuestion(index);
    }
  };

  return (
    <Container>
      <section>
        <h3 className="text-center mb-4 pb-2 text-warning fw-bold">FAQ</h3>
        <p className="text-center mb-5">
          Find the answers for the most frequently asked questions below
        </p>

        <Row className="text-dark text-center bg-light p-3">
          {questionData.map((item, index) => (
            <Col key={index} md="12" className="mb-4">
              <div>
                <button
                  className="mb-1 text-warning cursor-pointer"
                  onClick={() => handleQuestionClick(index)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  <i className="fa-solid fa-circle-question"></i> {item.question}
                  <i className="fa-solid fa-chevron-down p-2"></i>
                </button>
              </div>
              {expandedQuestion === index && <div>{item.answer}</div>}
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
}
