import React, { useState, useEffect } from 'react';
import { Layout, Typography, Avatar, Menu, Breadcrumb } from 'antd';
import { UserOutlined, DashboardOutlined, DatabaseOutlined, UserAddOutlined } from '@ant-design/icons';
import { Pie, Line, Column } from '@ant-design/plots';
import { Link } from 'react-router-dom';
import './Dashboard.css'

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

const PieChart = () => {
  const [dataPie, setDataPie] = useState([]);
    useEffect(() => {
      asyncFetch();
    }, []);

    const asyncFetch = () => {
      fetch('https://my-json-server.typicode.com/shevanaufal/users/users')
        .then((response) => response.json())
        .then((json) => setDataPie(json))
        .catch((error) => {
          console.log('fetch data failed', error);
        });
    };
    const data = [
      {
        type: 'Pria',
        value: 8,
      },
      {
        type: 'Wanita',
        value: 7,
      },
    ];
    const config = {
      appendPadding: 10,
      data,
      angleField: 'value',
      colorField: 'type',
      radius: 0.9,
      label: {
        
        type: 'inner',
        offset: '-30%',
        content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
        style: {
          fontSize: 14,
          textAlign: 'center',
        },
      },
      interactions: [
        {
          type: 'element-active',
        },
      ],
    };
    return <Pie {...config} />;
  };

  const DemoLine = () => {
  
    const data = [
      {
        year: '2020',
        value: 20,
      },
      {
        year: '2021',
        value: 5,
      },
      {
        year: '2022',
        value: 10,
      },
      
    ];
    const config = {
      data,
      xField: 'year',
      yField: 'value',
      label: {},
      point: {
        size: 5,
        shape: 'diamond',
        style: {
          fill: 'white',
          stroke: '#5B8FF9',
          lineWidth: 2,
        },
      },
      tooltip: {
        showMarkers: false,
      },
      state: {
        active: {
          style: {
            shadowBlur: 4,
            stroke: '#000',
            fill: 'red',
          },
        },
      },
      interactions: [
        {
          type: 'marker-active',
        },
      ],
    };
    return <Line {...config} />;
  };

  const DemoColumn = () => {
    const data = [
      {
        type: 'Informatika',
        sales: 11,
      },
      {
        type: 'Sistem Informasi',
        sales: 5,
      },
    ];
    const config = {
      data,
      xField: 'type',
      yField: 'sales',
      label: {
        position: 'middle',

        style: {
          fill: '#FFFFFF',
          opacity: 0.6,
        },
      },
      xAxis: {
        label: {
          autoHide: true,
          autoRotate: false,
        },
      },
      meta: {
        type: {
          alias: 'Jurusan Informatika',
        },
        sales: {
          alias: 'Jurusan Sistem Informasi',
        },
      },
    };
    return <Column {...config} />;
  };

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
                defaultOpenKeys={['dashboard']}
                mode="inline"
                items={[
                  {
                    label: "Dashboard",
                    key: "dashboard",
                    icon: <DashboardOutlined/>,
                    
                  },
                  {
                    label: "Data",
                    key: "data",
                    icon: <DatabaseOutlined/>,
                    children: [
                      {
                        label: "Data Wisudawan",
                        key:"data-wisudawan",
                        icon: <UserOutlined/>,
                      }
                    ]
                  }
                ]}
                // items={items}
                >
              <Menu.Item key="1">
                Dashboard
                <Link to="/"/>
              </Menu.Item>                
            </Menu>
          </Sider>
          <Layout>           
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content" style={{background:"white", padding:24, minWeight: 580, minHeight: 720}}>
                <Title level={3}>Wisudawan Berdasarkan Gender</Title>
                <PieChart style={{marginBottom: 30}}/>
                <Title level={3} style={{marginTop: 30}}>Wisudawan Berdasarkan Jumlah Kelulusan</Title>
                <DemoLine />
                <Title level={3} style={{marginTop: 50}}>Wisudawan Berdasarkan Jurusan</Title>
                <DemoColumn/>
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
