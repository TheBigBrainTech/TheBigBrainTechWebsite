import React from 'react'

function courseInfo() {
  return (
    <div><div>
    <div className="container mt-5">
      <h1 style={{ color: "#FFCB68" }}>
        <b>COURSE INFO</b>
      </h1>
      <h4 style={{ color: "#FFCB68" }}>
        <strong>
          Master the fundamental skills of a Java Development in just a few
          weeks
        </strong>
      </h4>
      <div className="row">
        {/* First Column */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Learn software fundamentals and databases
              </h5>
              <p className="card-text">
                Grasp programming foundations, write robust code with
                object-oriented programming and build MVC software from
                scratch. Master relational databases and SQL.
              </p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <i className="fa-solid fa-terminal fa-xl p-2"></i>
              <i className="fa-brands fa-elementor fa-xl p-2"></i>
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
                Master front-end development & web design
              </h5>
              <p className="card-text">
                Develop responsive web pages with HTML, CSS and JavaScript.
                Master modern JavaScript and use key frameworks, including
                Angular and React .
              </p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <i className="fa-brands fa-html5 fa-xl p-2"></i>
              <i className="fa-brands fa-css3-alt fa-xl p-2"></i>
              <i className="fa-brands fa-angular fa-xl p-2"></i>
              <i className="fa-brands fa-readme fa-xl p-2"></i>
            </div>
          </div>
        </div>

        {/* Third Column */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Deploy your app from scratch</h5>
              <p className="card-text">
                Build complete web applications and deploy them online on
                real domain that everyone can access. You&apos;re not a real
                developer until you&apos;ve pushed something in production!.
              </p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <i className="fa-brands fa-docker fa-xl p-2"></i>
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
                Adopt best-in-class development workflow
              </h5>
              <p className="card-text">
                Understand product development tools & workflow. Validate
                your UX on Figma, organise team work and collaborate on
                GitHub. Cover your code with automated testing and
                continuous integration.
              </p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <i className="fa-brands fa-figma fa-xl p-2"></i>
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