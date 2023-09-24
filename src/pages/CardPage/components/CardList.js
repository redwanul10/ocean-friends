import React from "react";
import { styled } from "@mui/system";
import { Fade, Slide } from "react-awesome-reveal";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

const CustomAccordion = styled(Accordion)(({ theme }) => {
  return {
    boxShadow: "none", // this styles directly apply to accordion
    border: `1px solid gray`,
    ".MuiAccordionDetails-root": {},
    ".MuiAccordionSummary-root": {}, // this apply to Summary
  };
});

export default function CardList({ data }) {
  return (
    <Fade delay={2000}>
      <div>
        {data.map((item) => (
          <Accordion classes={{ root: "accordion_root" }}>
            <AccordionSummary
              classes={{ root: "custom_root", content: "no_margin" }}
            >
              <Row>
                <Image src={item.photoUri} />
                <CardInfo>
                  <Title>{item.title}</Title>
                  <SubTitle>{item.subTitle}</SubTitle>
                </CardInfo>
                <Price>{item.price}</Price>
              </Row>
            </AccordionSummary>

            <AccordionDetails classes={{ root: "details_custom_root" }}>
              <SubTitle>XXXXXXXXXXX6479</SubTitle>
              <SubTitle>21/09/2023</SubTitle>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </Fade>
  );
}

const Row = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginLeft: -13,
  width: "100%",
});

const Image = styled("img")({
  width: 80,
});

const Title = styled("div")({
  fontWeight: "500",
  lineHeight: "26px",
  letterSpacing: "0.30px",
  color: "white",
});

const SubTitle = styled(Title)({
  color: "#94A3D3",
  fontSize: 14,
});

export const MiniTitle = styled("div")({
  color: (props) => props.textColor || "#94A3D3",
  fontSize: "16px",
  fontWeight: "700",
  lineHeight: "26px",
  letterSpacing: "0.30px",
  wordWrap: "break-word",
});

const Price = styled(MiniTitle)({
  color: "white",
});

const CardInfo = styled("div")({
  flex: 1,
});
