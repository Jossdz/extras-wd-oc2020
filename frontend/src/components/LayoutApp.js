import { Layout, Menu } from "antd"
import { Link } from "react-router-dom"
import { useContextInfo } from "../hooks/context"

const { Header, Content, Footer } = Layout

const LayoutApp = ({ children }) => {
  const { user, logoutUser } = useContextInfo()
  return (
    <Layout className='layout'>
      <Header>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal'>
          <Menu.Item key='1'>
            <Link to='/'>Home</Link>
          </Menu.Item>
          {!user ? (
            <>
              <Menu.Item key='2'>
                <Link to='/signup'>Signup</Link>
              </Menu.Item>
              <Menu.Item key='4'>
                <Link to='/login'>Login</Link>
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item key='3'>
                <Link to='/profile'>Profile</Link>
              </Menu.Item>
              <Menu.Item onClick={logoutUser}>Logout</Menu.Item>
            </>
          )}
        </Menu>
      </Header>
      <Content
        style={{ padding: "50px 50px 0", minHeight: "calc(100vh - 130px)" }}
      >
        <div className='site-layout-content'>{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  )
}

export default LayoutApp
