import { Typography } from "antd";
import SideMenu from "../../SideMenu";
import { useEffect, useState } from "react";
import { getInventory } from "../../Api";
import { Space } from "antd";
import { Table } from "antd";

function AdminProperties() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <SideMenu />
      <Typography.Title className="inventory" level={4}>
        Inventory
      </Typography.Title>
      <Table
        className="properties"
        loading={loading}
        columns={[
          {
            title: "Name",
            dataIndex: "name",
          },
          {
            title: "description",
            dataIndex: "description",
          },
          {
            title: "Price",
            dataIndex: "price",
          },
          {
            title: "Category",
            dataIndex: "Category",
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
}

export default AdminProperties;
