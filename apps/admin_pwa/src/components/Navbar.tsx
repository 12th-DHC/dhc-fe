import styled from "@emotion/styled";
import type { Dispatch, SetStateAction } from "react";

type Floors = 1 | 2 | 3 | 4 | 5;

interface NavbarProps {
  floor: Floors;
  setFloor: Dispatch<SetStateAction<Floors>>;
  floorRooms: number[];
  roomIdx: number;
  setRoomIdx: Dispatch<SetStateAction<number>>;
}

const SelectedColor = "#7C3AED";
const UnSelectedColor = "#9CA3AF";

const NavbarBox = styled.nav`
  width: 100%;
  height: 18%;
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 10px 14px 12px;
  border-top: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ffffff;
`;

const FloorSelectBox = styled.div`
  width: 100%;
  height: 32%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

const FloorButton = styled.button<{ selected?: boolean }>`
  flex: 1;
  max-width: 64px;
  height: 34px;
  padding: 0 10px;
  border: none;
  border-radius: 10px;
  background-color: ${({ selected }) =>
    selected ? SelectedColor : "#F3F4F6"};
  color: ${({ selected }) =>
    selected ? "#FFFFFF" : "#6B7280"};
  font-size: 13px;
  font-weight: ${({ selected }) =>
    selected ? 700 : 500};
  cursor: pointer;
  transition:
    background-color 0.15s ease,
    color 0.15s ease,
    transform 0.12s ease;

  &:hover {
    background-color: ${({ selected }) =>
      selected ? SelectedColor : "#EDEDF0"};
  }

  &:active {
    transform: scale(0.94);
  }
`;

const RoomSelectBox = styled.div`
  width: 100%;
  height: 68%;
  box-sizing: border-box;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  border-radius: 18px;
  background-color: #f8f8fc;
  border: 1px solid #eeeeF4;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
`;

const RoomArrowButton = styled.button`
  width: 38px;
  height: 42px;
  flex-shrink: 0;
  border: 1px solid #e9e9ed;
  border-radius: 12px;
  background-color: #ffffff;
  color: #6b7280;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  transition:
    background-color 0.15s ease,
    color 0.15s ease,
    transform 0.12s ease;

  &:hover {
    background-color: #f9fafb;
    color: #4b5563;
  }

  &:active {
    transform: scale(0.91);
  }
`;

const RoomInfo = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 0;
  user-select: none;
`;

const RoomNumber = styled.div`
  color: #111827;
  font-size: 23px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.5px;
`;

function Navbar({
  floor,
  setFloor,
  floorRooms,
  roomIdx,
  setRoomIdx,
}: NavbarProps) {
  const changeFloor = (nextFloor: Floors) => {
    setFloor(nextFloor);
    setRoomIdx(0);
  };

  const firstRoom = () => {
    setRoomIdx(0);
  };

  const previousRoom = () => {
    setRoomIdx(prev =>
      prev === 0 ? floorRooms.length - 1 : prev - 1
    );
  };

  const nextRoom = () => {
    setRoomIdx(prev =>
      prev === floorRooms.length - 1 ? 0 : prev + 1
    );
  };

  const lastRoom = () => {
    setRoomIdx(floorRooms.length - 1);
  };

  return (
    <NavbarBox>
      <FloorSelectBox>
        <FloorButton
          selected={floor === 1}
          onClick={() => changeFloor(1)}
        >
          1층
        </FloorButton>

        <FloorButton
          selected={floor === 2}
          onClick={() => changeFloor(2)}
        >
          2층
        </FloorButton>

        <FloorButton
          selected={floor === 3}
          onClick={() => changeFloor(3)}
        >
          3층
        </FloorButton>

        <FloorButton
          selected={floor === 4}
          onClick={() => changeFloor(4)}
        >
          4층
        </FloorButton>

        <FloorButton
          selected={floor === 5}
          onClick={() => changeFloor(5)}
        >
          5층
        </FloorButton>
      </FloorSelectBox>

      <RoomSelectBox>
        <RoomArrowButton aria-label="첫 방" onClick={firstRoom}>
          «
        </RoomArrowButton>

        <RoomArrowButton aria-label="이전 방" onClick={previousRoom}>
          ‹
        </RoomArrowButton>

        <RoomInfo>
          <RoomNumber>
            {floorRooms[roomIdx]}호
          </RoomNumber>
        </RoomInfo>

        <RoomArrowButton onClick={nextRoom}>
          ›
        </RoomArrowButton>

        <RoomArrowButton onClick={lastRoom}>
          »
        </RoomArrowButton>
      </RoomSelectBox>
    </NavbarBox>
  );
}

export default Navbar;