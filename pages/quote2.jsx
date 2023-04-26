import { Button, NumberInput, Paper, Select, Textarea, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { Progress } from '@mantine/core';
import { useForm } from "@mantine/form";
import Router from "next/router";
import { CAR_MODELS } from "../components/data/CarModelMakers";
import { API_URL } from "../constants";
import { NavBar } from "../components/NavBar";
import { FooterLinks } from "../components/FooterLinks";
import { Banner } from "../components/Banner";

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
 

      <div class="container-1">
        <h2 class="form-heading">
          <u>DRIVING DETAILS</u>
        </h2>
        <Paper withBorder w={"60%"} shadow="lg" radius="xs" p="lg"> 
        <Progress radius="lg" size="lg" value={49.98} />
        <h4 align="center">Step 3 of 6</h4>
        <Banner />
        <form
          onSubmit={form.onSubmit((v) => {
            let data = new FormData();
            for (const prop in v) {
              data.append(prop, v[prop]);
            }

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
          })}
          id="driving-form">
          <div class="form-group">
            <label for="todl">Type of Driving License</label>
            <Select
              placeholder="Select Type of Driving License"
              id="todl"
              name="todl"
              data={["Full", "Provisional"]}
              {...form.getInputProps("todl")}
            />
          </div>
          <div class="form-group">
            <label for="drive">Driving Experience (years)</label>
            <NumberInput id="drive" name="drive" min="0" {...form.getInputProps("drive")} />
          </div>
          <div class="form-group">
            <label for="traf">Number of Traffic Convictions</label>
            <NumberInput id="trafs" name="trafs" min="0" {...form.getInputProps("trafs")} />
          </div>
          <div class="form-group">
            <NumberInput
              label="Number of Insurance Claims in Past Year"
              id="claims"
              name="claims"
              min="0"
              {...form.getInputProps("claims")}
            />
          </div>
          <div class="form-group">
          <Button variant="outline" radius="xl" size="md">
      Save
    </Button>
    
          </div>
        </form>
        </Paper>
      </div>

      <FooterLinks />
    </>
  );
}
