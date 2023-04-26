import { Button, TextInput } from "@mantine/core";
import { createStyles, Paper, Text, ThemeIcon, rem } from "@mantine/core";
import { Icon360, IconBrandSuperhuman, IconColorSwatch, IconMan } from "@tabler/icons-react";
import React from "react";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    transition: "transform 150ms ease, box-shadow 100ms ease",
    padding: theme.spacing.xl,
    paddingLeft: `calc(${theme.spacing.xl} * 2)`,

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.02)",
    },

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: rem(6),
      backgroundImage: theme.fn.linearGradient(0, theme.colors.blue[6], theme.colors.blue[8]),
    },
  },
}));

export function Policy3({ quote, BtnClick }) {
  const { classes } = useStyles();

  return (
    <Paper withBorder radius="md" className={classes.card}>

        <></>

      <Text size="l" weight={500} mt="md">
        <h2>POLICY C</h2>
      </Text>
      <Text size="sm" mt="sm" color="dimmed">
        <p>
        Policy C is our comprehensive coverage option that provides the highest level of protection for your vehicle. With Policy C, you not only get all the coverage and add-ons offered in Policy A and Policy B, but you also have access to an extensive range of additional coverage options tailored to meet your specific needs. In addition to the standard coverage options provided in Policy A and Policy B, Policy C includes:
        </p>
        <ul>
          <li>Uninsured/underinsured motorist coverage</li>
          <li>Medical payments coverage</li>
          <li>Pet injury coverage</li>
          <li>Accident forgiveness</li>
          <li>Glass coverage</li>
          <li>Custom parts and equipment coverage</li>
        </ul>
        <br />
        <p>With Policy C, you can have peace of mind knowing that you are fully covered in various scenarios, including accidents involving uninsured or underinsured motorists, medical expenses resulting from accidents, injuries to your pets, and damage to your vehicle's glass or custom parts and equipment. Whether you want comprehensive protection for your vehicle or need specific coverage options, Policy C offers the flexibility and peace of mind you need to drive confidently on the road.</p>
        
        <br />
        <p>
        <b>  
        Generated Quote amount: &pound; {parseFloat(quote)+200}
        </b>
        </p>
        <div id="quote"></div>
        
        <Button radius="xl" onClick={() => BtnClick(parseFloat(quote) + 200)}>
          Buy Now
        </Button>
      </Text>
    </Paper>
  );
}
