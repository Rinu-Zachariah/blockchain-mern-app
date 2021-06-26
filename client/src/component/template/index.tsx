import React from "react";
import { Row, Col } from "antd";

interface props {
  label: string;
  value: any;
}
const Template = ({ label, value }: props) => {
  return (
    <Row
      className="content hash__details"
      align="middle"
      justify="space-around"
    >
      <Col
        className="column-element-padding"
        xs={{ span: 4, offset: 1 }}
        sm={{ span: 4, offset: 1 }}
        md={{ span: 4, offset: 1 }}
        lg={{ span: 4, offset: 1 }}
      >
        {label}
      </Col>
      <Col
        className="column-element-padding"
        xs={{ span: 1 }}
        sm={{ span: 1 }}
        md={{ span: 1 }}
        lg={{ span: 1 }}
      >
        :
      </Col>
      <Col
        className="column-element-padding"
        xs={{ span: 18 }}
        sm={{ span: 18 }}
        md={{ span: 18 }}
        lg={{ span: 18 }}
      >
        {value}
      </Col>
    </Row>
  );
};

export default Template;
