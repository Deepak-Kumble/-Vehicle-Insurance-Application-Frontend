import { Button,Stack, Center, Navbar, NumberInput, Paper, Textarea, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import Router from "next/router";
import { NavBar } from "../components/NavBar";
import { API_URL } from "../constants";
import { Progress } from "@mantine/core";
import { FooterLinks } from "../components/FooterLinks";
import { Banner } from "../components/Banner";
import { Radio, Group } from "@mantine/core";
import { QuoteHeader } from "../components/QuoteHeader";

export default function Page() {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "",
      dob: new Date(),
      email: "",
      num: 0,
      addr: "",
      username: "",
      password: "",
    },
  });

  return (
    <>
      <NavBar />

      <Center my={"md"}>
          <Paper w={"60%"} shadow="lg" radius="xs" p="lg">
            <form
              onSubmit={form.onSubmit((v) => {
                // v.dob = v.dob.getUTCDate();
                let data = new FormData();
                for (const prop in v) {
                  data.append(prop, v[prop]);
                }

                fetch(API_URL + "user", {
                  method: "POST",
                  body: data,
                })
                  .then((response) => {
                    if (response.status == 200) {
                      // alert("User details saved successfully!");
                      Router.push("/quote1");
                      // window.location.href = "quote1.html";
                    } else {
                      alert("An error occurred while saving user details.");
                    }
                  })
                  .catch((error) => {
                    alert("An error occurred while saving user details.");
                    console.error(error);
                  });
              })}>
              
              <Stack spacing={"xs"}>
              <QuoteHeader name="USER REGISTRATION" step={1} />


              <TextInput
                type="text"
                label="First Name:"
                name="firstName"
                required
                {...form.getInputProps("firstName")}
              />

              <TextInput
                type="text"
                id="lastName"
                label="Last Name:"
                name="lastName"
                required
                {...form.getInputProps("lastName")}
              />
                <Radio.Group {...form.getInputProps("gender")} label="Gender:">
                <Group>
                  <Radio label="Male" value="Male" />
                  <Radio label="Female" value="Female" />
                </Group>
              </Radio.Group>

  
              <DateInput label="Date of Birth:" id="dob" name="dob" required {...form.getInputProps("dob")} />

              <TextInput label="Email:" type="email" id="email" name="email" required {...form.getInputProps("email")} />
 
              <NumberInput label="Phone Number:" type="tel" id="num" name="num" required {...form.getInputProps("num")} />
           
              <Textarea label="Address:" id="address" name="addr" rows="5" required {...form.getInputProps("addr")} />
              <TextInput
                type="text"
                id="userName"
                label="Username:"
                name="username"
                required
                {...form.getInputProps("username")}
              />
              <TextInput
                type="password"
                id="password"
                label="Password:"
                name="password"
                required
                {...form.getInputProps("password")}
              />
              <Group position="center">
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
