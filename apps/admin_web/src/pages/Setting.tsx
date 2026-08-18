import { useRef, useState } from "react";
import { Title } from "../styles/PageHeader.style";
import Dropdown from "../components/Dropdown";
import useClickOutside from "../hooks/useClickOutside";
import {
  SettingList,
  SettingCard,
  CardInfo,
  CardTitle,
  CardDesc,
  TimeBadge,
  TimeEditWrapper,
  TimePopover,
  TimeSelectRow,
  ResetButton,
} from "../styles/Setting.style";

const HOURS = Array.from({ length: 24 }, (_, i) => i);
const MINUTES = Array.from({ length: 12 }, (_, i) => i * 5);

function hourLabel(hour: number) {
  if (hour === 0) return "밤 12시";
  if (hour < 6) return `새벽 ${hour}시`;
  if (hour < 12) return `오전 ${hour}시`;
  if (hour === 12) return "낮 12시";
  if (hour < 18) return `오후 ${hour - 12}시`;
  return `밤 ${hour - 12}시`;
}

function formatDeadline(hour: number, minute: number) {
  const label = hourLabel(hour);
  return minute === 0 ? `매일 ${label}` : `매일 ${label} ${minute}분`;
}

function Setting() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(wrapperRef, isOpen, () => setIsOpen(false));

  return (
    <>
      <Title>설정</Title>

      <SettingList>
        <SettingCard>
          <CardInfo>
            <CardTitle>청소 체크 마감 시간</CardTitle>
            <CardDesc>매일 체크가 마감되고 초기화되는 기준 시간</CardDesc>
          </CardInfo>

          <TimeEditWrapper ref={wrapperRef}>
            <TimeBadge onClick={() => setIsOpen((v) => !v)}>
              {formatDeadline(hour, minute)}
            </TimeBadge>

            {isOpen && (
              <TimePopover>
                <TimeSelectRow>
                  <Dropdown
                    value={hour}
                    onChange={setHour}
                    options={HOURS.map((h) => ({
                      value: h,
                      label: `${h}시`,
                    }))}
                  />
                  <Dropdown
                    value={minute}
                    onChange={setMinute}
                    options={MINUTES.map((m) => ({
                      value: m,
                      label: `${String(m).padStart(2, "0")}분`,
                    }))}
                  />
                </TimeSelectRow>
              </TimePopover>
            )}
          </TimeEditWrapper>
        </SettingCard>

        <SettingCard $danger>
          <CardInfo>
            <CardTitle $danger>전체 호실 초기화</CardTitle>
            <CardDesc>
              모든 호실의 이번주 청소 체크 기록을 초기화합니다. 되돌릴 수
              없습니다.
            </CardDesc>
          </CardInfo>
          <ResetButton>전체 초기화</ResetButton>
        </SettingCard>
      </SettingList>
    </>
  );
}

export default Setting;
