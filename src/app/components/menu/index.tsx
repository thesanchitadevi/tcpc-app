import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import Iconify from "../iconify";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <a href="/members/founders">Founders</a>,
  },
  {
    key: "2",
    label: <a href="/members/executive">Executive Members</a>,
  },
  // {
  //   key: "3",
  //   label: <a href="/members/formar">Former Members</a>,
  // },
];

const MenuItem: React.FC = () => (
  <Dropdown
    menu={{ items, selectable: true }}
    // trigger={["click"]}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Members
        <Iconify icon="iconamoon:arrow-down-2" />
      </Space>
    </a>
  </Dropdown>
);

export default MenuItem;
