import { createStyles, Badge, Group, Title, Text, Card, SimpleGrid, Container, rem } from "@mantine/core";
import { IconGauge, IconUser, IconCookie, IconBolt, IconMoneybag, IconHelp } from "@tabler/icons-react";

const mockdata = [
  {
    title: "Fast and Easy Quotes",
    description:
      "Proivde the required information and get the quote in minutes",
    icon: IconBolt,
  },
  {
    title: "Competitive Pricing",
    description:
      "Compare prices of different quotes and find the quote that best suits your needs.",
    icon: IconMoneybag,
  },
  {
    title: "Flexible Coverage Support",
    description:
      "All the quotes provide  good insurance coverage and you can choose any one of them.",
    icon: IconHelp,
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]}`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export function Features() {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Why Choose Us?
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md" align="justify">
        Auto Armor is the premier choice for vehicle insurance quotes. Our online platform makes it easy to
        compare rates from multiple providers and find the best coverage for your needs. We understand that
        choosing the right insurance can be overwhelming, so we've made it our mission to simplify the process
        and provide personalized recommendations. Our team of experts is always here to help, whether you have
        questions about your policy or need assistance filing a claim. With Auto Armor, you can rest easy
        knowing that your vehicle is protected by top-rated insurers at an affordable price.
      </Text>

      <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: "md", cols: 1 }]}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
