import {
  Card,
  Row,
  Col,
  Typography,
  Radio,
  Upload,
  message,
  Button,
  Timeline,
} from "antd";
import Echat from "components/charts/Echat";
import LineChart from "components/charts/LineChart";
import React, { useEffect, useState } from "react";
import { count, list } from "utils/HomeData";
import { Iconify } from "utils/Iconify";
import AntCard from "components/AntCard";
import card from "../assets/images/info-card-1.jpg";
import { timelineList } from "utils/HomeData";
import { useDispatch, useSelector } from "react-redux";
import { client } from "utils/axios";
const { Title, Paragraph, Text } = Typography;
export default function Home() {

  const dispatch = useDispatch()
  const { users } = useSelector(state => state.user)
  useEffect(() => {
    client.get("users/").then(res => dispatch({ type: "FETCH_USERS", payload: res.data }))
  }, [])

  const { restaurants } = useSelector(state => state.restaurant)
  useEffect(() => {
    client.get("restaurants/").then(res => dispatch({ type: "FETCH_RESTAURANT", payload: res.data }))
  }, [])

  const { destinations } = useSelector(state => state.destination)
  useEffect(() => {
    client.get("destinations/").then(res => dispatch({ type: "FETCH_DESTINATIONS", payload: res.data }))
  }, [])

  const { hotels } = useSelector(state => state.hotel)
  useEffect(() => {
    client.get("hotels/").then(res => dispatch({ type: "FETCH_HOTELS", payload: res.data }))
  }, [])

  

  const [reverse, setReverse] = useState(false);
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);
  const uploadProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed`);
      }
    },
  };
  return (
    <>
      <div className="layout-content">
        <Row className="rowgap-vbox" gutter={[24, 0]}>
          {count.map((c, index) => {
            if(c.today =="Users"){ c.title = users.length }
            else if(c.today =="Restaurent"){c.title = restaurants.length}
            else if(c.today =="Destinations"){c.title = destinations.length}
            else if(c.today =="Hotels"){c.title = hotels.length}
            return (
              <Col
                key={index}
                xs={24}
                sm={24}
                md={12}
                lg={6}
                xl={6}
                className="mb-24"
              >
                <Card bordered={false} className="criclebox">
                  <div className="number">
                    <Row align="middle" gutter={[24, 0]}>
                      <Col xs={18}>
                        <span>{c.today}</span>
                        <Title level={3}>
                          {c.title} <small className={c.bnb}>{c.persent}</small>
                        </Title>
                      </Col>
                      <Col xs={6}>
                        <div className="icon-box">{c.icon}</div>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Row gutter={[24, 0]}>
          <AntCard xl={10}>
            <Echat />
          </AntCard>
          <AntCard xl={14}>
            <LineChart />
          </AntCard>
        </Row>
      </div>
    </>
  );
}
