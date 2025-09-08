import { useSelector } from "react-redux";
import { Button, Modal, Form, InputNumber, Select, Input } from "antd";

const EditModal = ({ visible, setVisible }) => {
  const { Option } = Select;
  // const { genresList } = useSelector((state) => state.genres);

  // const selectOption = genresList.map((genre) => {
  //   return (
  //     <Option key={genre.id} value={genre.id}>
  //       {genre.name}
  //     </Option>
  //   );
  // });

  const onFinish = (values) => {
    console.log(values);
    setVisible(false);
  };

  return (
    <>
      <h1>EditModal</h1>
      <Modal title="Edit Book" open={visible} footer={[]}>
        <Form onFinish={onFinish}>
          <Form.Item label="Book Name" name="name">
            <Input placeholder="Book name" />
          </Form.Item>
          {/* <Form.Item name="GenreId" label="Select Genres">
            <Select mode="multiple" placeholder="Please select genre">
              {selectOption}
            </Select>
          </Form.Item> */}
          <Form.Item label="Price">
            <Form.Item name="price" noStyle>
              <InputNumber />
            </Form.Item>
            <span className="ant-form-text"> €</span>
          </Form.Item>
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
