import {
  Button,
  Grid,
  Col,
  Stack,
  Center,
  Navbar,
  NumberInput,
  Paper,
  Textarea,
  TextInput,
  CheckIcon,
  Tooltip,
  Modal,
  Text,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import Router from "next/router";
import { NavBar } from "../components/NavBar";
import { API_URL } from "../constants";
import { Progress } from "@mantine/core";
import { FooterLinks } from "../components/FooterLinks";
import { Banner } from "../components/Banner";
import { Radio, Group } from "@mantine/core";
import { QuoteHeader } from "../components/QuoteHeader";
import { Stepper } from "@mantine/core";
import Link from "next/link";

export default function Page() {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "",
      dob: new Date(),
      email: "",
      num: 0,
      addr: "",
      username: "",
      password: "",
    },
  });

  const formSubmitHandler = async (v) => {
    // v.dob = v.dob.getUTCDate();
    let data = new FormData();
    for (const prop in v) {
      data.append(prop, v[prop]);
    }

    try {
      let req = await fetch(API_URL + "user", {
        method: "POST",
        body: data,
      });
      let username = await req.text();
      if (username === "-1") throw new exception("INTERNAL SERVER ERROR, Cant create a new user instance");
      localStorage.setItem(
        "quote",
        JSON.stringify({
          user_name: username,
        })
      );
      Router.push("/quote1");
    } catch (ex) {
      alert("An error occurred while saving user details.\n" + "Error Details: " + ex.message);
    }
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
      <NavBar />
      <Banner />

      <Grid gutter="xl">
        <Col span={9}>
          <Paper w="100%" h="100%" shadow="lg" radius="xs" p="lg">
            <form onSubmit={form.onSubmit(formSubmitHandler)}>
              <Stack spacing={"xs"}>
                <TextInput
                  type="text"
                  label="First Name:"
                  name="firstName"
                  required
                  {...form.getInputProps("firstName")}
                />

                <TextInput
                  type="text"
                  id="lastName"
                  label="Last Name:"
                  name="lastName"
                  required
                  {...form.getInputProps("lastName")}
                />
                <Radio.Group {...form.getInputProps("gender")} label="Gender:" required>
                  <Group>
                    <Radio label="Male" value="Male" />
                    <Radio label="Female" value="Female" />
                  </Group>
                </Radio.Group>

                <DateInput
                  label="Date of Birth:"
                  id="dob"
                  name="dob"
                  required
                  {...form.getInputProps("dob")}
                />

                <TextInput
                  label="Email:"
                  type="email"
                  id="email"
                  name="email"
                  required
                  {...form.getInputProps("email")}
                />

                <NumberInput
                  label="Phone Number:"
                  type="tel"
                  id="num"
                  name="num"
                  required
                  {...form.getInputProps("num")}
                />

                <Textarea
                  label="Address:"
                  id="address"
                  name="addr"
                  rows="5"
                  required
                  {...form.getInputProps("addr")}
                />
                <TextInput
                  type="text"
                  id="userName"
                  label="Username:"
                  name="username"
                  required
                  {...form.getInputProps("username")}
                />
                <TextInput
                  type="password"
                  id="password"
                  label="Password:"
                  name="password"
                  required
                  {...form.getInputProps("password")}
                />
                <Group position="center">
                  <Button type="submit" radius="xs">
                    Save
                  </Button>
                </Group>
              </Stack>
            </form>
          </Paper>
        </Col>
        <Col span={3}>
          <Center>
            <Paper w="100%" shadow="lg" radius="xs" p="lg">
              <h2>Already have a quote?</h2>
              <Center>
                <Link href="/retrieve">
                  <Button type="submit" radius="xs">
                    Retrieve it here
                  </Button>
                </Link>
              </Center>
              <div style={{ marginTop: "20px" }}></div>
              <h2>Our Offerings...</h2>
              <ul>
                <li>
                  <b>Competitive Rates: </b>Get the coverage you need at a price that fits your budget with
                  our competitive rates.
                </li>
                <li>
                  <b>Comprehensive Coverage:</b> Our policies provide complete protection against accidents,
                  theft, vandalism, and natural disasters.
                </li>
                <li>
                  <b>Online Policy Management:</b> Conveniently manage your policy online, from updating
                  details to making payments, all from the comfort of your home.
                </li>
                <li>
                  <b>Defaqto 5 Star Rated:</b> Our policies have been awarded the top-notch Defaqto 5 Star
                  rating for high-quality and comprehensive coverage.
                </li>
              </ul>
              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <img
                  src="https://www.direct.aviva.co.uk/quote/Direct/Motor/Content/images/defaqto-car-logo-2023.png"
                  alt="Defaqto Car Logo"
                  style={{ maxWidth: "60%", maxHeight: "60%" }}
                />
                <Tooltip label="More Information" position="bottom" withArrow>
                  <span style={{ marginLeft: "5px", cursor: "pointer" }} onClick={handleInfoClick}>
                    <br />ⓘ
                  </span>
                </Tooltip>
                {isModalOpen && (
                  <Modal opened={isModalOpen} onClose={handleCloseModal}>
                    <Text>
                      <ul>
                        <li>
                          <b>Competitive Rates:</b> We offer competitive rates for vehicle insurance, ensuring
                          that you get the coverage you need at a price that fits your budget.
                        </li>

                        <li>
                          <b>Comprehensive Coverage:</b> Our insurance policies provide comprehensive coverage
                          for your vehicle, protecting you against a wide range of risks such as accidents,
                          theft, vandalism, and natural disasters.
                        </li>

                        <li>
                          <b>24/7 Claims Support:</b> We understand that accidents can happen at any time.
                          That's why we provide 24/7 claims support, allowing you to make new claims online or
                          via phone whenever you need to.
                        </li>

                        <li>
                          <b>Defaqto 5 Star Rated:</b> Our insurance policies have been awarded the Defaqto 5
                          Star rating, which signifies their high quality and comprehensive coverage. You can
                          have peace of mind knowing that you are getting top-notch protection for your
                          vehicle.
                        </li>
                      </ul>
                    </Text>
                  </Modal>
                )}
              </div>
            </Paper>
          </Center>
        </Col>
      </Grid>

      <FooterLinks />
    </>
  );
}
