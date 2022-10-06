import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Link } from "@material-ui/core";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export default function Footer() {
   return <Box
            px={{ xs: 3, sm: 10 }}
            py={{ xs: 5, sm: 10 }}
            bgcolor="text.secondary"
            color="white"
            height={5}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={3} sm={4}>
                        <h4 fontFamily="font-family: 'Fredoka One', cursive;">© 2022 Mayra D Chiotta</h4>
                    </Grid>
                    <Grid item xs={3} sm={4} align="center">
                        <Box >
                            <Link href="https://www.instagram.com/________________paulo/" target="_blank" color="inherit" ><InstagramIcon fontSize="large" mr={2} /></Link>
                            <Link href="https://wa.me/5493764552841?text=¡Hola!%20%2C%20Bienvenido%20a%20PauloSushi!" target="_blank" color="inherit"><WhatsAppIcon fontSize="large" /></Link>
                        </Box>
                    </Grid>
                    <Grid item xs={3} sm={4} align="center">
                        <Box>
                           <h2>PauloSushi</h2>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
}
