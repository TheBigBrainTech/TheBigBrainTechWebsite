import React from 'react'
import selenium from '../../../Assets/images/OtherImages/selenium.977x1024.png'
import cucumber from '../../../Assets/images/OtherImages/cucumber.870x1024.png'
import maven from '../../../Assets/images/OtherImages/Maven.png'
import testng from '../../../Assets/images/OtherImages/testNG copy.png'
import postman from '../../../Assets/images/OtherImages/postman copy .png'
import jenkins from '../../../Assets/images/OtherImages/jenkins copy.png'




function courseInfo() {
  return (
    <div><div>
    <div className="container mt-5">
      <h1 style={{ color: "#FFCB68" }}>
        <b>COURSE INFO</b>
      </h1>
      <h4 style={{ color: "#FFCB68" }}>
        <strong>
          Master the fundamental skills of a SDET in just a few
          weeks
        </strong>
      </h4>
      <div className="row">
        {/* First Column */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Learn testing fundamentals and databases
              </h5>
              <p className="card-text">
                Grasp testing foundations, write robust code with
                object-oriented programming and test MVC software from
                scratch. Test relational databases and SQL.
              </p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <i className="fa-solid fa-terminal fa-xl p-2"></i>
              <i>
                <img style={{height:'20px',width:'20px'}} src={selenium} alt="" />
              </i>
              <i className="fa-brands fa-java fa-xl p-2"></i>
              <i className="fa-solid fa-server fa-xl p-2"></i>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Master software & web testing
              </h5>
              <p className="card-text">
                Test responsive web pages with Selenium, cucumber, testNG.
                Master modern Java based testing and use Modern Frameworks for Testing and bug Reporting.
              </p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <i>
                <img style={{height:'20px',width:'20px'}} src={cucumber} alt="" />
              </i>
              <i>
                <img style={{height:'20px',width:'50px'}} src={maven} alt=''></img>
              </i>
              <i>
                <img style={{height:'20px',width:'30px'}} src={testng} alt=''></img>
              </i>
              <i className="fa-brands fa-readme fa-xl p-2"></i>
            </div>
          </div>
        </div>

        {/* Third Column */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Test your app from scratch</h5>
              <p className="card-text">
                Test complete web applications and deploy them online on
                real CICD Pipeline that everyone can access. You&apos;re not a real
                Tester until you&apos;ve tested and pushed something in production!.
              </p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <i>
                <img style={{height:'30px',width:'50px'}} src={postman} alt=''></img>
              </i>
              <i className="fa-brands fa-slack fa-xl p-2"></i>
              <i className="fa-brands fa-aws fa-xl p-2"></i>
              <i className="fa-brands fa-codepen fa-xl p-2"></i>
            </div>
          </div>
        </div>

        {/* Fourth Column */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Adopt best-in-class Testing workflow
              </h5>
              <p className="card-text">
                Understand product development and testing tools & workflow. Validate
                your UI on Selenium , organise team work and collaborate on
                GitHub. Cover your code with automated testing and
                continuous integration.
              </p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <i>
                <img style={{height:'20px',width:'20px'}} src={jenkins} alt=''></img>
              </i>
              <i className="fa-brands fa-linux fa-xl p-2"></i>
              <i className="fa-brands fa-atlassian fa-xl p-2"></i>
              <i className="fa-brands fa-github fa-xl p-2"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default courseInfo;