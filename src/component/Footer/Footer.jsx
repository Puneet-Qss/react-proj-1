import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import './Footer.css';
export default function Footer() {
  return (
    <Box
      style={{ backgroundColor: " rgb(47, 47, 47)" }}
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container
        maxWidth="lg"
        style={{ color: "wheat", backgroundColor: " rgb(47, 47, 47)" }}
      >
        <Grid container spacing={5} style={{ color: "wheat" }}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.wheat" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.white">
              We are XYZ company, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.wheat" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.white">
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body2" color="text.white">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="text.white">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.wheat" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.wheat" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
