import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { CarList } from "../types/carList";

export const getServerSideProps: GetServerSideProps = async () => {
  const baseUrl = process.env.API_BASE_URL;

  const res = await fetch(`${baseUrl}/inventory/car/search`);
  console.log(process.env);

  const cars: CarList = await res.json();

  return {
    props: {
      cars,
    },
  };
};

function Home({ cars }: { cars: CarList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Auto test app</title>
        <meta name="description" content="Auto test app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul>
          {cars.result.map((car) => {
            return (
              <a key={car.id} href={`/car/${car.id}`}>
                <li>{car.title}</li>
              </a>
            );
          })}
        </ul>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export default Home;
