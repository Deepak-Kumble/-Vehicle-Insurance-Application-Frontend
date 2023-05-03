import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconChevronDown,
  IconMoneybag,
  IconMan,
  IconCar,
  IconSteeringWheel,
  IconCarCrash,
  IconCalculator,
} from "@tabler/icons-react";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor: "#228ae6",
      color:"white"
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

const mockdata = [
  {
    icon: IconMan,
    title: "Provide User details",
    description: "First name, Last Name, Gender, Date of Birth, Email, Contact Number and Address.",
  },
  {
    icon: IconCar,
    title: "Provide Vehicle details",
    description:
      "Registration number, Year of Registration, Vehicle Maker, Vehicle Model, Fuel type and Gearbox type.",
  },
  {
    icon: IconSteeringWheel,
    title: "Provide Driving details",
    description:
      "Type of Driving license, Driving experience, Number of Traffic Convictions and Insurance Claims in the last year.",
  },
  {
    icon: IconCarCrash,
    title: "Provide Insurance details",
    description: "Insurance Renewal type and Insurance Coverage date.",
  },
  {
    icon: IconCalculator,
    title: "Get Quotes based on your data",
    description:
      "Once you submit your application, you will receive a quote based on the information you provided. It will include information on the coverage options available to you.",
  },
  {
    icon: IconMoneybag,
    title: "Choose a quote that meets your requirements",
    description:
      "Once you have found the right policy, simply purchase it online. You can now start driving with peace of mind knowing you are protected.",
  },
];

export function NavAccount() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box>
      <Header height={60} px="md" bg={"light blue"} >
        <Group position="apart" sx={{ height: "100%" }}>
          <h3>AUTO ARMOR</h3>
          <Group sx={{ height: "100%" }} spacing={0} className={classes.hiddenMobile}>
            <Link href="/" className={classes.link}>
              Home
            </Link>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <Link href="#" className={classes.link}>
                  <Center inline>
                    Get Quote
                    <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                  </Center>
                </Link>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                <Group position="apart" px="md">
                  <Text fw={500}> <Link href="/quote" className={classes.link}style={{textDecoration:'none'}} position="center"> Get your personalized Quote today!</Link></Text>
                </Group>

                <Divider my="sm" mx="-md" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group position="apart">
                    <div>
                      
                      <Text size="xs" color="dimmed" position="center">
                        Life is unpredictable, but your insurance doesn't have to be – get a quote today.
                      </Text>
                    </div>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>

            <Link href="/retrieve" className={classes.link}>
            Retrieve Quote
          </Link>

            <Link href="/about" className={classes.link}>
              About Us
            </Link>
            <Link href="/contact" className={classes.link}>
              Contact
            </Link>
          </Group>

         

          <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}>
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider my="sm" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />

          <Link href={"/"}>Home</Link>

          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}></Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          

          <Divider my="sm" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />

          <Group position="center" grow pb="xl" px="md">
            <Anchor href="/login" color="inherit">
              <Button variant="default"></Button>
            </Anchor>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
