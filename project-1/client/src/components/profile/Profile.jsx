import { Avatar, Button, Container, HStack, Heading, Image, Stack, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import ChangePhotoModal from './ChangePhotoModal'

const Profile = () => {

    const user = {
        name: 'Abhishek Sen',
        email: 'abhishk@gmail.com',
        createdAt: String(new Date().toISOString()),
        role: 'user',
        subscription: {
            status: 'active',
        },
        playlist: [
            {
                course: "jfehjfhejfhj",
                poster: 'https://i.ytimg.com/vi/_fEh1vXgn_s/maxresdefault.jpg'
            },
            {
                course: "jfehjfhejfhjfrf34f",
                poster: 'https://www.hiddentechies.com/blog/wp-content/uploads/2020/04/12-Best-Placeholder-Images-Websites-800x470.png'
            }

        ],
    };

    const removeFromPlayListHandler = (id) => {
        console.log(id)
    }

    const changeImageSubmitHandler = (e, image) => {
        e.preventDefault();
        console.log(image);
    }

    const { isOpen, onClose, onOpen } = useDisclosure();


    return (
        <Container minH={'100vh'} maxW={'container.lg'} py={'8'}>
            <Heading children='Profile' m='8' textTransform={'uppercase'} />

            <Stack
                justifyContent={'flex-start'}
                direction={['column', 'row']}
                alignItems={'center'}
                spacing={['6', '12']}
                padding={'8'}
            >
                <VStack>
                    <Avatar boxSize={'40'} />
                    <Button onClick={onOpen} colorScheme='purple' variant={'ghost'}>Change Avatar</Button>
                </VStack>
                <VStack spacing={'4'}
                    alignItems={['flex-start']}
                >
                    <HStack>
                        <Text children='Name:' fontWeight={'bold'} />
                        <Text children={user.name} />
                    </HStack>
                    <HStack>
                        <Text children='Email:' fontWeight={'bold'} />
                        <Text children={user.email} />
                    </HStack>
                    <HStack>
                        <Text children='Last Updated:' fontWeight={'bold'} />
                        <Text children={user.createdAt.split('T')[0]} />
                    </HStack>
                    {
                        user.role !== 'admin' && (
                            <HStack>
                                <Text children='Subscription:' fontWeight={'bold'} />
                                {
                                    user.subscription.status === 'active' ? (
                                        <Button color='purple.400' variant={'unstyled'}>Cancel Subscription</Button>) : (
                                        <Link to={'/subscribe'}>
                                            <Button colorScheme='purple' variant={'ghost'}>Subscribe</Button>
                                        </Link>
                                    )
                                }
                            </HStack>
                        )}

                    <Stack
                        direction={['column', 'row']}
                        // alignItems={'center'}
                        justifyContent={'flex-start'}
                    >
                        <Link to={'/updateprofile'}>
                            <Button colorScheme='purple' variant={'outline'}>Update Profile</Button>
                        </Link>
                        <Link to={'/changepassword'}>
                            <Button colorScheme='purple' variant={'solid'}>Change Password</Button>
                        </Link>
                    </Stack>

                </VStack>

            </Stack>

            <Heading py={'4'} borderBottom={'1px'} textAlign={['center', 'left']} fontSize={'md'} children='Playlist' />
            {
                user.playlist.length > 0 && (
                    <Stack
                        direction={['column', 'row']}
                        alignItems={'center'}
                        flexWrap={'wrap'}
                        p={'4'}
                    >
                        {
                            user.playlist.map((element, index) => (
                                <VStack spacing={'4'} w={'48'} m={'2'} key={element.course}>
                                    <Image
                                        borderRadius={'md'}
                                        boxSize={'full'}
                                        objectFit={'contain'}
                                        src={element.poster}
                                        h={'28'}
                                    />
                                    <HStack spacing={'7'}>
                                        <Link to={`/course/${element.course}`}>
                                            <Button variant={'outline'} colorScheme='purple'>Watch Now</Button>
                                        </Link>
                                        <Button onClick={() => (removeFromPlayListHandler(element.course))} colorScheme='purple' variant={'solid'}>
                                            <RiDeleteBin7Fill />
                                        </Button>
                                    </HStack>
                                </VStack>
                            ))
                        }
                    </Stack>
                )
            }

            <ChangePhotoModal isOpen={isOpen} onClose={onClose} changeImageSubmitHandler={changeImageSubmitHandler} />

        </Container>
    )
}

export default Profile
