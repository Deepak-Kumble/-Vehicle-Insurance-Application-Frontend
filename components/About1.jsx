import { createStyles, Paper, Text, ThemeIcon, rem } from "@mantine/core";
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

export function About1({ title, description }) {
  const { classes } = useStyles();
  return (
    <Paper withBorder radius="md" className={classes.card}>
      <ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ deg: 0, from: "white", to: "blue" }}>
        <></>
        <IconInfoSquareRoundedFilled size={rem(28)} stroke={1.5} />
      </ThemeIcon>
      <Text size="l" weight={500} mt="md">
        <h2>ABOUT AUTO ARMOR</h2>
      </Text>
      <Text size="sm" mt="sm" color="dimmed">
        <p>
          Auto Armor is a leading vehicle insurance quote application that helps customers find the best deals
          on car insurance. Our goal is to provide our customers with a seamless and hassle-free experience
          when it comes to finding the right insurance policy for their needs. We work with a network of
          top-rated insurance providers to ensure that our customers get the best coverage at the lowest
          possible price. Our team of experienced professionals is dedicated to helping you navigate the
          complex world of insurance and make informed decisions about your coverage.
          <></>
        </p>
      </Text>
    </Paper>
  );
}
