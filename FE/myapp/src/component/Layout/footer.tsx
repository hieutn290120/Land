import React from "react";
import { Layout } from "antd";
import moment from "moment";
const { Footer } = Layout;
const FooterComponent = () => {
  const year = moment().year();
  return (
    <Footer style={{ textAlign: "center" }}>
      Land ©{year} Created by ABCD
    </Footer>
  );
};

export default FooterComponent;
