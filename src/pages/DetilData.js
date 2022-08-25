import React, { useState, useEffect} from 'react';
import { Layout, Typography, Avatar, Menu, Breadcrumb, Descriptions, Input, Button } from 'antd';
import { UserOutlined, DashboardOutlined, DatabaseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

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
  getItem('Dashboard', 'sub1', <DashboardOutlined />),
  getItem('Data', 'sub2', <DatabaseOutlined />, [
    getItem('Data Wisudawan', '1', <UserOutlined/>),
  ]),
];

// const row = [
//     {
//       title: 'Nama',
//       dataIndex: 'nama',
//       key: 'nama',
//       render: (text) => <a>{text}</a>,
//     },
//     {
//       title: 'Jenis Kelamin',
//       dataIndex: 'gender',
//       key: 'gender',
//     },
//     {
//       title: 'NIM',
//       dataIndex: 'nim',
//       key: 'nim',
//     },
//     {
//         title: 'Telepon',
//         dataIndex: 'telepon',
//         key: 'telepon',
//       },
//     { 
//       title: 'Fakultas',
//       dataIndex: 'fakultas',
//       key: 'fakultas',
//     },
//     {
//       title: 'Jurusan',
//       key: 'jurusan',
//       dataIndex: 'jurusan',
//     },
//     {
//       title: 'IPK',
//       dataIndex: 'ipk',
//       key: 'ipk',
//     },
//     {
//         title: 'Status',
//         dataIndex: 'status',
//         key: 'status',
//     },
//     {
//         title: 'Tahun Lulus',
//         dataIndex: 'tahun_lulus',
//         key: 'tahun_lulus',
//     },

//   ];
//   const data = [
//     {
//       key: '1',
//       nama: 'Sheva NaufalRifqi',
//       gender: 'Pria',
//       nim: '1810511080',
//       telepon: '085158624451',
//       fakultas: 'Ilmu Komputer',
//       jurusan: 'Informatika',
//       ipk: 3.79,
//       status: 'Lulus',
//       tahun_lulus: 2022,
//     }
//   ];



function DetilData() {
  const [collapsed, setCollapsed] = useState(false);
  const [users, setUsers] =useState([])

  useEffect(() =>{
    fetchData()
  }, [])

  const fetchData = async () => {
    await fetch('https://my-json-server.typicode.com/shevanaufal/users/users')
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((err) =>{
      console.log(err)
    })
  }
  console.log(users)

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
                <Link to="/"/>
              </Menu.Item>                
            </Menu>
          </Sider>
          <Layout>           
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Dashboard/Detil Data</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content" style={{background:"white", padding:24, minWeight: 580, minHeight: 720}}>
                <div>
                <Descriptions title="User Info" layout="vertical" bordered>
                    <Descriptions.Item label="Nama">Sheva NaufalRifqi</Descriptions.Item>
                    <Descriptions.Item label="NIM">1810511080</Descriptions.Item>
                    <Descriptions.Item label="Jenis Kelamin">Pria</Descriptions.Item>
                    <Descriptions.Item label="Fakultas">Ilmu Komputer</Descriptions.Item>
                    <Descriptions.Item label="Jurusan">Informatika</Descriptions.Item>
                    <Descriptions.Item label="Status">Lulus</Descriptions.Item>
                    <Descriptions.Item label="Tahun Lulus">2022</Descriptions.Item>
                </Descriptions>
                </div>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
          
      </Layout>
    </div>
  );
}
export default DetilData;
