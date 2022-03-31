/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import styled from "styled-components";
import A11yTitle from "./A11yTitle";

const Players = ({ players }) => {
  const height = (window.innerHeight * 0.8) / players.length;
  // console.log(
  //   "players rendering",
  //   players.map((p) => p.name)
  // );
  console.log(players);
  return (
    <>
      <A11yTitle element="h3" text="플레이어 목록" />
      <PlayerList height={height}>
        {players.map(({ id, name, src, nickname }) => (
          <Player key={id} height={height}>
            <PlayerImg src={src} alt={`${name} 플레이어`} />
            <PlayerInput
              onChange={(e) => { nickname = e.target.value }}
            />
          </Player>
        ))}
      </PlayerList>
    </>
  );
};

export default React.memo(Players);

const PlayerList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 8rem;
  width: 80%;
  height: ${({ height }) => height};

  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    margin-top: 7rem;
  }
`;

const Player = styled.li`
  width: 20%;
  height: ${({ height }) => height};
`;

const PlayerImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 70%;
  min-height: 3rem;
  min-width: 3rem;
  max-width: 8rem;
  object-fit: cover;
`;

const PlayerInput = styled.input`
  height: 4rem;
  width: 95%;
  border: 2px solid cornflowerblue;
  border-radius: 5px;
  font-size: 1.6rem;
  text-align: center;

  @media ${({ theme }) => theme.mobile} {
    height: 3rem;
    font-size: 1.4rem;
  }

  &::placeholder {
    text-align: center;
    font-size: 1.6rem;
  }

  &:focus {
    box-shadow: 0 0 1px 2px white, 0 0 1px 5px cornflowerblue;
  }

  @media ${({ theme }) => theme.mobile} {
    &::placeholder {
      font-size: 1.4rem;
    }

    &:focus {
      box-shadow: 0 0 1px 1px white, 0 0 1px 2px cornflowerblue;
    }
  }
`;