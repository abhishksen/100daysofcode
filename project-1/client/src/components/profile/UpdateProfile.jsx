import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const UpdateProfile = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <Container py={'14'} minH={'100vh'}>
            <form>
                <Heading my={'10'} textTransform={'uppercase'} alignItems={'center'} children='Update your Profile' />
                <VStack spacing={'8'}>
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Username'
                        type='text'
                        focusBorderColor="purple.400"
                    />
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='user@gmail.com'
                        type='email'
                        focusBorderColor="purple.400"
                    />
                    <Button w={'full'} colorScheme='purple' type='submit'>Update Profile</Button>
                </VStack>
            </form>
        </Container>
    )
}

export default UpdateProfile
