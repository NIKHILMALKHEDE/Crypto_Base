import {
  CropSquare,
  InsertChartOutlined,
  Timeline,
  MonetizationOnOutlined,
  Storage,
  DonutLargeOutlined,
  SignalCellularAlt,
  Share,
  AssignmentOutlined,
  KeyboardBackspaceOutlined,
  DeviceHubOutlined,
  LanguageOutlined,
  Lens,
  Brightness2,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

function Section() {
  return (
    <Container>
      <UserName>
        <IconHolder>
          <NameIcon>N</NameIcon>
          <Name>Name</Name>
        </IconHolder>
        <KeyboardBackspaceOutlined
          style={{ fontSize: "30px", color: "white" }}
        />
      </UserName>
      <Sections>
        <Section1>
          <Icon>
            <CropSquare />
          </Icon>
          <Title>Home</Title>
        </Section1>
        <Section1>
          <Icon>
            <InsertChartOutlined />
          </Icon>
          <Title>Section 1</Title>
        </Section1>
        <Section1>
          <Icon>
            <DeviceHubOutlined />
          </Icon>
          <Title>Section 2</Title>
        </Section1>
        <Section1>
          <Icon>
            <Timeline />
          </Icon>
          <Title>Section 3</Title>
        </Section1>
        <Section1>
          <Icon>
            <MonetizationOnOutlined />
          </Icon>
          <Title>Section 4</Title>
        </Section1>
        <Section1>
          <Icon>
            <Storage />
          </Icon>
          <Title>Section 5</Title>
        </Section1>
        <Section1>
          <Icon>
            <DonutLargeOutlined />
          </Icon>
          <Title>Section 6</Title>
        </Section1>
        <Section1>
          <Icon>
            <SignalCellularAlt />
          </Icon>
          <Title>Section 7</Title>
        </Section1>
        <Section1>
          <Icon>
            <Share />
          </Icon>
          <Title>Section 8</Title>
        </Section1>
        <Section1>
          <Icon>
            <AssignmentOutlined />
          </Icon>
          <Title>Documentation</Title>
        </Section1>
      </Sections>

      <Bottom>
        <Profile>
          <Prof position="left">
            <NameIcon class="bottom"> N </NameIcon> $0.90
          </Prof>
          <Prof position="right"> Buy $XYZ</Prof>
        </Profile>
        <BottomIcon>
          <LanguageOutlined style={{ color: "#808191", cursor: "pointer" }} />
          <Mode>
            <Brightness2
              style={{ fontSize: "20px", color: "#808191", marginRight: "7px" }}
            />
            <Lens style={{ fontSize: "20px", color: "#3772FF" }} />
          </Mode>
        </BottomIcon>
      </Bottom>
    </Container>
  );
}

export default Section;

const Container = styled.div`
  height: 95vh;
  width: 15vw;
  background-color: black;
  padding: 40px 25px;
  border-right: 2px solid #242731;
`;
const UserName = styled.div`
  width: 13vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const NameIcon = styled.div`
  width: 30px;
  width: ${(props) => props.class === "bottom" && "18px"};
  height: 30px;
  height: ${(props) => props.class === "bottom" && "18px"};
  font-size: ${(props) => props.class === "bottom" && "10px"};
  background-color: #3772ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  margin-right: 5px;
  margin-top: 5px;
  margin-top: ${(props) => props.class === "bottom" && "3px"};
`;
const IconHolder = styled.div`
  display: flex;
`;
const Name = styled.h1`
  display: flex;
  font-weight: 500;
  font-size: 30px;
  margin-left: 5px;
  color: white;
`;
const Sections = styled.div`
  display: flex;
  flex-direction: column;
`;
const Section1 = styled.div`
  display: flex;
  width: 90%;
  height: 15px;
  padding: 15px 0px;
  padding-timeline: 15px;
  border-radius: 15px;
  &:hover {
    text-align: center;
    padding-left: 20px;
    margin-bottom: 3px;
    background-color: #353945;
    transform: scale(1.1);
    cursor: pointer;
  }
`;
const Icon = styled.div`
  font-size: 20px;
  margin-right: 5px;
  color: #808191;
`;
const Title = styled.span`
  margin-left: 15px;
  color: #808191;
`;

const Bottom = styled.div`
  justify-content: space-between;
  width: 90%;
  margin-top: 115px;
`;
const Profile = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
`;
const Prof = styled.span`
  display: flex;
  padding: 5px 15px;
  background-color: ${(props) => props.position === "left" && "#353945"};
  background-color: ${(props) => props.position === "right" && "#A3E3FF"};
  color: ${(props) => props.position === "right" && "#3772FF"};
  font-weight: 500;
  border-radius: 10px;
`;
const BottomIcon = styled.div`
  display: flex;
  margin: 20px 0;
`;
const Mode = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  padding: 0 5px;
  background-color: #353945;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
