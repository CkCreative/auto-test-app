import { GetServerSideProps } from "next";
import { CarDetail } from "../../types/carDetail";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const baseUrl = process.env.API_BASE_URL;

  const id = params?.id;

  const res = await fetch(`${baseUrl}/inventory/car/${id}`);
  console.log(process.env);

  const detail: CarDetail = await res.json();

  return {
    props: {
      detail,
    },
  };
};

function carDetail({ detail }: { detail: CarDetail }) {
  return <div>{detail.carName}</div>;
}

export default carDetail;
