import { FooterLinks } from "../components/FooterLinks";
import { NavBar } from "../components/NavBar";
import { Button } from "@mantine/core";
import { HeroSection } from "../components/HeroSection";
import { Contact } from "../components/Contact";
import { Login } from "../components/Login";

export default function Page() {
  return (
    <>
      <NavBar />
      <Login />
      <FooterLinks />
    </>
  );
}
