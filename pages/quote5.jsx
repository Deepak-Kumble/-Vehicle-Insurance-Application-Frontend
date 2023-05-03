import {
  Button,
  NumberInput,
  Select,
  Paper,
  TextInput,
  Center,
  Stack,
  Grid,
  Title,
  Text,
  Group,
  Stepper,
  Card,
  Divider,
} from "@mantine/core";
import { useState } from "react";
import { API_URL } from "../constants";
import { useForm } from "@mantine/form";
import Router from "next/router";
import { FooterLinks } from "../components/FooterLinks";
import { Banner } from "../components/Banner";
import { NavAccount } from "../components/NavAccount";
import { QuoteHeader } from "../components/QuoteHeader";
import { useLocalStorage } from "@mantine/hooks";
import { ADDONS } from "../components/data/addon";

// TODO
export default function Page() {
  // const [quote, setQuote] = useState(0);
  // const [tax, setTax] = useState(0);
  // const [addOnsTotal, setAddOnsTotal] = useState(0);
  // const [grandTotal, setGrandTotal] = useState(0);
  const [quoteAmont] = useLocalStorage({
    key: "quote_value",
    defaultValue: -1,
  });
  const [addOnIndexes] = useLocalStorage({
    key: "quote_addons",
    defaultValue: null,
  });
  const [quoteVals] = useLocalStorage({
    key: "quote",
    defaultValue: null,
    deserialize: (v) => JSON.parse(v),
  });

  const form = useForm({
    initialValues: {
      cardno: 0,
      cvv: "",
      bankname: "",
      amount: 0,
    },
  });

  let quote = parseFloat(quoteAmont);
  let addOnsTotal = addOnIndexes?.split(",").reduce((total, v) => total + ADDONS.at(parseInt(v)).price, 0);
  const tax = 50; // Assuming tax is 10% of the quote
  const grandTotal = quote + tax + addOnsTotal;

  const handleFormSubmit = (values) => {
    // Save form data to localStorage
    localStorage.setItem("paymentDetails", JSON.stringify(values));

    const formData = new FormData();
    for (const prop in values) {
      formData.append(prop, values[prop]);
    }

    fetch(API_URL + "payment", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert("Payment Successful!");
          // localStorage.removeItem("quote");
          Router.push("/");
        } else {
          alert("An error occurred while processing the payment.");
        }
      })
      .catch((error) => {
        alert("An error occurred while processing the payment.");
        console.error(error);
      });
  };

  return (
    <>
      <NavAccount />
      <br />
      <Banner />
      <br />
      <Stack spacing={10} p={20}>
        <Stepper active={4} onStepClick={() => {}} orientation="horizontal">
          <Stepper.Step label="Step 1" description="Vehicle Details" />
          <Stepper.Step label="Step 2" description="Driving Details" />
          <Stepper.Step label="Step 3" description="Insurance Details" />
          <Stepper.Step label="Step 4" description="Selection of Policy and Add-ons" />
          <Stepper.Step label="Step 5" description="Payment" />
        </Stepper>

        <Divider my={20} />

        <Grid>
          <Grid.Col span={6}>
            <Paper shadow="lg" radius="xs" p="lg">
              {/* <Group position="apart">
                <Text>User Name:</Text>
                <Text>{quoteVals?.user_name}</Text>
              </Group> */}
              {quoteVals
                ? Object.keys(quoteVals)?.map((v) => {
                    return (
                      <Group position="apart">
                        <Text>{v}:</Text>
                        <Text>{quoteVals?.[v]}</Text>
                      </Group>
                    );
                  })
                : null}
              <Divider />

              <Title order={3}>Add Ons</Title>
              {addOnIndexes?.split(",").map((v) => {
                let x = ADDONS.at(parseInt(v));
                return (
                  <Group position="apart">
                    <Text>{x.name}:</Text>
                    <Text>£{x.price}</Text>
                  </Group>
                );
              })}
            </Paper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Paper shadow="lg" radius="xs" p="lg">
              <form onSubmit={form.onSubmit(handleFormSubmit)}>
                <Stack spacing={"md"} mx={30}>
                  {/* <QuoteHeader name="Payment" step={5} /> */}

                  <Grid>
                    <Grid.Col span={9}>
                      <NumberInput
                        label="Card Number:"
                        id="card-number"
                        name="cardno"
                        class="form-control"
                        placeholder="Enter Card Number"
                        {...form.getInputProps("cardno")}
                      />
                    </Grid.Col>

                    <Grid.Col span={3}>
                      <NumberInput
                        type="password"
                        label="CVV:"
                        placeholder="Enter CVV"
                        {...form.getInputProps("cvv")}
                      />
                    </Grid.Col>
                  </Grid>

                  <Center>
                    <Card withBorder w={400}>
                      <Stack spacing={10}>
                        <Group position="apart">
                          <Text>Generated Quote:</Text>
                          <Text>{quote}</Text>
                        </Group>
                        <Group position="apart">
                          <Text>Tax Amount:</Text>
                          <Text>{tax}</Text>
                        </Group>
                        <Group position="apart">
                          <Text>Add-ons Amount:</Text>
                          <Text>{addOnsTotal}</Text>
                        </Group>
                        <Divider />
                        <Group position="apart">
                          <Text>Grand Total:</Text>
                          <Text>{grandTotal}</Text>
                        </Group>
                      </Stack>
                    </Card>
                  </Center>

                  <Group position="center">
                    <Button type="submit" radius="xl">
                      Pay
                    </Button>
                  </Group>
                </Stack>
              </form>
            </Paper>
          </Grid.Col>
        </Grid>
      </Stack>

      <FooterLinks />
    </>
  );
}
