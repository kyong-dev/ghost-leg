import React from "react";
import styled from "styled-components";

const LadderTable = React.memo(({ playerCount, legs, nth }) => {
  return (
    <Body
      playerCount={playerCount}
      isRightEdge={nth === playerCount - 2}
      isLeftEdge={nth === 0}
    >
      <Column>
        {Array.from({ length: 10 }).map((_, idx) => (
          <Row key={idx} isLeg={legs[nth].includes(idx)} />
        ))}
      </Column>
    </Body>
  );
});

const Ladder = ({ playerCount, legs }) => {
  return (
    <LadderWrapper aria-hidden>
      {Array.from({ length: playerCount - 1 }).map((_, idx) => (
        <LadderTable
          key={idx}
          playerCount={playerCount}
          legs={legs}
          nth={idx}
        />
      ))}
    </LadderWrapper>
  );
};

export default React.memo(Ladder);

const Body = styled.tbody`
  width: ${({ playerCount }) => `calc(100% / ${playerCount})`};
  border-left: ${({ isLeftEdge }) =>
    isLeftEdge ? "6px solid black" : "3px solid black"};
  border-right: ${({ isRightEdge }) =>
    isRightEdge ? "6px solid black" : "3px solid black"};

  @media ${({ theme }) => theme.mobile} {
    border-left: ${({ isLeftEdge }) =>
    isLeftEdge ? "4px solid black" : "2px solid black"};
    border-right: ${({ isRightEdge }) =>
    isRightEdge ? "4px solid black" : "2px solid black"};
  }
`;

const Column = styled.tr`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Row = styled.td`
  height: 10%;
  border-bottom: ${({ isLeg }) => isLeg && "6px solid black"};

  @media ${({ theme }) => theme.mobile} {
    border-bottom: ${({ isLeg }) => isLeg && "4px solid black"};
  }
`;

const LadderWrapper = styled.table`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
