import {
  Button,
  Stack,
  Center,
  Navbar,
  NumberInput,
  Paper,
  Textarea,
  TextInput,
  Title,
  Stepper,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import Router from "next/router";
import { Progress } from "@mantine/core";
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

  return (
    <>
      <NavAccount />
      <br />
      <Banner />
      <br />

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
          <Policy1 quote={quote} />
          <br />
          <Policy2 />
        </Stack>
      </Paper>

      <FooterLinks />
    </>
  );
}
