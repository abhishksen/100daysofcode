import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ChangePassword = () => {

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    return (
        <Container py={'14'} minH={'100vh'}>
            <form>
                <Heading my={'10'} textTransform={'uppercase'} alignItems={'center'} children='Change Password' />
                <VStack spacing={'8'}>
                    <Input
                        required
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        placeholder='Enter old Password'
                        type='password'
                        focusBorderColor="purple.400"
                    />
                    <Input
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder='Enter new Password'
                        type='password'
                        focusBorderColor="purple.400"
                    />
                    <Button w={'full'} colorScheme='purple' type='submit'>Change Password</Button>
                </VStack>
            </form>
        </Container>
    )
}

export default ChangePassword
