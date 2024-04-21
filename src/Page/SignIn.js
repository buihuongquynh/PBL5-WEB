import React from 'react';
import { Link } from 'react-router-dom';
import {
	Layout,
	Button,
	Row,
	Col,
	Typography,
	Form,
	Input,
	Switch,
} from 'antd';
import { useDispatch } from 'react-redux';
import { userLogin } from '../state/actions';
import MainUser from '../components/layout/MainUser';
import './SignIn.css';
function onChange(checked) {
	console.log(`switch to ${checked}`);
}
const { Title } = Typography;
const { Content } = Layout;

export default function SignIn() {
	const dispatch = useDispatch();

	const onFinish = values => {
		console.log('Success:', values);
		dispatch(userLogin(values));
	};

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};
	return (
		<MainUser>
			<div className="pt--100">
				<Content className="signin">
					<Row gutter={[24, 0]} justify="space-around">
						<Col
							xs={{ span: 24, offset: 0 }}
							lg={{ span: 6, offset: 2 }}
							md={{ span: 12 }}
						>
							<Title className="mb-15">Đăng nhập</Title>

							<Form
								onFinish={onFinish}
								onFinishFailed={onFinishFailed}
								layout="vertical"
								className="row-col"
							>
								<Form.Item
									className="username"
									label="Email"
									name="email"
									rules={[
										{
											required: true,
											message: 'Please input your email!',
										},
									]}
								>
									<Input placeholder="Email" />
								</Form.Item>
								<Form.Item
									className="username"
									label="Mật khẩu"
									name="password"
									rules={[
										{
											required: true,
											message: 'Nhập mật khẩu',
										},
									]}
								>
									<Input placeholder="Mật khẩu" />
								</Form.Item>

								<Form.Item>
									<Button
										type="primary"
										htmlType="submit"
										style={{ width: '100%' }}
									>
										ĐĂNG NHẬP
									</Button>
								</Form.Item>
								<p className="font-semibold text-muted mb-10">
									Chưa có tài khoản?
									<Link to="/sign-up" className="text-dark font-bold">
										Đăng ký
									</Link>
								</p>
							</Form>
						</Col>
						{/* <Col
							className="sign-img"
							style={{ padding: 12 }}
							xs={{ span: 24 }}
							lg={{ span: 12 }}
							md={{ span: 12 }}
						>
							<img
								src="https://wscdn.vn/gioithieu-home-desktop.png?size=600x447&fomat=webp"
								alt=""
							/>
						</Col> */}
					</Row>
				</Content>
			</div>
		</MainUser>
	);
}
