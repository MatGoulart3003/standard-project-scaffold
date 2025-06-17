import { useTranslation } from 'react-i18next';

export const SecondPage = () => {
  const { t } = useTranslation();

  return <div>{t('common.secondPage')}</div>;
};
