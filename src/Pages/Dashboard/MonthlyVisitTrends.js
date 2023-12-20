import React from 'react'
import { Card, CardBody, CardTitle, Col } from 'reactstrap'
import MonthlyVisitTrend from "../AllCharts/apex/ViistTrends"

const MonthlyVisitTrends = ({data, loading}) => {
  return (
    <Col xl={12}>
    <Card>
    <CardBody>
      <CardTitle className="mb-4">Monthly Visit Trends</CardTitle>
      <MonthlyVisitTrend data={data} loading={loading}/>
    </CardBody>
  </Card>
  </Col>
  )
}

export default MonthlyVisitTrends