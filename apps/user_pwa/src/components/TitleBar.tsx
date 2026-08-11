import styled from "@emotion/styled";

interface TitleBarProps {
  title: string,
  description: string,
}

const TitleBox = styled.div`
    width: 100%;
    height: 15%;
    flex-shrink: 0;
    
    display: flex;
    align-items: center;
    justify-content: center;
`

const TitleInnerBox = styled.div`
    width: 80%;
    
    display: flex;
    justify-content: center;
    align-items: left;

    flex-direction: column;

    gap: 5px;
`

const TitleTitleText = styled.p`
    font-size: 25px;
    font-weight: bold;

    margin: 0;
`

const TitleDescriptionText = styled.p`
    font-size: 15px;
    font-weight: 400;
    color: #a1a1a1;

    margin: 0;
`

function TitleBar({
  title,
  description
}: TitleBarProps) {
  return (
    <TitleBox>
        <TitleInnerBox>
            <TitleTitleText>
                {title}
            </TitleTitleText>
            <TitleDescriptionText>
                {description}
            </TitleDescriptionText>
        </TitleInnerBox>
    </TitleBox>
  );
}

export default TitleBar;