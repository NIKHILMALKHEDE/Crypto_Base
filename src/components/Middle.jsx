import {
  AccountBalanceWalletOutlined,
  CallMadeOutlined,
  FileCopy,
  VerifiedUserTwoTone,
} from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { data } from "../data";
import Asset from "./Asset";

function Middle() {
  const [id, setid] = useState(1);
  function firstTab() {
    setid(1);
    document.getElementById("First").style.color = "white";
    document.getElementById("Second").style.color = "#808191";
    document.getElementById("hr1").style.display = "block";
    document.getElementById("hr2").style.display = "none";
  }
  function secondTab() {
    setid(2);
    document.getElementById("Second").style.color = "white";
    document.getElementById("First").style.color = "#808191";
    document.getElementById("hr2").style.display = "block";
    document.getElementById("hr1").style.display = "none";
  }

  return (
    <Container>
      <Wrapper>
        <Sections>
          <Section>
            Section <HR></HR>
          </Section>
          <Wallet>
            <AccountBalanceWalletOutlined
              style={{ fontSize: "25px", color: "#3772FF" }}
            />
            <Amount> 0.2 $XYZ </Amount>
            <Tier>Tier 1</Tier>
          </Wallet>
        </Sections>
        <Tutorial>
          <Text>
            <Info>
              Lorem ipsum is simply dummy text of printing and typesetting
              industry.
            </Info>
            <TutButton>Tutorial</TutButton>
          </Text>
          <Img src="https://cdn3d.iconscout.com/3d/premium/thumb/bitcoin-database-3981433-3297136.png"></Img>
          <Cross>X</Cross>
        </Tutorial>
        <Rewards>
          <Your>Your rewards</Your>
          <Balance>
            <Ammount>$ 0.26231428</Ammount>
            <CustomLink>
              <CallMadeOutlined style={{ fontSize: "20px" }} />
              &nbsp; Custom link
            </CustomLink>
          </Balance>
          <Tabs>
            <Tab>$40 AVAX</Tab>
            <Tab>$10 BNB</Tab>
            <Tab> $210 BTC</Tab>
          </Tabs>
        </Rewards>
        <Fees>
          <Fee>
            <Comussion>
              <VerifiedUserTwoTone />
              &nbsp;12.5% <p>&nbsp; of fee</p>
            </Comussion>
            <Referal>Your Referal Link for xyz</Referal>
            <RefLink>
              <Span > https://unityexchange.design </Span>
              <FileCopy style={{ fontSize: "20px", cursor: "pointer" }} />
            </RefLink>
          </Fee>
          <Fee>
            <Comussion>
              <VerifiedUserTwoTone />
              &nbsp;12.5% <p>&nbsp; of fee</p>
            </Comussion>
            <Referal>Your Referal Link for xyz</Referal>
            <RefLink>
              <Span > https://unityexchange.design </Span>
              <FileCopy  style={{ fontSize: "20px", cursor: "pointer" }} />
            </RefLink>
          </Fee>
        </Fees>
        <Bottom>
          <BottomTabs>
            <BottomTab id="First" onClick={firstTab} style={{ color: "white" }}>
              First Tab <HR style={{ display: "block" }} id="hr1"></HR>
            </BottomTab>
            <BottomTab id="Second" onClick={secondTab}>
              Second Tab <HR style={{ display: "none" }} id="hr2"></HR>{" "}
            </BottomTab>
          </BottomTabs>
          <TabHead>
            <Head>ASSET</Head>
            <Head>AMOUNT</Head>
            <Head>USER ACCOUNT</Head>
            <Head>REFERAL EARNING</Head>
          </TabHead>
          <TabBase>
            {id === 1
              ? data
                  .filter((datas) => datas.id < 2)
                  .map((item) => <Asset item={item} key={item.id} />)
              : data
                  .filter((datas) => datas.id >= 2)
                  .map((item) => <Asset item={item} key={item.id} />)}
          </TabBase>
        </Bottom>
      </Wrapper>
    </Container>
  );
}

export default Middle;

