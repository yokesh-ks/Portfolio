import Head from "next/head";
import { Box, Container } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box as="Main" pb={8}>
      <Head>
        <title>Yokesh Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="container.md" pt={14}>
      <h1>Yokesh Full Stack Developer</h1>
      </Container>
    </Box>
  )
}
