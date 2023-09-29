import React from "react";
import * as S from "./style";

export const LineUp = ({ festivalDate }) => {
  const firstDay = [
    {
      engname: "KwonEunBi",
      name: "권은비",
      time: "18:00 ~ 20:00",
      img: "/timetable/권은비.PNG"
    },
    {
      engname: "Day Break",
      name: "데이브레이크",
      time: "18:00 ~ 20:00",
      img: "/timetable/데이브레이크.PNG"
    }
  ];
  const secondDay = [
    {
      engname: "Park Myung Soo",
      name: "박명수",
      time: "18:00 ~ 20:00",
      img: "/timetable/박명수.jpg"
    },
    {
      engname: "Day Break",
      name: "데이브레이크",
      time: "18:00 ~ 20:00",
      img: "/timetable/데이브레이크.PNG"
    }
  ];

  return (
    <S.LineUpWrapper>
      <S.BgImg1 src="/timetable/bgImg1.png" alt="img" />
      <S.BgImg2 src="/timetable/bgImg2.png" alt="img" />
      <S.BgImg3 src="/timetable/bgImg2.png" alt="img" />
      <S.BgImg4 src="/timetable/bgImg3.png" alt="img" />

      <S.LineUpdate>10월 {festivalDate}일</S.LineUpdate>
      <S.MarginLabel>
        <S.LineUpContainer>
          <S.LineUpImg
            src={festivalDate == 11 ? firstDay[0].img : secondDay[0].img}
            alt="img"
          />
          <S.LineUpList>
            <S.EngName>
              {festivalDate == 11 ? firstDay[0].engname : secondDay[0].engname}
            </S.EngName>
            <div>
              {festivalDate == 11 ? firstDay[0].name : secondDay[0].name}
            </div>
            <S.ShowTime>
              {festivalDate == 11 ? firstDay[0].time : secondDay[0].time}
            </S.ShowTime>
          </S.LineUpList>
        </S.LineUpContainer>

        <S.LineUpContainer>
          <S.LineUpList>
            <S.EngName>
              {festivalDate == 11 ? firstDay[1].engname : secondDay[1].engname}
            </S.EngName>
            <div>
              {festivalDate == 11 ? firstDay[1].name : secondDay[1].name}
            </div>
            <S.ShowTime>
              {festivalDate == 11 ? firstDay[1].time : secondDay[1].time}
            </S.ShowTime>
          </S.LineUpList>
          <S.LineUpImg2
            src={festivalDate == 11 ? firstDay[1].img : secondDay[1].img}
            alt="img"
          />
        </S.LineUpContainer>
      </S.MarginLabel>
    </S.LineUpWrapper>
  );
};
