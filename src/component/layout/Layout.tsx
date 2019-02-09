import * as React from "react";
import {Container} from "reactstrap";
import {Topbar} from "./Topbar";

interface IProps {
    componentName?: string;
}

export class Layout extends React.Component<IProps> {

    constructor(props: IProps){
        super(props)
    }

    public render() {
        return (
            <div>
                <Topbar/>

                <Container fluid={true}>
                    {this.props.children}
                </Container>

            </div>
        );
    }
}