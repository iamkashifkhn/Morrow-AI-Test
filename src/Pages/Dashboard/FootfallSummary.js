import React, { useState } from 'react';
import LineColumnArea from './LineColumnArea';

import {
    Card,
    CardBody,
    Col,
    Row
} from "reactstrap";

// import { OverViewData } from '../../CommonData/Data/index';

const calculateSum = (arr) => {
    return arr?.reduce((acc, value) => acc + value, 0);
  };

const calculateHourlyAverage = (arr) => {
    const sum = calculateSum(arr);
    return sum / arr?.length;
  };

const calculateAverage = (dataArr) => {
    const sum = dataArr?.reduce((acc, item) => {
      const value = Object.values(item)[0];
      return acc + value;
    }, 0);
    return sum / dataArr?.length;
  };


const FootfallSummary = ({data, loading}) => {
    const [dataType, setDataType] = useState(null)

    const handleData = (val)=>{
        setDataType(val)
    }

    const avgDailyVisit = calculateAverage(data?.avgDailyVisits)
    const avgHourlyVisit = calculateHourlyAverage(data?.avgHourlyVisits.map(item => item.average_visitors));
    
    return (
        <React.Fragment>
            <Col xl={8}>
                <Card style={{height:"550px",maxHeight: '550px'}}>
                    <CardBody>
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                                <h5 className="card-title">Visitors Volume Graph</h5>
                            </div>
                            <div className="flex-shrink-0">
                                <div>
                                    <button type="button" className="btn btn-soft-primary btn-sm me-1" onClick={()=>handleData('hour')}>
                                        Hours
                                    </button>
                                    <button type="button" className="btn btn-soft-primary btn-sm me-1" onClick={()=>handleData('day')}>
                                        Day
                                    </button>
                                    {/* <button type="button" className="btn btn-soft-secondary btn-sm me-1">
                                        6M
                                    </button>
                                    <button type="button" className="btn btn-soft-secondary btn-sm me-1 active">
                                        1Y
                                    </button> */}
                                </div>
                            </div>
                        </div>
                        <div>
                            <LineColumnArea chartType={dataType} data={data} loading={loading}/>
                        </div>
                    </CardBody>
                    <CardBody className="border-top">
                        <div className="text-muted text-center">
                            <Row>
                                <Col md={6}  className="border-end">
                                    <div>
                                        <p className="mb-2"><i className={"mdi mdi-circle font-size-12 me-1 text-primary" }></i> Average Hourly Visits</p>
                                        <h5 className="font-size-16 mb-0"> {avgHourlyVisit.toFixed(2)}
                                        {/* <span className="text-success font-size-12"><i className="mdi mdi-menu-up font-size-14 me-1"></i>{item.percentage} %</span> */}
                                        </h5>
                                    </div>
                                </Col>
                                <Col md={6}  className="border-end">
                                    <div>
                                        <p className="mb-2"><i className={"mdi mdi-circle font-size-12 me-1 text-light" }></i> Average Daily Visits</p>
                                        <h5 className="font-size-16 mb-0"> {avgDailyVisit.toFixed(2)}
                                        {/* <span className="text-success font-size-12"><i className="mdi mdi-menu-up font-size-14 me-1"></i>{item.percentage} %</span> */}
                                        </h5>
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