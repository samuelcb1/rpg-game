import { useState } from 'react';
import { Col, Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';




function CarouselPersonagem({ res }: any) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: any) => {
        setIndex(selectedIndex);
    };



    return (
        <Carousel fade style={{ paddingTop: "1rem" }} className='container'>
            {res.map((res: any, index: any) => {
                return (
                    <Carousel.Item>
                        <Col md={10} xs={20} xl={8} xxl={8} className='container' >
                            <Image key={index} src={res.imageurl.url} style={{ borderRadius: "1rem" }} fluid />
                        </Col>
                        <Carousel.Caption style={{ display: "flex", justifyContent: "space-around" }}>
                            <div>
                                <h3>Jogador(a)</h3>
                                <h2>{res.name[0].text}</h2>
                            </div>
                            {res.charcter_name[0].text !== "Gamemaster" &&
                                <div>
                                    <h3 style={{ color: "#0cf308 " }}>Personagem</h3>
                                    <h2 style={{ color: "#0cf308 " }}>{res.charcter_name[0].text}</h2>
                                </div>
                            }
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })
            }
        </Carousel>
    );
}

export default CarouselPersonagem;


