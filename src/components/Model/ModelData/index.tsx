import { Buttons, Container, Heading } from './styles'

type Props = {
  modelName: string
}

const ModelData: React.FC<Props> = ({ modelName }) => {
  return (
    <Container>
      <Heading>
        <h1>{modelName}</h1>
        <p>
          Order Online for <span className="link">Touchless Delivery</span>
        </p>
      </Heading>
      <Buttons>
        <button className="black">Custom Order</button>
        <button className="white">Existing Inventary</button>
      </Buttons>
    </Container>
  )
}

export default ModelData
