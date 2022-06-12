import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "../components/layout";
import Slider from "../components/Slider";
import TopBar from "../components/TopBar";
import { CarList } from "../types/carList";

export const getServerSideProps: GetServerSideProps = async () => {
  const baseUrl = process.env.API_BASE_URL;

  const res = await fetch(`${baseUrl}/inventory/car/search`);

  const cars: CarList = await res.json();
  console.log(cars);

  return {
    props: {
      cars,
    },
  };
};

function Home({ cars }: { cars: CarList }) {
  return (
    <Layout>
      <div className="">
        <Head>
          <title>Auto test app</title>
          <meta name="description" content="Auto test app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Slider></Slider>
        <ul>
          {cars.result.map((car) => {
            return (
              <a key={car.id} href={`/car/${car.id}`}>
                <li>{car.title}</li>
              </a>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}

export default Home;
