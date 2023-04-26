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
import { Progress } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import Router from "next/router";
import { CAR_MODELS } from "../components/data/CarModelMakers";
import { API_URL } from "../constants";
import { Navbar } from "@mantine/core";
import { NavBar } from "../components/NavBar";
import { FooterLinks } from "../components/FooterLinks";
import { Banner } from "../components/Banner";
import { QuoteHeader } from "../components/QuoteHeader";
import { NavAccount } from "../components/NavAccount";

export default function Page() {
  const form = useForm({
    initialValues: {
      regis: "",
      yor: "2023",
      make: "",
      model: "",
      fuel: "",
      gearbox: "",
    },
  });

  return (
    <>
      <NavAccount />

      <Center my={"md"}>
        <Paper w={"60%"} shadow="lg" radius="xs" p="lg">
          <form
            onSubmit={form.onSubmit((v) => {
              // v.dob = v.dob.getUTCDate();
              let data = new FormData();
              for (const prop in v) {
                data.append(prop, v[prop]);
              }

              fetch(API_URL + "vehicle", {
                method: "POST",
                body: data,
              })
                .then((response) => {
                  if (response.ok) {
                    localStorage.setItem("quote", JSON.stringify(v));
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
              <QuoteHeader name="VEHICLE DETAILS" step={2} />

              <TextInput
                label="Registration Number:"
                id="regis"
                name="regis"
                {...form.getInputProps("regis")}
              />

              <div class="form-group">
                <Select
                  label="Year of Registration:"
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
                  id="make"
                  name="make"
                  data={Object.keys(CAR_MODELS)}
                  {...form.getInputProps("make")}
                />
      
              <Select
                label="Vehicle Model:"
                id="model"
                name="model"
                data={CAR_MODELS[form.values.make] || ["NONE"]}
                {...form.getInputProps("model")}
              />

              <Select
                id="fuel"
                label="Fuel Type:"
                name="fuel"
                data={["Petrol", "Diesel"]}
                {...form.getInputProps("fuel")}
              />

              <Select
                label="Gearbox Type:"
                id="gearbox"
                name="gearbox"
                data={["Automatic", "Manual"]}
                {...form.getInputProps("gearbox")}
              />

              <Group position="right">
                <Button variant={"subtle"} radius="xs">
                  Back
                </Button>
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
