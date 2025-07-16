import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import React, {useCallback, useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

interface ISidebarProps {
    className?: string;
}

const Sidebar = ({className}: ISidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = useCallback(() => {
        setCollapsed(prev => !prev);
    }, [collapsed]);

    return (
        <div
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed,}, [className])}
        >
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};

export {Sidebar};