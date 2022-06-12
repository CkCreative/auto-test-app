/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useState } from "react";
import Layout from "../../components/layout";
import { CarDetail } from "../../types/carDetail";
import { CarMedia, CarMediaList } from "../../types/carMedia";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const baseUrl = process.env.API_BASE_URL;

  const id = params?.id;

  const res = await fetch(`${baseUrl}/inventory/car/${id}`);
  const detail: CarDetail = await res.json();

  const media = await fetch(`${baseUrl}/inventory/car_media?carId=${id}`);
  const carMedia: CarMedia = await media.json();
  return {
    props: {
      detail,
      carMedia,
    },
  };
};

function Detail({
  detail,
  carMedia,
}: {
  detail: CarDetail;
  carMedia: CarMedia;
}) {
  const [currenMedia, setCurrentMedia] = useState<CarMediaList>();
  const showImage = (e: React.MouseEvent, media: CarMediaList) => {
    setCurrentMedia(() => media);
    console.log(media);
  };

  return (
    <Layout>
      <div className="detail-page">
        <div className="content">
          <div className="media">
            <div className="current-image">
              {currenMedia && currenMedia?.type.search(/image/) != -1 ? (
                <img src={currenMedia.url} alt="" />
              ) : (
                currenMedia && (
                  <video controls>
                    <source src={currenMedia.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )
              )}
            </div>
            <div className="thumbnails">
              {carMedia.carMediaList &&
                carMedia.carMediaList.map((media) => {
                  if (media.type.search(/video/) != -1) {
                    return (
                      <img
                        onClick={(e) => showImage(e, media)}
                        key={media.id}
                        src="/videoplayer.png"
                        alt="something"
                      />
                    );
                  } else {
                    return (
                      <img
                        key={media.id}
                        onClick={(e) => showImage(e, media)}
                        src={media.url}
                        alt={media.name}
                      />
                    );
                  }
                })}
            </div>
          </div>
          <div className="text">
            <h1>{detail.carName}</h1>
            <p>Year: {detail.year}</p>
            <p>Loan Value: {detail.loanValue}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Detail;
