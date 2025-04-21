import { React, useState } from "react";
import { Row, Col, Form, Input, Select, Button, Card, Image, DatePicker, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import styles from "./Patient.module.css";
import { useNavigate } from "react-router-dom";
import Images from "../common/image/Images";

const { Option } = Select;


const AddPatientForm = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [modal, contextHolder] = Modal.useModal();
    const [selectedValues, setSelectedValues] = useState([]);
    const [selectedBloodGroup, setSelectedBloodGroup] = useState(null);

    const confirm = () => {
        modal.confirm({
            title: "ARE YOU SURE YOU WANT TO CANCEL?",
            icon: <ExclamationCircleOutlined />,
            // content: "",
            okText: "YES",
            cancelText: "NO",
            okButtonProps: {
                className: styles.saveButton,
            },
            cancelButtonProps: {
                className: styles.cancelButton,
            },
            onOk() {
                navigate("/patients");
            },
        });
    };

    const handleclick = () => {
        const values = form.getFieldsValue();
        const isFilled = (val) => {
            if (typeof val === "string") {
                return val.trim() !== "";
            }
            if (Array.isArray(val)) {
                return val.length > 0;
            }
            return val !== undefined && val !== null;
        };
        const anyFieldFilled = Object.values(values).some(isFilled);
        if (!anyFieldFilled) {
            navigate("/patients");
        } else {
            confirm();
        }
    };

    const diagnosisOptions = [
        "Hypertension",
        "Diabetes",
        "Dyslipidemia",
        "Heart Disease",
        "Cancer",
        "Stroke",
        "Others",
    ];

    return (
        <>
            <Form layout="vertical" form={form} className={styles.form}>
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={20} lg={18}>
                        <Card bordered={false} className={styles.leftCard} title="Add Patient">
                            <h3 className={styles.sectionHeading}>Enter Patient Details</h3>
                            <Row gutter={16} align="middle">
                                <Col xs={24} sm={6}>
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                            preview={false}
                                            className={styles.responsiveImage}
                                            style={{ borderRadius: "8px" }}
                                        />
                                    </div>
                                    <Button
                                        type="dashed"
                                        icon={<>
                                            <img src={Images.crop} alt="" /></>}
                                        className={styles.cropButton}

                                    >
                                        Crop
                                    </Button>
                                </Col>
                                <Col xs={24} sm={18}>
                                    <Row gutter={16}>
                                        <Col xs={24} sm={12}>
                                            <Form.Item
                                                name="FullName"
                                                rules={[{ required: true, message: "Please enter Full Name" }]}
                                            >
                                                <Input
                                                    placeholder="Full Name"
                                                    prefix={<>
                                                        <img className={styles.formlogo} src={Images.user} alt="" /></>}
                                                    className={styles.inputField}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={12}>
                                            <Form.Item
                                                name="MiddleName"
                                                rules={[{ required: true, message: "Please enter Middle Name" }]}
                                            >
                                                <Input
                                                    placeholder="Middle Name"
                                                    prefix={<>
                                                        <img className={styles.formlogo} src={Images.user} alt="" /></>}
                                                    className={styles.inputField}
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row gutter={16}>
                                        <Col xs={24} sm={12}>
                                            <Form.Item
                                                name="Surname"
                                                rules={[{ required: true, message: "Please enter Surname" }]}
                                            >
                                                <Input
                                                    placeholder="Surname"
                                                    prefix={<>
                                                        <img className={styles.formlogo} src={Images.user} alt="" /></>}
                                                    className={styles.inputField}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={12}>
                                            <Form.Item
                                                name="Gender"
                                                rules={[{ required: true, message: "Please select Gender" }]}
                                            >
                                                <Select
                                                    prefix={<>
                                                        <img className={styles.formlogo} src={Images.gender} alt="" /></>}
                                                    placeholder="Gender"
                                                    className={styles.selectField}
                                                >
                                                    {["Male", "Female", "Other"].map((opt) => (
                                                        <Option key={opt} value={opt.toLowerCase()}>
                                                            {opt}
                                                        </Option>
                                                    ))}
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row gutter={16}>
                                        <Col xs={24} sm={12}>
                                            <Form.Item
                                                name="dob"

                                                rules={[{ required: true, message: "Please select DOB" }]}
                                            >
                                                <DatePicker
                                                    suffixIcon={null}
                                                    prefix={<>
                                                        <img className={styles.formlogo} src={Images.dob} alt="" /></>}
                                                    placeholder="Date of Birth"
                                                    className={styles.datePicker}
                                                    style={{ width: "100%" }}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={12}>
                                            <Form.Item
                                                name="status"
                                                rules={[{ required: true, message: "Please select Marital Status" }]}
                                            >
                                                <Select
                                                    prefix={<>
                                                        <img className={styles.formlogo} src={Images.marital} alt="" /></>}
                                                    placeholder="Marital Status"
                                                    className={styles.selectField}
                                                >
                                                    {["Single", "Married", "Other"].map((opt) => (
                                                        <Option key={opt} value={opt.toLowerCase()}>
                                                            {opt}
                                                        </Option>
                                                    ))}
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row gutter={16}>
                                        <Col xs={24} sm={12}>
                                            <Form.Item
                                                name="ThaiId"
                                                rules={[{ required: true, message: "Please enter Thai ID" }]}
                                            >
                                                <Input
                                                    placeholder="Thai ID"
                                                    prefix={<>
                                                        <img className={styles.formlogo} src={Images.thai} alt="" /></>}
                                                    className={styles.inputField}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={12}>
                                            <Form.Item
                                                name="InnateBodyElement"
                                                rules={[{ required: true, message: "Please enter Innate Body Element" }]}
                                            >
                                                <Input
                                                    placeholder="Innate Body Element"
                                                    prefix={<>
                                                        <img className={styles.formlogo} src={Images.bie} alt="" /></>}
                                                    className={styles.inputField}
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                </Col>
                            </Row>

                            <h3 className={styles.sectionHeading}>Contact Information</h3>
                            <Row gutter={16}>
                                <Col xs={24} sm={8}>
                                    <Form.Item
                                        name="mobile"
                                        rules={[
                                            { required: true, message: "Please enter mobile number" },
                                            { pattern: /^[0-9]{10}$/, message: "Mobile number must be 10 digits" },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Mobile"
                                            prefix={<>
                                                <img className={styles.formlogo} src={Images.mobile} alt="" /></>}
                                            className={styles.inputField}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={8}>
                                    <Form.Item
                                        name="residentialNumber"
                                        rules={[
                                            { required: true, message: "Please enter residential number" },
                                            { pattern: /^[0-9]{8,12}$/, message: "Enter a valid residential number" },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Residential Number"
                                            prefix={<>
                                                <img className={styles.formlogo} src={Images.phone} alt="" /></>}
                                            className={styles.inputField}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={8}>
                                    <Form.Item
                                        name="email"
                                        rules={[
                                            { required: true, message: "Please enter email address" },
                                            { type: "email", message: "Please enter a valid email address" },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Email ID"
                                            prefix={<>
                                                <img className={styles.formlogo} src={Images.gmail} alt="" /></>}
                                            className={styles.inputField}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>


                            <h3 className={styles.sectionHeading}>Address</h3>
                            <Row gutter={16}>
                                <Col xs={24}>
                                    <Form.Item
                                        name="addressLine1"
                                        rules={[
                                            { required: true, message: "Please enter address" },
                                            { max: 100, message: "Address cannot exceed 100 characters" },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Address"
                                            prefix={<>
                                                <img className={styles.formlogo} src={Images.map} alt="" /></>}
                                            className={styles.inputField}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={8}>
                                    <Form.Item
                                        name="unitNumber"
                                        rules={[
                                            { required: true, message: "Please enter unit number" },
                                            { pattern: /^[\w-]{1,10}$/, message: "Enter a valid unit number" },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Unit Number (Optional)"
                                            prefix={<>
                                                <img className={styles.formlogo} src={Images.maps} alt="" /></>}
                                            className={styles.inputField}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={8}>
                                    <Form.Item
                                        name="postalCode"
                                        rules={[
                                            { required: true, message: "Please enter postal code" },
                                            { pattern: /^[0-9]{5,10}$/, message: "Enter a valid postal code" },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Postal Code"
                                            prefix={<>
                                                <img className={styles.formlogo} src={Images.gps} alt="" /></>}
                                            className={styles.inputField}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={8}>
                                    <Form.Item
                                        name="country"
                                        rules={[
                                            { required: true, message: "Please enter country" },
                                            { max: 50, message: "Country name too long" },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Country"
                                            prefix={<>
                                                <img className={styles.formlogo} src={Images.maps} alt="" /></>}
                                            className={styles.inputField}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>

                        </Card>
                    </Col>

                    <Col xs={24} sm={24} md={4} lg={6}>
                        <Card
                            bordered={false}
                            className={styles.rightCard}
                            title="Medical Information"
                            style={{ minHeight: "100%" }}
                        >

                            <Form.Item
                                name="diagnosis"
                                rules={[{ required: true, message: "Please select at least one diagnosis" }]}
                            >
                                <Select
                                    mode="multiple"
                                    placeholder="Select Diagnosis"
                                    allowClear
                                    optionLabelProp="label"
                                    menuItemSelectedIcon={false}
                                    value={selectedValues}
                                    style={{
                                        height: `${45 + selectedValues.length * 7}px`,
                                        fontSize: '14px',
                                    }}
                                    onChange={(values) => setSelectedValues(values)}
                                >
                                    {diagnosisOptions.map((d) => {
                                        const value = d;
                                        const isSelected = selectedValues.includes(value);
                                        return (
                                            <Option key={d} value={value} label={d}>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <span>{value}</span>
                                                    <div
                                                        style={{
                                                            width: 16,
                                                            height: 16,
                                                            border: `2px solid ${isSelected ? "#172947" : "#ccc"}`,
                                                            backgroundColor: isSelected ? "#172947" : "transparent",
                                                            borderRadius: 4,
                                                            marginLeft: 8,
                                                        }}
                                                    />
                                                </div>
                                            </Option>
                                        );
                                    })}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="bloodGroup"
                                rules={[{ required: true, message: "Please select a blood group" }]}
                            >
                                <Select
                                    placeholder="Select Blood Group"
                                    className={styles.selectField}
                                    allowClear
                                    value={selectedBloodGroup}
                                    onChange={(value) => setSelectedBloodGroup(value)}
                                    optionLabelProp="label"
                                >
                                    {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((b) => {
                                        const isSelected = selectedBloodGroup === b;
                                        return (
                                            <Option key={b} value={b}>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <span>{b}</span>
                                                    <div
                                                        style={{
                                                            width: 16,
                                                            height: 16,
                                                            border: `2px solid ${isSelected ? "#172947" : "#ccc"}`,
                                                            backgroundColor: isSelected ? "#172947" : "transparent",
                                                            borderRadius: 4,
                                                            marginLeft: 8,
                                                        }}
                                                    />
                                                </div>
                                            </Option>
                                        );
                                    })}
                                </Select>
                            </Form.Item>


                            <h3 className={styles.sectionHeading}>Medical Note</h3>
                            <Form.Item name="medicalNote">
                                <Card
                                    bordered={false}
                                    headStyle={{ backgroundColor: "#172947", color: "#fff" }}
                                    title="Title : Report notes"
                                    className={styles.noteCard}
                                >
                                    Type Something
                                </Card>
                            </Form.Item>

                            <Row className={styles.buttonRow} gutter={[8, 8]}>
                                <Col>
                                    <Button type="text" onClick={handleclick} className={styles.cancelButton}>
                                        Cancel
                                    </Button>
                                    {contextHolder}
                                </Col>
                                <Col>
                                    <Button type="primary" htmlType="submit" className={styles.saveButton}>
                                        Save
                                    </Button>
                                </Col>
                            </Row>
                        </Card>

                    </Col>
                </Row>
            </Form>
        </>
    );
};

export default AddPatientForm;

