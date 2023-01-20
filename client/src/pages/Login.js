import React, { useState } from 'react'
import Link from "next/link"
import { FaGoogle, FaGithub } from "react-icons/fa"

import {
    Grid,
    Box,
    Button,
    Icon,
} from '@chakra-ui/react'
import styles from '@/styles/Login.module.css'
import { Lato } from '@next/font/google'
import { loginWithGoogle, loginWithGithub } from '../../firebase'

const lato = Lato({ subsets: ["latin"], weight: "400" })

function Login() {

    return (
        <Box className={styles.container}>
            <Grid justifyContent="center" alignItems="center">
                <Box className={styles.form}>
                        <Button
                            fontFamily={lato.style.fontFamily}
                            variant="outline"
                            color="green.200"
                            borderColor="green.300"
                            boxShadow="0 0 5px #9AE6B4"
                            marginBottom={5}
                            width="100%"
                            onClick={loginWithGoogle}
                            _hover={{ boxShadow: '0 0 10px #9AE6B4', bgColor: '#9AE6B444' }}
                        >
                            <Icon as={FaGoogle} boxSize={8} color="green.200" paddingRight={3} />
                            Login with Google
                        </Button>
                        <Button
                            fontFamily={lato.style.fontFamily}
                            variant="outline"
                            color="purple.200"
                            borderColor="purple.300"
                            boxShadow="0 0 5px #D6BCFA"
                            width="100%"
                            marginBottom={5}
                            onClick={loginWithGithub}
                            _hover={{ boxShadow: '0 0 10px #D6BCFA', bgColor: '#D6BCFA44' }}
                        >
                            <Icon as={FaGithub} boxSize={8} color="purple.200" paddingRight={3} />
                            Login with Github
                        </Button>
                </Box>
            </Grid>
        </Box>
    )
}

export default Login