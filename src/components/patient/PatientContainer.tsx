import React from "react";
import AntTable from "../common/commonTable/AntTable";
import { Avatar, Button,Grid  } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";
const { useBreakpoint } = Grid;
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
  const screens = useBreakpoint();
  const navigate = useNavigate();
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
           {!screens.xs && <Avatar src={record.avatar} />}
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
        "key": "1",
        "hn": "202403090",
        "tn": "403090",
        "idCard": "8934030",
        "name": "Elizabeth",
        "dob": "29/03/1984  ",
        "age": 36,
        "gender": "Female",
        "avatar": "https://randomuser.me/api/portraits/women/44.jpg"
      },
      {
        "key": "2",
        "hn": "202403091",
        "tn": "403091",
        "idCard": "8934031",
        "name": "Michael",
        "dob": "15/07/1990  ",
        "age": 32,
        "gender": "Male",
        "avatar": "https://randomuser.me/api/portraits/men/45.jpg"
      },
      {
        "key": "3",
        "hn": "202403092",
        "tn": "403092",
        "idCard": "8934032",
        "name": "Sophia",
        "dob": "03/11/1985",
        "age": 37,
        "gender": "Female",
        "avatar": "https://randomuser.me/api/portraits/women/46.jpg"
      },
      {
        "key": "4",
        "hn": "202403093",
        "tn": "403093",
        "idCard": "8934033",
        "name": "John",
        "dob": "22/01/1978",
        "age": 45,
        "gender": "Male",
        "avatar": "https://randomuser.me/api/portraits/men/47.jpg"
      },
      {
        "key": "5",
        "hn": "202403094",
        "tn": "403094",
        "idCard": "8934034",
        "name": "Emily",
        "dob": "08/09/1992",
        "age": 30,
        "gender": "Female",
        "avatar": "https://randomuser.me/api/portraits/women/48.jpg"
      },
      {
        "key": "6",
        "hn": "202403095",
        "tn": "403095",
        "idCard": "8934035",
        "name": "Robert",
        "dob": "12/12/1980",
        "age": 42,
        "gender": "Male",
        "avatar": "https://randomuser.me/api/portraits/men/49.jpg"
      },
      {
        "key": "7",
        "hn": "202403096",
        "tn": "403096",
        "idCard": "8934036",
        "name": "Olivia",
        "dob": "05/05/1995",
        "age": 28,
        "gender": "Female",
        "avatar": "https://randomuser.me/api/portraits/women/50.jpg"
      },
      {
        "key": "8",
        "hn": "202403097",
        "tn": "403097",
        "idCard": "8934037",
        "name": "William",
        "dob": "17/03/1987",
        "age": 36,
        "gender": "Male",
        "avatar": "https://randomuser.me/api/portraits/men/51.jpg"
      },
      {
        "key": "9",
        "hn": "202403098",
        "tn": "403098",
        "idCard": "8934038",
        "name": "Ava",
        "dob": "30/06/1991",
        "age": 31,
        "gender": "Female",
        "avatar": "https://randomuser.me/api/portraits/women/52.jpg"
      },
      {
        "key": "10",
        "hn": "202403099",
        "tn": "403099",
        "idCard": "8934039",
        "name": "James",
        "dob": "10/10/1983",
        "age": 39,
        "gender": "Male",
        "avatar": "https://randomuser.me/api/portraits/men/53.jpg"
      },
      {
        "key": "11",
        "hn": "202403100",
        "tn": "403100",
        "idCard": "8934040",
        "name": "Charlotte",
        "dob": "25/04/1988",
        "age": 35,
        "gender": "Female",
        "avatar": "https://randomuser.me/api/portraits/women/54.jpg"
      },
      {
        "key": "12",
        "hn": "202403101",
        "tn": "403101",
        "idCard": "8934041",
        "name": "Benjamin",
        "dob": "09/08/1979",
        "age": 43,
        "gender": "Male",
        "avatar": "https://randomuser.me/api/portraits/men/55.jpg"
      },
      {
        "key": "13",
        "hn": "202403102",
        "tn": "403102",
        "idCard": "8934042",
        "name": "Mia",
        "dob": "14/02/1993",
        "age": 30,
        "gender": "Female",
        "avatar": "https://randomuser.me/api/portraits/women/56.jpg"
      },
      {
        "key": "14",
        "hn": "202403103",
        "tn": "403103",
        "idCard": "8934043",
        "name": "Daniel",
        "dob": "11/11/1982",
        "age": 40,
        "gender": "Male",
        "avatar": "https://randomuser.me/api/portraits/men/57.jpg"
      },
      {
        "key": "15",
        "hn": "202403104",
        "tn": "403104",
        "idCard": "8934044",
        "name": "Amelia",
        "dob": "20/07/1994",
        "age": 29,
        "gender": "Female",
        "avatar": "https://randomuser.me/api/portraits/women/58.jpg"
      },
      {
        "key": "16",
        "hn": "202403105",
        "tn": "403105",
        "idCard": "8934045",
        "name": "Alexander",
        "dob": "03/03/1986",
        "age": 37,
        "gender": "Male",
        "avatar": "https://randomuser.me/api/portraits/men/59.jpg"
      },
      {
        "key": "17",
        "hn": "202403106",
        "tn": "403106",
        "idCard": "8934046",
        "name": "Harper",
        "dob": "28/12/1990",
        "age": 32,
        "gender": "Female",
        "avatar": "https://randomuser.me/api/portraits/women/60.jpg"
      },
      {
        "key": "18",
        "hn": "202403107",
        "tn": "403107",
        "idCard": "8934047",
        "name": "Jacob",
        "dob": "16/06/1981",
        "age": 41,
        "gender": "Male",
        "avatar": "https://randomuser.me/api/portraits/men/61.jpg"
      },
      {
        "key": "19",
        "hn": "202403108",
        "tn": "403108",
        "idCard": "8934048",
        "name": "Evelyn",
        "dob": "07/09/1989",
        "age": 33,
        "gender": "Female",
        "avatar": "https://randomuser.me/api/portraits/women/62.jpg"
      },
      {
        "key": "20",
        "hn": "202403109",
        "tn": "403109",
        "idCard": "8934049",
        "name": "Lucas",
        "dob": "01/01/1980",
        "age": 43,
        "gender": "Male",
        "avatar": "https://randomuser.me/api/portraits/men/63.jpg"
      }
    
    

  ];

  return (
    <AntTable
      columns={tableColumns}
      data={tableData}
      tableHeading="Patient List"
      onRowClick={(record: { key: any }) =>
        navigate(`/patient/${record.key}`, { state: record })
      }
    />
  );
};

export default PatientContainer;
