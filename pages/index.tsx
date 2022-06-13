/* eslint-disable @next/next/no-img-element */
import type { NextPage, GetServerSideProps } from "next";
import React from "react";
import Link from "next/link";

import Layout from "../components/layout";
import Slider from "../components/Slider";
import { CarList } from "../types/carList";
import { TopMakes } from "../types/topMakes";

export const getServerSideProps: GetServerSideProps = async () => {
  const baseUrl = process.env.API_BASE_URL;

  const res = await fetch(`${baseUrl}/inventory/car/search`);
  const top = await fetch(`${baseUrl}/inventory/make?popular=true`);

  const cars: CarList = await res.json();
  const topMakes: TopMakes = await top.json();

  return {
    props: {
      cars,
      topMakes,
    },
  };
};

function Home({ cars, topMakes }: { cars: CarList; topMakes: TopMakes }) {
  const showButton = (e: React.MouseEvent, id: string) => {
    const el = document.getElementById(id);
    el?.classList.remove("quick-view");
    el?.classList.add("quick-view-show");
  };
  const hideButton = (e: React.MouseEvent, id: string) => {
    const el = document.getElementById(id);
    el?.classList.add("quick-view");
    el?.classList.remove("quick-view-show");
  };
  return (
    <Layout>
      <div className="">
        <Slider></Slider>
        <div className="home">
          <div className="product-list">
            {cars.result.map((car) => {
              return (
                <div key={car.id} className="product">
                  <div
                    className="image"
                    onMouseOver={(e) => showButton(e, car.id)}
                    onMouseOut={(e) => hideButton(e, car.id)}
                  >
                    <img className="cardmedia" src={car.imageUrl} alt="" />
                    <button id={car.id} className="quick-view">
                      <Link href={`/car/${car.id}`}>Quick View</Link>
                    </button>
                  </div>
                  <hr />
                  <Link href={`/car/${car.id}`}>
                    <h2>{car.title}</h2>
                  </Link>
                  <div className="value">
                    ${Number(car.loanValue.toFixed()).toLocaleString()}
                  </div>
                  <button className="btn-primary">Add to cart</button>
                </div>
              );
            })}
          </div>
          <div className="sidebar">
            <h2 className="accent-heading">Search Here...</h2>
            <div className="search">
              <input placeholder="Product name" type="text" />{" "}
              <button className="btn-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={4}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <h2 className="accent-heading">Popular Makes</h2>
            {topMakes.makeList.map((make) => {
              return (
                <div className="popular" key={make.id}>
                  <input id={make.name} type="checkbox" />
                  <label htmlFor={make.name}>{make.name}</label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
