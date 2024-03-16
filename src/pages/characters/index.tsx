import { GetStaticProps } from 'next';
import CardCharacter from "@/components/token-characters";

import { getPrismicClient } from '../../services/prismic'
import Prismic from '@prismicio/client'


export default function Characters({ resObject }: any) {

    return (
        <div>
            <CardCharacter res={resObject} />
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();

    const response = await prismic.query([
        Prismic.Predicates.at('document.type', 'character_info')
    ])

    const res = response.results[0].data.cards

    let resObject = Object.values(res)

    return {
        props: {
            resObject
        },
        revalidate: 60 * 2 // revalida a pagina a cada 2 minutos
    }
}