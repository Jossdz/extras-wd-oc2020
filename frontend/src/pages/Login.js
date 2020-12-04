import React from "react"
import { Form, Input, Button, Col, Row, message } from "antd"
import { useContextInfo } from "../hooks/context"
import { login, profile } from "../services/auth"
import { useHistory } from "react-router-dom"

const { useForm } = Form

const Login = () => {
  const [form] = useForm()
  const history = useHistory()
  const { loginUser } = useContextInfo()

  async function onFinish(userInfo) {
    try {
      await login(userInfo)
      const {
        data: { user }
      } = await profile()
      loginUser(user)
      history.push("/")
    } catch (err) {
      message.error("Error with email or password")
    }
  }

  return (
    <Row align='middle' style={{ height: "100%" }}>
      <Col span={12} offset={6}>
        <Form
          layout='vertical'
          name='basic'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            label='Email'
            name='email'
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default Login
