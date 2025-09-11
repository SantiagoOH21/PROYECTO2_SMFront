import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Select, Input } from "antd";
import { create } from "../../redux/posts/postsSlice";
import { useState } from "react";

const AddPost = () => {
  const dispatch = useDispatch();
  const [imageFile, setImageFile] = useState(null);
  const { Option } = Select;

  const onFinish = (values) => {
    dispatch(create(values));
  };
  return (
    <>
      <h1>AddPost</h1>
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item
          label="Nombre del Post"
          name="name"
          rules={[{ required: true, message: "Escribe el nombre del post" }]}
        >
          <Input placeholder="Ej.: Amanecer en Cancún" />
        </Form.Item>

        <Form.Item
          label="Descrpción"
          name="text"
          rules={[{ required: true, message: "Escribe el contenido del post" }]}
        >
          <Input.TextArea placeholder="Escribe aquí lo que desees" rows={4} />
        </Form.Item>

        <Form.Item label="Imagen del post" name="image">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddPost;
