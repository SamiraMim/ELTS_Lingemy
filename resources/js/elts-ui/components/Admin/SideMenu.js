import SidebarMenu from 'react-bootstrap-sidebar-menu';
import { Container, Row, Col, Button } from 'react-bootstrap';


const SideMenu = () => {
    return (
        <SidebarMenu hide='md' variant='dark'>
            <SidebarMenu.Collapse>
                <SidebarMenu.Header>
                    <SidebarMenu.Brand>
                        ELTS
                    </SidebarMenu.Brand>
                    <SidebarMenu.Toggle />
                </SidebarMenu.Header>
                <SidebarMenu.Body>
                    <SidebarMenu.Nav>
                        <SidebarMenu.Nav.Link>
                            <SidebarMenu.Nav.Icon>
                                # 
                            {/* Menu item icon */}
                            </SidebarMenu.Nav.Icon>
                            <SidebarMenu.Nav.Title>
                            لیست آزمون ها
                            {/* Menu item title */}
                            </SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>
                        <SidebarMenu.Nav.Link>
                            <SidebarMenu.Nav.Icon>
                                #
                            {/* Menu item icon */}
                            </SidebarMenu.Nav.Icon>
                            <SidebarMenu.Nav.Title>
                            سوالات انگلیسی
                            {/* Menu item title */}
                            </SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>
                        <SidebarMenu.Nav.Link>
                            <SidebarMenu.Nav.Icon>
                                # 
                            {/* Menu item icon */}
                            </SidebarMenu.Nav.Icon>
                            <SidebarMenu.Nav.Title>
                            سوالات عمومی
                            {/* Menu item title */}
                            </SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>
                    </SidebarMenu.Nav>
                </SidebarMenu.Body>
            </SidebarMenu.Collapse>
        </SidebarMenu>
    );
}
export default SideMenu;