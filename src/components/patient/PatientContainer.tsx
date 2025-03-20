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
} from "antd";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = (e) => setMatches(e.matches);

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

const headingRowStyle = {
  display: "flex",
  borderBottom: "1px solid #ccc",
  marginBottom: 10,
  fontWeight: "bold",
};

const headingCellStyle = {
  checkbox: { width: "5%", textAlign: "center" },
  patientName: { width: "14%", textAlign: "left" },
  hnTn: { width: "10%", textAlign: "center" },
  userId: { width: "10%", textAlign: "center" },
  gender: { width: "10%", textAlign: "center" },
  dob: { width: "10%", textAlign: "center" },
  age: { width: "5%", textAlign: "center" },
  phone: { width: "15%", textAlign: "center" },
  email: { width: "25%", textAlign: "center" },
};

const dataRowStyle = {
  display: "flex",
  borderRadius: 8,
  padding: 10,
  margin: "12px 0",
  alignItems: "center",
  cursor: "pointer",
  
};

const dataCellStyle = {
  checkbox: { width: "3%", textAlign: "center" },
  patientName: { width: "15%", textAlign: "center", display: "flex", alignItems: "center" },
  hnTn: { width: "10%", textAlign: "center" },
  userId: { width: "10%", textAlign: "center" },
  gender: { width: "10%", textAlign: "center" },
  dob: { width: "10%", textAlign: "center" },
  age: { width: "5%", textAlign: "center" },
  phone: { width: "15%", textAlign: "center" },
  email: { width: "25%", textAlign: "center" },
};

const PatientContainer = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterGender, setFilterGender] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc"); // Removed TypeScript type annotation

  // Store which rows are selected
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const data = [
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

  // Filter, search, and sort operations
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

  // Reset page to 0 whenever search, filter, or sort changes
  useEffect(() => {
    setPage(0);
  }, [searchQuery, filterGender, sortOrder]);

  // Pagination
  const paginatedData = filteredData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <a style={{ color: "#1890ff", fontWeight: "bold" }}>Previous</a>;
    }
    if (type === "next") {
      return <a style={{ color: "#1890ff", fontWeight: "bold" }}>Next</a>;
    }
    return originalElement;
  };

  // Properly formatted filter menu items for Ant Design v4
  const filterMenu = {
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

  const handleRowSelect = (key) => {
    setSelectedRowKeys((prevSelected) =>
      prevSelected.includes(key)
        ? prevSelected.filter((k) => k !== key)
        : [...prevSelected, key]
    );
  };

  // Fixed handleSelectAll to use Ant Design's checkbox onChange signature
  const handleSelectAll = (e) => {
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
    <div style={{ padding: 16, backgroundColor: "#EDF4FF"}}>
      <Card bordered={false} style={{ margin: "0 auto",maxHeight: "90vh"}}>
        {isMobile ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              marginBottom: 16,
            }}
          >
            <Typography.Title level={4} style={{ margin: 0 }}>
              Patients List
            </Typography.Title>
            <Button
              style={{
                backgroundColor: "#A28F60",
                color: "white",
                width: "100%",
              }}
              icon={<PlusOutlined />}
            >
              Add New Patient
            </Button>
            <Input
              placeholder="Search"
              allowClear
              prefix={<SearchOutlined />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: "100%" }}
            />
            <Dropdown menu={filterMenu} trigger={["click"]}>
              <Button icon={<FilterOutlined />} style={{ width: "100%" }}>
                Filter {filterGender !== "All" && `(${filterGender})`}
              </Button>
            </Dropdown>
            <Button
              icon={<SortAscendingOutlined />}
              onClick={() =>
                setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
              }
              style={{ width: "100%" }}
            >
              Sort ({sortOrder === "asc" ? "Asc" : "Desc"})
            </Button>
          </div>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: 16,
              }}
            >
              <Typography.Title level={4} style={{ margin: 0 }}>
                Patients List
              </Typography.Title>
              <Button
                style={{
                  backgroundColor: "#A28F60",
                  color: "white",
                  width: "150px",
                  height: "36px",
                }}
                icon={<PlusOutlined />}
              >
                Add New Patient
              </Button>
            </div>
            <hr />
            <Space
              style={{
                marginTop: 10,
                marginBottom: 16,
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                padding: 8,
              }}
            >
              <Input
                placeholder="Search"
                style={{ width: 250, background: "#F1F1F1" }}
                allowClear
                prefix={<SearchOutlined />}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
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
                    Filter {filterGender !== "All" && `(${filterGender})`}
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
                  Sort
                </Button>
              </Space>
            </Space>
          </>
        )}

        <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          <div style={{ minWidth: "1000px",maxHeight: "40vh", overflowY: "auto" }}>
            <div style={headingRowStyle}>
              <div style={headingCellStyle.checkbox}>
                <Checkbox
                  checked={isAllSelected}
                  indeterminate={isIndeterminate}
                  onChange={handleSelectAll}
                />
              </div>
              <div style={headingCellStyle.patientName}>Patient Name</div>
              <div style={headingCellStyle.hnTn}>HN/TN</div>
              <div style={headingCellStyle.userId}>User ID</div>
              <div style={headingCellStyle.gender}>Gender</div>
              <div style={headingCellStyle.dob}>DOB</div>
              <div style={headingCellStyle.age}>Age</div>
              <div style={headingCellStyle.phone}>Phone</div>
              <div style={headingCellStyle.email}>Email</div>
            </div>

            {paginatedData.length > 0 ? (
              paginatedData.map((item) => {
                const isSelected = selectedRowKeys.includes(item.key);
                return (
                  <div
                    key={item.key}
                    style={{
                      ...dataRowStyle,
                      backgroundColor: "#FAFAFA",
                    }}
                  >
                    <div style={dataCellStyle.checkbox}>
                      <Checkbox
                        checked={isSelected}
                        onChange={() => handleRowSelect(item.key)}
                      />
                    </div>
                    <div style={dataCellStyle.patientName}>
                      <Avatar
                        src={item.image}
                        style={{ marginRight: 10, marginLeft: 10 }}
                      />
                      {item.name}
                    </div>
                    <div style={dataCellStyle.hnTn}>{item.hn_tn}</div>
                    <div style={dataCellStyle.userId}>{item.user_id}</div>
                    <div style={dataCellStyle.gender}>{item.gender}</div>
                    <div style={dataCellStyle.dob}>{item.dob}</div>
                    <div style={dataCellStyle.age}>{item.age}</div>
                    <div style={dataCellStyle.phone}>{item.phone}</div>
                    <div style={dataCellStyle.email}>{item.email}</div>
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

        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 16 }}>
          <Pagination
            current={page + 1}
            pageSize={rowsPerPage}
            total={filteredData.length}
            onChange={(newPage) => setPage(newPage - 1)}
            showSizeChanger={false}
            itemRender={itemRender}
          />
        </div>
      </Card>
    </div>
  );
};

export default PatientContainer;
