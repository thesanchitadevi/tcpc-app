import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <a href="/members/founders">Founders</a>,
  },
  {
    key: "2",
    label: <a href="/members/executive">Executive Members</a>,
  },
  {
    key: "3",
    label: <a href="/members/formar">Former Members</a>,
  },
];

const MenuItem: React.FC = () => (
  <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Members
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default MenuItem;
