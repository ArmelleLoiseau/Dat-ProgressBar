import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
    currentStatus: string;
  }

const StatusName: React.FC<Props> = ({ currentStatus }) => {
  const { t } = useTranslation();
  const styledDiv = {
    backgroundColor: 'hsla(0, 0%, 96%, 1)',
    borderRadius: 8,
    padding: 8,
    width: 184,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
      <div style={styledDiv}>{t(currentStatus)}</div>
  )
}

export default StatusName