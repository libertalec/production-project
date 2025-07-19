import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

interface IPageErrorProps {
    className?: string;
}

const PageError = ({ className }: IPageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <button
                type="button"
                onClick={reloadPage}
            >
                {t('Обновить страницу')}
            </button>
        </div>
    );
};

export { PageError };
