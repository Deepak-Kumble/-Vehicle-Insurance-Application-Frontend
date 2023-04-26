import { Button, Center, Navbar, NumberInput, Paper, Textarea, TextInput, Title } from "@mantine/core";
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

export default function Page() {
  let [quote, setQuote] = useLocalStorage({
    key: "quote_value",
    defaultValue: "ERROR",
  });

  const BtnClick = (val) => {
    localStorage.setItem("quote_select_value", val);
    Router.push("/quote5?q=" + val);
  };

  return (
    <>
       <NavAccount />

      <Center>
        <Paper w={"60%"} shadow="lg" radius="xs" p="lg">
          <Title order={2} align="center">
            LIST OF POLICIES
          </Title>
          <br />
          <Policy1 quote={quote} BtnClick={BtnClick} />
          <br />

          <Policy2 quote={quote} BtnClick={BtnClick} />
          <br />

          <Policy3 quote={quote} BtnClick={BtnClick} />
        </Paper>
      </Center>

      <FooterLinks />
    </>
  );
}
