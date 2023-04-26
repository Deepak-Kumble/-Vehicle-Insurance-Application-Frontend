import { createStyles, Paper, Text, ThemeIcon, rem, Button } from "@mantine/core";
import { IconColorSwatch, IconTarget } from "@tabler/icons-react";

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
      backgroundImage: theme.fn.linearGradient(0, theme.colors.blue[6], theme.colors.blue[6]),
    },
  },
}));

export function Policy2({ quote, BtnClick }) {
  const { classes } = useStyles();
  return (
    <Paper withBorder radius="md" className={classes.card}>
     
        <></>

      <Text size="l" weight={500} mt="md">
        <h2>POLICY B</h2>
      </Text>
      <Text size="sm" mt="sm" color="dimmed">
        <p>
          Our Policy B includes more coverage and add-ons compared to Policy A, making it a great choice for
          those who want extra protection for their vehicle. This policy offers everything that Policy A
          offers, plus:
        </p>
        <ul>
          <li>Uninsured/underinsured motorist coverage</li>
          <li>Medical payments coverage</li>
          <li>Pet injury coverage</li>
        </ul>
        <br />
        <p>You can also choose to add on any of the following coverage options for an extra cost:</p>
        <ul>
          <li>Accident forgiveness</li>
          <li>Glass coverage</li>
          <li>Custom parts and equipment coverage</li>
        </ul>
        <br />
        <p>
        <b>  
        Generated Quote amount: &pound; {parseFloat(quote)+100}
        </b>
        </p>
        <Button radius="xl"  onClick={() => BtnClick(parseFloat(quote) + 100)}>
          Buy Now
        </Button>
      </Text>
    </Paper>
  );
}
