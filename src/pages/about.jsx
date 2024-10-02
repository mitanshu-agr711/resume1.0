import { Avatar, Box, chakra, Flex, Icon, SimpleGrid, useColorModeValue, } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

const testimonials = [
    {
        name: 'Mitanshu Agrawal',
        role: 'Web Developer & Problem Solver',
        content:
            'A resume builder website is a web-based tool that allows users to create and customize a professional resume to their desired specifications. These websites typically provide templates for creating a resume.',
        // avatar:
        //     'https://avatars.githubusercontent.com/u/130897584?v=4',
    }
];


function TestimonialCard(props) {
    const { name, role, content, avatar } = props;
    return (
        <Flex
            boxShadow={'lg'}
            maxW={'640px'}
            direction={{ base: 'column-reverse', md: 'row' }}
            width={'full'}
            rounded={'xl'}
            p={10}
            // justifyContent={'space-between'}
            // position={'relative'}
            // bg={useColorModeValue('white', 'gray.800')}

            // this after and before is basically used as a html pseudo element

            // _after={{
            //     content: '""',
            //     position: 'absolute',
            //     height: '37px',
            //     width: '41px',
            //     left: '35px',
            //     top: '-10px',
            //     backgroundSize: 'cover',
            //     // backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEcElEQVR4nO2aS4icRRDHO9FENL5F12gyM9Uzq2EVXxs8qQGNiIgY0UtEFESF+AARfEQP8XERCWgEEURBPUSIYEBBWSPOflWzu0lcD8r4FjW7U/XtJiGHNS7JxvhJf5sM2ddMf4+ei/2DZpjTv7qqvq7u6lbK4/F4PB6Px+PxeDyeTBRozzkQ8IOA8rFG+QKQX1oxOHKuckUULYIaXw8kWwC5CiRbS4HcoDpNsTp+IZC8oYkPapJoxkD5cdWuxnm5CkbRIk18jyb+bq4eHy2T3Kc6wrboJE38DBD/NceQEwYgv5yXZKW/cbVG3t1Sj2TfisGRU5VLCkEIGnmolSEnZEFfLumO8jwgT1lpDoSXK1foILwRUPZbGRIP3pZF79LavjOAZLu1HvK/5aCxUrmgHPAdgHI4iTGa5Na0esXqH2dbZ1qeGTcfOghvs07B6cgfLCM/rlLS1Rcu08S7kkwekL/SA+EFKm9KNHolIE9YRn3MlMBCsHd5asEoWhyXUzu9o5r4UyC+Wbmgqy9cBsi/WaTeJBBvrHz2yylZNXUQPmWZZf3FAV6Vz0wXQBO/aWHMt7p/tFvlQJnCy4DkUJtUnwLix0x1yENzQcokvdMp1qru8udmpVY5EX/HrSc/obFxk+oEmri/zeS/hyC81ox4k5JxATJVpm1VQdlg9OLg9I929w5HS5QLSihrEpWfZoTMHoE/gkDuWlONTk6iCSTDyfV4CpC/1iibugdHLs7NAUCyNY0DZo2fgRprbfR0TVZn1YvLNPLmzFvhys79Z7ZbiKzHdJl6IqfF1s4RJN9kOokCyt15GdP8dknub+kA5D9z1STeuXyYT0vlAI3ybr7GxGvDYcDGJQuVvrz1jmXClnQOIP7BkUHb59MrIT/kRo+PVFB6Ek2+pzp+uib+x4VBZsy3cwPkt1zpaZK3EzkAcPQKh8aYqLwwR5PkS4eaB3rq9aWJTn3aoQPMCW+OJspPjjWvS5AB8ohTY1AmTTttRo8PZdJt1oWP2juA+EW30YgjUmhGf8eBs1zrAcrr1g7QyJtdG2T6C8f1zPbVvQP4PfsMQHnNtUHFWuOqpsOJCx1wwPtJMuBp5wYNjXUd1zMNFJdlN9YjecXeAcR3Oo7G1IxF0Mk2ePZofxZpsrK256Jje3dXxgRqFkDyoVMH1GS1SoJuc/uS0QHPzqO33mHGjZsmayIHlEkedmIMyaHSgBQXaLyOu9HkV1VSeoejJZr4906ezuw7wYmiP1FBOV+loRTwLe0aogknP9LKGFMN0rTEWg6UDSoLGmVTToZMmiamzaVrsnvHlprvqDwA4o1ZqgIQ7zUNVls9c1zO+vmZ43Wu3WKgxu2A8msKY3YUq2Epsd7QWJcm/iDpJ2icDdR4QLmgp15fGvfk4+cofKRF6v2tUT4x1+hZNcsBXxO355DH2kS8bt4P5HlB0/49EDXWAsq9gPKkeSlinqaYSTt5nRFFi80aUkZeZ462gPyc+TX/02SYx+PxeDwej8fj8aj/M/8ByHuRf3qbe+AAAAAASUVORK5CYII=")`,
            // }}
            // _before={{
            //     content: '""',
            //     position: 'absolute',
            //     zIndex: '-1',
            //     height: 'full',
            //     maxW: '640px',
            //     width: 'full',
            //     filter: 'blur(40px)',
            //     transform: 'scale(0.98)',
            //     backgroundRepeat: 'no-repeat',
            //     backgroundSize: 'cover',
            //     top: 0,
            //     left: 0,
            // }}
            >
            <Flex
                direction={'column'}
                textAlign={'left'}
                justifyContent={'space-between'}>
                <chakra.p
                    color={useColorModeValue('gray.500', 'gray.50')}
                    fontFamily={'Inter'}
                    fontWeight={'medium'}
                    fontSize={'15px'}
                    pb={4}>
                    {content}
                </chakra.p>
                <chakra.p fontFamily={'Work Sans'} color={useColorModeValue('gray.700', 'gray.50')} fontWeight={'bold'} fontSize={14}>
                    {name}
                    <chakra.span
                        fontFamily={'Inter'}
                        fontWeight={'medium'}
                        color={'gray.500'}>
                        {' '}
                        - {role}
                    </chakra.span>
                </chakra.p>
            </Flex>
            <Avatar
                src={avatar}
                height={'80px'}
                width={'80px'}
                alignSelf={'center'}
                m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
            />
        </Flex>
    );
}

