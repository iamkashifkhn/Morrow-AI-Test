import React, {useState, useEffect} from "react";
import UsePanel from "./UserPanel";
// import OrderStatus from "./OrderStatus";
// import Notifications from "./Notifications";
import Gender from "./GenderChart";
// import OverView from "./OverView";
import RevenueByLocation from "./RevenueByLocation";
// import LatestTransation from "./LatestTransation";
import MonthlyVisitTrends from './MonthlyVisitTrends'
import { Row, Container, Spinner } from "reactstrap";
import axios from "axios";
import  secureLocalStorage  from  "react-secure-storage"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import FootfallSummary from "./FootfallSummary";
import AllSites from "./AllSites";

const authToken = "ea5ce7ef-82e7-480d-9acd-b0fefb5b810d";
const API_URL = "http://4.246.138.166:5000/analytics/total_visits/";
const VISITOR_VOLUME_GRAPH = "http://4.246.138.166:5000/analytics/average_visits/"
const GET_MONTHLY_TREND = "http://4.246.138.166:5000/analytics/gender_trends/"

const Dashboard = () => {
  document.title = "Dashboard | Morrow AI";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [visitorVolumeData, setVisitorVolumeData] = useState(null)
  const [monthlyTrend, setMonthlyTrend] = useState(null)

  let value

  useEffect(() => {
    secureLocalStorage.setItem("token", authToken);
    value = secureLocalStorage.getItem("token");
}, []);

  const getCardsData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `${value}`,
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

  const getVisitorVolumeData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(VISITOR_VOLUME_GRAPH, {
        headers: {
          Authorization: `${value}`,
        },
      });
      if (response) {
        setVisitorVolumeData(response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getMonthlyTrends = async () => {
    setLoading(true);
    try {
      const response = await axios.get(GET_MONTHLY_TREND, {
        headers: {
          Authorization: `${value}`,
        },
      });
      if (response) {
        setMonthlyTrend(response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCardsData();
    getVisitorVolumeData()
    getMonthlyTrends()
  }, []);


  // if (loading) {
  //   return (
  //     <div className="page-content" style={{ display:'flex', justifyContent:'center'}}>
  //     <Spinner className="m-5" color="primary">
  //       Loading...
  //     </Spinner>
  //     </div>
  //   );
  // }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Morrow AI" breadcrumbItem="Dashboard" />
          {/* User Panel Charts */}
          <UsePanel data={data} loading={loading}/>

          <Row>
            {/* Overview Chart */}
            {/* <OverView /> */}
            <FootfallSummary data={visitorVolumeData} loading={loading}/>
            {/* Social Source Chart */}
            <Gender data={data} loading={loading}/>
          </Row>
          <Row>
            <MonthlyVisitTrends data={monthlyTrend} loading ={loading}/>
          </Row>
          {/* <Row> */}
            {/* Order Stats */}
            {/* <OrderStatus /> */}
            {/* Notifications */}
            {/* <Notifications /> */}
            {/* Revenue by Location Vector Map */}
            {/* <RevenueByLocation />
          </Row> */}

          {/* Latest Transaction Table */}
          {/* <LatestTransation /> */}

          <Row>
             <AllSites/>
             <RevenueByLocation/>
             {/* <Vectormap/> */}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
