import React from "react";
import AntTable from "../common/commonTable/AntTable";
import { Avatar, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

interface PatientData {
  key: string;
  hn: string;
  tn: string;
  idCard: string;
  name: string;
  dob: string;
  age: number;
  gender: string;
  avatar: string;
}

const PatientContainer = () => {
  const tableColumns: ColumnsType<PatientData> = [
    { title: "HN", dataIndex: "hn", key: "hn" },
    { title: "TN", dataIndex: "tn", key: "tn" },
    { title: "ID Card", dataIndex: "idCard", key: "idCard" },
    {
      title: "Patient Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Avatar src={record.avatar} />
          <span>{text}</span>
        </div>
      ),
    },
    { title: "DOB", dataIndex: "dob", key: "dob" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Gender", dataIndex: "gender", key: "gender" },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Button
          type="text"
          danger
          icon={<DeleteOutlined style={{ fontSize: 18 }} />}
        />
      ),
    },
  ];

  const tableData: PatientData[] = [
    {
      key: "1",
      hn: "202403090",
      tn: "403090",
      idCard: "8934030",
      name: "Elizabeth",
      dob: "29/03/1984",
      age: 36,
      gender: "Female",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      key: "2",
      hn: "202403091",
      tn: "403091",
      idCard: "8934031",
      name: "Elizabeth",
      dob: "29/03/1984",
      age: 36,
      gender: "Female",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      key: "3",
      hn: "202403091",
      tn: "403091",
      idCard: "8934031",
      name: "Elizabeth",
      dob: "29/03/1984",
      age: 36,
      gender: "Female",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      key: "4",
      hn: "202403091",
      tn: "403091",
      idCard: "8934031",
      name: "Elizabeth",
      dob: "29/03/1984",
      age: 36,
      gender: "Female",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      key: "5",
      hn: "202403091",
      tn: "403091",
      idCard: "8934031",
      name: "Elizabeth",
      dob: "29/03/1984",
      age: 36,
      gender: "Female",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  return (
    <AntTable
      columns={tableColumns}
      data={tableData}
      tableHeading="Patient List"
    />
  );
};

export default PatientContainer;
