import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface IPageLoaderProps {
    className?: string;
}

const PageLoader = ({ className }: IPageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
);

export { PageLoader };
