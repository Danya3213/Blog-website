import cl from './Container.module.scss';

export function Container ({children, className = ''}) {

    return (
        <div className={`${className} ${cl.container}`}>
            {children}
        </div>
    );
}