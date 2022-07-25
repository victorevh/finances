import { Container } from "./styles";

export function TransactionTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>25/08/2022</td>
                    </tr>
                    <tr>
                        <td>Mensalidade Faculdade</td>
                        <td className="withdraw">- R$800.00</td>
                        <td>Educação</td>
                        <td>25/08/2022</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    );
}