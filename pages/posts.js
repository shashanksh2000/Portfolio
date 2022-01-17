import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbNailPowershell from '../public/images/contents/Powershell.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>

      <Section delay={0.3}>  {/* Animation delay */}
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to make your powershell cool!! (Upcoming Post)"
            thumbnail={thumbNailPowershell}
            href="#"
          />
        </SimpleGrid>
      </Section>

      {/* <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="POST 1 title"
            thumbnail={thumbNail1}
            href="Link to post or video 1"
          />
          <GridItem
            title="POST 2 title"
            thumbnail={thumbNail2}
            href="Link to post or video 2"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>  //Animation delay
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="POST 3 title"
            thumbnail={thumbNail3}
            href="Link to post or video 3"
          />
          <GridItem
            title="POST 4 title"
            thumbnail={thumbNail4}
            href="Link to post or video 4"
          />
        </SimpleGrid>
      </Section> */}

    </Container>
  </Layout>
)

export default Posts
