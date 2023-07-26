import React from 'react'

export default function categoryCards() {
  return (
    
          <div className="SelectionCards">
            <div className="container">
              <section className="text-center">
                <h1 className="p-1" style={{ color: 'rgb(108, 108, 108)' }}>
                  Make it possible
                </h1>
                <h4 style={{ color: 'rgb(108, 108, 108)' }}>Pivot your career in IT</h4>
              </section>
              <div className="card-deck d-flex text-center p-3">
                <div className="card mx-2 mb-4 shadow-sm">
                  <div className="card-body text-center">
                    <h5 className="card-title" style={{ color: 'rgb(108, 108, 108)' }}>
                      INDIVIDUALS
                    </h5>
                    <p className="card-text">
                      Get ahead with certified expert-led training curated for individuals
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-warning">
                          Browse Courses
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mx-3 mb-4 shadow-sm">
                  <div className="card-body text-center">
                    <h5 className="card-title" style={{ color: 'rgb(108, 108, 108)' }}>
                      Businesses
                    </h5>
                    <p className="card-text">
                      Train your workforce with intensive training and make your hiring process streamline
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-warning">
                          Find Solution
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-4 shadow-sm">
                  <div className="card-body text-center">
                    <h5 className="card-title" style={{ color: 'rgb(108, 108, 108)' }}>
                      Corporations
                    </h5>
                    <p className="card-text">
                      Hire our industry-standard trained professionals with top skills
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-warning">
                          Find Candidate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }