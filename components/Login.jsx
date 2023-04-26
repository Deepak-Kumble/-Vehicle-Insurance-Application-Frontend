import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  rem,
} from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  wrapper: {
    height: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    backgroundImage: "url(https://iiflinsurance.com/images/2020/07/44-01.jpg)",
    backgroundSize: "cover",
  },

  // form: {
  //   borderRight: `${rem(1)} solid ${
  //     theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
  //   }`,
  //   minHeight: rem(900),
  //   maxWidth: rem(450),
  //   paddingTop: rem(80),

  //   [theme.fn.smallerThan("sm")]: {
  //     maxWidth: "100%",
  //   },
  // },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export function Login() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Paper
        radius="md"
        p="xl"
        withBorder
        shadow={"lg"}
        style={{
          position: "absolute",
          left: "10%",
          background: "hsla(0, 0%, 90%, 0.6)",
          borderRadius: "6px",
          boxShadow: "0 5px 30px rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(10px)",
          border: "1px solid hsla(0, 0%, 100%, 0.6)",
        }}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome back to Auto Armor!
        </Title>

        <TextInput label="Username" placeholder="Your Username" size="md" />
        <PasswordInput label="Password" placeholder="Your Password" mt="md" size="md" />
        
        <Link href="/" className={classes.link} style={{textDecoration:'none',color:'white'}}>
        <Button fullWidth mt="xl" size="md" >
        
          Login
          
        </Button>
        
        </Link>
    

   
       
          
           <Link href="/quote" className={classes.link} style={{textDecoration:'none'}}>
           <Text size="sm" ta="center" mt="md"  color="black" underline>
            Don't have an account? Register now!
            
          </Text>
          </Link>
        
    
      </Paper>
    </div>
  );
}
