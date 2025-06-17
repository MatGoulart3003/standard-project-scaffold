import { useTranslation } from 'react-i18next';

export const FirstPage = () => {
  const { t } = useTranslation();

  return <div>{t('common.firstPage')}</div>;
};
