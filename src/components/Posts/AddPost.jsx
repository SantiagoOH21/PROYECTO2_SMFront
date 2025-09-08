import { useDispatch, useSelector } from "react-redux";
import { Button, Form, InputNumber, Select, Input } from "antd";
import { create } from "../../redux/posts/postsSlice";

const AddPost = () => {
  const dispatch = useDispatch();
  const { Option } = Select;

  const onFinish = (values) => {
    dispatch(create(values));
  };
  return (
    <>
      <h1>AddPost</h1>
      <Form onFinish={onFinish}>
        <Form.Item label="Post Name" name="name">
          <Input placeholder="Post name" />
        </Form.Item>
        <Form.Item label="Post Text" name="text">
          <Input placeholder="Post text" />
        </Form.Item>
        {/* <Form.Item name="GenreId" label="Select Genres">
          <Select mode="multiple" placeholder="Please select genre">
            <Option value="red">Red</Option>
            <Option value="green">Green</Option>
            <Option value="blue">Blue</Option>
          </Select>
        </Form.Item> */}

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
