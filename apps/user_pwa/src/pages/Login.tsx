import { useState } from 'react';
import Input from '../components/Input';
import { AutoCenterdBox, FullCenterdBox } from '../styles/Box'
import { TitleText, TitleDescriptionText } from '../styles/Text'
import { AiOutlineHome } from "react-icons/ai";
import { IoKeyOutline } from "react-icons/io5";

const LoginTitleBoxStyle = {
  gap: '20px',
  marginBottom: '10%'
};

const InputTitleBoxStyle = {
  gap: '20px'
};

const LoginDexTextStyle = {
  color: '#afafaf'
};

function LoginPage() {
  const [room, setRoom] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <FullCenterdBox>
        <AutoCenterdBox style={LoginTitleBoxStyle}>
          <TitleText>로그인</TitleText>
          <TitleDescriptionText style={LoginDexTextStyle}>호실 번호와 비밀번호를 입력해 주세요.</TitleDescriptionText>
        </AutoCenterdBox>
        <AutoCenterdBox style={InputTitleBoxStyle}>
          <Input 
            title={'호실 번호'} 
            placeholder={'예) 101'} 
            icon={<AiOutlineHome />} 
            width={'70%'} 
            isSecret={false} 
            type={'number'}
            value={room}
            setValue={setRoom}
          />
          <Input 
            title={'비밀번호'} 
            placeholder={'바말번호를 입력하세요.'} 
            icon={<IoKeyOutline />} 
            width={'70%'} 
            isSecret={true} 
            type={'number'}
            value={password}
            setValue={setPassword}
          />
        </AutoCenterdBox>
      </FullCenterdBox>
    </>
  )
}

export default LoginPage
