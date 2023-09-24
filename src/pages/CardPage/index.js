import React, { useState } from "react";
import { styled } from "@mui/system";
import CardList, { MiniTitle } from "./components/CardList";
import CountUp from "react-countup";
import { Fade, Flip, Zoom } from "react-awesome-reveal";

const data = [
  {
    photoUri: require("../../assets/images/image1.png"),
    title: "Card to card",
    subTitle: "Maria",
    price: "+ $143.00",
  },
  {
    photoUri: require("../../assets/images/image2.png"),
    title: "Apple Music",
    subTitle: "Online",
    price: "+ $143.00",
  },
  {
    photoUri: require("../../assets/images/image3.png"),
    title: "Uber",
    subTitle: "Service",
    price: "+ $143.00",
  },
];

export default function CardPage() {
  const [tap, setTap] = useState(false);
  const enableTap = (e) => setTap(true);
  const disableTap = () => setTap(false);

  const disableContextMenu = (event) => {
    event?.preventDefault();
    event?.stopPropagation();
    return false;
  };
  return (
    <Container>
      <Content>
        <ArrowIcon src={require("../../assets/icons/arrow.png")} />

        <BigTextContainer>
          <BigText>Salary</BigText>
          <BigText>Card</BigText>
        </BigTextContainer>

        <HorizontalCenter>
          <Flip>
            <CardContainer>
              <CreditCard
                onMouseDown={enableTap}
                onMouseUp={disableTap}
                onTouchStart={enableTap}
                onTouchEnd={disableTap}
                onContextMenu={disableContextMenu}
                className={tap ? "hide" : ""}
                src={require("../../assets/images/card-front.png")}
              />
              <CreditCardBack
                src={require("../../assets/images/card-back.png")}
              />
            </CardContainer>
          </Flip>
        </HorizontalCenter>

        {/* Balance Section */}
        <BalanceSection>
          <div>
            <MiniTitle>Balance</MiniTitle>
            <TotalBalance>
              $<CountUp end={2748.0} duration={1} delay={1} />
            </TotalBalance>
          </div>

          <div style={{ flexDirection: "row", display: "flex" }}>
            <IconBox>
              <img src={require("../../assets/icons/history.png")} alt="" />
            </IconBox>
            <IconBox>
              <img src={require("../../assets/icons/share.png")} alt="" />
            </IconBox>
          </div>
        </BalanceSection>
      </Content>

      <Zoom>
        <Content
          bgColor="#1C2641"
          style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
        >
          {/* List Section */}
          <Fade delay={2000}>
            <ListSection>
              <MiniTitle color="white">Today</MiniTitle>
              <CardList data={data} />
            </ListSection>
          </Fade>
        </Content>
      </Zoom>
    </Container>
  );
}

const Container = styled("div")(({ theme }) => ({
  width: 350,
  margin: "0 auto",
  background: "#313b5a",
  color: "#FFFFFF",
  [theme.breakpoints.up("sm")]: {
    margin: "50px auto",
  },
  [theme.breakpoints.only("xs")]: {
    width: "100%",
  },
}));

const Content = styled("div")(({ bgColor }) => ({
  background: bgColor || "transparent",
  padding: 20,
}));

const HorizontalCenter = styled("div")({
  textAlign: "center",
});

const ArrowIcon = styled("img")({
  width: 20,
  height: 20,
});

const CreditCard = styled("img")({
  marginBottom: 30,
  width: "100%",
  transition: "opacity 0.5s",
});

const CreditCardBack = styled(CreditCard)({
  position: "absolute",
  left: "0",
  top: "0",
  zIndex: "-1",
});

const BigTextContainer = styled("div")({
  margin: "20px 0",
});

const BigText = styled("div")({
  fontSize: "32px",
  fontFamily: "Poppins",
  fontWeight: "700",
  lineHeight: "41px",
  letterSpacing: "0.37px",
});

const BalanceSection = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-end",
});

const TotalBalance = styled(BigText)({
  fontSize: 26,
});

const IconBox = styled("div")({
  width: 45,
  height: 45,
  border: "1px solid #FFFFFF33",
  borderRadius: 10,
  textAlign: "center",
  marginLeft: 10,
  "& img": {
    width: "50%",
    height: "auto",
    marginTop: "12px",
  },
});

const ListSection = styled("div")({
  background: "#1c2641",
  padding: "30px 0",
});

const CardContainer = styled("div")({
  position: "relative",
});
