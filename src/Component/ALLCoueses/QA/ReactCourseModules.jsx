import React, { useState } from 'react'
import { Button, Card } from "react-bootstrap";
import javaModuleData from "../../../Assets/Data/JavaModule.json";

function courseModules() {
    const [selectedModule, setSelectedModule] = useState(javaModuleData[0]);

    const handleModuleClick = (module) => {
      setSelectedModule(module);
    };
  return (
    <div>  
         <div>
        <div className="container mt-5">
          <div className="d-flex flex-wrap">
            {javaModuleData.map((module) => (
              <Button
                key={module.name}
                variant={
                  javaModuleData.name === module.name
                    ? "primary"
                    : "outline-warning"
                }
                className="m-2"
                onClick={() => handleModuleClick(module)}
              >
                {module.name}
              </Button>
            ))}
          </div>
          <div className="mt-4">
            <Card className="rounded" style={{ height: "400px" }}>
              <Card.Body
                style={{ backgroundColor: "#FEBC23" }}
                className="text-white d-flex justify-content-between"
              >
                <div>
                  <h1>{selectedModule.heading}</h1>
                  <p>{selectedModule.hours}</p>
                  <p>{selectedModule.description}</p>
                  <ul>
                    <li className='overflow-auto p-3'>{selectedModule.descriptionbullet}</li>
                  </ul>
                </div>
                <div className="bg-warning rounded p-2">
                  <h2 className="ms-2 overflow-auto p-3">{selectedModule.warning}</h2>
                  <ul>
                    <li>{selectedModule.warningBullet}</li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>      
</div>
  )
}

export default courseModules