import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col, Input, Space, Pagination } from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  SwapOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

interface AntTableProps<T> {
  columns: ColumnsType<T>;
  data: T[];
  tableHeading: string;
  buttonAction?: () => void;
  onRowClick?: (row: T) => void;
}

const AntTable = <T extends object>({
  columns,
  data,
  tableHeading,
  buttonAction,
  onRowClick,
}: AntTableProps<T>) => {
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const updatePageSize = () => {
    const screenHeight = window.innerHeight;

    if (screenHeight < 550) setPageSize(2);
    else if (screenHeight < 600) setPageSize(3);
    else if (screenHeight < 700) setPageSize(4);
    else if (screenHeight < 800) setPageSize(5);
    else if (screenHeight < 850) setPageSize(6);
    else if (screenHeight < 900) setPageSize(7);    
    else setPageSize(8);
  };

  useEffect(() => {
    updatePageSize();
    window.addEventListener("resize", updatePageSize);
    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = data.slice(startIndex, startIndex + pageSize);

  return (
    <React.Fragment>
      <Row
        justify="space-between"
        align="middle"
        style={{ marginBottom: 16, borderBottom: "1px solid #ddd" }}
      >
        <Col>
          <h2
            style={{
              margin: 0,
              fontSize: "18px",
              fontWeight: 500,
              color: "#333",
            }}
          >
            {tableHeading}
          </h2>
        </Col>
        <Col>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            style={{
              backgroundColor: "#A28F60",
              color: "#fff",
              marginBottom: 5,
              borderColor: "#A28F60",
            }}
            onClick={buttonAction}
          >
            Add New Patient
          </Button>
        </Col>
      </Row>

      <Row
        justify="space-between"
        align="middle"
        gutter={[16, 16]}
        style={{ marginBottom: 16 }}
      >
        <Col xs={24} sm={12} md={8}>
          <Input
            placeholder="Search"
            prefix={<SearchOutlined />}
            style={{
              borderRadius: 8,
              backgroundColor: "#f5f5f5",
              border: "none",
              padding: "8px 12px",
            }}
          />
        </Col>
        <Col xs={24} sm={12} md={8} style={{ textAlign: "right" }}>
          <Space>
            <Button
              icon={<FilterOutlined />}
              style={{ borderRadius: 8, border: "1px solid #ddd" }}
            >
              Filter
            </Button>
            <Button
              icon={<SwapOutlined />}
              style={{ borderRadius: 8, border: "1px solid #ddd" }}
            >
              Sort
            </Button>
          </Space>
        </Col>
      </Row>

      <div style={{ overflowX: "auto", overflowY: "clip" }}>
        <div style={{ minWidth: "600px" }}>
          <Row
            style={{
              backgroundColor: "#F6F6F6",
              padding: "12px 10px",
              fontWeight: 600,
              borderRadius: " 15px 15px 0 0",
              borderBottom: "1px solid #ddd",
              overflowX: "auto", 
              whiteSpace: "nowrap" 
            }}
          >
            {columns.map((col, index) => (
              <Col
                key={index}
                span={3}
                style={{
                  textAlign: "left",
                  fontSize: "12px",
                  fontWeight: 500,
                  borderRight: index !== columns.length - 1 ? "1px solid #6E6E6E33" : "none",
                  paddingLeft: index !== columns.length - 1 ? "0.5%" : "none",
                  color: "#333",
                }}
              >
                {col.title}
              </Col>
            ))}
          </Row>

          {paginatedData.map((row, rowIndex) => (
            <Card
              key={rowIndex}
              hoverable
              className="custom-card-row"
              onClick={() => onRowClick && onRowClick(row)}
              style={{
                marginBottom: 12,
                border: "none",
                borderRadius: 0,
                backgroundColor: "#FAFAFA",
              }}
              bodyStyle={{ padding: "12px 14px" }}
            >
              <Row gutter={[16, 16]} align="middle">
                {columns.map((col, colIndex) => (
                  <Col key={colIndex} span={3} style={{
                    textAlign: "left",
                    borderRight: colIndex !== columns.length - 1 ? "1px solid #6E6E6E33" : "none",
                    paddingLeft: colIndex !== columns.length - 1 ? "0.5%" : "none",  
                    color: "#6E6E6E",              
                  }}>
                    {col.render
                      ? col.render(row[col.dataIndex as keyof T], row)
                      : String(row[col.dataIndex as keyof T])}
                  </Col>
                ))}
              </Row>
            </Card>
          ))}
          <Row justify="center" style={{ marginTop: 13 }}>
            <Pagination
              current={currentPage}
              total={data.length}
              pageSize={pageSize}
              onChange={(page) => setCurrentPage(page)}
              showSizeChanger={false}
            />
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AntTable;
