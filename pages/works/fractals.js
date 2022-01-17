import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Newton Fractals">
    <Container>
      <Title>
        Newton Fractals<Badge>2019</Badge>
      </Title>
      <P>
        A simple C++ program that can generate Newton Fractals(Curves 
        that are non-differentiable at every point) using Mandelbrot Algorithm.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/shashanksh2000/Newton-Fractals">
          @github/shashanksh2000/Newton-Fractals
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Linux </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C++, SFML</span>
        </ListItem>
        <ListItem>
          <Meta>Wiki</Meta>
          <Link href="https://en.wikipedia.org/wiki/Newton_fractal">
            More about Newton Fractals <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/fractals.png" alt="Newton Fractals" />
      <WorkImage src="/images/works/fractals-1.png" alt="Newton Fractals" />
      <WorkImage src="/images/works/fractals-2.png" alt="Newton Fractals" />
      <WorkImage src="/images/works/fractals-3.png" alt="Newton Fractals" />
    </Container>
  </Layout>
)

export default Work
