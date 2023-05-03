import { Button, Stack, Center, Navbar, NumberInput, Paper, Textarea, TextInput, Title } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import Router from "next/router";
import { Progress, Stepper } from "@mantine/core";
import { useEffect } from "react";
import { useState } from "react";
import { NavBar } from "../components/NavBar";
import { FooterLinks } from "../components/FooterLinks";
import { Banner } from "../components/Banner";
import { Policy1 } from "../components/Policy1";
import { Policy2 } from "../components/Policy2";
import { Policy3 } from "../components/Policy3";
import { NavAccount } from "../components/NavAccount";
import { QuoteHeader } from "../components/QuoteHeader";

export default function Page() {
  let [quote, setQuote] = useLocalStorage({
    key: "quote_value",
    defaultValue: "ERROR",
  });

  const BtnClick = (val) => {
    localStorage.setItem("quote_select_value", val);
    Router.push("/quote5?q=" + val);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInfoClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
       <NavAccount />
       <br/>
       <Banner/>
       <br/>

       <Stepper active={3} onStepClick={() => {}} orientation="horizontal">
        <Stepper.Step label="Step 1" description="Vehicle Details" />
        <Stepper.Step label="Step 2" description="Driving Details" />
        <Stepper.Step label="Step 3" description="Insurance Details" />
        <Stepper.Step label="Step 4" description="Selection of Policy and Add-ons" />
        <Stepper.Step label="Step 5" description="Payment" />
      
      </Stepper>

        <Paper w={"100%"} shadow="lg" radius="xs" p="lg">
        <Stack spacing={"xs"}>
        <QuoteHeader name="Generated Policy & Add-ons" step={4} />
      
          <br />
          <Policy1 quote={quote} BtnClick={BtnClick} />
          <br />
          <Policy2 />

          </Stack>
        </Paper>

      <FooterLinks />
    </>
  );
}
