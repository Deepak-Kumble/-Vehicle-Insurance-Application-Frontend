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
} from "@mantine/core";
import { Progress } from "@mantine/core";
import { API_URL } from "../constants";
import { useForm } from "@mantine/form";
import { useLocalStorage } from "@mantine/hooks";
import Router, { useRouter } from "next/router";
import { useEffect } from "react";
import { NavBar } from "../components/NavBar";
import { FooterLinks } from "../components/FooterLinks";
import { Banner} from "../components/Banner";
import { NavAccount } from "../components/NavAccount";
export default function Page() {
  const [quote] = useLocalStorage({
    key: "quote_select_value",
    defaultValue: null,
  });

  const form = useForm({
    initialValues: {
      payoption: "",
      cardno: 0,
      cvv: "",
      upi: "",
      bankname: "",
    },
  });

  // console.log(form.values.amount);

  return (
    <>
      <NavAccount />

      <Center my={50}>
        <Paper w={"50%"} shadow="lg" radius="xs" p="lg">
         
        <form
            onSubmit={form.onSubmit((v) => {
              let data = new FormData();
              for (const prop in v) {
                data.append(prop, v[prop]);
              }

              fetch(API_URL + "payment", {
                method: "POST",
                body: data,
              })
                .then((response) => {
                  if (response.ok) {
                    alert("Payment Successful!");
                    Router.push("/");
                  } else {
                    alert("An error occurred while saving driving details.");
                  }
                })
                .catch((error) => {
                  alert("An error occurred while saving driving details.");
                  console.error(error);
                });
            })}>
            <Stack spacing={"md"}>
              <Banner />
              {/* <Select
                label="Payment Option"
                id="payment-option"
                name="payoption"
                data={["Debit/Credit Card", "UPI", "Net Banking"]}
              /> */}
              <Text align="center">
                <Title order={2}>PAYMENT</Title>
                Step 6 of 6
              </Text>
              <Progress radius="lg" size="lg" value={100} />

              <Grid>
                <Grid.Col span={9}>
                  <NumberInput
                    label="Card Number:"
                    id="card-number"
                    name="cardno"
                    class="form-control"
                    placeholder="Enter Card Number"
                  />
                </Grid.Col>
                <Grid.Col span={3}>
                  <NumberInput type="password" label="CVV:" placeholder="Enter CVV" />
                </Grid.Col>
              </Grid>

              {false && (
                <TextInput
                  label="UPI ID"
                  id="upi-id"
                  name="upi"
                  class="form-control"
                  placeholder="Enter UPI ID"
                />
              )}

              <Select
                label="Bank Name:"
                id="bank-name"
                name="bankname"
                data={["HSBC", "Barclays", "Lloyds Banking Group", "Natwest Group"]}
              />

              <NumberInput label="Amount:" value={parseInt(quote)} disabled />

              <Group position="center">
                <Button w={120} type="submit" radius="xl">
                  Pay
                </Button>
              </Group>
            </Stack>
          </form>
        </Paper>
      </Center>
      <FooterLinks />
    </>
  );
}
