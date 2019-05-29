import React from "react";
import { Layout, Row, Col } from "antd";
import { Drawer, Button } from "antd";

import "./App.less";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header className="header">
        <span className="title">Baramee Thai Bistro</span>
      </Header>
      <Content>Content</Content>
      <Footer>
        <Row gutter={16}>
          <Col className="gutter-row" span={12}>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12386.64100319858!2d-94.5849383!3d39.0914359!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x226ac91b1493bb49!2sBaramee+Thai+Bistro!5e0!3m2!1sen!2sus!4v1559093296750!5m2!1sen!2sus"
              width="400"
              height="300"
              frameborder="0"
              allowfullscreen
            />
          </Col>
          <Col className="gutter-row" span={12}>
            Contant Hours
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
}

export default App;
