import React from 'react'
import { Button, Container, HStack, Heading, Stack, Text } from '@chakra-ui/react'
import Profile from '../profile/Profile';
import { Link } from 'react-router-dom';
import VideoPlayer from '../videoplayer/VideoPlayer';
import { RiSecurePaymentFill} from 'react-icons/ri'

const About = () => {
  return (
    <Container maxW={'container.lg'} padding={'8'} >
      <Heading children='About Us' textAlign={'center'} />
      <Profile />
      <Stack direction={['column', 'row']} m={'2'} alignItems={'center'}>
        <Text fontFamily={'cursive'} m={'2'} textAlign={['center', 'left']}>
          We are a video streaming platform with premium courses for free.
        </Text>
        <Link to='/subscribe'>
          <Button colorScheme='purple' variant={'ghost'} >
            Checkout our plans
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />
      <HStack my={'2'}>
        <RiSecurePaymentFill fontSize={'2rem'}/>
        <Heading size={'sx'} fontFamily={'sans-serif'} textTransform={'uppercase'} children='Payment is secured by Razorpay' />
      </HStack>
    </Container >
  )
}

export default About
