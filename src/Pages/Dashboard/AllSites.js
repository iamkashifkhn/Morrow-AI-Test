import React from "react";
import { Col, Card, CardBody } from "reactstrap";

const AllSites = () => {
  return (
    <Col xl={8}>
      <Card style={{minHeight:'350px'}}>
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
                  <td>3.2k</td>
                  <td>5.1k</td>
                  <td>3.8k</td>
                  <td>4.6k</td>
                  <td>7.24k</td>
                  <td>3.8k</td>
                  <td>5.2k</td>
                </tr>
                <tr>
                  <th scope="row">Branch 2</th>
                  <td>3.4k</td>
                  <td>4.1k</td>
                  <td>6.9k</td>
                  <td>5.7k</td>
                  <td>8.2k</td>
                  <td>4.5k</td>
                  <td>6.9k</td>
                </tr>
                <tr>
                  <th scope="row">Branch 3 </th>
                  <td>4.2k</td>
                  <td>3.5k</td>
                  <td>3.6k</td>
                  <td>4.1k</td>
                  <td>6.9k</td>
                  <td>5.4k</td>
                  <td>3.7k</td>
                </tr>
                <tr>
                  <th scope="row">Branch 4</th>
                  <td>5.1k</td>
                  <td>3.9k</td>
                  <td>4.6k</td>
                  <td>3.5k</td>
                  <td>7.1k</td>
                  <td>4.9k</td>
                  <td>5.4k</td>
                </tr>
                <tr>
                  <th scope="row">Branch 5</th>
                  <td>3.2k</td>
                  <td>5.4k</td>
                  <td>4.8k</td>
                  <td>5.2k</td>
                  <td>6.4k</td>
                  <td>4.5k</td>
                  <td>5.7k</td>
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
