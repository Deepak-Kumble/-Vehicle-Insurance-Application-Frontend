import {
  Button,
  Center,
  Group,
  NumberInput,
  Paper,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
  Stepper, 
  Grid,
  Col,
  Tooltip,
  Modal
} from "@mantine/core";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Radio } from "@mantine/core";
import { NavBar } from "../components/NavBar";
import { Progress } from "@mantine/core";
import { useForm } from "@mantine/form";
import { DateInput } from "@mantine/dates";
import { API_URL } from "../constants";
import Router from "next/router";
import { FooterLinks } from "../components/FooterLinks";
import { Banner } from "../components/Banner";
import { QuoteHeader } from "../components/QuoteHeader";
import { NavAccount } from "../components/NavAccount";

export default function Page() {
  const form = useForm({
    initialValues: {
      renewal_type: "",
      cover_type: new Date(),
    },
  });

  const handleBackButtonClick = () => {
    const queryParams = new URLSearchParams(form.values).toString();
    Router.push(`/quote2?${queryParams}`);
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
       <NavAccount />
       <br/>
       <Banner/>
       <br/>
       <Stepper active={2} onStepClick={() => {}} orientation="horizontal" style={{ margin: '10px', padding: '10px' }}>
        <Stepper.Step label="Step 1" description="Vehicle Details" />
        <Stepper.Step label="Step 2" description="Driving Details" />
        <Stepper.Step label="Step 3" description="Insurance Details" />
        <Stepper.Step label="Step 4" description="Selection of Policy and Add-ons" />
        <Stepper.Step label="Step 5" description="Payment" />
      
      </Stepper>
      <br/>

      <Grid gutter="xl">
      <Col span={9}>
          <Paper w="100%" h="100%" shadow="lg" radius="xs" p="lg">
          <form
            onSubmit={form.onSubmit((v) => {
              let data = new FormData();
              for (const prop in v) {
                data.append(prop, v[prop]);
              }

              fetch(API_URL + "other", {
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

                    let searchparams = new URLSearchParams(x);

                    fetch(API_URL + "generatequote?" + searchparams.toString(), {
                      method: "POST",
                    })
                      .then((res) => res.text())
                      .then((res) => {
                        console.log(res);

                        localStorage.setItem("quote_value", res);
                        Router.push("/quote4");
                      });
                  } else {
                    alert("An error occurred while saving insurance details.");
                  }
                })
                .catch((error) => {
                  alert("An error occurred while saving insurance details.");
                  console.error(error);
                });
            })}>
            <Stack spacing={"xs"}>
              <QuoteHeader name="Insurance Details" step={3} />

              <Radio.Group {...form.getInputProps("renewal_type")} label="Insurance Renewal Type:" required>
                <Group>
                  <Radio label="Upgrade" value="Upgrade" />
                  <Radio label="Existing" value="Existing" />
                </Group>
              </Radio.Group>

              <DateInput
                id="cover_type"
                name="cover_type"
                label="Insurance Covering Date:"
                required
                {...form.getInputProps("cover_type")}
              />

              <div class="checkbox-container">
                <input type="checkbox" id="terms-conditions" name="terms-conditions" required />
                <label for="terms-conditions">
                  I agree that all the information provided is true to my knowledge. Terms and Conditions
                  apply.
                </label>
              </div>
              <Group position="right">
              
              <Button variant={"subtle"} radius="xs" onClick={handleBackButtonClick}>
    Back
  </Button>
              
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
              <div style={{ marginTop: '20px' }}></div> 
              <h2>Our Offerings...</h2>
              <ul>
              <li><b>Competitive Rates: </b>Get the coverage you need at a price that fits your budget with our competitive rates.</li>
              <li><b>Comprehensive Coverage:</b> Our policies provide complete protection against accidents, theft, vandalism, and natural disasters.</li>
              <li><b>Online Policy Management:</b> Conveniently manage your policy online, from updating details to making payments, all from the comfort of your home.</li>
              <li><b>Defaqto 5 Star Rated:</b> Our policies have been awarded the top-notch Defaqto 5 Star rating for high-quality and comprehensive coverage.</li>
              </ul>
              <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <img src="https://www.direct.aviva.co.uk/quote/Direct/Motor/Content/images/defaqto-car-logo-2023.png" alt="Defaqto Car Logo" style={{ maxWidth: '60%', maxHeight: '60%' }} />
                <Tooltip label="More Information" position="bottom" withArrow>
                  <span style={{ marginLeft: '5px', cursor: 'pointer' }} onClick={handleInfoClick}>
                  <br/>
                  ⓘ
                </span>
              </Tooltip>
              {isModalOpen && (
                <Modal
                  opened={isModalOpen}
                  onClose={handleCloseModal}
                >
                  <Text>
                    <ul>
<li><b>Competitive Rates:</b> We offer competitive rates for vehicle insurance, ensuring that you get the coverage you need at a price that fits your budget.</li>

<li><b>Comprehensive Coverage:</b> Our insurance policies provide comprehensive coverage for your vehicle, protecting you against a wide range of risks such as accidents, theft, vandalism, and natural disasters.</li>

<li><b>24/7 Claims Support:</b> We understand that accidents can happen at any time. That's why we provide 24/7 claims support, allowing you to make new claims online or via phone whenever you need to.</li>

<li><b>Defaqto 5 Star Rated:</b> Our insurance policies have been awarded the Defaqto 5 Star rating, which signifies their high quality and comprehensive coverage. You can have peace of mind knowing that you are getting top-notch protection for your vehicle.</li>
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

