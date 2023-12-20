import React from "react";
import { Col, Card, CardBody } from "reactstrap";

const AllSites = () => {
  return (
    <Col xl={8}>
      <Card>
        <CardBody>
          <div className="flex-grow-1">
            <h5 className="card-title">All Sites Weekly Visits Summary</h5>
          </div>
          <div className="table-responsive">
            <table className="table table-hover table-striped mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Branch 1</th>
                  <td>12.2k</td>
                  <td>12.2k</td>
                  <td>12.2k</td>
                  <td>12.2k</td>
                  <td>12.2k</td>
                  <td>12.2k</td>
                  <td>12.2k</td>
                </tr>
                <tr>
                  <th scope="row">Branch 2</th>
                  <td>12.2k</td>
                  <td>12.2k</td>
                  <td>12.2k</td>
                  <td>12.2k</td>
                  <td>12.2k</td>
                  <td>12.2k</td>
                  <td>12.2k</td>
                </tr>
                <tr>
                  <th scope="row">Branch 3 </th>
                  <td>12.2k</td>
                  <td>12.2k</td>
                  <td>12.2k</td>
                  <td>12.2k</td>
                  <td>12.2k</td>
                  <td>12.2k</td>
                  <td>12.2k</td>
                </tr>
                <tr>
                  <th scope="row">Branch 4</th>
                  <td>12.2k</td>
                  <td>12.2k</td>
                  <td>12.2k</td>
                  <td>12.2k</td>
                  <td>12.2k</td>
                  <td>12.2k</td>
                  <td>12.2k</td>
                </tr>
                <tr>
                  <th scope="row">Branch 5</th>
                  <td>12.2k</td>
                  <td>12.2k</td>
                  <td>12.2k</td>
                  <td>12.2k</td>
                  <td>12.2k</td>
                  <td>12.2k</td>
                  <td>12.2k</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AllSites;
