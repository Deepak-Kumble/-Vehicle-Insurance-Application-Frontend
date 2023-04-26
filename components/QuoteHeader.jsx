import { Progress, Text, Title } from "@mantine/core";
import { Banner } from "./Banner";

export function QuoteHeader({ name, step }) {
  return (
    <>
      <Banner />
      <Text align="center">
        <Title order={2}>{name}</Title>
        Step {step} of 6
      </Text>
      <Progress radius="lg" size="lg" value={(100 / 6) * step} />
    </>
  );
}
