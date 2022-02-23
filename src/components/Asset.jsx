import { CallMadeOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

function Asset({ item }) {
  const user = item.user;
  const start = user.slice(0, 5);
  const end = user.slice(-7);
  return (
    <Contain>
      <Bottom>
        <Image src={item.img} />
        <Wrapper>
          <Heading>{item.asset}</Heading>
          <Decs>
            {item.type}
            <AVAX>
              <Imag src={item.chain.img}></Imag> &nbsp;&nbsp;
              {item.chain.name}
            </AVAX>
          </Decs>
        </Wrapper>
      </Bottom>

      <Bottom>
        <Wrapper>
          <Heading>{item.amount}BNB</Heading>
          <Decs>{item.state}</Decs>
        </Wrapper>
      </Bottom>

      <Bottom>
        <Wrapper>
          <Heading>
            {start}...{end}
          </Heading>
        </Wrapper>
      </Bottom>

      <Bottom>
        <Wrapper>
          <Heading>{item.referral_earnings} BNB</Heading>
          <Decs>View on BSC Scan &nbsp; <CallMadeOutlined style={{fontSize: "15px"}}/></Decs>
        </Wrapper>
      </Bottom>
    </Contain>
  );
}

export default Asset;

const Contain = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const Bottom = styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;
  text-align: center;
`;
const Image = styled.img`
   height: 25px;
   width: 25px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Heading = styled.span`
  color: white;
`;
const Decs = styled.span`
  margin-left:10px;
  color: #808191;
  display: flex;
  text-align: center;
  font-size: 13px;
`;
const AVAX = styled.div`
  display: flex;
  justify-content: space-between;
  height: 15px;
  background-color: #353945;
  font-size: 8px;
  padding: 2px 5px 0 5px;
  color: white;
  border-radius: 10px;
  margin-top: 3px;
  margin-left:3px;
`;
const Imag = styled.img`
  height: 11px;
  width: 11px;
`;
