import type { GetStaticProps, NextPage } from 'next'
import { PageProps } from 'types/page'

import Template from 'templates/HomeTemplate'

const HomePage: NextPage<PageProps> = props => {
  return <Template {...props} />
}

export const getStaticProps: GetStaticProps<PageProps> = () => {
  return {
    props: {
      title: 'Electric Cars, Solar & Clean Energy | Tesla',
    },
  }
}

export default HomePage
