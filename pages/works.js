import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbChip8 from '../public/images/works/chip8-thumb.png'
import thumbBlogApp from '../public/images/works/blog-app.png'
import thumbGraphEncoding from '../public/images/works/graph-encoding.png'
import thumbShareCamps from '../public/images/works/sharecamps.png'
import thumbRailCommodity from '../public/images/works/rail-commodity.png'
import thumbcandy2d from '../public/images/works/candy2d.png'
import thumbsketcher from '../public/images/works/sketcher.png'
import thumbFractals from '../public/images/works/fractals.png'
import thumbPageRank from '../public/images/works/pagerank.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="chip8" title="Chip-8" thumbnail={thumbChip8}>
            A simple C++ based Chip 8 Emulator
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="reactblogapp"
            title="React Blog App"
            thumbnail={thumbBlogApp}
          >
            Simple React App for blogging
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="graphencoding"
            title="EDS"
            thumbnail={thumbGraphEncoding}
          >
            An Information Security System based on graph algorithms
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="sharecamps" thumbnail={thumbShareCamps} title="Share Camps">
            A web platform to share and review the campgrounds.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="railcommodity"
            thumbnail={thumbRailCommodity}
            title="Rail Goods"
          >
            A railway commodity reservation system to handle goods without manual intervention
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="candy2d" thumbnail={thumbcandy2d} title="Candy 2D">
            An interactive 2D Game Engine built in C++
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="sketcher" thumbnail={thumbsketcher} title="Sketcher">
            A real time sketcher with both normal and inverted sketching
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="fractals"
            thumbnail={thumbFractals}
            title="Newton Fractals"
          >
            Newton Fractal generator using Mandelbrot algorithm
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pagerank" thumbnail={thumbPageRank} title="Page Rank">
            Page rank algorithm implemented in C++
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
