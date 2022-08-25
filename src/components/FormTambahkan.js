import {
    Button,
    Form,
    Input,
    Select,
  } from 'antd';
  import React, { useState, useEffect } from 'react';
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
  
  const FormTambahkan = () => {
    const [form] = Form.useForm();
  
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
    const [users, setUsers] =useState([]);
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

    const onAdd = async (nama, nim, jenis_kelamin, telepon, fakultas, jurusan, ipk, status, tahun_lulus) =>{
      await fetch('https://my-json-server.typicode.com/shevanaufal/users/users',{
        method: 'POST',
        body: JSON.stringify({
          nama:nama,
          nim:nim,
          jenis_kelamin:jenis_kelamin,
          telepon:telepon,
          fakultas:fakultas,
          jurusan:jurusan,
          ipk:ipk,
          status:status,
          tahun_lulus:tahun_lulus
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        }
      })
      .then((res) =>{
        if(res.status !==201){
          return
        }else{
          return res.json()
        }
      })
      .then((data) => {
        setUsers((users) => [...users,data])
      })
      .catch((err) =>{
        console.log(err)
      })
    }

    const handleOnAdd = (e) =>{
      e.preventDefault()
      onAdd(
        e.target.nama.value,
        e.target.nim.value,
        e.target.jenis_kelamin.value,
        e.target.telepon.value,
        e.target.fakultas.value,
        e.target.jurusan.value,
        e.target.ipk.value,
        e.target.status.value,
        e.target.tahun_lulus.value,
        )
        e.target.nama.value=""
        e.target.nim.value=""
        e.target.jenis_kelamin.value=""
        e.target.telepon.value=""
        e.target.fakultas.value=""
        e.target.jurusan.value=""
        e.target.ipk.value=""
        e.target.status.value=""
        e.target.tahun_lulus.value=""
    }

    const onAddData = (nama, nim, jenis_kelamin, telepon, fakultas, jurusan, ipk, status, tahun_lulus) => {
      const newData = {
        nama:nama,
          nim:nim,
          jenis_kelamin:jenis_kelamin,
          telepon:telepon,
          fakultas:fakultas,
          jurusan:jurusan,
          ipk:ipk,
          status:status,
          tahun_lulus:tahun_lulus
      }
      setUsers((pre)=>{
        return [...pre, newData]
      })
    }

    return (
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        onAdd={onAdd}
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
          <Input />
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
          <Input />
        </Form.Item>

        <Form.Item
          name="gender"
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
          <Input />
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
          <Input />
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
          <Input />
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
          <Input />
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
          <Input />
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
          <Input />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" onClick={onAddData} onAdd={onAdd} onSubmit={handleOnAdd} onFinish={onFinish}>
            Tambahkan
          </Button>
        </Form.Item>
      </Form>
    );
  };
  
  export default FormTambahkan;
  