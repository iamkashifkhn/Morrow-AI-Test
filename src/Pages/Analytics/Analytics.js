import React, { useState , useEffect} from "react";
import Breadcrumbs from "../../components/Common/Breadcrumb";
// import LineApexChart from '../AllCharts/apex/chartapex'
// import VisitTrends from '../AllCharts/apex/ViistTrends'
// import Traffic from '../AllCharts/apex/Traffice'
import { Card, CardBody, CardTitle, Col, Row, Container, Spinner } from "reactstrap"
import GenderDistribution from "../AllCharts/apex/GenderDistribution";
import MonthlyAverageVisits from "../AllCharts/apex/MonthlyAverageVisits";
import BusiestHour from "../AllCharts/apex/BusiestHour";
import axios from "axios";

const authToken = "ea5ce7ef-82e7-480d-9acd-b0fefb5b810d";
const API_URL = `${process.env.REACT_APP_API_URL}/analytics/avg_gender_trends/`;
const BUSIEST_HOURS = `${process.env.REACT_APP_API_URL}/analytics/busiest_hour/`

const Analytics = () => {
  document.title = "Analytics | Morrow AI";
  const [data, setData] = useState(null)
  const [busiestHours, setBusiestHours] = useState(null)
  const [loading,setLoading] = useState(false)

  const getBusiestHours = async () => {
    setLoading(true);
    try {
      const response = await axios.get(BUSIEST_HOURS, {
        headers: {
          Authorization: `${authToken}`,
        },
      });
      console.log(response)
      if (response) {
        setBusiestHours(response?.busiestHour7Days);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };


  const getGenderDistributionByTimeSlot = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `${authToken}`,
        },
      });
      if (response) {
        setData(response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getGenderDistributionByTimeSlot()
    getBusiestHours()
  }, []);

  if (loading) {
    return (
      <div className="page-content" style={{ display:'flex', justifyContent:'center'}}>
      <Spinner className="m-5" color="primary">
        Loading...
      </Spinner>
      </div>
    );
  }

  return (
    <>
      <div className="page-content">
        <Container fluid="true">
          <Breadcrumbs title="Morrow AI" breadcrumbItem="Analytics" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Busiest Hours of the Day</CardTitle>
                  {/* <LineApexChart /> */}
                  <BusiestHour data ={busiestHours || null} loading={loading}/>
                </CardBody>
              </Card>
            </Col>

            <Col lg={12}>
              <Card>
                <CardBody>
                  {/* <CardTitle className="mb-4">Daily, Weekly, Monthly Visit Trends</CardTitle>
                   <VisitTrends/> */}
                  <CardTitle className="mb-4">Gender Distribution by Timeslot</CardTitle>
                   <GenderDistribution data={data} loading={loading}/>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
          <Col lg={12}>
              <Card>
                <CardBody>
                  {/* <CardTitle className="mb-4">Traffic per day of the Week</CardTitle> */}
                  <CardTitle className="mb-4">Last 12 Months</CardTitle>
                   {/* <Traffic/> */}
                   <MonthlyAverageVisits  data={data} loading={loading}/>
                </CardBody>
              </Card>
            </Col>

            {/* <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Gender Distribution by Timeslot</CardTitle>
                   <GenderDistribution/>
                </CardBody>
              </Card>
            </Col> */}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Analytics;
