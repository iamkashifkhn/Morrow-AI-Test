import React, { useState } from "react";
// import RadialChart from "./RadialChart";

import { Card, CardBody, Col, Row } from "reactstrap";

// import { SocialSourceData } from "../../CommonData/Data/index";
import CustomerGenderDistributionChart from "./CustomerGenderDistributionChart";

const Gender = ({ data, loading }) => {
  const [selectedOption, setSelectedOption] = useState("Day");

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
  };

  const renderVisitorData = () => {
    switch (selectedOption) {
      case "Day":
        return (
          <Row>
            <div className="col-4">
              <div className="social-source text-center mt-3">
                <div className="avatar-xs mx-auto mb-3">
                  <span
                    style={{ backgroundColor: "#4CAEC9" }}
                    className={"avatar-title rounded-circle font-size-18"}
                  >
                    <i className={"ri ri-male-circle-fill" + " text-white"}></i>
                  </span>
                </div>
                <h5 className="font-size-15">Male</h5>
                <p className="text-muted mb-0">
                  {data?.total_m_f_k_24h?.total_male} Visitors
                </p>
              </div>
            </div>

            <div className="col-4">
              <div className="social-source text-center mt-3">
                <div className="avatar-xs mx-auto mb-3">
                  <span
                    style={{ backgroundColor: "#61E1E6" }}
                    className={"avatar-title rounded-circle font-size-18"}
                  >
                    <i
                      className={"ri ri-female-fill text-white" + " text-white"}
                    ></i>
                  </span>
                </div>
                <h5 className="font-size-15">Female</h5>
                <p className="text-muted mb-0">
                  {data?.total_m_f_k_24h?.total_female} Visitors
                </p>
              </div>
            </div>

            <div className="col-4">
              <div className="social-source text-center mt-3">
                <div className="avatar-xs mx-auto mb-3">
                  <span
                    style={{ backgroundColor: "#569294" }}
                    className={"avatar-title rounded-circle font-size-18"}
                  >
                    <i
                      className={"ri ri-other-line text-white" + " text-white"}
                    ></i>
                  </span>
                </div>
                <h5 className="font-size-15">Children</h5>
                <p className="text-muted mb-0">
                  {data?.total_m_f_k_24h?.total_kids} Visitors
                </p>
              </div>
            </div>
          </Row>
        );
      case "Week":
        return (
          <Row>
            <div className="col-4">
              <div className="social-source text-center mt-3">
                <div className="avatar-xs mx-auto mb-3">
                  <span
                    style={{ backgroundColor: "#4CAEC9" }}
                    className={"avatar-title rounded-circle font-size-18"}
                  >
                    <i className={"ri ri-male-circle-fill" + " text-white"}></i>
                  </span>
                </div>
                <h5 className="font-size-15">Male</h5>
                <p className="text-muted mb-0">
                  {data?.total_m_f_k_7d?.total_male} Visitors
                </p>
              </div>
            </div>

            <div className="col-4">
              <div className="social-source text-center mt-3">
                <div className="avatar-xs mx-auto mb-3">
                  <span
                    style={{ backgroundColor: "#61E1E6" }}
                    className={"avatar-title rounded-circle font-size-18"}
                  >
                    <i
                      className={"ri ri-female-fill text-white" + " text-white"}
                    ></i>
                  </span>
                </div>
                <h5 className="font-size-15">Female</h5>
                <p className="text-muted mb-0">
                  {data?.total_m_f_k_7d?.total_female} Visitors
                </p>
              </div>
            </div>

            <div className="col-4">
              <div className="social-source text-center mt-3">
                <div className="avatar-xs mx-auto mb-3">
                  <span
                    style={{ backgroundColor: "#569294" }}
                    className={"avatar-title rounded-circle font-size-18"}
                  >
                    <i
                      className={"ri ri-other-line text-white" + " text-white"}
                    ></i>
                  </span>
                </div>
                <h5 className="font-size-15">Children</h5>
                <p className="text-muted mb-0">
                  {data?.total_m_f_k_7d?.total_kids} Visitors
                </p>
              </div>
            </div>
          </Row>
        );
      case "Month":
        return (
          <Row>
            <div className="col-4">
              <div className="social-source text-center mt-3">
                <div className="avatar-xs mx-auto mb-3">
                  <span
                    style={{ backgroundColor: "#4CAEC9" }}
                    className={"avatar-title rounded-circle font-size-18"}
                  >
                    <i className={"ri ri-male-circle-fill" + " text-white"}></i>
                  </span>
                </div>
                <h5 className="font-size-15">Male</h5>
                <p className="text-muted mb-0">
                  {data?.total_m_f_k_30d?.total_male} Visitors
                </p>
              </div>
            </div>

            <div className="col-4">
              <div className="social-source text-center mt-3">
                <div className="avatar-xs mx-auto mb-3">
                  <span
                    style={{ backgroundColor: "#61E1E6" }}
                    className={"avatar-title rounded-circle font-size-18"}
                  >
                    <i
                      className={"ri ri-female-fill text-white" + " text-white"}
                    ></i>
                  </span>
                </div>
                <h5 className="font-size-15">Female</h5>
                <p className="text-muted mb-0">
                  {data?.total_m_f_k_30d?.total_female} Visitors
                </p>
              </div>
            </div>

            <div className="col-4">
              <div className="social-source text-center mt-3">
                <div className="avatar-xs mx-auto mb-3">
                  <span
                    style={{ backgroundColor: "#569294" }}
                    className={"avatar-title rounded-circle font-size-18"}
                  >
                    <i
                      className={"ri ri-other-line text-white" + " text-white"}
                    ></i>
                  </span>
                </div>
                <h5 className="font-size-15">Children</h5>
                <p className="text-muted mb-0">
                  {data?.total_m_f_k_30d?.total_kids} Visitors
                </p>
              </div>
            </div>
          </Row>
        );
      default:
        return null;
    }
  };

  return (
    <React.Fragment>
      <Col xl={4}>
        <Card style={{ height: "550px", maxHeight: "550px" }}>
          <CardBody>
            <div className="d-flex  align-items-center">
              <div className="flex-grow-1">
                <h5 className="card-title">Gender</h5>
              </div>
              <div className="flex-shrink-0">
                <select
                  className="form-select form-select-sm mb-0 my-n1"
                  value={selectedOption}
                  onChange={handleSelectChange}
                >
                  {["Day", "Week", "Month"].map((item, key) => (
                    <option key={key} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <CustomerGenderDistributionChart
              data={data}
              loading={loading}
              selectedOption={selectedOption}
            />
            {renderVisitorData()}
            {/* <Row>
                <div  className="col-4">
                  <div className="social-source text-center mt-3">
                    <div className="avatar-xs mx-auto mb-3">
                      <span
                        style={{backgroundColor: "#4CAEC9"}}
                        className={
                          "avatar-title rounded-circle font-size-18"}
                      >
                        <i className={"ri ri-male-circle-fill" + " text-white"}></i>
                      </span>
                    </div>
                    <h5 className="font-size-15">Male</h5>
                    <p className="text-muted mb-0">{data?.todayMaleCount} Visitors</p>
                  </div>
                </div>

                <div  className="col-4">
                  <div className="social-source text-center mt-3">
                    <div className="avatar-xs mx-auto mb-3">
                      <span
                        style={{backgroundColor:  "#61E1E6"}}
                        className={
                          "avatar-title rounded-circle font-size-18"}
                      >
                        <i className={"ri ri-female-fill text-white" + " text-white"}></i>
                      </span>
                    </div>
                    <h5 className="font-size-15">Female</h5>
                    <p className="text-muted mb-0">{data?.todayFemaleCount} Visitors</p>
                  </div>
                </div>

                <div  className="col-4">
                  <div className="social-source text-center mt-3">
                    <div className="avatar-xs mx-auto mb-3">
                      <span
                        style={{backgroundColor: "#569294"}}
                        className={
                          "avatar-title rounded-circle font-size-18"}
                      >
                        <i className={"ri ri-other-line text-white" + " text-white"}></i>
                      </span>
                    </div>
                    <h5 className="font-size-15">Children</h5>
                    <p className="text-muted mb-0">{data?.todayKidsCount} Visitors</p>
                  </div>
                </div>
            </Row> */}
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Gender;
