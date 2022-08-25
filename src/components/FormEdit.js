import {
    Button,
    Form,
    Input,
    Select,
  } from 'antd';
  import React, { useState } from 'react';
  const { Option } = Select;
  
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
  
  const FormEdit = () => {
    const [form] = Form.useForm()
    const [users, setUsers] =useState([])
    const [editData, setData] = useState(null)
  
    const onFinish = (values) => {
      console.log('Received values of form: ', values)
    };

    const [componentDisabled, setComponentDisabled] = useState(true)

    const onFormLayoutChange = ({ disabled }) => {
        setComponentDisabled(disabled);
    };

    const editDataFetch = async () => {
      await fetch(`https://my-json-server.typicode.com/shevanaufal/users/users/`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) =>{
        console.log(err)
      })
    }
    console.log(users.id)
    

    return (
      <Form
        {...formItemLayout}
        form={form}
        name="edit"
        onFinish={onFinish}
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
          <Input value={editData?.name}/>
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
          <Input value={editData?.nim}/>
        </Form.Item>

        <Form.Item
          name="gender"
          label="Jenis Kelamin"
        >
          <Select placeholder="Pilih Jenis Kelamin" value={editData?.jenis_kelamin}>
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
          <Input value={editData?.telepon}/>
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
          <Input value={editData?.fakultas}/>
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
          <Input value={editData?.jurusan}/>
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
          <Input value={editData?.ipk}/>
        </Form.Item>
        <Form.Item onValuesChange={onFormLayoutChange}
        disabled={componentDisabled}
          name="status"
          label="Status"
        >
          <Input />
        </Form.Item>
        <Form.Item onValuesChange={onFormLayoutChange}
        disabled={componentDisabled}
          name="tahun_lulus"
          label="Tahun Lulus"
        >
          <Input value={editData?.tahun_lulus}/>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    );
  };
  
  export default FormEdit;
  