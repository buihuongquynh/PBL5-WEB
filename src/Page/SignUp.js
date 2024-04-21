import React, { Component } from 'react';
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
import { userSignUp } from '../state/actions';
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
		dispatch(userSignUp(values));
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
							<Title className="mb-15">Sign Up</Title>
							<Title className="font-regular text-muted" level={5}>
								Enter your email and password to sign in
							</Title>
							<Form
								onFinish={onFinish}
								onFinishFailed={onFinishFailed}
								layout="vertical"
								className="row-col"
							>
								<Form.Item
									className="username"
									label="username"
									name="name"
									rules={[
										{
											required: true,
											message: 'Please input your name!',
										},
									]}
								>
									<Input placeholder="name" />
								</Form.Item>
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
									label="Password"
									name="password"
									rules={[
										{
											required: true,
											message: 'Please input your password!',
										},
									]}
								>
									<Input placeholder="Password" />
								</Form.Item>
								<Form.Item
									className="username"
									label="password confirmation"
									name="password_confirmation"
									rules={[
										{
											required: true,
											message: 'Please input your password confirmation!',
										},
									]}
								>
									<Input placeholder="password confirmation" />
								</Form.Item>

								<Form.Item>
									<Button
										type="primary"
										htmlType="submit"
										style={{ width: '100%' }}
									>
										SIGN UP
									</Button>
								</Form.Item>
								<p className="font-semibold text-muted">
									Don't have an account?{' '}
									<Link to="/sign-in" className="text-dark font-bold">
										Sign in
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
