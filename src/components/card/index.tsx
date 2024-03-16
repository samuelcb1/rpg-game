import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function TextExample() {
    return (
        <Card style={{ width: '26rem', marginTop: "2.5rem" }} className='container'>
            <Card.Body>
                <Card.Title>Resumo do Personagem</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Zhak Andelius</Card.Subtitle>
                <Card.Text>
                   Nasceu em uma vila envolta em mistérios sombrios. Desde jovem, ele manifestou uma ligação sobrenatural com as sombras. Identificado por um sábio local, foi encaminhado a Malachai, um feiticeiro das sombras experiente.
                    Treinado nas artes sombrias, Zhak Andelius descobriu sua vocação como guardião contra ameaças das trevas. Ao descobrir um culto chamado Devoradores da Noite, dedicou-se a impedir um mal ancestral.
                </Card.Text>
                <Card.Link href="https://www.dndbeyond.com/characters/116551629">
                    <Button>Link Para a Ficha do personagem</Button>
                </Card.Link>
            </Card.Body>
        </Card>
    );
}

export default TextExample;