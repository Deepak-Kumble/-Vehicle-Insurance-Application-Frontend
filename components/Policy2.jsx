import { createStyles, Paper, Text, ThemeIcon, rem, Button, Flex, Checkbox } from "@mantine/core";
import { IconColorSwatch, IconTarget, IconMinus, IconPlus } from "@tabler/icons-react";
import { ADDONS } from "./data/addon";
import { useEffect, useState } from "react";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    transition: "transform 150ms ease, box-shadow 100ms ease",
    padding: theme.spacing.xl,
    paddingLeft: `calc(${theme.spacing.xl} * 2)`,

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

  const [addOnSelected, setAddOn] = useState(new Set([]));

  return (
    <Paper withBorder radius="md" className={classes.card}>
      <Text size="l" weight={500} mt="md">
        <h2>Add-ons</h2>
      </Text>
      <Text size="md" mt="sm">
        <ul>
          {ADDONS.map((addOn, index) => (
            <li key={index}>
              <Flex className={classes.addOnItem}>
                <div>
                  <b>
                    <u>{addOn.name}:</u> <Text mark>{addOn.price}</Text>
                  </b>
                  <br />
                  {addOn.description}
                </div>

                <Checkbox
                  onClick={(e) => {
                    console.log(addOnSelected);
                    if (e.currentTarget.checked) {
                      setAddOn((prev) => {
                        prev.add(index);
                        localStorage.setItem("quote_addons", [...prev]);
                        return prev;
                      });
                    } else {
                      setAddOn((prev) => {
                        prev.delete(index);
                        localStorage.setItem("quote_addons", [...prev]);
                        return prev;
                      });
                    }
                  }}
                />
              </Flex>
              <br />
            </li>
          ))}
        </ul>
      </Text>
    </Paper>
  );
}
