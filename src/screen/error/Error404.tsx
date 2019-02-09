import * as React from "react";

interface IProps {
    componentName?: string;
}

export class Error404 extends React.Component<IProps> {

    constructor(props: IProps){
        super(props)
    }

    public render() {
        return (
            <div>
                <h5>Page Not Found</h5>
            </div>
        );
    }
}