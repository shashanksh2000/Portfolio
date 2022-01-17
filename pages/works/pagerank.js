import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Page Rank">
    <Container>
      <Title>
        Page Rank Algorithm<Badge>2021</Badge>
      </Title>
      <P>
      PageRank is an algorithm used by Google Search to rank web pages 
      in their search engine results. It is named after both the term 
      "web page" and co-founder Larry Page. PageRank is a way of 
      measuring the importance of website pages.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/shashanksh2000/Page-Rank">
          @github/shashanksh2000/Page-Rank
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Linux/macOS </span>
        </ListItem>
        <ListItem>
          <Meta>Prerequisites</Meta>
          <span>C++, Information Retrieval</span>
        </ListItem>
        <ListItem>
          <Meta>Wiki</Meta>
          <Link href="https://en.wikipedia.org/wiki/PageRank">
            More about Page Rank <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/pagerank.png" alt="Page-Rank" />
      <WorkImage src="/images/works/page-rank-1.png" alt="Page-Rank" />
    </Container>
  </Layout>
)

export default Work
