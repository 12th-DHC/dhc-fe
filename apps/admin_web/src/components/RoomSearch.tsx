import styled from "@emotion/styled";
import { useState, type Dispatch, type SetStateAction } from "react";

interface RoomSearchProps {
  rooms: number[];
  selectedRoom: number;
  setSelectedRoom: Dispatch<SetStateAction<number>>;
}

const SelectedColor = "#7C3AED";

const SearchBox = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  border-radius: 18px;
  background-color: #f8f8fc;
  border: 1px solid #eeeef4;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
  padding: 10px;
`;

const SearchInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 42px;
  padding: 0 14px;
  border-radius: 12px;
  border: 1px solid #e9e9ed;
  background-color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  color: #111827;

  &:focus {
    outline: none;
    border-color: ${SelectedColor};
  }
`;

const ResultList = styled.ul`
  position: absolute;
  top: calc(100% - 2px);
  left: 10px;
  right: 10px;
  z-index: 10;
  list-style: none;
  margin: 8px 0 0;
  padding: 6px;
  max-height: 220px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: #ffffff;
  border: 1px solid #eeeef4;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
`;

const ResultItem = styled.li<{ selected?: boolean }>`
  padding: 10px 12px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  color: ${({ selected }) => (selected ? "#FFFFFF" : "#374151")};
  background-color: ${({ selected }) =>
    selected ? SelectedColor : "#ffffff"};
  border: 1px solid ${({ selected }) => (selected ? SelectedColor : "#eeeef4")};

  &:hover {
    background-color: ${({ selected }) => (selected ? SelectedColor : "#F3F4F6")};
  }
`;

const NoResult = styled.li`
  padding: 10px 12px;
  font-size: 13px;
  color: #9ca3af;
  text-align: center;
  list-style: none;
`;

function RoomSearch({ rooms, selectedRoom, setSelectedRoom }: RoomSearchProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const results = rooms.filter((room) => String(room).includes(query.trim()));

  const selectRoom = (room: number) => {
    setSelectedRoom(room);
    setIsOpen(false);
  };

  return (
    <SearchBox>
      <SearchInput
        type="text"
        inputMode="numeric"
        placeholder="호실 검색 (예: 301)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 100)}
      />

      {isOpen && (
        <ResultList>
          {results.length === 0 ? (
            <NoResult>검색 결과가 없어요</NoResult>
          ) : (
            results.map((room) => (
              <ResultItem
                key={room}
                selected={selectedRoom === room}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => selectRoom(room)}
              >
                {room}호
              </ResultItem>
            ))
          )}
        </ResultList>
      )}
    </SearchBox>
  );
}

export default RoomSearch;
