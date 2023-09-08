import {
  Button,
  ButtonVariantsEnum,
  IconsCssClassesEnum,
  ModalDialog,
} from "@networkraildigitalfactory/react-components";
import React, { ReactNode, useState } from "react";

export interface LogoutButtonProps {
  onLogout: () => Promise<void>;
  buttonLabel?: ReactNode;
  modalHeaderText?: string;
  modalContent?: ReactNode;
}

const LogoutButton = ({
  onLogout,
  buttonLabel = "Logout",
  modalHeaderText = "Logout?",
  modalContent = (
    <p>
      Are you sure you want to log out?
      <br />
      <strong>Please note:</strong> <br />
      All unsaved profile data will be lost.
    </p>
  ),
}: LogoutButtonProps): JSX.Element => {
  const [isConfirmationModalShown, setConfirmationModalShown] = useState<boolean>(false);

  const handleLogout = async (): Promise<void> => {
    await onLogout();
  };

  const showConfirmationModal = (): void => setConfirmationModalShown(true);

  const hideConfirmationModal = (): void => setConfirmationModalShown(false);

  return (
    <>
      <Button
        onClick={showConfirmationModal}
        variant={ButtonVariantsEnum.TERTIARY__ICON_RIGHT}
        icon={IconsCssClassesEnum.LOG_OUT}
        dataTestId="logoutButton"
      >
        {buttonLabel}
      </Button>
      <ModalDialog
        isOpen={isConfirmationModalShown}
        headerText={modalHeaderText}
        onPrimaryButtonClick={handleLogout}
        onSecondaryButtonClick={hideConfirmationModal}
        primaryButtonChildren="logout"
        secondaryButtonChildren="cancel"
      >
        {modalContent}
      </ModalDialog>
    </>
  );
};

export default LogoutButton;
