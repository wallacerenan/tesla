import { PageProps } from 'types/page'
import { Container } from './styles'
import { models } from 'mocks/models'

import Head from 'next/head'
import ModelSection from 'components/Model/ModelSection'
import ModelsWrapper from 'components/Model/ModelsWrapper'
import ModelData from 'components/Model/ModelData'
import Header from 'components/Header'

const HomeTemplate: React.FC<PageProps> = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <Header />
        <ModelsWrapper>
          <div>
            {models.map(model => (
              <ModelSection
                key={model.name}
                modelImage={model.imgSrc}
                modelName={model.name}
                overlayNode={<ModelData modelName={model.name} />}
              />
            ))}
          </div>
        </ModelsWrapper>
      </Container>
    </>
  )
}

export default HomeTemplate
