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
} from "@mantine/core";
import Link from "next/link";
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
import { lol } from "../components/data/UserQuoteStateSimulator";

export default function Page() {
  const form = useForm({
    initialValues: {
      renewal_type: "",
      cover_type: new Date(),
    },
  });
  return (
    <>
      <NavAccount />
      <Center my={"md"}>
        <Paper w={"60%"} shadow="lg" radius="xs" p="lg">
          <form
            onSubmit={form.onSubmit((v) => {
              let data = new FormData();
              for (const prop in v) {
                data.append(prop, v[prop]);
              }

              lol(JSON.parse(localStorage.getItem("quote"))["user_id"], "quote3", v, 3);

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
              <QuoteHeader name="INSURANCE DETAILS" step={4} />

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
                <Link href="/quote2" style={{ textDecoration: "none" }}>
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
      </Center>

      <FooterLinks />
    </>
  );
}
