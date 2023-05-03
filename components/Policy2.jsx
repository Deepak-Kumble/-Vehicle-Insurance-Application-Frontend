import { createStyles, Paper, Text, ThemeIcon, rem, Button, Flex } from "@mantine/core";
import { IconColorSwatch, IconTarget, IconMinus, IconPlus } from "@tabler/icons-react";

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
  addOnItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing.sm,
  },
}));

export function Policy2({ quote, BtnClick }) {
  const { classes } = useStyles();
  const addOns = [
    {
      name: "Zero Depreciation (ZD) Cover",
      price: "£50",
      description:
        "Every year, your car devaluates due to wear and tear of its parts. The add-on does not consider this, giving you complete coverage.",
    },
    {
      name: "Engine Protect Plus Cover",
      price: "£100",
      description:
        "This add-on cover protects your engine from damages that are caused as a consequence of an accident.",
    },
    {
      name: "Garage Cash Allowance",
      price: "£120",
      description:
        "This add-on cover protects your engine from damages that are caused as a consequence of an accident",
    },
    {
      name: "Consumable Items",
      price: "£150",
      description:
        "Due to accident-related car damages, the expenses on consumable items such as nuts, bolts, screws, washers, bearings, etc. are compensated to you.",
    },
    {
      name: "Road Side Assistance",
      price: "£50",
      description:
        "You can avail emergency assistance services in any of our network garages. These services include towing on breakdown/accident, flat tyre, etc.",
    },
    {
      name: " Accident Cover for Passengers",
      price: "£75",
      description:
        "This add-on cover protects your engine from damages that are caused as a consequence of an accident.",
    },
    {
      name: "Third Party Liabilities",
      price: "£90",
      description:
        "If you accidentally ram your car into a person or vehicle or any immovable property, we'll pay for the legal liabilities - injury or death of a person, and damage caused to the third party property",
    },
    {
      name: "Key Cover",
      price: "£80",
      description:
        "In case of damage or loss of car keys due to theft or burglary, the cost of repairing/replacing the car keys is compensated.",
    },
    // Add other add-ons here
  ];

  const handleAddOnAdd = (addOn) => {
    // Add logic to add the add-on to the quote or perform any other actions
    console.log("Add", addOn);
  };

  const handleAddOnRemove = (addOn) => {
    // Add logic to remove the add-on from the quote or perform any other actions
    console.log("Remove", addOn);
  };

  return (
    <Paper withBorder radius="md" className={classes.card}>
      <Text size="l" weight={500} mt="md">
        <h2>Add-ons</h2>
      </Text>
      <Text size="md" mt="sm">
        <ul>
          {addOns.map((addOn, index) => (
            <li key={index}>
              <Flex className={classes.addOnItem}>
                <div>
                  <b>
                    <u>{addOn.name}:</u> <Text mark>{addOn.price}</Text>
                  </b>
                  <br />
                  {addOn.description}
                </div>
                <Flex>
                  <Button
                    radius="xl"
                    variant="light"
                    onClick={() => handleAddOnAdd(addOn)}
                  >
                    <IconPlus size={18} />
                  </Button>
                  <Button
                    radius="xl"
                    variant="light"
                    onClick={() => handleAddOnRemove(addOn)}
                  >
                    <IconMinus size={18} />
                  </Button>
                </Flex>
              </Flex>
              <br />
            </li>
          ))}
        </ul>
      </Text>
    </Paper>
  );
}