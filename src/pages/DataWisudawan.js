import React, { useState, useEffect } from 'react';
import { Layout, Typography, Avatar, Menu, Breadcrumb, Space, Table, Modal, Button, Form, Input, Select } from 'antd';
import { UserOutlined, DashboardOutlined, DatabaseOutlined, UserAddOutlined, EditOutlined, DeleteOutlined, FileSearchOutlined } from '@ant-design/icons';
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


function DataWisudawan() {
  const [collapsed, setCollapsed] = useState(false)
  const [users, setUsers] =useState([])
  const [isEdit, setIsEdit] =useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()
  const { Option } = Select
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  };
    
  
  useEffect(() =>{
    fetchData()
  }, [])

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }


  
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const fetchData = async () => {
    await fetch('https://my-json-server.typicode.com/shevanaufal/users/users')
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((err) =>{
      console.log(err)
    })
  }
  console.log(users)

  const onDelete = (record) =>{
    Modal.confirm({
      title: "Apakah kamu yakin ingin menghapus data ini?",
      okText:"Yes",
      okType:"danger",
      onOk: () =>{
        setUsers((pre) =>{
          return pre.filter((users) => users.id !== record.id)
        })
      }
    })
    
  }

  const onEditData = (record) => {
    setIsEdit(true)
  }
  
  // const onAdd = async () =>{
  //   await fetch('https://my-json-server.typicode.com/shevanaufal/users/users',{
  //     method: 'POST',
  //     body: JSON.stringify({
  //       handleOnAdd
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     }
  //   })
  //   .then((res) =>{
  //     if(res.status !==201){
  //       return
  //     }else{
  //       return res.json()
  //     }
  //   })
  //   .then((data) => {
  //     setUsers((users) => [...users,data])
  //   })
  //   .catch((err) =>{
  //     console.log(err)
  //   })
  // }

  // const handleOnAdd = (e) =>{
  //   e.preventDefault()
  //   onAdd(
  //     e.target.nama.value,
  //     e.target.nim.value,
  //     e.target.jenis_kelamin.value,
  //     e.target.telepon.value,
  //     e.target.fakultas.value,
  //     e.target.jurusan.value,
  //     e.target.ipk.value,
  //     e.target.status.value,
  //     e.target.tahun_lulus.value,
  //     )
  //     e.target.nama.value=""
  //     e.target.nim.value=""
  //     e.target.jenis_kelamin.value=""
  //     e.target.telepon.value=""
  //     e.target.fakultas.value=""
  //     e.target.jurusan.value=""
  //     e.target.ipk.value=""
  //     e.target.status.value=""
  //     e.target.tahun_lulus.value=""
  // }

  const onAddData = (nama, nim, jenis_kelamin, telepon, fakultas, jurusan, ipk, status, tahun_lulus) => {
    const newData = {
        nama:nama.values,
        nim:nim.values,
        jenis_kelamin:jenis_kelamin.values,
        telepon:telepon.values,
        fakultas:fakultas.values,
        jurusan:jurusan.values,
        ipk:ipk.values,
        status:status.values,
        tahun_lulus:tahun_lulus.values
    }
    setUsers((pre)=>{
      return [...pre, newData]
    })
  }

  

  const items = [
    getItem('Dashboard', 'sub4', <DashboardOutlined />),
    getItem('Data', 'sub5', <DatabaseOutlined />, [
      getItem('Data Wisudawan', '1', <UserOutlined/>),
    ]),
  ];
  
  const columns = [
      {
        title: 'Nama',
        dataIndex: 'nama',
        key: 'nama',
      },
      {
        title: 'Jenis Kelamin',
        dataIndex: 'jenis_kelamin',
        key: 'jenis_kelamin',
      },
      {
        title: 'NIM',
        dataIndex: 'nim',
        key: 'nim',
      },
      { 
        title: 'Fakultas',
        dataIndex: 'fakultas',
        key: 'fakultas',
      },
      {
        title: 'Jurusan',
        key: 'jurusan',
        dataIndex: 'jurusan',
      },
      {
        title: 'Action',
        key: 'action',
        render: (_,record) => (
          <Space size="middle">
              <Link to={`detil-data`}><Button type="primary" ><FileSearchOutlined/>Detil</Button></Link>
              <Link to={`edit-data`}><Button type="primary" style={{background: "yellow", borderColor: "yellow", color:"black"}} >
                <EditOutlined/>Edit</Button></Link>
              <a><Button type="primary" danger onClick={()=>{
                onDelete(record)
              }}><DeleteOutlined/>Delete</Button></a>
          </Space>
        ),
      },
    ];

  return (
    
    <div className="App">
      <Layout>
        <Header style={{padding: 15}}>
        <Avatar style={{float: "right"}} icon={<UserOutlined />} src='./assets/images/admin_img.png' />
          <Title level={3} style={{color:"white", textAlign:"left"}}>Data Wisudawan</Title>
        </Header>
        <Layout>
          <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
            <Menu defaultSelectedKeys={['1']}
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
              <Breadcrumb.Item>Dashboard/Data Wisudawan</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content" style={{background:"white", padding:24, minWeight: 580, minHeight: 720}}>
                <h1 style={{marginBottom:24, fontSize: 25}}>Tabel Data Wisudawan</h1>
                <Button type="primary" onClick={showModal} style={{background:"green", float:"right", marginBottom: 24}}><UserAddOutlined/>Tambahkan Data</Button>
                <Modal title="Tambah Data Wisudawan" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                  <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    onAddData={onAddData}
                    scrollToFirstError
                  >
                    <Form.Item
                      name="nama"
                      label="Nama"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Name!',
                          whitespace: true,
                        },
                      ]}
                    >
                      <Input/>
                    </Form.Item>

                    <Form.Item
                      name="nim"
                      label="NIM"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your NIM!',
                          whitespace: true,
                        },
                      ]}
                    >
                      <Input/>
                    </Form.Item>

                    <Form.Item
                      name="jenis_kelamin"
                      label="Jenis Kelamin"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your gender!',
                          whitespace: true,
                        },
                      ]}
                    >
                      <Select placeholder="Pilih Jenis Kelamin">
                        <Option value="Pria">Pria</Option>
                        <Option value="Wanita">Wanita</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name="telepon"
                      label="Telepon"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your telepon!',
                          whitespace: true,
                        },
                      ]}
                    >
                      <Input/>
                    </Form.Item>
                    <Form.Item
                      name="fakultas"
                      label="Fakultas"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your fakultas!',
                          whitespace: true,
                        },
                      ]}
                    >
                      <Input/>
                    </Form.Item>
                    <Form.Item
                      name="jurusan"
                      label="Jurusan"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Jurusan!',
                          whitespace: true,
                        },
                      ]}
                    >
                      <Input/>
                    </Form.Item>
                    <Form.Item
                      name="ipk"
                      label="IPK"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your IPK!',
                          whitespace: true,
                        },
                      ]}
                    >
                      <Input/>
                    </Form.Item>
                    <Form.Item
                      name="status"
                      label="Status"
                      rules={[
                        {
                          required: true,
                          message: 'Please input data Status!',
                          whitespace: true,
                        },
                      ]}
                    >
                      <Input/>
                    </Form.Item>
                    <Form.Item 
                      name="tahun_lulus"
                      label="Tahun Lulus"
                      rules={[
                        {
                          required: true,
                          message: 'Please input data tahun lulus!',
                          whitespace: true,
                        },
                      ]}
                    >
                      <Input/>
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                      <Button type="primary" htmlType="submit" onAddData={onAddData} onSubmit={values => setUsers(values)}>
                        Tambahkan
                      </Button>
                    </Form.Item>
                  </Form>
                </Modal>
                <Table columns={columns} dataSource={users} onDelete={onDelete} />
                
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
          
      </Layout>
    </div>
  );
}
export default DataWisudawan;
