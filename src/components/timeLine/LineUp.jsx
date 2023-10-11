import React from "react";
import * as S from "./style";

export const LineUp = ({ festivalDate }) => {
  const firstDay = [
    {
      engname: "KwonEunBi",
      name: "권은비",
      time: "20:00 ~ 22:00",
      img: "/timetable/권은비.PNG"
    },
    {
      engname: "Day Break",
      name: "데이브레이크",
      time: "20:00 ~ 22:00",
      img: "/timetable/데이브레이크.PNG"
    }
  ];
  const secondDay = [
    {
      engname: "Park Myung Soo",
      name: "박명수",
      time: "20:00 ~ 22:00",
      img: "/timetable/박명수.png"
    }
  ];

  return (
    <S.LineUpWrapper isheight={festivalDate == 11 ? "640px" : "400px"}>
      <S.Fire1 src="/timetable/fire1.png" />
      <S.Fire2 src="/timetable/fire1.png" />
      <S.Fire3 src="/timetable/fire1.png" />

      <S.FirePart1 src="/timetable/fire2.png" />
      <S.FirePart2 src="/timetable/fire2.png" />

      <S.Fire2Part1 src="/timetable/fire3.png" />
      <S.Fire2Part2 src="/timetable/fire3.png" />

      <S.BgImg2 src="/timetable/bgImg2.png" alt="img" />
      {festivalDate == 11 && (
        <>
          <S.BgImg3 src="/timetable/bgImg2.png" alt="img" />
          <S.BgImg4 src="/timetable/bgImg3.png" alt="img" />
        </>
      )}

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
        {festivalDate == 11 && (
          <S.LineUpContainer1>
            <S.LineUpList>
              <S.EngName>{firstDay[1].engname}</S.EngName>
              <div>{firstDay[1].name}</div>
              <S.ShowTime>{firstDay[1].time}</S.ShowTime>
            </S.LineUpList>
            <S.LineUpImg src={firstDay[1].img} alt="img" />
          </S.LineUpContainer1>
        )}
      </S.MarginLabel>
    </S.LineUpWrapper>
  );
};
