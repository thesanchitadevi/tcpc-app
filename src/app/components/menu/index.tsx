import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import Iconify from "../iconify";
import Link from "next/link";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link href="/members/mentors">Advisors & Mentors</Link>,
  },
  {
    key: "2",
    label: <Link href="/members/executive">Executive Members</Link>,
  },
  // {
  //   key: "3",
  //   label: <Link href="/members/formar">Former Members</Link>,
  // },
];

const MenuItem: React.FC = () => (
  <Dropdown
    menu={{ items, selectable: true }}
    // trigger={["click"]}
  >
    <Link href="" onClick={(e) => e.preventDefault()}>
      <Space>
        Members
        <Iconify icon="iconamoon:arrow-down-2" />
      </Space>
    </Link>
  </Dropdown>
);

export default MenuItem;
