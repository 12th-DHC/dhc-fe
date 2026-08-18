import { useEffect, useState } from 'react';
import StudentCheckBox from '../components/StudentCheckBox';
import { PageBox, ScrollBox } from '../styles/Box.style';
import Navbar from '../components/Navbar';

type StatusTuple = [boolean, boolean, boolean, boolean, boolean, boolean];

const ScrollBoxStyle = {
    marginTop: "10%",
}

const RoomData = {
  1: [
    101, 102, 103, 104, 105, 106, 107, 108, 109,
    110, 111, 112, 113, 114, 115, 116, 117, 118, 119,
    120, 121, 122, 123
  ],
  2: [
    201, 202, 203, 204, 205, 206, 207, 208, 209,
    210, 211, 212, 213, 214, 215, 216, 217, 218, 219,
    220, 221, 222, 223
  ],
  3: [
    301, 302, 303, 304, 305, 306, 307, 308, 309,
    310, 311, 312, 313, 314, 315, 316, 317, 318, 319,
    320, 321, 322, 323
  ],
  4: [
    401, 402, 403, 404, 405, 406, 407, 408, 409,
    410, 411, 412, 413, 414, 415, 416, 417, 418, 419,
    420, 421, 422, 423
  ],
  5: [
    501, 502, 503, 504, 505, 506, 507, 508, 509,
    510, 511, 512, 513, 514, 515, 516, 517, 518, 519,
    520, 521, 522, 523
  ]
};

function HomePage() {
  const [currentStatusA, setCurrentStatusA] = useState<StatusTuple>([false, false, false, false, false, false]);
  const [currentStatusB, setCurrentStatusB] = useState<StatusTuple>([false, false, false, false, false, false]);

  const [currentFloor, setCurrentFloor] = useState<keyof typeof RoomData>(2);
  const [currentRoomIdx, setCurrentRoomIdx] = useState<number>(0);

  const [selectedBox, setSelectedBox] = useState<Set<string>>(new Set());

  useEffect(() => {
    const a: StatusTuple = [false, false, false, false, false, false];
    const b: StatusTuple = [false, false, false, false, false, false];
    const currentRoom = RoomData[currentFloor][currentRoomIdx];

    for (let i = 0; i < 6; i++) {
      a[i] = selectedBox.has(`${currentRoom}-A-${i}`)
      b[i] = selectedBox.has(`${currentRoom}-B-${i}`)
    }

    setCurrentStatusA(a);
    setCurrentStatusB(b);
  }, [currentFloor, currentRoomIdx, selectedBox]);

  const changeCheck = (
    room: number,
    idx: number, 
    alpha: string,
    status: boolean
  ) => {
    if (status === true) {
      setSelectedBox(prev => {
        const next = new Set(prev);
        next.add(`${room}-${alpha}-${idx}`);
        return next;
      });
    } else {
      setSelectedBox(prev => {
        const next = new Set(prev);
        next.delete(`${room}-${alpha}-${idx}`);
        return next;
      });
    }
  }
  
  return (
    <PageBox>
      <ScrollBox style={ScrollBoxStyle}>
        <StudentCheckBox status={currentStatusA} alpha={"A"} name={"장성주"} room={RoomData[currentFloor][currentRoomIdx]} changeCheck={changeCheck}/>
        <StudentCheckBox status={currentStatusB} alpha={"B"} name={"장성주"} room={RoomData[currentFloor][currentRoomIdx]} changeCheck={changeCheck}/>
      </ScrollBox>
      <Navbar floor={currentFloor} setFloor={setCurrentFloor} roomIdx={currentRoomIdx} setRoomIdx={setCurrentRoomIdx} floorRooms={RoomData[currentFloor]}/>
    </PageBox>
  )
}

export default HomePage
