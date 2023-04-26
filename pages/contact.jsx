import { FooterLinks } from "../components/FooterLinks";
import { NavBar } from "../components/NavBar";
import { Button } from "@mantine/core";
import { HeroSection } from "../components/HeroSection";
import { Contact } from "../components/Contact";

export default function Page() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <br />
      <br />
      <br />
      <br />
      <Contact />
      <br />
      <FooterLinks />
    </>
  );
}
