import React, { useState } from "react";
import LineColumnArea from "./LineColumnArea";

import { Card, CardBody, Col, Row, Spinner } from "reactstrap";

const FootfallSummary = ({ data, loading }) => {
  const [dataType, setDataType] = useState("hour");
  
  const handleData = (val) => {
    setDataType(val);
  };

  // const totalPeopleHourly =
  //   data &&
  //   data?.hourlyVisits?.reduce((sum, entry) => sum + entry.total_traffic, 0);
  // const averageHourlyVisits =
  //   data?.hourlyVisits?.length > 0
  //     ? totalPeopleHourly / data?.hourlyVisits?.length
  //     : 0;
  const averageHourlyVisits = 11.25

  // const totalDailyVisits =
  //   data && data?.daily_visits_7_days?.map((entry) => entry.total_visits);
  // const avgDailyVisits =
  //   totalDailyVisits?.slice(1).reduce((acc, count) => acc + count, 0) /
  //     totalDailyVisits?.length -
  //   1;
  const avgDailyVisits = 176.85

  // console.log(avgDailyVisits, "AVG")

  return (
    <React.Fragment>
      <Col xl={8}>
        <Card style={{ height: "550px", maxHeight: "550px" }}>
          <CardBody>
            <div className="d-flex align-items-center">
              <div className="flex-grow-1">
                <h5 className="card-title">Visitors Volume Graph</h5>
              </div>
              <div className="flex-shrink-0">
                <div>
                  <button
                    type="button"
                    className="btn btn-soft-primary btn-sm me-1"
                    onClick={() => handleData("hour")}
                  >
                    Hours
                  </button>
                  <button
                    type="button"
                    className="btn btn-soft-primary btn-sm me-1"
                    onClick={() => handleData("day")}
                  >
                    Day
                  </button>
                </div>
              </div>
            </div>
            <div>
              <LineColumnArea
                chartType={dataType}
                data={data}
                loading={loading}
              />
            </div>
          </CardBody>
          <CardBody className="border-top">
            <div className="text-muted text-center">
              <Row>
                <Col md={6} className="border-end">
                  <div>
                    <p className="mb-2">
                      <i
                        className={
                          "mdi mdi-circle font-size-12 me-1 text-primary"
                        }
                      ></i>{" "}
                      Average Hourly Visits
                    </p>
                    {averageHourlyVisits !== undefined &&
                    averageHourlyVisits !== null ? (
                      <h5 className="font-size-16 mb-0">
                        {" "}
                        {averageHourlyVisits.toFixed(2)}{" "}
                      </h5>
                    ) : averageHourlyVisits === null ? (
                      <h5 className="font-size-16 mb-0"> 0 </h5>
                    ) : (
                      <Spinner color="primary" size="sm" />
                    )}
                  </div>
                </Col>
                <Col md={6} className="border-end">
                  <div>
                    <p className="mb-2">
                      <i
                        className={
                          "mdi mdi-circle font-size-12 me-1 text-light"
                        }
                      ></i>{" "}
                      Average Daily Visits
                    </p>
                    {avgDailyVisits ? (
                      <h5 className="font-size-16 mb-0">
                        {avgDailyVisits?.toFixed(2)}
                      </h5>
                    ) : (
                      <Spinner color="primary" size="sm" />
                    )}
                  </div>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default FootfallSummary;
