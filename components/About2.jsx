import { createStyles, Paper, Text, ThemeIcon, rem } from "@mantine/core";
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

export function About2({ title, description }) {
  const { classes } = useStyles();
  return (
    <Paper withBorder radius="md" className={classes.card}>
      <ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ deg: 0, from: "white", to: "blue" }}>
        <></>
        <IconTarget size={rem(28)} stroke={1.5} />
      </ThemeIcon>
      <Text size="l" weight={500} mt="md">
        <h2>OUR MISSION</h2>
      </Text>
      <Text size="sm" mt="sm" color="dimmed">
        At Auto Armor, our mission is to provide our customers with the tools and resources they need to make
        informed decisions about their car insurance. We strive to create a transparent and user-friendly
        platform that empowers our customers to compare insurance quotes and find the best policy for their
        needs.
      </Text>
    </Paper>
  );
}
