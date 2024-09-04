
export interface HeaderProps {
    title: string,
    subtitle?: string
}

const Header = ({ title, subtitle = "" }: HeaderProps) => {
    return (
        <div style={{ alignSelf: 'center', textAlign: 'center' }}>
            <h1><s>{title}</s> {subtitle}</h1>
        </div>
    )
};

export default Header;