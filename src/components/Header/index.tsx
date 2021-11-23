import logoImg from '../../assets/logo.png'
import { Container, Content } from './styles'

export function Header(){
    return ( 
        <Container>
            <Content>
                <img src={logoImg} alt="logo prova" />
                <button type="button">
                    Incluir
                </button>
            </Content>
        </Container>
    )
}