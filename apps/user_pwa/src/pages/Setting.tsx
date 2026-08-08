import styled from "@emotion/styled"
import Navbar from "../components/Navbar"
import TitleBar from "../components/TitleBar"
import { GrayInnerBox, PageBox, ScrollBox } from "../styles/Box.style"
import Input from "../components/Input";
import { useState } from "react";
import { IoKeyOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { Button } from "@repo/ui";

const TitleText = styled.p`
  font-weight: bold;
  margin: 0;
  font-size: 16px;
  margin-bottom: 7%;
`;

const SettingBoxStyle = {
  marginBottom: '7%',
};

const inputTitleSize = "13px";

function SettingPage() {
  const [nowPassword, setNowPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [stuAEmail, setStuAEmail] = useState("");
  const [stuBEmail, setStuBEmail] = useState("");

  const handleChangePasswordClick = () => {
    console.log(nowPassword, newPassword);
  }

  const handleChangeEmailClick = () => {
    console.log(stuAEmail, stuBEmail);
  }

  return (
    <PageBox>
      <ScrollBox>
        <TitleBar title={"설정"} description={"이메일, 호실 비밀번호를 설정하세요."} />
        <GrayInnerBox style={SettingBoxStyle}>
          <TitleText>비밀번호 번경</TitleText>
          <Input 
            title={'현재 비밀번호'} 
            titleSize={inputTitleSize}
            placeholder={'현재 비밀번호'} 
            icon={<IoKeyOutline />} 
            width={'100%'} 
            isSecret={true}
            value={nowPassword}
            titleColor={"#383838"}
            onChange={setNowPassword}
            marginBottom={'5%'}
          />
          <Input 
            title={'새 비밀번호'}
            titleSize={inputTitleSize}
            placeholder={'새 비밀번호'} 
            icon={<IoKeyOutline />} 
            width={'100%'} 
            isSecret={true}
            value={newPassword}
            titleColor={"#383838"}
            onChange={setNewPassword}
            marginBottom={'7%'}
          />
          <Button $width='100%' $fontSize='15px' onClick={handleChangePasswordClick}>비밀번호 번경하기</Button>
        </GrayInnerBox>
        <GrayInnerBox style={SettingBoxStyle}>
          <TitleText>알림 이메일 등록</TitleText>
          <Input 
            title={'A 학생 이메일 등록'} 
            titleSize={inputTitleSize}
            placeholder={'A@example.com'} 
            icon={<MdOutlineEmail />} 
            width={'100%'} 
            isSecret={false}
            value={stuAEmail}
            titleColor={"#383838"}
            onChange={setStuAEmail}
            marginBottom={'5%'}
          />
          <Input 
            title={'B 학생 이메일 등록'}
            titleSize={inputTitleSize}
            placeholder={'B@example.com'} 
            icon={<MdOutlineEmail />} 
            width={'100%'} 
            isSecret={false}
            value={stuBEmail}
            titleColor={"#383838"}
            onChange={setStuBEmail}
            marginBottom={'7%'}
          />
          <Button $width='100%' $fontSize='15px' onClick={handleChangeEmailClick}>이메일 번경하기</Button>
        </GrayInnerBox>
      </ScrollBox>
      <Navbar selected={"setting"} />
    </PageBox>
  )
};

export default SettingPage;
