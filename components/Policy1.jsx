import { createStyles, Paper, Text, ThemeIcon, rem, Button } from "@mantine/core";
import { IconColorSwatch, IconInfoSquareRoundedFilled } from "@tabler/icons-react";

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

export function Policy1({ quote, BtnClick }) {
  const { classes } = useStyles();
  return (
    <Paper withBorder radius="md" className={classes.card}>
    
        <></>


      <Text size="l" weight={500} mt="md">
        <h2>POLICY A</h2>
      </Text>
      <Text size="sm" mt="sm" color="dimmed">
        <p>
          Our Policy A is a great choice for those who are looking for basic coverage at an affordable price.
          This policy offers the following:
        </p>
        <ul>
          <li>Liability coverage for bodily injury and property damage</li>
          <li>Collision coverage for damages to your own vehicle</li>
          <li>Comprehensive coverage for non-collision damages like theft or natural disasters</li>
          <br />
        </ul>
        <p>In addition, you can choose to add on additional coverage options for an extra cost, such as:</p>
        <ul>
          <li>Roadside assistance</li>
          <li>Rental car reimbursement</li>
          <li>Increased liability limits</li>
        </ul>
        <br />
    
        <p>
        <b>  
     
        Generated Quote amount: &pound; {parseFloat(quote)}

        </b>
        </p>
        <Button radius="xl" onClick={() => BtnClick(parseFloat(quote))}>
          Buy Now
        </Button>
        <></>
      </Text>
    </Paper>
  );
}
