import React from "react";
import { Layout, Row, Col } from "antd";
import { Iconify } from "utils/Iconify";
const { Footer } = Layout;
export default function AntdFooter() {
  return (
    <Footer style={{ backgroundColor: "#fafafa" }}>
      <Row className="just">
        <Col xs={24} md={12} lg={12}>
        </Col>
        <Col xs={24} md={12} lg={12}>
          <div className="footer-menu">
            <ul>
              {["Home", "About Us", "Blog", "License"].map((item, index) => (
                <li className="nav-item" key={index}>
                  <a
                    href="#pablo"
                    className="nav-link text-muted"
                    target="_blank"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </Footer>
  );
}
