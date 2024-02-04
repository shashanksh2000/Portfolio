//import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  // SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { OrgSection, OrgName, WorkDuration, BulletPoint } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a software engineer based in India!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Shashank Sharma
          </Heading>
          <p>Software Engineer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/shashank.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <Paragraph>
	        I&apos;m Shashank Sharma, a dedicated low latency engineer at Open Futures 
	        Group, a prominent High-Frequency Trading (HFT) firm. With a passion for 
	        learning and implementing new technologies to build sophisticated systems 
	        that address real-world challenges with precision. 
        </Paragraph>
	      <Paragraph>
	        Beyond engineering excellence, my current focus involves the nuances of 
	        quantitative analysis. I am committed to unraveling the complexities of 
	        financial markets, leveraging my skills to extract valuable insights for 
	        strategic decision-making.
	      </Paragraph>
        
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
       
	      <OrgSection>
	        <OrgName>Open Futures Group</OrgName>
          <WorkDuration>Jun, 2022 - Present</WorkDuration>
	      </OrgSection>
        <BulletPoint>
            Optimized market data and order execution delivery systems.
        </BulletPoint>
        <BulletPoint>
            Worked with multiple protocols followed by native, non-native and crypto exchanges.
        </BulletPoint>  
        <BulletPoint>
            Developed network based customizable order-matching engine for testing strategies.
        </BulletPoint>  
        <BulletPoint>
            Performed debugging and optimization of critical flow through profiling tools.
        </BulletPoint>

         <OrgSection>
	        <OrgName>Acko Pvt Ltd</OrgName>
          <WorkDuration>Jan, 2022 - May, 2022</WorkDuration>
	      </OrgSection>
          <BulletPoint>
              Implemented multiple frontend interfaces for Acko app.
          </BulletPoint>  
          <BulletPoint>
              Instrumented over 100 events to monitor and analyze user behavior and app performance.
          </BulletPoint>  
          <BulletPoint>
              Created multiple APIs for backend to serve data to the frontend UX/UI.
          </BulletPoint>  
              
        <OrgSection>
	        <OrgName>Multigraf</OrgName>
          <WorkDuration>May, 2021 - July, 2021</WorkDuration>
	      </OrgSection>
        <BulletPoint>
            Build full stack web app for remote monitoring and maintenance of printing solution machines.
        </BulletPoint> 
        <BulletPoint>
            Implemented regular fetching of machine jobs and ensuring real-time updates.
        </BulletPoint>  
        <BulletPoint>
            Integrated sys logging and UDP message filtering for machine logs and added triggers based on messages and priority orders.
        </BulletPoint> 
        
	      <Box align="center" my={4}>
          <Link href="https://drive.google.com/file/d/1Ini6ieU1prz22Qls3Rmac3zOBc6vt0wO/view?usp=sharing" target="_blank">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Resume
            </Button>
          </Link>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          C++, Blockchain, Mathematics, Music, Anime & Video Games
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/shashanksh2000" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @shashankSharma
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/shashanksharma2000/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @shashankSharma
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/_lazybeast/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @lazyBeast
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/shashankSharma"
            title="Shashank Sharma"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
        </SimpleGrid> */}

	      {/*<Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Blog Posts
            </Button>
          </NextLink>
        </Box>*/}
      </Section>
    </Container>
  </Layout>
)

export default Home
