import React, { useState } from "react";
import styles from "./patientContainerStyle.module.css";
import {
  Card,
  Button,
  Input,
  Row,
  Col,
  Space,
  Pagination
} from "antd";
import {
  DeleteOutlined,
  PlusOutlined,
  FilterOutlined,
  SortAscendingOutlined
} from "@ant-design/icons";

const { Search } = Input;

const PatientContainer = () => {
  const [patients] = useState([
    {
      key: "1",
      hn: "202403090",
      tn: "403090",
      idCard: "809430",
      name: "Elizabeth",
      dob: "29/03/1984",
      age: 36,
      gender: "Female",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      key: "2",
      hn: "202403091",
      tn: "403091",
      idCard: "809431",
      name: "John",
      dob: "15/06/1978",
      age: 45,
      gender: "Male",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      key: "3",
      hn: "202403092",
      tn: "403092",
      idCard: "809432",
      name: "Alice",
      dob: "05/09/1990",
      age: 33,
      gender: "Female",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg"
    },
    {
      key: "4",
      hn: "202403093",
      tn: "403093",
      idCard: "809433",
      name: "Michael",
      dob: "12/12/1980",
      age: 42,
      gender: "Male",
      avatar: "https://randomuser.me/api/portraits/men/89.jpg"
    },
    {
      key: "5",
      hn: "202403094",
      tn: "403094",
      idCard: "809434",
      name: "Sarah",
      dob: "22/08/1985",
      age: 38,
      gender: "Female",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg"
    },
    {
      key: "6",
      hn: "202403095",
      tn: "403095",
      idCard: "809435",
      name: "David",
      dob: "03/03/1975",
      age: 48,
      gender: "Male",
      avatar: "https://randomuser.me/api/portraits/men/23.jpg"
    },
    {
      key: "7",
      hn: "202403096",
      tn: "403096",
      idCard: "809436",
      name: "Karen",
      dob: "17/07/1988",
      age: 35,
      gender: "Female",
      avatar: "https://randomuser.me/api/portraits/women/13.jpg"
    },
    {
      key: "8",
      hn: "202403097",
      tn: "403097",
      idCard: "809437",
      name: "Robert",
      dob: "11/11/1972",
      age: 51,
      gender: "Male",
      avatar: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
      key: "9",
      hn: "202403098",
      tn: "403098",
      idCard: "809438",
      name: "Susan",
      dob: "24/05/1992",
      age: 31,
      gender: "Female",
      avatar: "https://randomuser.me/api/portraits/women/53.jpg"
    },
    {
      key: "10",
      hn: "202403099",
      tn: "403099",
      idCard: "809439",
      name: "Daniel",
      dob: "30/01/1983",
      age: 40,
      gender: "Male",
      avatar: "https://randomuser.me/api/portraits/men/53.jpg"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const totalItems = patients.length;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = patients.slice(startIndex, endIndex);

  const onSearch = (value) => {
    console.log("Search value:", value);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <Row className={styles.headerRow} justify="space-between" align="middle">
        <Col>
          <h2>Patient List</h2>
        </Col>
        <Col>
          <Space className={styles.actionButtons}>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              style={{ background: "#A28F60" }}
            >
              Add New Patient
            </Button>
          </Space>
        </Col>
      </Row>
      <hr />

      {/* Search and Filter */}
      <Row className={styles.headerRow} justify="space-between" align="middle">
        <Col>
          <Search
            placeholder="Search"
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </Col>
        <Col>
          <Space className={styles.actionButtons}>
            <Button icon={<FilterOutlined />}>Filter</Button>
            <Button icon={<SortAscendingOutlined />}>Sort</Button>
          </Space>
        </Col>
      </Row>

      {/* Scrollable Table Container */}
      <div className={styles.tableContainer}>
        <Card className={styles.tableHeader}>
          <Row gutter={[16, 16]} align="middle">
            <Col xs={4}>HN</Col>
            <Col xs={4}>TN</Col>
            <Col xs={4}>ID Card</Col>
            <Col xs={4}>Patient Name</Col>
            <Col xs={3}>DOB</Col>
            <Col xs={2}>Age</Col>
            <Col xs={2}>Gender</Col>
            <Col xs={1}>Action</Col>
          </Row>
        </Card>

        {currentData.map((patient) => (
          <Card key={patient.key} className={styles.patientRow}>
            <Row gutter={[16, 16]} align="middle">
              <Col xs={4}>{patient.hn}</Col>
              <Col xs={4}>{patient.tn}</Col>
              <Col xs={4}>{patient.idCard}</Col>
              <Col xs={4} className={styles.avatarName}>
                <img
                  src={patient.avatar}
                  className={styles.avatar}
                  alt={patient.name}
                />
                {patient.name}
              </Col>
              <Col xs={3}>{patient.dob}</Col>
              <Col xs={2}>{patient.age}</Col>
              <Col xs={2}>{patient.gender}</Col>
              <Col xs={1} style={{ textAlign: "right" }}>
                <Button
                  type="text"
                  icon={<DeleteOutlined />}
                  danger
                  onClick={() => console.log("Delete", patient.hn)}
                />
              </Col>
            </Row>
          </Card>
        ))}
      </div>


      <Row
        justify="end"
        style={{
          marginTop: "10px",
          paddingRight: "30px",
          paddingBottom: "20px"
        }}
      >
        <Pagination
          current={currentPage}
          total={totalItems}
          pageSize={pageSize}
          onChange={setCurrentPage}
          showSizeChanger={false}
          itemRender={(page, type, originalElement) => {
            if (type === "prev") {
              return "Previous";
            }
            if (type === "next") {
              return "Next";
            }
            return originalElement;
          }}
        />
      </Row>
    </div>
  );
};

export default PatientContainer;
