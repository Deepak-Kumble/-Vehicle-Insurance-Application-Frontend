import { createStyles, Paper, Text, ThemeIcon, rem } from '@mantine/core';
import { Icon360, IconBrandSuperhuman, IconColorSwatch, IconMan } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'transform 150ms ease, box-shadow 100ms ease',
    padding: theme.spacing.xl,
    paddingLeft: `calc(${theme.spacing.xl} * 2)`,

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.02)',
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: rem(6),
      backgroundImage: theme.fn.linearGradient(0, theme.colors.blue[6], theme.colors.blue[8]),
    },
  },
}));


export function About3({ title, description }) {
  const { classes } = useStyles();
  return (
    <Paper withBorder radius="md" className={classes.card}>
        
      <ThemeIcon
        size="xl"
        radius="md"
        variant="gradient"
        gradient={{ deg: 0, from: 'white', to: 'blue' }}
      >
        <></>
        <IconMan size={rem(20)} stroke={1.5} />
      </ThemeIcon>
      <Text size="l" weight={500} mt="md">
      <h2>OUR TEAM</h2>
     
      </Text>
      <Text size="sm" mt="sm" color="dimmed">
      <p>Our team is comprised of experienced insurance professionals who are passionate about helping our customers. We have years of experience in the insurance industry and are dedicated to providing our customers with the highest level of service and support.</p> 
      </Text>
    </Paper>

    
  );
}