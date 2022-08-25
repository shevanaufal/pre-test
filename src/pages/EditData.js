import React, { useState } from 'react';
import { Layout, Typography, Avatar, Menu, Breadcrumb} from 'antd';
import { UserOutlined, DashboardOutlined, DatabaseOutlined, UserAddOutlined } from '@ant-design/icons';
import FormEdit from '../components/FormEdit';

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}


const items = [
  getItem('Dashboard', 'sub4', <DashboardOutlined />),
  getItem('Data', 'sub4', <DatabaseOutlined />, [
    getItem('Data Wisudawan', '1', <UserOutlined/>),
  ]),
];


function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="App">
      <Layout>
        <Header style={{padding: 15}}>
        <Avatar style={{float: "right"}} icon={<UserOutlined />} src='./assets/images/admin_img.png' />
          <Title level={3} style={{color:"white", textAlign:"left"}}>Data Wisudawan</Title>
        </Header>
        <Layout>
          <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
            <Menu defaultSelectedKeys={['2']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}>
              <Menu.Item key="Dashboard">
                Dashboard
              </Menu.Item>                
            </Menu>
          </Sider>
          <Layout>           
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Dashboard/Edit Data</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content" style={{background:"white", padding:24, minWeight: 580, minHeight: 720}}>
                <h1 style={{marginBottom:24, fontSize: 25}}>Edit Data Wisudawan</h1>
                <FormEdit/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
          
      </Layout>
    </div>
  );
}
export default App;
