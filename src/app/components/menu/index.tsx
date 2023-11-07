import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import Iconify from "../iconify";
import Link from "next/link";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link href="/members/founders">Founders</Link>,
  },
  {
    key: "2",
    label: <Link href="/members/executive">Executive Members</Link>,
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
