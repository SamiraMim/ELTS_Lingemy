import SidebarMenu from 'react-bootstrap-sidebar-menu';

const SideMenu = () => {
    return (
        <SidebarMenu rtl={true}>
            <SidebarMenu.Header>
                <SidebarMenu.Brand>
                    <p>ELTS</p>
                </SidebarMenu.Brand>
                <SidebarMenu.Toggle />
            </SidebarMenu.Header>
            <SidebarMenu.Body>
                <SidebarMenu.Nav>
                    <SidebarMenu.Nav.Link>
                        <SidebarMenu.Nav.Icon>
                        <p>Test Test</p>
                        {/* Menu item icon */}
                        </SidebarMenu.Nav.Icon>
                        <SidebarMenu.Nav.Title>
                        <p>Test Test</p>
                        {/* Menu item title */}
                        </SidebarMenu.Nav.Title>
                    </SidebarMenu.Nav.Link>
                </SidebarMenu.Nav>
                <SidebarMenu.Sub>
                    <SidebarMenu.Sub.Toggle>
                        <SidebarMenu.Nav.Icon />
                        <SidebarMenu.Nav.Title>
                            <p>Test Test</p>
                        {/* Submenu title */}
                        </SidebarMenu.Nav.Title>
                    </SidebarMenu.Sub.Toggle>
                    <SidebarMenu.Sub.Collapse>
                        <SidebarMenu.Nav>
                            <SidebarMenu.Nav.Link>
                                <SidebarMenu.Nav.Icon>
                                    <p>Test Test</p>
                                {/* Submenu item icon */}
                                </SidebarMenu.Nav.Icon>
                                <SidebarMenu.Nav.Title>
                                    <p>Test Test</p>
                                {/* Submenu item title */}
                                </SidebarMenu.Nav.Title>
                            </SidebarMenu.Nav.Link>
                        </SidebarMenu.Nav>
                    </SidebarMenu.Sub.Collapse>
                </SidebarMenu.Sub>
            </SidebarMenu.Body>
        </SidebarMenu>
    );
}
export default SideMenu;