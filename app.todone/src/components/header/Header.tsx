import { Title1 } from "@fluentui/react-components";

export interface HeaderProps {
    title: string,
    subtitle?: string
}

const Header = ({ title, subtitle = "" }: HeaderProps) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignSelf: 'center' }}>
            <Title1><s>{title}</s></Title1>
            <Title1>{subtitle}</Title1>
        </div>
    )
};

export default Header;