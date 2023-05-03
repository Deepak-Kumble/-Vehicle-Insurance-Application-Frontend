import { Button, Grid, Col, Stack, Center, NumberInput, Paper, Textarea, TextInput, Link, CheckIcon, Tooltip, Modal, Text, DatePicker, Group, Radio, Stepper } from "@mantine/core";
import { useForm } from '@mantine/hooks';
import { useEffect, useState } from "react";
import Router from "next/router";
import { NavBar } from "../components/NavBar";
import { API_URL } from "../constants";
import { Progress } from "@mantine/core";
import { FooterLinks } from "../components/FooterLinks";
import { Banner } from "../components/Banner";

export default function Page() {
    const form = useForm({
      initialValues: {
        firstName: '',
        lastName: '',
        dob: new Date(),
        email: '',
      },
    });
  

  const handleFormSubmit = (values) => {
    // Save form data to localStorage
    localStorage.setItem("userDetails", JSON.stringify(values));

    const formData = new FormData();
    for (const prop in values) {
      formData.append(prop, values[prop]);
    }

    fetch(API_URL + "user", {
      method: "POST",
      body: formData,
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
          <Paper shadow="lg" radius="xs" padding="lg">
            <form onSubmit={form.handleSubmit(handleFormSubmit)}>
              <Stack spacing="xs">
                <TextInput
                  type="text"
                  label="First Name"
                  placeholder="Enter your first name"
                  required
                  {...form.getFieldProps("firstName")}
                />

                <TextInput
                  type="text"
                  label="Last Name"
                  placeholder="Enter your last name"
                  required
                  {...form.getFieldProps("lastName")}
                />

                <DatePicker
                  label="Date of Birth"
                  placeholder="Select your date of birth"
                  required
                  {...form.getFieldProps("dob")}
                />

                <TextInput
                  type="email"
                  label="Email"
                  placeholder="Enter your email address"
                  required
                  {...form.getFieldProps("email")}
                />

                <Button type="submit" radius="xs">
                  Retrieve Quote
                </Button>
              </Stack>
            </form>
          </Paper>
        </Col>

        <Col span={3}>
          <Center>
            <Paper shadow="lg" radius="xs" padding="lg">
              <h2>Why choose us...</h2>
              <ul>
                <li>
                  <b>Competitive Rates:</b> Get the coverage you need at a price that fits your budget with our competitive rates.
                </li>
                <li>
                  <b>Comprehensive Coverage:</b> Our policies provide complete protection against accidents, theft, vandalism, and natural disasters.
                </li>
                <li>
                  <b>Online Policy Management:</b> Conveniently manage your policy online, from updating details to making payments, all from the comfort of your home.
                </li>
             
                <li>
  <b>Customer Support:</b> Our dedicated customer support team is available 24/7 to assist you with any queries or concerns you may have.
</li>
</ul>
<Button onClick={handleInfoClick} radius="xs">
  More Info
</Button>
</Paper>
</Center>
</Col>
</Grid>

<Modal
opened={isModalOpen}
onClose={handleCloseModal}
title="More Information"
size="sm"
>
<Text>
<ul>

<li><b>Competitive Rates:</b> We offer competitive rates for vehicle insurance, ensuring that you get the coverage you need at a price that fits your budget.</li>

<li><b>Comprehensive Coverage:</b> Our insurance policies provide comprehensive coverage for your vehicle, protecting you against a wide range of risks such as accidents, theft, vandalism, and natural disasters.</li>

<li><b>24/7 Claims Support:</b> We understand that accidents can happen at any time. That's why we provide 24/7 claims support, allowing you to make new claims online or via phone whenever you need to.</li>

<li><b>Defaqto 5 Star Rated:</b> Our insurance policies have been awarded the Defaqto 5 Star rating, which signifies their high quality and comprehensive coverage. You can have peace of mind knowing that you are getting top-notch protection for your vehicle.</li>
              </ul>
</Text>
<Button onClick={handleCloseModal} radius="xs">
  Close
</Button>
</Modal>

<FooterLinks />
</>
  );
}
