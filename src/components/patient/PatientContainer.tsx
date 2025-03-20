import React from "react";
import { useTranslation } from "react-i18next";

const PatientContainer = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <h2>{t("common.deleteConfirmation")}</h2>
    </React.Fragment>
  );
};

export default PatientContainer;
