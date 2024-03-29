import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../firebase";

const Detail = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);

  return (
    <Container>
      <Background data-aos="fade-right"
        data-aos-delay="900"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-once="true">
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </Background>
      <PageContent data-aos="fade-right"
        data-aos-delay="1000"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-once="true">
        <ImageTitle>
          <img src={detailData.titleImg} alt={detailData.title} />
        </ImageTitle>
        <UnderImage>
          <Additionals>
            <img src={detailData.classification} alt={detailData.title} />
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FD4912EB883B7CCB847EB9C62E1FC853D547CAF7DF940B9086AE35AFAD0848AB/scale?width=2400" />
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FAE63AC7AC11C27C949E1856CF188BF09FC20EA52AEA3B65B43C24EEB5F29BFD/scale?width=240" />
          </Additionals>
          <SubTitle>{detailData.subTitle}</SubTitle>
        </UnderImage>
        <Details>{detailData.subTitle2}</Details>
        <ContentMeta>
          <Controls>
            <Player>
              <img src="/images/play-icon-white.png" alt="" />
              <span>Play</span>
            </Player>
            <Trailer>
              <span>Trailer</span>
            </Trailer>
            <AddList>
              <span />
              <span />
            </AddList>
          </Controls>
          <Description>{detailData.description}</Description>
        </ContentMeta>
      </PageContent>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);
  background-image: radial-gradient(
    farthest-side at 73% 21%,
    transparent,
    rgb(26, 29, 41)
  );
  width: 100vw;
  height: 100vh;
  position: absolute;
  inset: 0px;

  @media (max-width: 768px) {
    background-image: radial-gradient(at 45% 40%, transparent, rgb(26, 29, 41));
    display: flex;
    justify-content: center;
  }
`;

const PageContent = styled.div`
  margin-left: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  bottom: 0px;
  top: 10px;

  @media (max-width: 768px) {
    margin-left: 0px;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 50px;
  }
`;

const UnderImage = styled.div`
  display: flex;
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    
    
    @media (max-width: 768px) {
      width: initial;
      width: 100vw;
      object-fit: cover;
      }
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  img {
    max-width: 341px;
    min-width: 100px;
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center !important;
    align-items: center;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 32px;
  min-height: 56px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  background: #0063e5;
  transition-duration: 400ms;
  border: none;
  color: white;
  img {
    width: 20px;
    margin-right: 10px;
  }
  &:hover {
    background: #006eff;
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid #c0c0c06e;
  color: rgb(249, 249, 249);

  &:hover {
    background: rgb(249, 249, 249);
    color: black;
  }
`;

const AddList = styled.div`
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  transition-duration: 400ms;
  cursor: pointer;

  &:hover {
    background-color: #0063e5;
  }

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;
  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;
    img {
      width: 80%;
    }
  }
`;

const Additionals = styled.div`
  min-width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  height: 20px;
  left: 65px;

  img {
    height: 20px;
    width: 100%;
    margin-left: 5px;
    left: 5px;
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 13px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;

    img {
      height: 20px;
      width: 50%;
    }
  }
`;

const Details = styled.div`
  color: rgb(249, 249, 249);
  font-size: 13px;
  margin: 5px 5px;
  max-width: 80%;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  padding-right: 20px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    display: none;
  }
`;

export default Detail;
