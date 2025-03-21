import React, { useState, useEffect } from "react";
import {
  PlusOutlined,
  FilterOutlined,
  SortAscendingOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Dropdown,
  Input,
  Pagination,
  Space,
  Typography,
  Checkbox,
  Row,
  Col,
} from "antd";
import type { MenuProps } from "antd";
import styles from "./patientContainerStyle.module.css";
import { t } from "i18next";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

interface PatientData {
  key: string;
  name: string;
  image: string;
  hn_tn: string;
  user_id: string;
  gender: string;
  dob: string;
  age: string;
  phone: string;
  email: string;
}

const PatientContainer: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  // ------------------ STATE ------------------
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage] = useState<number>(8);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterGender, setFilterGender] = useState<"All" | "Female" | "Male">("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

  const data: PatientData[] = [
    {
      key: "1",
      name: "Barbara Taylor",
      image: "https://randomuser.me/api/portraits/women/53.jpg",
      hn_tn: "202108087",
      user_id: "108087",
      gender: "Female",
      dob: "1993-04-04",
      age: "30",
      phone: "+1 555-789-0123",
      email: "barbara.taylor@example.com",
    },
    {
      key: "2",
      name: "Elizabeth Polson",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      hn_tn: "202403090",
      user_id: "403090",
      gender: "Female",
      dob: "1992-12-29",
      age: "32",
      phone: "+91 12345 67890",
      email: "elizabeth@hotmail.com",
    },
    {
      key: "3",
      name: "James Anderson",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      hn_tn: "202105067",
      user_id: "105067",
      gender: "Male",
      dob: "1982-09-09",
      age: "41",
      phone: "+1 555-890-1234",
      email: "james.anderson@example.com",
    },
    {
      key: "4",
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      hn_tn: "202305045",
      user_id: "305045",
      gender: "Male",
      dob: "1985-07-12",
      age: "38",
      phone: "+1 555-234-5678",
      email: "john.doe@example.com",
    },
    {
      key: "5",
      name: "Linda Miller",
      image: "https://randomuser.me/api/portraits/women/51.jpg",
      hn_tn: "202004076",
      user_id: "004076",
      gender: "Female",
      dob: "1995-08-17",
      age: "28",
      phone: "+1 555-567-8901",
      email: "linda.miller@example.com",
    },
    {
      key: "6",
      name: "Mary Johnson",
      image: "https://randomuser.me/api/portraits/women/47.jpg",
      hn_tn: "202107076",
      user_id: "107076",
      gender: "Female",
      dob: "1990-03-15",
      age: "33",
      phone: "+1 555-345-6789",
      email: "mary.johnson@example.com",
    },
    {
      key: "7",
      name: "Michael Davis",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
      hn_tn: "202109098",
      user_id: "109098",
      gender: "Male",
      dob: "1988-11-11",
      age: "34",
      phone: "+1 555-456-7890",
      email: "michael.davis@example.com",
    },
    {
      key: "8",
      name: "Patricia Brown",
      image: "https://randomuser.me/api/portraits/women/49.jpg",
      hn_tn: "202306054",
      user_id: "306054",
      gender: "Female",
      dob: "1975-05-30",
      age: "48",
      phone: "+61 2 9374 4000",
      email: "patricia.brown@example.com",
    },
    {
      key: "9",
      name: "Robert Smith",
      image: "https://randomuser.me/api/portraits/men/48.jpg",
      hn_tn: "202208123",
      user_id: "208123",
      gender: "Male",
      dob: "1980-10-22",
      age: "42",
      phone: "+44 20 7946 0958",
      email: "robert.smith@example.com",
    },
    {
      key: "10",
      name: "William Wilson",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      hn_tn: "202302110",
      user_id: "302110",
      gender: "Male",
      dob: "1970-01-01",
      age: "53",
      phone: "+1 555-678-9012",
      email: "william.wilson@example.com",
    },
  ];

  const filteredData = data
    .filter((item) => {
      const query = searchQuery.toLowerCase();
      return (
        item.name.toLowerCase().includes(query) ||
        item.hn_tn.toLowerCase().includes(query) ||
        item.user_id.toLowerCase().includes(query) ||
        item.gender.toLowerCase().includes(query) ||
        item.dob.toLowerCase().includes(query) ||
        item.age.toString().toLowerCase().includes(query) ||
        item.phone.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query)
      );
    })
    .filter((item) => {
      if (filterGender === "All") return true;
      return item.gender === filterGender;
    })
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  useEffect(() => {
    setPage(0);
  }, [searchQuery, filterGender, sortOrder]);

  const paginatedData = filteredData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const itemRender = (_: any, type: string, originalElement: React.ReactNode) => {
    if (type === "prev") {
      return (
        <a style={{ color: "#1890ff", fontWeight: "bold" }}>
          {t("patient.previous")}
        </a>
      );
    }
    if (type === "next") {
      return (
        <a style={{ color: "#1890ff", fontWeight: "bold" }}>
          {t("patient.next")}
        </a>
      );
    }
    return originalElement;
  };

  const filterMenu: MenuProps = {
    items: [
      { key: "all", label: "All" },
      { key: "female", label: "Female" },
      { key: "male", label: "Male" },
    ],
    onClick: ({ key }) => {
      if (key === "all") setFilterGender("All");
      else if (key === "female") setFilterGender("Female");
      else if (key === "male") setFilterGender("Male");
    },
  };

  const handleRowSelect = (key: string) => {
    setSelectedRowKeys((prevSelected) =>
      prevSelected.includes(key)
        ? prevSelected.filter((k) => k !== key)
        : [...prevSelected, key]
    );
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allKeys = filteredData.map((item) => item.key);
      setSelectedRowKeys(allKeys);
    } else {
      setSelectedRowKeys([]);
    }
  };

  const allKeys = filteredData.map((item) => item.key);
  const isAllSelected =
    allKeys.length > 0 && allKeys.every((key) => selectedRowKeys.includes(key));
  const isIndeterminate =
    selectedRowKeys.length > 0 && selectedRowKeys.length < allKeys.length;
    
  return (
    <Card bordered={false} className={styles.patientCard}>
      {isMobile ? (
       
        <Row gutter={[0, 8]} style={{ marginBottom: 16 }}>
          <Col span={24}>
            <Typography.Title level={4} style={{ margin: 0 }}>
              {t("patient.patients_list")}
            </Typography.Title>
          </Col>
          <Col span={24}>
            <Button
              style={{
                backgroundColor: "#A28F60",
                color: "white",
                width: "100%",
              }}
              icon={<PlusOutlined />}
            >
              {t("patient.add_new_patient")}
            </Button>
          </Col>
          <Col span={24}>
            <Input
              placeholder={t("patient.search")}
              allowClear
              prefix={<SearchOutlined />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: "100%" }}
            />
          </Col>
          <Col span={24}>
            <Dropdown menu={filterMenu} trigger={["click"]}>
              <Button icon={<FilterOutlined />} style={{ width: "100%" }}>
                {t("patient.filter")}
                {filterGender !== "All" && `(${filterGender})`}
              </Button>
            </Dropdown>
          </Col>
          <Col span={24}>
            <Button
              icon={<SortAscendingOutlined />}
              onClick={() =>
                setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
              }
              style={{ width: "100%" }}
            >
              {t("patient.sort")} ({sortOrder === "asc" ? "Asc" : "Desc"})
            </Button>
          </Col>
        </Row>
      ) : (
        // Desktop Layout using Row and Col for header and controls
        <>
          <Row justify="space-between" align="middle" style={{ paddingBottom: 16 }}>
            <Col>
              <Typography.Title level={4} style={{ margin: 0 }}>
                {t("patient.patients_list")}
              </Typography.Title>
            </Col>
            <Col>
              <Button
                style={{
                  backgroundColor: "#A28F60",
                  color: "white",
                  width: "150px",
                  height: "36px",
                }}
                icon={<PlusOutlined />}
              >
                {t("patient.add_new_patient")}
              </Button>
            </Col>
          </Row>
          <hr />
          <Row
            justify="space-between"
            align="middle"
            style={{ marginTop: 10, marginBottom: 16, padding: 8 }}
          >
            <Col>
              <Input
                placeholder={t("patient.search")}
                style={{ width: 250, background: "#F1F1F1" }}
                allowClear
                prefix={<SearchOutlined />}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Col>
            <Col>
              <Space>
                <Dropdown menu={filterMenu} trigger={["click"]}>
                  <Button
                    icon={<FilterOutlined />}
                    style={{
                      background: "#F1F1F1",
                      borderRadius: "8px",
                      width: "106px",
                      height: "36px",
                    }}
                  >
                    {t("patient.filter")}
                    {filterGender !== "All" && `(${filterGender})`}
                  </Button>
                </Dropdown>
                <Button
                  style={{
                    background: "#F1F1F1",
                    borderRadius: "8px",
                    width: "83px",
                    height: "36px",
                  }}
                  icon={<SortAscendingOutlined />}
                  onClick={() =>
                    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
                  }
                >
                  {t("patient.sort")}
                </Button>
              </Space>
            </Col>
          </Row>
        </>
      )}

      <div className={styles.tableScrollX}>
        <div className={styles.tableScrollY}>
          <div className={styles.headingRow}>
            <div className={styles.headingCellCheckbox}>
              <Checkbox
                checked={isAllSelected}
                indeterminate={isIndeterminate}
                onChange={handleSelectAll}
              />
            </div>
            <div className={styles.headingCellPatientName}>
              {t("patient.patient_name")}
            </div>
            <div className={styles.headingCellHnTn}>{t("patient.hn_tn")}</div>
            <div className={styles.headingCellUserId}>{t("patient.user_id")}</div>
            <div className={styles.headingCellGender}>{t("patient.gender")}</div>
            <div className={styles.headingCellDob}>{t("patient.dob")}</div>
            <div className={styles.headingCellAge}>{t("patient.age")}</div>
            <div className={styles.headingCellPhone}>{t("patient.phone")}</div>
            <div className={styles.headingCellEmail}>{t("patient.email")}</div>
          </div>

          {paginatedData.length > 0 ? (
            paginatedData.map((item) => {
              const isSelected = selectedRowKeys.includes(item.key);
              return (
                <div key={item.key} className={styles.dataRow}>
                  <div className={styles.dataCellCheckbox}>
                    <Checkbox
                      checked={isSelected}
                      onChange={() => handleRowSelect(item.key)}
                    />
                  </div>
                  <div className={styles.dataCellPatientName}>
                    <Avatar
                      src={item.image}
                      style={{ marginRight: 10, marginLeft: 10 }}
                    />
                    {item.name}
                  </div>
                  <div className={styles.dataCellHnTn}>{item.hn_tn}</div>
                  <div className={styles.dataCellUserId}>{item.user_id}</div>
                  <div className={styles.dataCellGender}>{item.gender}</div>
                  <div className={styles.dataCellDob}>{item.dob}</div>
                  <div className={styles.dataCellAge}>{item.age}</div>
                  <div className={styles.dataCellPhone}>{item.phone}</div>
                  <div className={styles.dataCellEmail}>{item.email}</div>
                </div>
              );
            })
          ) : (
            <Card style={{ textAlign: "center", height: 65 }}>
              <Typography>No Data</Typography>
            </Card>
          )}
        </div>
      </div>
      <Pagination
        current={page + 1}
        style={{
          marginTop: 16,
          display: "flex",
          justifyContent: "flex-end",
        }}
        pageSize={rowsPerPage}
        total={filteredData.length}
        onChange={(newPage) => setPage(newPage - 1)}
        showSizeChanger={false}
        itemRender={itemRender}
      />
    </Card>
  );
};

export default PatientContainer;
