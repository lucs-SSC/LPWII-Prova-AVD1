import { Container } from "./styles";

export function Info() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Nome do Evento</th>
                        <th>Local</th>
                        <th>Dia da Semana</th>
                        <th>Horário</th>
                        <th colSpan={3}>Ações</th> 
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="title">Show do Fábio JR</td>
                        <td>Barra Tênis Clube</td>
                        <td>01/12/2021</td>
                        <td>22hrs</td>
                        <td>
                            <button className="delete">
                                Excluir
                            </button>
                        </td>
                        <td>
                            <button className="like">
                                Like
                            </button>
                        </td>
                        <td>
                            <button className="deslike">
                                Deslike
                            </button>
                        </td>
                    </tr>
                    
                    <tr>
                        <td className="title">Mumuzinho</td>
                        <td>Barra Tênis Clube</td>
                        <td>04/12/2021</td>
                        <td>20hrs</td>
                        <td>
                            <button className="delete">
                                Excluir
                            </button>
                        </td>
                        <td>
                            <button className="like">
                                Like
                            </button>
                        </td>
                        <td>
                            <button className="deslike">
                                Deslike
                            </button>
                        </td>
                    </tr>
                    
                    <tr>
                        <td className="title">Thiaguinho</td>
                        <td>Barra Tênis Clube</td>
                        <td>02/12/2021</td>
                        <td>16hrs</td>
                        <td>
                            <button className="delete">
                                Excluir
                            </button>
                        </td>
                        <td>
                            <button className="like">
                                Like
                            </button>
                        </td>
                        <td>
                            <button className="deslike">
                                Deslike
                            </button>
                        </td>
                    </tr>  
                </tbody>
            </table>
        </Container>
    )
}