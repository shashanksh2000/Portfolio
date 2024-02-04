import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const OrgSection = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding-left: 3.4em;
  text-indent: -3.4em;
`

export const OrgName = styled.span`
  font-weight: bold;
  margin-top: 0.5em;
  margin-right: 1em;
`

export const WorkDuration = styled.span`
  margin-left: auto;
  margin-top: 0.5em;
  text-align: right;
`

const FlexContainer = styled.div`
  display: flex;
`

const WorkDescBullet = styled(Box)`
  display: inline-block;
  vertical-align: top;
  margin-right: 0.5em;
  padding-left: 1em;
`

const BulletText = styled.span`
  display: inline-block;
  vertical-align: top;
`

export const BulletPoint = ({ children }) => (
  <FlexContainer>
    <WorkDescBullet>•</WorkDescBullet>
    <BulletText>{ children }</BulletText>
  </FlexContainer>
);
