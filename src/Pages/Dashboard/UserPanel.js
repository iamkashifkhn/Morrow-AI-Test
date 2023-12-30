import React from "react";
import { Card, CardBody, Col, Row, Spinner } from "reactstrap";

// import RadialChart1 from "./userpanelChart1";
// import RadialChart2 from "./userpanelChart2";
import RadialChart3 from "./userpanelChart3";

const UserPanel = ({ data, loading }) => {
  const last24Hour = data?.visitorLast24Hour;
  const previous24Hour = data?.visitorPrevious24Hour;

  const last7Days = data?.visitorLast7Days;
  const previous7Days = data?.visitorPrevious7Days;

  const last7DaysVisitPercentage =
    ((last7Days - previous7Days) / Math.abs(previous7Days)) * 100;

  const percentageChange =
    ((last24Hour - previous24Hour) / Math.abs(previous24Hour)) * 100;

  const percentageStyle = {
    color: percentageChange >= 0 ? "green" : "red",
  };

  const percentageStyle7Days = {
    color: last7DaysVisitPercentage >= 0 ? "green" : "red",
  };

  const arrowIconClass =
    percentageChange >= 0
      ? "ri-arrow-right-up-line"
      : "ri-arrow-right-down-line";

  const arrowIcon7Days =
    last7DaysVisitPercentage >= 0
      ? "ri-arrow-right-up-line"
      : "ri-arrow-right-down-line";

  if (loading) {
    return (
      <Spinner className="m-5" color="primary">
        Loading...
      </Spinner>
    );
  }

  return (
    <React.Fragment>
      <Row>
        <Col xl={4} sm={6}>
          <Card style={{ height: "120px" }}>
            <CardBody>
              <div className="d-flex text-muted">
                <div className="flex-shrink-0 me-3 align-self-center">
                  <div dir="ltr" className="text-primary">
                    {/* <RadialChart1 /> */}
                    <i className="mdi mdi-36px mdi-rotate-315 mdi-foot-print"></i>
                  </div>
                </div>

                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1">Today's Total Visits</p>
                  {last24Hour ? (
                    <>
                      <h3>{last24Hour}</h3>
                      <p className="text-truncate mb-0">
                        <span style={percentageStyle} className="me-2">
                          {percentageChange.toFixed(2)}%
                          <i
                            className={`${arrowIconClass} align-bottom ms-1`}
                          ></i>
                        </span>
                        From previous
                      </p>
                    </>
                  ) : (
                    <Spinner color="primary" size="sm" />
                  )}
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col xl={4} sm={6}>
          <Card style={{ height: "120px" }}>
            <CardBody>
              <div className="d-flex">
                <div className="flex-shrink-0 me-3 align-self-center text-primary">
                  <i className="mdi mdi-36px  mdi-calendar"></i>
                </div>

                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1">Last 7 Days Total Visits</p>
                  {last7Days ? (
                    <>
                      <h3>{data?.visitorLast7Days}</h3>
                      <p className="text-truncate mb-0">
                        <span style={percentageStyle7Days} className="me-2">
                          {last7DaysVisitPercentage.toFixed(2)}%
                          <i
                            className={`${arrowIcon7Days} align-bottom ms-1`}
                          ></i>
                        </span>
                        From previous
                      </p>
                    </>
                  ) : (
                    <Spinner color="primary" size="sm" />
                  )}
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col xl={4} sm={6}>
          <Card style={{ height: "120px" }}>
            <CardBody>
              <div className="d-flex text-muted">
                <div className="flex-shrink-0 me-3 align-self-center">
                  <RadialChart3
                    id="radialchart-3"
                    className="apex-charts"
                    dir="ltr"
                  />
                </div>

                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1">Current Occupancy</p>
                  <h5 className="mb-3">24.03 %</h5>
                  {/* <p className="text-truncate mb-0">
                    <span className="text-danger me-2">
                      {" "}
                      0.01%{" "}
                      <i className="ri-arrow-right-down-line align-bottom ms-1"></i>
                    </span>{" "}
                    From previous
                  </p> */}
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
{/* 
        <Col xl={3} sm={6}>
          <Card style={{ height: "120px" }}>
            <CardBody>
              <div className="d-flex text-muted">
                <div className="flex-shrink-0 me-3 align-self-center">
                  <div className="avatar-sm">
                    <div className="avatar-title bg-light rounded-circle text-primary font-size-20">
                      <i className="ri-group-line"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-1">Changes</p>
                  <h5>435</h5>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col> */}
      </Row>
    </React.Fragment>
  );
};

export default UserPanel;
