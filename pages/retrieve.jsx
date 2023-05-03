import { Button, Grid, Stack, Center, Paper, TextInput, Modal, Text } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { useState } from "react";
import Router from "next/router";
import { NavBar } from "../components/NavBar";
import { API_URL } from "../constants";
import { FooterLinks } from "../components/FooterLinks";
import { Banner } from "../components/Banner";
import { GetUserCurrentCounter } from "../components/data/UserQuoteStateSimulator";

export default function Page() {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
    },
  });

  const handleFormSubmit = (values) => {
    let x = GetUserCurrentCounter(values.username);
    let obj = {
      user_name: values.username,
      ...x.quote1,
      ...x.quote2,
      ...x.quote3,
      ...x.quote4,
    };
    localStorage.setItem("quote", JSON.stringify(obj));
    Router.push("/quote" + x.counter);
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
        <Grid.Col span={9}>
          <Paper shadow="lg" radius="xs" padding="lg">
            <form onSubmit={form.onSubmit(handleFormSubmit)}>
              <Stack spacing="xs" align="center">
                <TextInput
                  type="text"
                  label="First Name"
                  placeholder="Enter your first name"
                  {...form.getInputProps("firstName")}
                />

                <TextInput
                  type="text"
                  label="Last Name"
                  placeholder="Enter your last name"
                  {...form.getInputProps("lastName")}
                />

                <TextInput
                  type="text"
                  label="username"
                  placeholder="Enter your username"
                  required
                  {...form.getInputProps("username")}
                />

                <TextInput
                  type="email"
                  label="Email"
                  placeholder="Enter your email address"
                  {...form.getInputProps("email")}
                />

                <Button type="submit" radius="xs">
                  Retrieve Quote
                </Button>
              </Stack>
            </form>
          </Paper>
        </Grid.Col>

        <Grid.Col span={3}>
          <Center>
            <Paper shadow="lg" radius="xs" padding="lg">
              <h2>Why choose us...</h2>
              <ul>
                <li>
                  <b>Competitive Rates:</b> Get the coverage you need at a price that fits your budget with
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
                  <b>Customer Support:</b> Our dedicated customer support team is available 24/7 to assist you
                  with any queries or concerns you may have.
                </li>
              </ul>
              <Button onClick={handleInfoClick} radius="xs">
                More Info
              </Button>
            </Paper>
          </Center>
        </Grid.Col>
      </Grid>

      <Modal opened={isModalOpen} onClose={handleCloseModal} title="More Information" size="sm">
        <Text>
          <ul>
            <li>
              <b>Competitive Rates:</b> We offer competitive rates for vehicle insurance, ensuring that you
              get the coverage you need at a price that fits your budget.
            </li>

            <li>
              <b>Comprehensive Coverage:</b> Our insurance policies provide comprehensive coverage for your
              vehicle, protecting you against a wide range of risks such as accidents, theft, vandalism, and
              natural disasters.
            </li>

            <li>
              <b>24/7 Claims Support:</b> We understand that accidents can happen at any time. That's why we
              provide 24/7 claims support, allowing you to make new claims online or via phone whenever you
              need to.
            </li>

            <li>
              <b>Defaqto 5 Star Rated:</b> Our insurance policies have been awarded the Defaqto 5 Star rating,
              which signifies their high quality and comprehensive coverage. You can have peace of mind
              knowing that you are getting top-notch protection for your vehicle.
            </li>
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
