import { Col, NumberInput, CheckIcon, Tooltip, Modal, Text } from "@mantine/core";
import { Grid } from "@mantine/core";
import { useEffect, useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { useRouter } from "next/router";
import { useForm } from "@mantine/form";
import { CAR_MODELS } from "../components/data/CarModelMakers";
import { API_URL } from "../constants";
import { Navbar } from "@mantine/core";
import { NavBar } from "../components/NavBar";
import { FooterLinks } from "../components/FooterLinks";
import { Banner } from "../components/Banner";
import { QuoteHeader } from "../components/QuoteHeader";
import { NavAccount } from "../components/NavAccount";
import { Button, Center, Group, Paper, Select, Stack, TextInput } from "@mantine/core";
import { Stepper } from "@mantine/core";
import { GetUserQuoteState, lol } from "../components/data/UserQuoteStateSimulator";

export default function Page() {
  // const [localquoteData] = useLocalStorage({ key: "quote", defaultValue: null });
  let initVals = {
    regis: "",
    yor: "2023",
    make: "",
    model: "",
    fuel: "",
    gearbox: "",
  };
  const form = useForm({
    initialValues: initVals,
  });

  useEffect(() => {
    form.setValues(
      GetUserQuoteState(JSON.parse(localStorage.getItem("quote"))["user_name"], "quote1") ?? initVals
    );
  }, []);
  const handleBackButtonClick = () => {
    const queryParams = new URLSearchParams(form.values).toString();
    Router.push(`/quote?${queryParams}`);
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
      <br />
      <Banner />
      <br />
      <Stepper
        active={0}
        onStepClick={() => {}}
        orientation="horizontal"
        style={{ margin: "10px", padding: "10px" }}>
        <Stepper.Step label="Step 1" description="Vehicle Details" />
        <Stepper.Step label="Step 2" description="Driving Details" />
        <Stepper.Step label="Step 3" description="Insurance Details" />
        <Stepper.Step label="Step 4" description="Selection of Policy and Add-ons" />
        <Stepper.Step label="Step 5" description="Payment" />
      </Stepper>

      <br />
      <Grid gutter="xl">
        <Col span={9}>
          <Paper w="100%" h="100%" shadow="lg" radius="xs" p="lg">
            <form
              onSubmit={form.onSubmit((v) => {
                // v.dob = v.dob.getUTCDate();
                let data = new FormData();
                for (const prop in v) {
                  data.append(prop, v[prop]);
                }
                // data.append("id", JSON.parse(localStorage.getItem("quote"))["user_name"]);
                lol(JSON.parse(localStorage.getItem("quote"))["user_name"], "quote1", v, 1);
                fetch(API_URL + "vehicle", {
                  method: "POST",
                  body: data,
                })
                  .then((response) => {
                    if (response.ok) {
                      let quoteData = JSON.parse(localStorage.getItem("quote"));
                      let x = {
                        ...v,
                        ...quoteData,
                      };
                      Router.push("/quote2");
                    } else {
                      alert("An error occurred while saving vehicle details.");
                    }
                  })
                  .catch((error) => {
                    alert("An error occurred while saving vehicle details.");
                    console.error(error);
                  });
              })}>
              <Stack spacing={"xs"}>
                <QuoteHeader name="Vehicle Details" step={1} />

                <TextInput
                  label="Registration Number:"
                  required
                  id="regis"
                  name="regis"
                  {...form.getInputProps("regis")}
                />

                <div class="form-group">
                  <Select
                    label="Year of Registration:"
                    required
                    id="yor"
                    name="yor"
                    data={[
                      "2023",
                      "2022",
                      "2021",
                      "2020",
                      "2019",
                      "2018",
                      "2017",
                      "2016",
                      "2015",
                      "2014",
                      "2013",
                      "2012",
                      "2011",
                      "2010",
                      "2009",
                      "2008",
                      "2007",
                      "2006",
                      "2005",
                      "2004",
                      "2003",
                      "2002",
                      "2001",
                      "2000",
                    ]}
                    {...form.getInputProps("yor")}
                  />
                </div>

                <Select
                  label="Vehicle Maker:"
                  required
                  id="make"
                  name="make"
                  data={Object.keys(CAR_MODELS)}
                  {...form.getInputProps("make")}
                />

                <Select
                  label="Vehicle Model:"
                  required
                  id="model"
                  name="model"
                  data={CAR_MODELS[form.values.make] || ["NONE"]}
                  {...form.getInputProps("model")}
                />

                <Select
                  id="fuel"
                  required
                  label="Fuel Type:"
                  name="fuel"
                  data={["Petrol", "Diesel"]}
                  {...form.getInputProps("fuel")}
                />

                <Select
                  label="Gearbox Type:"
                  required
                  id="gearbox"
                  name="gearbox"
                  data={["Automatic", "Manual"]}
                  {...form.getInputProps("gearbox")}
                />

                <Group position="right">
                  <Link href="/quote" style={{ textDecoration: "none" }}>
                    <Button variant={"subtle"} radius="xs">
                      Back
                    </Button>
                  </Link>
                  <Button type="submit" radius="xs">
                    Save & Next
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
