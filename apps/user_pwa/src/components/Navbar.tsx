import { IoMdHome } from "react-icons/io";
import { SlGraph } from "react-icons/sl";
import { IoIosSettings } from "react-icons/io";

import styled from "@emotion/styled";
import { Link } from "react-router-dom";

interface NavbarProps {
  selected: "home" | "statistics" | "setting";
}

const SelectedColor = "#7C3AED";
const UnSelectedColor = "#9CA3AF";

const NavbarBox = styled.div`
    width: 100%;
    height: 10%;
    gap: 13%;

    margin-top: auto;

    border-top: 1px solid #bebebe;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const IconBox = styled(Link)<{ selected: boolean }>`
    text-decoration: none;
    height: 100%;
    width: 20%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7%;

    svg {
        color: ${({ selected }) => selected ? SelectedColor : UnSelectedColor};
        font-size: 110%;
    }

    p {
        color: ${({ selected }) => selected ? SelectedColor : UnSelectedColor};
        margin: 0;
        font-weight: 700;
    }
`

const NavBarItems = [
    {
        path: "home",
        title: "홈",
        icon: (<IoMdHome />)
    },
    {
        path: "statistics",
        title: "통계",
        icon: (<SlGraph />)
    },
    {
        path: "setting",
        title: "설정",
        icon: (<IoIosSettings />)
    },
];

function Navbar({
  selected,
}: NavbarProps) {
  return (
    <NavbarBox>
        {NavBarItems.map((item) => (
            <IconBox to={`/${item.path}`} selected={selected == item.path}>
                {item.icon}
                <p>{item.title}</p>
            </IconBox>
        ))}
        <IconBox to={"/home"} selected={selected == "home"}>
            <IoMdHome />
            <p>홈</p>
        </IconBox>
        <IconBox to={"/statistics"} selected={selected == "statistics"}>
            <SlGraph />
            <p>통계</p>
        </IconBox>
        <IconBox to={"/setting"} selected={selected == "setting"}>
            <IoIosSettings />
            <p>설정</p>
        </IconBox>
    </NavbarBox>
  );
}

export default Navbar;