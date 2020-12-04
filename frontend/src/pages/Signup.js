import React from "react"
import { useHistory } from "react-router-dom"
import { signup } from "../services/auth"
import { Form, Input, Button, Col, Row, message, Typography } from "antd"

const { Text } = Typography

const { useForm } = Form

const Signup = () => {
  const [form] = useForm()
  const history = useHistory()

  async function onFinish(userInfo) {
    try {
      await signup(userInfo)
      history.push("/login")
    } catch (err) {
      // El mensaje que envia el server de error viene en la propiedad:
      // err.response.data.err.message
      // Pueden desplegar el coonsole dir del error para ver que mas informacion tienen por ahi
      console.dir(err.response.data.err.message)
      // Si usan Antd pueden utilizar esta funcion message que muestra diferentes tipos de mensajes
      // aca la documentacion: https://ant.design/components/message/#header
      message.error(err.response.data.err.message)
    }
  }

  return (
    <Row align='middle' style={{ height: "100%" }}>
      <Col span={12} offset={6}>
        <Text type='secondary'>
          Envien informacion erronea o registren un usuario que ya exista para
          ver el mesaje error.
        </Text>
        <br />
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
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default Signup
