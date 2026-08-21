import { useState } from "react";
import { Title, Desc } from "./styles/PageHeader.style";
import RoomSearch from "../components/RoomSearch";
import CheckBox from "../components/CheckBox";
import {
  DateNav,
  DateArrowButton,
  DateLabel,
  CheckSection,
  StudentColumn,
  StudentColumnTitle,
  SaveRow,
  SaveButton,
} from "./styles/CheckManage.style";

const ROOMS = [
  101, 102, 103, 104, 105, 106, 107, 108, 109,
  110, 111, 112, 113, 114, 115, 116, 117, 118, 119,
  120, 121, 122, 123,
  201, 202, 203, 204, 205, 206, 207, 208, 209,
  210, 211, 212, 213, 214, 215, 216, 217, 218, 219,
  220, 221, 222, 223,
  301, 302, 303, 304, 305, 306, 307, 308, 309,
  310, 311, 312, 313, 314, 315, 316, 317, 318, 319,
  320, 321, 322, 323,
  401, 402, 403, 404, 405, 406, 407, 408, 409,
  410, 411, 412, 413, 414, 415, 416, 417, 418, 419,
  420, 421, 422, 423,
  501, 502, 503, 504, 505, 506, 507, 508, 509,
  510, 511, 512, 513, 514, 515, 516, 517, 518, 519,
  520, 521, 522, 523,
];

const CHECK_ITEMS = [
  "하치와레 인형 사기",
  "먼작귀 애니 보기",
  "집가기",
  "학교 · 기숙사 제거",
  "바닥 물걸레질",
  "옷장 정리정돈",
];

function toDateKey(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function startOfDay(date: Date) {
  const next = new Date(date);
  next.setHours(0, 0, 0, 0);
  return next;
}

function addDays(date: Date, amount: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function formatDateLabel(date: Date, isToday: boolean) {
  const label = date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  });
  return isToday ? `${label} · 오늘` : label;
}

function CheckManage() {
  const today = startOfDay(new Date());

  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedRoom, setSelectedRoom] = useState(ROOMS[0]);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [savedItems, setSavedItems] = useState<Set<string>>(new Set());

  const dateKey = toDateKey(selectedDate);
  const isToday = dateKey === toDateKey(today);

  const isDirty =
    checkedItems.size !== savedItems.size ||
    [...checkedItems].some((key) => !savedItems.has(key));

  const changeCheck = (
    room: number,
    idx: number,
    alpha: string,
    status: boolean,
  ) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      const key = `${dateKey}-${room}-${alpha}-${idx}`;
      if (status) {
        next.add(key);
      } else {
        next.delete(key);
      }
      return next;
    });
  };

  const handleSave = () => {
    if (!isDirty) return;
    setSavedItems(new Set(checkedItems));
  };

  return (
    <>
      <Title>청소 관리</Title>
      <Desc>날짜와 호실을 선택해 A·B 학생 담당 항목을 수정하세요</Desc>

      <DateNav>
        <DateArrowButton
          aria-label="이전 날짜"
          onClick={() => setSelectedDate((d) => addDays(d, -1))}
        >
          ‹
        </DateArrowButton>

        <DateLabel $isToday={isToday}>
          {formatDateLabel(selectedDate, isToday)}
        </DateLabel>

        <DateArrowButton
          aria-label="다음 날짜"
          disabled={isToday}
          onClick={() => setSelectedDate((d) => addDays(d, 1))}
        >
          ›
        </DateArrowButton>
      </DateNav>

      <RoomSearch
        rooms={ROOMS}
        selectedRoom={selectedRoom}
        setSelectedRoom={setSelectedRoom}
      />

      <CheckSection>
        <StudentColumn>
          <StudentColumnTitle>A 학생 담당</StudentColumnTitle>
          {CHECK_ITEMS.map((text, idx) => (
            <CheckBox
              key={text}
              text={text}
              idx={idx}
              room={selectedRoom}
              alpha="A"
              status={checkedItems.has(`${dateKey}-${selectedRoom}-A-${idx}`)}
              changeCheck={changeCheck}
            />
          ))}
        </StudentColumn>

        <StudentColumn>
          <StudentColumnTitle>B 학생 담당</StudentColumnTitle>
          {CHECK_ITEMS.map((text, idx) => (
            <CheckBox
              key={text}
              text={text}
              idx={idx}
              room={selectedRoom}
              alpha="B"
              status={checkedItems.has(`${dateKey}-${selectedRoom}-B-${idx}`)}
              changeCheck={changeCheck}
            />
          ))}
        </StudentColumn>
      </CheckSection>

      <SaveRow>
        <SaveButton type="button" $dirty={isDirty} onClick={handleSave}>
          {isDirty ? "변경사항 저장" : "저장됨"}
        </SaveButton>
      </SaveRow>
    </>
  );
}

export default CheckManage;
