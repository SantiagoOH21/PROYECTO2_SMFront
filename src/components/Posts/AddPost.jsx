import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input } from "antd";
import { create } from "../../redux/posts/postsSlice";
import { useState, useRef } from "react";

const AddPost = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [imageFile, setImageFile] = useState(null);
  const fileInputRef = useRef(null);

  const onFinish = (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("text", values.text);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    dispatch(create(formData));

    form.resetFields();
    setImageFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  return (
    <div className="add-post-container">
      <h2>Crear nuevo post</h2>
      <Form onFinish={onFinish} layout="vertical" form={form}>
        <Form.Item
          label="Nombre del Post"
          name="name"
          rules={[{ required: true, message: "Escribe el nombre del post" }]}
        >
          <Input placeholder="Ej.: Amanecer en Cancún" />
        </Form.Item>

        <Form.Item
          label="Descripción"
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
            ref={fileInputRef}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Añadir Post
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddPost;