const Container = styled.div`
  height: 95vh;
  width: 55vw;
  background-color: black;
  padding: 40px 0px;
  border-right: 2px solid #242731;
`;
const Wrapper = styled.div`
  margin-left: 40px;
`;
const Sections = styled.div`
  display: flex;
  width: 95%;
  margin-right: 0;
  justify-content: space-between;
`;
const Section = styled.span`
  margin-left: 10px;
  font-weight: 500;
  font-size: 18px;
`;
const HR = styled.hr`
  height: 2px;
  background-color: #3772ff;
  border: none;
  margin-top: 3px;
`;
const Wallet = styled.div`
  background-color: #191b20;
  padding: 7px 10px;
  display: flex;
  border-radius: 13px;
`;
const Amount = styled.span`
  padding: 0 20px;
`;
const Tier = styled.span`
  background-color: #a3e3ff;
  color: #3772ff;
  font-weight: 500;
  font-size: 14px;
  padding: 3px 10px;
  border-radius: 5px;
`;
const Tutorial = styled.div`
  margin-top: 20px;
  display: flex;
  background-color: #abe8ff;
  width: 95%;
  border-radius: 8px;
  justify-content: space-between;
  padding-bottom: 15px;
  height: 85px;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  padding-left: 25px;
`;
const Img = styled.img`
  height: 150px;
  width: 150px;
  position: relative;
  bottom: 10px;
`;
const Info = styled.p`
  color: #2b2557;
  font-weight: 500;
  margin-bottom: 7px;
`;

const Cross = styled.div`
  background-color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 14px;
  padding: 2px;
  text-align: center;
  position: relative;
  bottom: 8px;
  left: 8px;
  cursor: pointer;
`;
const TutButton = styled.button`
  background-color: white;
  color: #2b2557;
  width: 100px;
  border: none;
  margin-top: 5px;
  padding: 4px 10px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
`;

const Rewards = styled.div`
  margin: 20px 0;
  padding: 20px 20px;
  background-color: #191b20;
  width: 90%;
  border-radius: 15px;
`;
const Your = styled.span`
  font-size: 20px;
`;
const Balance = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  width: 95%;
`;
const Ammount = styled.h1`
  font-weight: 500;
`;
const CustomLink = styled.button`
  align-items: center;
  text-align: center;
  display: flex;
  background-color: #3772ff;
  color: white;
  font-weight: 600;
  border: none;
  font-size: 15px;
  padding: 0 15px 0 15px;
  border-radius: 10px;
  cursor: pointer;
`;
const Tabs = styled.div`
  display: flex;
`;
const Tab = styled.span`
  background-color: #353945;
  padding: 5px 7px;
  font-size: 11px;
  margin: 0 10px 0 0;
  border-radius: 10px;
  font-weight: 500;
`;
const Fees = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
`;
const Fee = styled.div`
  padding: 20px 25px;
  background-color: #14161a;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
`;
const Comussion = styled.h3`
  display: flex;
  p {
    font-weight: 500;
  }
`;
const Referal = styled.span`
  margin: 15px 0;
  margin-left: 5px;
  color: #808191;
  font-size: 17px;
`;
const RefLink = styled.span`
  display: flex;
  background-color: #242731;
  margin-left: 5px;
  padding: 15px;
  border-radius: 10px;
  font-weight: 500;
`;
const Span = styled.span`
  margin-right: 50px;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
`;
const BottomTabs = styled.div`
  display: flex;

`;
const BottomTab = styled.div`
  color: #808191;
  margin: 20px 25px 20px 0;
  font-size: 20px;
  cursor: pointer;
`;
const TabHead = styled.div`
  display: flex;
  width: 75%;
  align-items: center;
  justify-content: space-between;
  background-color: #191b20;
  padding: 12px 98px 12px 60px;
  font-size: 11px;
  border-radius: 10px;
`;
const Head = styled.div`
  color: #808191;
  margin-left: 20px;
`;
const TabBase = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  background-color: #0e1014;
  padding: 15px 75px 15px 45px;
  margin-top: 5px;
  border-radius: 5px;
`;
