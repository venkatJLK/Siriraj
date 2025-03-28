import React from "react";
import { Table, Button, Row, Col } from "antd";
import type { TablePaginationConfig, ColumnsType } from "antd/es/table";

interface AntTableProps<T> {
  columns: ColumnsType<T>;
  data: T[];
  tableHeading: string;
  buttonAction?: () => void;
}

const AntTable = <T extends object>({
  columns,
  data,
  tableHeading,
  buttonAction,
}: AntTableProps<T>) => {
  const paginationConfig: TablePaginationConfig = {
    pageSize: 4,
    showSizeChanger: true,
  };

  return (
    <div>
      <Row
        gutter={[0, 16]}
        align="middle"
        justify="space-between"
        style={{
          flexWrap: "wrap",
        }}
      >
        <Col
          xs={24}
          sm={12}
          style={{
            textAlign: "left",
            marginBottom: 8,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "18px",
            }}
          >
            {tableHeading}
          </h2>
        </Col>
        <Col
          xs={24}
          sm={12}
          style={{
            textAlign: "right",
            marginBottom: 8,
          }}
        >
          <Button
            type="primary"
            style={{
              width: "100%",
              maxWidth: 150,
              backgroundColor: "#A28F60",
              color: "#fff",
              borderColor: "#A28F60",
            }}
            onClick={buttonAction}
          >
            Add New
          </Button>
        </Col>
      </Row>

      <Table
        columns={columns}
        dataSource={data}
        pagination={paginationConfig}
        scroll={{ x: "max-content" }}
        style={{
          marginTop: 16,
          borderRadius: 8,
        }}
      />
    </div>
  );
};

export default AntTable;
