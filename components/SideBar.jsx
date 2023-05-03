

import { Button, Grid, Col, Stack, Center, Navbar, NumberInput, Paper, Textarea, TextInput, Link, CheckIcon, Tooltip, Modal, Text } from "@mantine/core";
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

export default function SideBar() {
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

  const handleFormSubmit = (v) => {
    // Save form data to localStorage
    localStorage.setItem("userDetails", JSON.stringify(v));

    let data = new FormData();
    for (const prop in v) {
      data.append(prop, v[prop]);
    }

    fetch(API_URL + "user", {
      method: "POST",
      body: data,
    })
      .then((response) => {
        if (response.status === 200) {
          Router.push("/");
        } else {
          alert("An error occurred while saving user details.");
        }
      })
      .catch((error) => {
        alert("An error occurred while saving user details.");
        console.error(error);
      });
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
          <Paper w="100%" shadow="lg" radius="xs" p="lg">
       
            <form onSubmit={form.onSubmit(handleFormSubmit)}>
              <Stack spacing="xs">
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
              <Button type="submit" radius="xs">
                Retrieve it here
              </Button>
              </Center>
              <div style={{ marginTop: '20px' }}></div> 
              <h2>Why choose us...</h2>
              <ul>
                <li>Uninsured driver promise</li>
                <li>Make new claims online or via phone 24/7</li>
                <li>You can manage your policy online through MyAviva</li>
                <li>Defaqto 5 Star rated cover</li>
                <li>Out of charge recovery for electric vehicles</li>
              </ul>
              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <img src="https://www.direct.aviva.co.uk/quote/Direct/Motor/Content/images/defaqto-car-logo-2023.png" alt="Defaqto Car Logo" style={{ maxWidth: '75%', maxHeight: '75%' }} />
                <Tooltip label="More Information" position="bottom" withArrow>
                  <span style={{ marginLeft: '5px', cursor: 'pointer' }} onClick={handleInfoClick}>
                  <br/>
                  ⓘ
                </span>
              </Tooltip>
              {isModalOpen && (
                <Modal
                  title="More Information"
                  opened={isModalOpen}
                  onClose={handleCloseModal}
                >
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus consectetur luctus tempor. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia
                    Curae; Quisque sodales eros vitae maximus suscipit. In hac
                    habitasse platea dictumst. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis
                    egestas. Donec in magna semper, eleifend lacus vitae,
                    consectetur est. Vestibulum condimentum massa et nisi
                    aliquam, id malesuada mauris eleifend. Morbi rhoncus massa
                    ac dui interdum, sit amet viverra metus fermentum. Sed
                    pharetra, dui ac rhoncus condimentum, est neque aliquet
                    lacus, vel facilisis leo odio in lectus.
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


