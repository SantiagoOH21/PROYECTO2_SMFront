import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Form, Input, message } from "antd";
import { useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { update } from "../../redux/posts/postsSlice";
import { fetchProfile } from "../../redux/profileSlice";

const EditModal = ({ visible, setVisible }) => {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);

  const [form] = Form.useForm();
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (post) {
      form.setFieldsValue({
        name: post.name,
        text: post.text,
      });
      setImageFile(null);
    }
  }, [post, form]);

  const onFinish = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("text", values.text);

    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      await dispatch(update({ id: post._id, data: formData })).unwrap();
      await dispatch(fetchProfile());
      message.success("Post actualizado correctamente");
      setVisible(false);
    } catch (err) {
      message.error("Error al actualizar el post");
    }
  };

  return (
    <>
      <Modal
        title="Editar Post"
        open={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <Form onFinish={onFinish} form={form} layout="vertical">
          <Form.Item
            label="Nombre del Post"
            name="name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Descripción"
            name="text"
            rules={[{ required: true }]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item label="Cambiar Imagen">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Guardar Cambios
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditModal;
