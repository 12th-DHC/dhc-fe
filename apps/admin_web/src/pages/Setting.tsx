import { useRef, useState, type FormEvent } from "react";
import { Title } from "../styles/PageHeader.style";
import Dropdown from "../components/Dropdown";
import ResetConfirmModal from "../components/ResetConfirmModal";
import useClickOutside from "../hooks/useClickOutside";
import { useChangePassword } from "../queries/useChangePassword";
import { useResetLog } from "../queries/useResetLog";
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
  PasswordForm,
  PasswordInput,
  PasswordFeedback,
  SaveButton,
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

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordCheck, setNewPasswordCheck] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  const {
    mutate: changePassword,
    isPending: isChangingPassword,
    isSuccess: isChangePasswordSuccess,
    error: changePasswordError,
  } = useChangePassword(() => {
    setCurrentPassword("");
    setNewPassword("");
    setNewPasswordCheck("");
  });

  const apiErrorMessage = changePasswordError?.response?.data?.message ?? null;
  const feedback = formError ?? apiErrorMessage;

  const {
    mutate: resetLog,
    isPending: isResetting,
    isSuccess: isResetSuccess,
    data: resetData,
    error: resetError,
    reset: resetResetLogState,
  } = useResetLog();

  const resetErrorMessage = resetError?.response?.data?.message ?? null;

  const openResetModal = () => {
    resetResetLogState();
    setIsResetModalOpen(true);
  };

  const handleChangePassword = (e: FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (newPassword !== newPasswordCheck) {
      setFormError("새 비밀번호가 일치하지 않습니다.");
      return;
    }

    changePassword({ currentPassword, newPassword, newPasswordCheck });
  };

  return (
    <>
      <Title>설정</Title>

      <SettingList>
        <SettingCard>
          <CardInfo>
            <CardTitle>비밀번호 변경</CardTitle>
            <CardDesc>관리자 계정의 비밀번호를 변경합니다.</CardDesc>
          </CardInfo>

          <PasswordForm onSubmit={handleChangePassword}>
            <PasswordInput
              type="password"
              placeholder="현재 비밀번호"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <PasswordInput
              type="password"
              placeholder="새 비밀번호"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <PasswordInput
              type="password"
              placeholder="새 비밀번호 확인"
              value={newPasswordCheck}
              onChange={(e) => setNewPasswordCheck(e.target.value)}
            />

            {feedback && <PasswordFeedback>{feedback}</PasswordFeedback>}
            {!feedback && isChangePasswordSuccess && (
              <PasswordFeedback $success>비밀번호가 변경되었습니다.</PasswordFeedback>
            )}

            <SaveButton type="submit" disabled={isChangingPassword}>
              {isChangingPassword ? "변경 중..." : "비밀번호 변경"}
            </SaveButton>
          </PasswordForm>
        </SettingCard>

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
              한학기 동안의 호실 및 청소 체크 기록을 초기화합니다. 되돌릴 수
              없습니다.
            </CardDesc>
          </CardInfo>
          <ResetButton type="button" onClick={openResetModal}>
            전체 초기화
          </ResetButton>
        </SettingCard>
      </SettingList>

      {isResetModalOpen && (
        <ResetConfirmModal
          onClose={() => setIsResetModalOpen(false)}
          onConfirm={(password) => resetLog({ adminPassword: password })}
          isPending={isResetting}
          isSuccess={isResetSuccess}
          successMessage={resetData?.message}
          errorMessage={resetErrorMessage}
        />
      )}
    </>
  );
}

export default Setting;
