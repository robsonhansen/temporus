import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Página não encontrada</h1>
        <p>Desculpe, a página que você está procurando não existe.</p>
      </Container>
    </MainTemplate>
  );
}
