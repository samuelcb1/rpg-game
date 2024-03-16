import { getPrismicClient } from "@/services/prismic";
import { GetServerSideProps } from "next"
import Prismic from '@prismicio/client'
import { Image } from "react-bootstrap";
import styles from './styles.module.css'
import { useEffect } from "react";

interface ContentInfo {
    url: string
    name_character: string
    history: string
    points_life: string
    forca_points: string
    forca: number,
    detreza_points: string
    destreza: number
    constituicao_points: string
    cosntituicao: number
    inteligencia_points: string
    inteligencia: number
    sabedoria_points: string
    sabedoria: string
    carisma_points: string
    carisma: string
    spell: string
}

interface Card {
    infoCard: ContentInfo
}

export default function Card({ infoCard }: Card) {


    const dano = Number(infoCard.points_life) - 3

    return (
        <div className="col-xs-2 col-md-10" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className={styles.main} style={{ borderRadius: "1rem", padding: "1rem", margin: "3rem", backgroundRepeat: "no-repeat", border: "5px solid #000", backgroundPosition: "center center", backgroundImage: "url(/images/background/rascunho.png)" }}>
                    <div className="row">
                        <h1>Ficha do Personagem</h1>
                        <Image style={{ borderRadius: "2rem" }} className="col-xs-10 col-md-4" src={infoCard.url} />
                        <div className="row col-md-8">
                            <div className="col-md-6" style={{ alignItems: "center", flexDirection: "column", display: "flex", border: "1px solid #FFF", borderTopLeftRadius: "1rem", }}>
                                <h3>Força</h3>
                                <h1 style={{ background: "#edd6d6", padding: "5px", borderRadius: "1rem", width: "30%", display: "flex", justifyContent: "center", }}>{infoCard.forca}</h1>
                                <h3 style={{ background: "#edd6d6", width: "20%", padding: "5px", borderRadius: "25rem", display: "flex", justifyContent: "center" }}>{infoCard.forca_points}</h3>
                            </div>

                            <div className="col-md-6" style={{ alignItems: "center", flexDirection: "column", display: "flex", border: "1px solid #FFF", borderTopRightRadius: "1rem" }}>
                                <h3>Destreza</h3>
                                <h1 style={{ background: "#edd6d6", padding: "5px", borderRadius: "1rem", width: "30%", display: "flex", justifyContent: "center", }}>{infoCard.destreza}</h1>
                                <h3 style={{ background: "#edd6d6", width: "20%", padding: "5px", borderRadius: "25rem", display: "flex", justifyContent: "center" }}>{infoCard.detreza_points}</h3>
                            </div>

                            <div className="col-md-6" style={{ alignItems: "center", flexDirection: "column", display: "flex", border: "1px solid #FFF" }}>
                                <h3>Constituição</h3>
                                <h1 style={{ background: "#edd6d6", padding: "5px", borderRadius: "1rem", width: "30%", display: "flex", justifyContent: "center" }}>{infoCard.cosntituicao}</h1>
                                <h3 style={{ background: "#edd6d6", width: "20%", padding: "5px", borderRadius: "25rem", display: "flex", justifyContent: "center" }}>{infoCard.constituicao_points}</h3>
                            </div>

                            <div className="col-md-6" style={{ alignItems: "center", flexDirection: "column", display: "flex", border: "1px solid #FFF" }}>
                                <h3>Inteligencia</h3>
                                <h1 style={{ background: "#edd6d6", padding: "5px", borderRadius: "1rem", width: "30%", display: "flex", justifyContent: "center" }}>{infoCard.inteligencia}</h1>
                                <h3 style={{ background: "#edd6d6", width: "20%", padding: "5px", borderRadius: "25rem", display: "flex", justifyContent: "center" }}>{infoCard.inteligencia_points}</h3>
                            </div>

                            <div className="col-md-6" style={{ alignItems: "center", flexDirection: "column", display: "flex", border: "1px solid #FFF", borderBottomLeftRadius: "1rem" }}>
                                <h3>Sabedoria</h3>
                                <h1 style={{ background: "#edd6d6", padding: "5px", borderRadius: "1rem", width: "30%", display: "flex", justifyContent: "center" }}>{infoCard.sabedoria}</h1>
                                <h3 style={{ background: "#edd6d6", width: "20%", padding: "5px", borderRadius: "25rem", display: "flex", justifyContent: "center" }}>{infoCard.sabedoria_points}</h3>
                            </div>

                            <div className="col-md-6" style={{ alignItems: "center", flexDirection: "column", display: "flex", border: "1px solid #FFF", borderBottomRightRadius: "1rem" }}>
                                <h3>Carisma</h3>
                                <h1 style={{ background: "#edd6d6", padding: "5px", borderRadius: "1rem", width: "30%", display: "flex", justifyContent: "center" }}>{infoCard.carisma}</h1>
                                <h3 style={{ background: "#edd6d6", width: "20%", padding: "5px", borderRadius: "25rem", display: "flex", justifyContent: "center" }}>{infoCard.carisma_points}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8" style={{ width: "100%", display: "flex", flexDirection: "row", gap: "7rem" }}>
                        <div style={{ width: "30%", display: "flex", alignItems: "center", justifyContent: "center", margin: "5px", flexDirection: "column" }}>
                            <h3>Pontos de Vida</h3>
                            <h1 style={{ background: "#edd6d6", padding: "5px", borderRadius: "1rem", width: "30%", display: "flex", justifyContent: "center" }}>{infoCard.points_life}</h1>
                        </div>

                        <div className="col-md-7">
                            <h3>Magias</h3>
                            <p>{infoCard.spell}</p>
                        </div>
                    </div>


                    <div>
                        <h3>Historia do personagen</h3>
                        <div className="col" style={{ width: "100%" }}>
                            <h1 className="col-md-4">{infoCard.name_character}</h1>
                            <p className="d-flex col-md-10">{infoCard.history}</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}


export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
    const { alt } = params;
    const prismic = getPrismicClient();
    const response = await prismic.query([
        Prismic.Predicates.at('document.type', 'character')
    ])

    const res = response.results

    const teste = res.filter((res) => res.uid === alt)

    const info = await prismic.getByUID('character', teste[0].uid, {})

    const infoCard = {
        url: info.data.character_image.url,
        name_character: info.data.name_character[0].text,
        history: info.data.history[0].text,
        points_life: info.data.points_life,
        forca_points: info.data.forca_points[0].text,
        forca: info.data.forca,
        detreza_points: info.data.detreza_points[0].text,
        destreza: info.data.destreza,
        constituicao_points: info.data.constituicao_points[0].text,
        cosntituicao: info.data.cosntituicao,
        inteligencia_points: info.data.inteligencia_points[0].text,
        inteligencia: info.data.inteligencia,
        sabedoria_points: info.data.sabedoria_points[0].text,
        sabedoria: info.data.sabedoria,
        carisma_points: info.data.carisma_points[0].text,
        carisma: info.data.carisma,
        spell: info.data.spells[0].text
    }



    return {
        props: {
            infoCard
        }
    }
}