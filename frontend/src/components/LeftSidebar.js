import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Logo from '../assets/logo.svg'

export const LeftSidebar = () => {

    const logoClick = () => {
        window.location.href = "/"
    }

    return (
        <Sidebar rootStyles={{ backgroundColor: "#D6E54B", borderColor: "#D6E54B" }} className='h-[100vh] font-main'>
            <img src={Logo} alt="Logo" className='p-4 cursor-pointer' onClick={logoClick} />
            <Menu rootStyles={{ backgroundColor: "#D6E54B", opacity: 1 }}>
                <MenuItem> География учреждений </MenuItem>
                <MenuItem active={true} rootStyles={{ backgroundColor: "#e5f5b5", }}> Карта корреляций </MenuItem>
                <SubMenu label="Общие сведения">
                    <MenuItem> Тепловая карта </MenuItem>
                    <MenuItem> География учреждений </MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    )
}
