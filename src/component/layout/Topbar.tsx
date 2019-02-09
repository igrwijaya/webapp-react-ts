import * as React from "react";
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from "reactstrap";

interface IProps {
    componentName?: string;
}

interface IState {
    isOpen: boolean;
}

export class Topbar extends React.Component<IProps, IState> {

    constructor(props: IProps){
        super(props);

        this.state = {
            isOpen: false
        };
    }

    public render() {
        return (
            <Navbar color="light" light={true} expand="md">
                <NavbarBrand href="/">Gores Digital</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar={true}>
                    <Nav className="ml-auto" navbar={true}>
                        <NavItem>
                            <NavLink href="/components">Report</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav={true} inNavbar={true}>
                            <DropdownToggle nav={true} caret={true}>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right={true}>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem divider={true} />
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }

    private toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
}