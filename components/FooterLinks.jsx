import { createStyles, Text, Container, ActionIcon, Group, rem} from "@mantine/core";
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from "@tabler/icons-react";
import { MantineLogo } from "@mantine/ds";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  footer: {
    // marginTop: rem(120),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[2],
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: rem(200),

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: "block",
    color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

export function FooterLinks({ data }) {
  const { classes } = useStyles();

  return (
    <>
      <footer className={classes.footer}>
        <Container className={classes.inner}>
          <div className={classes.logo}>
            <h3>AUTO ARMOR</h3>
            <Text size="xs" color="dimmed" className={classes.description}>
              Get the best coverage for your vehicle at the best price – compare quotes now.
            </Text>
          </div>
          <Container>
            <Text size="md" color="dimmed" className={classes.description}  colorsize="sm" spacing="20">
            <Group position="apart" sx={{ height: "100%" }}>
            <Group sx={{ height: "100%" }} spacing={0} className={classes.hiddenMobile}>
            <Link href="/index" className={classes.link}>
            Home
            </Link>
            </Group>
            <Group sx={{ height: "100%" }} spacing={0} className={classes.hiddenMobile}>
            <Link href="/quote1" className={classes.link}>
            Get Quote
            </Link>
            </Group>
            <Group sx={{ height: "100%" }} spacing={0} className={classes.hiddenMobile}>
            <Link href="/about" className={classes.link}>
            About Us
            </Link>
            </Group>
            <Group sx={{ height: "100%" }} spacing={0} className={classes.hiddenMobile}>
            <Link href="/contact" className={classes.link}>
            Contact
            </Link>
            </Group>
            </Group>
            </Text>
          
          </Container>
        </Container>
        <Container className={classes.afterFooter}>
          <Text color="dimmed" size="sm">
            © 2023 Auto Armor. All rights reserved.
          </Text>

          <Group spacing={0} className={classes.social} position="right" noWrap>
            <ActionIcon size="lg">
              <IconBrandTwitter size="1.05rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandYoutube size="1.05rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandInstagram size="1.05rem" stroke={1.5} />
            </ActionIcon>
          </Group>
        </Container>
      </footer>
    </>
  );
}
