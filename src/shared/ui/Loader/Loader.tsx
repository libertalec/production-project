import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface ILoaderProps {
    className?: string;
}

const Loader = ({ className }: ILoaderProps) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);

export { Loader };
