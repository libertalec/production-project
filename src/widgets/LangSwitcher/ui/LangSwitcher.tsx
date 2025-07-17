import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';

interface ILangSwitcherProps {
    className?: string;
}

const LangSwitcher = ({ className }: ILangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleLanguage}
            className={classNames(cls.LangSwitcher, {}, [className])}
        >
            {t('Язык')}
        </Button>
    );
};

export { LangSwitcher };
