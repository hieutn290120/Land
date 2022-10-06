import { FC } from "react";
import { Col, Row } from "antd";
import ChartComponent from "src/component/charts";
import PieComponent from "src/component/pie";
import PieCompColumnComponentonent from "src/component/columns";

const Dashboard: FC = () => {
  return (
    <>
      <ChartComponent />
      <Row style={{ marginTop: "40px" }} gutter={[32, 8]}>
        <Col span={12}>
          <PieCompColumnComponentonent />
        </Col>
        <Col span={12}>
          <PieComponent />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
