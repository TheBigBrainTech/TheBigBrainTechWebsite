import React, { useState } from "react";
import { Container, Card, Tab, Tabs, Button } from "react-bootstrap";

const TuitionCard = () => {
  const [key, setKey] = useState("tuition");

  // State for scholarship program
  const [scholarshipStatus, setScholarshipStatus] = useState("Not applied");
  const [isPassedTest, setIsPassedTest] = useState(false);

  // State for income sharing loan
  const [isJobObtained, setIsJobObtained] = useState(false);
  const [incomeSharingStatus, setIncomeSharingStatus] = useState("Not started");

  const handleApplyForScholarship = () => {
    // Simulate passing the technical test
    // You can replace this with your actual test validation logic
    setIsPassedTest(true);
    setScholarshipStatus("Applied (Under review)");
  };

  const handleStartIncomeSharing = () => {
    // Simulate getting a job
    // You can replace this with your actual job validation logic
    setIsJobObtained(true);
    setIncomeSharingStatus("Started");
  };

  return (
    <Container>
      <Card>
        <Card.Header>
          <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
            <Tab eventKey="tuition" title="Tuition">
              <Card.Body>
                <h1>
                  <b>Full Tuition</b>
                </h1>
                <h2>
                  <b>Tuition:</b> $3,000
                </h2>
                <h2>
                  <b>Deposit:</b> $100
                </h2>
                <h5 className="text-muted">
                  Currently only available in select U.S. markets.
                </h5>
                <h4>
                  The $100 deposit is a part of your overall tuition and not an
                  additional expense. Your deposit will be made as a part of the
                  application process which you’ll place after your application
                  is submitted and the non-technical interview with your
                  Admissions Advisor is complete.
                </h4>
              </Card.Body>
            </Tab>
            <Tab eventKey="financing" title="Financing Option">
              <Card.Body>
                <h1>
                  <b>Financing Option</b>
                </h1>
                <p className="text-muted">
                  0% Interest if paid within 2 mothns of starting Bootcamp
                  <sup>*</sup>
                </p>
                <p className="text-muted">
                  Pay in installments installments within 2 months
                </p>
                <h2>
                  <strong>Option 1</strong>
                </h2>
                Pay in 8 installments of - $375.00
                <br></br>
                <h2>
                  <strong>Option 2</strong>
                </h2>
                Pay in 4 installments of - $750.00
              </Card.Body>
            </Tab>
            <Tab eventKey="scholarship" title="Scholarship Program">
              <Card.Body>
                <h1>
                  <b>Scholarship Program</b>
                </h1>
                <h3>
                  <strong>Women in Tech Scholarship ($500)</strong>
                </h3>
                <p>
                  For the SHEros who require financial assistance to launch
                  their career paths in tech.
                </p>
                <h3>
                  <strong>Diversity Scholarship ($250)</strong>
                </h3>
                <p>
                  To support and cheer on those within underrepresented groups
                  within the tech industry, including, but not limited to Black,
                  Hispanic, Asian, Indigenous, and LGBTQIA+ communities pursuing
                  technology careers.
                </p>
                <h3>
                  <strong>Military Heroes Scholarship ($500)</strong>
                </h3>
                <p>
                  Honoring our military veterans and current service members
                  transitioning into technology. A copy of DD-214, DD-256, or
                  NGB-22 is required with the application.
                </p>
                <p>Status: {scholarshipStatus}</p>
                <Button
                  variant="warning"
                  disabled={isPassedTest}
                  onClick={handleApplyForScholarship}
                >
                  {isPassedTest ? "Applied (Under review)" : "Apply Now"}
                </Button>
              </Card.Body>
            </Tab>
            <Tab eventKey="incomeSharing" title="Income Sharing Loan">
              <Card.Body>
                <h4>
                  <strong>Income Sharing Loan</strong>
                </h4>
                <p>
                  Defer tuition payment and repay as a percentage of your income
                  once you land a job earning at least $35,000/year.¹
                </p>
                <p>Status: {incomeSharingStatus}</p>
                <Button
                  variant="warning"
                  disabled={!isJobObtained}
                  onClick={handleStartIncomeSharing}
                >
                  {isJobObtained ? "Started" : "Start Loan"}
                </Button>
                <p className="my-2">
                  <small>
                    <sup>*</sup>The effective Income Share Percentage (“ISP”) on
                    your Income Share Loan (“ISL”) is a fixed percentage of your
                    monthly gross-income and will range between 1.60% and
                    20.00%, for a period of 12 months after the beginning of
                    your payment term. Monthly payments are required and will
                    vary greatly in amount because they depend on your specific
                    ISP and your reported monthly gross-income. Monthly
                    repayment amount is based on your designated ISP and monthly
                    gross-income, not an Annual Percentage Rate (“APR”); the APR
                    you actually pay will be dependent on your actual ISP and
                    gross-income for the entire duration of the loan repayment
                    period. You may repay more or less than the amount you
                    received, depending on your specific circumstances. Your
                    loan has a maximum payment period (18 months) inclusive of
                    any months where monthly payments are made as well as any
                    months that are deferred months after you leave or graduate
                    from your program.
                  </small>
                </p>
              </Card.Body>
            </Tab>
            <Tab eventKey="EmployeeSponsered" title="Employee Sponsered">
              <Card.Body>
                <h4>
                  <b>Employee Sponsered</b>
                </h4>
                <h3>
                  <strong>Have your boss pay.</strong>
                </h3>
                <p>
                  Defer tuition payment and repay as a percentage of your income
                  once you land a job earning at least $35,000/year.¹
                </p>
                <h3>
                  <strong>How it works:</strong>{" "}
                </h3>
                <p>
                  Does your company have a dedicated budget for professional
                  development? If so, you might be eligible to learn and get
                  reimbursed by your employer! In fact, over 45% of our
                  part-time students are employer sponsored.
                </p>
                <h3>
                  <strong>Best if you want to:</strong>
                </h3>
                <p>
                  Receive partial to full reimbursement from your employer for
                  job-relevant skills.
                </p>
              </Card.Body>
            </Tab>
          </Tabs>
        </Card.Header>
      </Card>
    </Container>
  );
};

export default TuitionCard;
