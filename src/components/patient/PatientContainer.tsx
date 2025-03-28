import React from "react";
import { useTranslation } from "react-i18next";
import AntTable from "../common/commonTable/AntTable";
import { ColumnsType } from "antd/es/table";

const PatientContainer = () => {
  const { t } = useTranslation();

  interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
  }

  const tableColumns: ColumnsType<DataType> = [
    { title: t("Name"), dataIndex: "name", key: "name" },
    { title: t("Age"), dataIndex: "age", key: "age" },
    { title: t("Address"), dataIndex: "address", key: "address" },
  ];

  const tableData: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    { key: "2", name: "Jim Green", age: 42, address: "London No. 1 Lake Park" },
    { key: "3", name: "Joe Black", age: 32, address: "Sidney No. 1 Lake Park" },
    { key: "4", name: "Jane Doe", age: 28, address: "Tokyo No. 1 Lake Park" },
  ];

  const handleAddNew = () => {
    console.log("Add New button clicked!");
  };

  return (
    <React.Fragment>
      <AntTable
        columns={tableColumns}
        data={tableData}
        tableHeading={t("patient.patientList")}
        buttonAction={handleAddNew}
      />
    </React.Fragment>
  );
};

export default PatientContainer;
