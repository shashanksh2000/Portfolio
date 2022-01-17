import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="EDS">
    <Container>
      <Title>
        EDS (Encyption Decryption System)<Badge>2020</Badge>
      </Title>
      <P>
        An Information Security system to safely transfer messages between 
        two clients without being intercepted and decrypted by third party. 
        It uses symmetric encryption techniques and uses diffie hellman key 
        exchange algorithm to avoid its single vulnerability through 
        asymmetric key exchange.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/shashanksh2000/Graph-Encoding">
          @github/shashanksh2000/Graph-Encoding
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Linux/macOS </span>
        </ListItem>
        <ListItem>
          <Meta>Prerequisites</Meta>
          <span>C++, Data Structures and Algorithms, Information Security</span>
        </ListItem>
        <ListItem>
          <Meta>Other Examples</Meta>
          <Link href="https://github.com/shashanksh2000/Information-Security">
            Information Security Algorithms <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/graph-encoding.png" alt="Graph-Encoding" />
      <WorkImage src="/images/works/graph-encoding-1.png" alt="Graph-Encoding" />
      <WorkImage src="/images/works/graph-encoding-2.png" alt="Graph-Encoding" />
    </Container>
  </Layout>
)

export default Work
