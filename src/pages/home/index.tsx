import { GetStaticProps } from 'next';
import Card from '@/components/card';
import CarouselPersonagem from '@/components/carrousel';
import Head from 'next/head';

import { getPrismicClient } from '../../services/prismic'
import Prismic from '@prismicio/client'




export default function Home({ resObject }: any) {
    {
        return (
            <div style={{ minHeight: "100%", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundImage: "url(/images/background/background.jpg)" }} >
                <Head>
                    <title>RPG | Home</title>
                    <link rel="icon" type="image/x-icon" href="/images/my_logo.png" />
                </Head>
                <CarouselPersonagem res={resObject} />
            </div>
        );
    }
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();

    const response = await prismic.query([
        Prismic.Predicates.at('document.type', 'teste2')
    ])

    const res = response.results[0].data.images

    let resObject = Object.values(res)

    return {
        props: {
            resObject
        },
        revalidate: 60 * 2 // revalida a pagina a cada 2 minutos
    }
}
