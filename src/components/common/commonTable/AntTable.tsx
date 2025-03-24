import React from "react";
import { Table } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const AntTable: React.FC = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Jane Doe",
      age: 28,
      address: "Tokyo No. 1 Lake Park",
    },
  ];

  const paginationConfig: TablePaginationConfig = {
    pageSize: 4,
    showSizeChanger: true,
    // pageSizeOptions: ["2", "4", "6"],
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={paginationConfig}
      scroll={{ x: "max-content" }}
    />
  );
};

export default AntTable;