export default function About() {
    return (
        <>
            <Helmet>
                <title>About Us - Resume Builder</title>
                <meta name="description" content="Learn more about the Resume Builder website and its mission to provide easy-to-use tools for creating professional resumes." />
                <meta name="keywords" content="resume builder, about us, mission, professional resumes, tools" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="About Us - Resume Builder" />
                <meta property="og:description" content="Learn more about the Resume Builder website and its mission to provide easy-to-use tools for creating professional resumes." />
            </Helmet>
            <Flex
                textAlign={'center'}
                pt={10}
                justifyContent={'center'}
                direction={'column'}
                width={'full'}>
                <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
                    {/* base is for mobile, sm is for small screens, lg is for large screens */}
                    <chakra.h3
                        fontFamily={'Work Sans'}
                        fontWeight={'bold'}
                        fontSize={20}
                        textTransform={'uppercase'}
                        color={'teal.400'}>
                        People love us
                    </chakra.h3>
                    <chakra.h1
                        py={5}
                        fontSize={48}
                        fontFamily={'Work Sans'}
                        fontWeight={'bold'}
                        color={useColorModeValue('gray.700', 'gray.50')}>
                        Resume Builder
                    </chakra.h1>
                    <chakra.h2
                        margin={'auto'}
                        width={'70%'}
                        fontFamily={'Inter'}
                        fontWeight={'medium'}
                        color={useColorModeValue('gray.500', 'gray.400')}>
                        Build the Resume That Gets You Hired!
                    </chakra.h2>
                </Box>
                <SimpleGrid
                    columns={{ base: 1, xl: 1 }}
                    spacing={'20'}
                    mt={16}
                    mx={'auto'}>
                    {testimonials.map((cardInfo, index) => (
                        <TestimonialCard {...cardInfo} key={index} index={index} />
                    ))}
                </SimpleGrid>
                <Box>
                    <Icon viewBox="0 0 40 35" mt={14} boxSize={10} color={'teal.400'}>
                        <path
                            fill={'currentColor'}
                        />
                    </Icon>
                </Box>
            </Flex>
        </>

    );
}
