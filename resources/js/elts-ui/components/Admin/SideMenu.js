import SidebarMenu from 'react-bootstrap-sidebar-menu';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';



function SideMenu () {
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
                        <SidebarMenu.Nav.Link  as={NavLink} to="./">
                            <SidebarMenu.Nav.Icon>
                                # 
                            {/* Menu item icon */}
                            </SidebarMenu.Nav.Icon>
                            <SidebarMenu.Nav.Title>
                                صفحه اصلی
                            </SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>
                        <SidebarMenu.Nav.Link as={NavLink} to="./english-question">
                            <SidebarMenu.Nav.Icon>
                                #
                            </SidebarMenu.Nav.Icon>
                            <SidebarMenu.Nav.Title>
                                سوالات انگلیسی
                            </SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>
                        <SidebarMenu.Nav.Link  as={NavLink} to="./client-user">
                            <SidebarMenu.Nav.Icon>
                                # 
                            {/* Menu item icon */}
                            </SidebarMenu.Nav.Icon>
                            <SidebarMenu.Nav.Title>
                                لیست شرکت کنندگان
                            </SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>
                    </SidebarMenu.Nav>
                </SidebarMenu.Body>
            </SidebarMenu.Collapse>
        </SidebarMenu>
    );
}
export default SideMenu;