import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Form, InputNumber, Select, Input } from "antd";
import { useEffect } from "react";
import TextArea from "antd/es/input/TextArea";
import { update } from "../../redux/posts/postsSlice";

const EditModal = ({ visible, setVisible }) => {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);
  const { Option } = Select;

  const onFinish = (values) => {
    const postWithId = { ...values, id: post._id };
    dispatch(update(postWithId));
    setVisible(false);
  };

  const [form] = Form.useForm();

  useEffect(() => {
    const postToEdit = {
      ...post,
    };
    form.setFieldsValue(postToEdit);
  }, [post]);

  return (
    <>
      <Modal title="Edit Post" open={visible} footer={[]}>
        <Form onFinish={onFinish} form={form}>
          {/* <Form onFinish={onFinish}> */}
          <Form.Item label="Post Name" name="name">
            <Input placeholder="Post name" />
          </Form.Item>
          <Form.Item label="Post Content" name="text">
            <TextArea placeholder="Post content" />
          </Form.Item>
          {/* <Form.Item name="GenreId" label="Select Genres">
            <Select mode="multiple" placeholder="Please select genre">
              {selectOption}
            </Select>
          </Form.Item> */}
          {/* <Form.Item label="Price">
            <Form.Item name="price" noStyle>
              <InputNumber />
            </Form.Item>
            <span className="ant-form-text"> €</span>
          </Form.Item> */}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditModal;
