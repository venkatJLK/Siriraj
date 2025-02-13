import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setPassword } from '../../store/slices/loginSlice';
import { RootState } from '../../store/store';

const LoginContainer: React.FC = () => {
    const dispatch = useDispatch();
    const { username, password } = useSelector((state: RootState) => state.login);

    const onFinish = (values: any) => {
        console.log('Success:', values);
        message.success(`Login successful! Username: ${values.username}`);

        dispatch(setUsername(values.username));
        dispatch(setPassword(values.password));
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
        message.error('Login failed! Please check your inputs.');
    };

    return (
        <div className="login-container">
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input value={username} onChange={(e) => dispatch(setUsername(e.target.value))} />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password value={password} onChange={(e) => dispatch(setPassword(e.target.value))} />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginContainer;
