import type { RoomEmail } from "../types/RoomEmail.types";

export const roomEmails: RoomEmail[] = [
  {
    room: "201호",
    studentA: { name: "김민준", email: "room201@dorm.ac.kr" },
    studentB: { name: "이서연", email: "room201@dorm.ac.kr" },
  },
  {
    room: "202호",
    studentA: { name: "박도윤", email: "room202@dorm.ac.kr" },
    studentB: { name: "최지우", email: null },
  },
  {
    room: "203호",
    studentA: { name: "정하은", email: "haeun.jung@dorm.ac.kr" },
    studentB: { name: "강주원", email: "juwon.kang@dorm.ac.kr" },
  },
  {
    room: "204호",
    studentA: { name: "윤서준", email: "room204@dorm.ac.kr" },
    studentB: { name: "임채원", email: null },
  },
  {
    room: "301호",
    studentA: { name: "한지호", email: "room301@dorm.ac.kr" },
    studentB: { name: "오수아", email: "room301@dorm.ac.kr" },
  },
  {
    room: "302호",
    studentA: { name: "서준영", email: "room302@dorm.ac.kr" },
    studentB: { name: "문가은", email: null },
  },
];
