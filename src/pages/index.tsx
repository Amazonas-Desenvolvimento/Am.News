import { GetStaticProps } from 'next';
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>ig.News | Início</title>
      </Head>
        <main className={styles.contentContainer}>
          <section className={styles.hero}>
            <span>👋 Olá, GENTER</span>
            <h1>Receba novas informações sobre <span>Programação</span> e <span>Tecnologia </span>no mundo.</h1>
            <p>Tenha acesso a todas as publicações <br /> <span>por {product.amount}</span></p>
            <SubscribeButton priceId={product.priceId} />
          </section>
          <img src="/images/avatar.svg" alt="Coding" />
        </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JuXLWCFml9emKLrohU1hiRo');

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(price.unit_amount / 100)
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, //60 segundos x 1 hora/60 minutos * 24 horas
  }
};
