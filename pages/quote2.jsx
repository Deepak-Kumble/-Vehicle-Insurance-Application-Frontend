import {
  Button,
  NumberInput,
  Paper,
  Select,
  Textarea,
  TextInput,
  Center,
  Stack,
  Text,
  Group,
  Title,
} from "@mantine/core";
import Link from "next/link";
import { DateInput } from "@mantine/dates";
import { Progress } from "@mantine/core";
import { useForm } from "@mantine/form";
import Router from "next/router";
import { CAR_MODELS } from "../components/data/CarModelMakers";
import { API_URL } from "../constants";
import { NavBar } from "../components/NavBar";
import { FooterLinks } from "../components/FooterLinks";
import { QuoteHeader } from "../components/QuoteHeader";
import { lol } from "../components/data/UserQuoteStateSimulator";

export default function Page() {
  const form = useForm({
    initialValues: {
      todl: "",
      drive: 0,
      trafs: 0,
      claims: 0,
    },
  });

  return (
    <>
      <NavBar />

      <Center my={"md"}>
        <Paper w={"60%"} shadow="lg" radius="xs" p="lg">
          <form
            onSubmit={form.onSubmit((v) => {
              let data = new FormData();
              for (const prop in v) {
                data.append(prop, v[prop]);
              }

              lol(JSON.parse(localStorage.getItem("quote"))["user_id"], "quote2", v, 2);

              fetch(API_URL + "ess", {
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
                    localStorage.setItem("quote", JSON.stringify(x));
                    Router.push("/quote3");
                  } else {
                    alert("An error occurred while saving driving details.");
                  }
                })
                .catch((error) => {
                  alert("An error occurred while saving driving details.");
                  console.error(error);
                });
            })}>
            <Stack spacing={"xs"}>
              <QuoteHeader name={"DRIVING DETAILS"} step={3} />

              <Select
                label="Type of Driving License:"
                required
                placeholder="Select Type of Driving License:"
                id="todl"
                name="todl"
                data={["Full", "Provisional"]}
                {...form.getInputProps("todl")}
              />

              <NumberInput
                label="Driving Experience (years):"
                id="drive"
                name="drive"
                min="0"
                {...form.getInputProps("drive")}
                required
              />

              <NumberInput
                label="Number of Traffic Convictions:"
                id="trafs"
                name="trafs"
                min="0"
                {...form.getInputProps("trafs")}
                required
              />

              <NumberInput
                label="Number of Insurance Claims in Past Year:"
                required
                id="claims"
                name="claims"
                min="0"
                {...form.getInputProps("claims")}
              />

              <Group position="right">
                <Link href="/quote1" style={{ textDecoration: "none" }}>
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
