import './Header.scss';


interface HeaderProps {
    headTitle: string;
}
export const Header = ({ headTitle }: HeaderProps) => {

    return (
        <>
            <div className="header">

                <h1 className='page-container'>{headTitle}</h1>
            </div>
            <div className="arrow"></div>
        </>

    );
};