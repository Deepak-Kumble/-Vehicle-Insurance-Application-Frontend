import React from "react";
import { Helmet } from "react-helmet";
import { Button, Stack } from "@mantine/core";
import { NavBar } from "../components/NavBar";
import { FooterLinks } from "../components/FooterLinks";
import { About } from "../components/About";
import { About1 } from "../components/About1";
import { About2 } from "../components/About2";
import { About3 } from "../components/About3";
import { HeroSection } from "../components/HeroSection";

export default function Page() {
  return (
    <>
  

      <NavBar />

      <HeroSection />
      <br />

      <About />
      <br />

      <Stack spacing={"xs"}>
        <About1 />
        <br />

        <About2 />
        <br />

        <About3 />
        <br />
      </Stack>

      <FooterLinks />
    </>
  );
}
