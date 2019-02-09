import * as React from "react";

interface IProps {
    componentName?: string;
}

export class Dashboard extends React.Component<IProps> {

    constructor(props: IProps){
        super(props)
    }

    public render() {
        return (
            <div>
                <h5>hello</h5>
            </div>
        );
    }
}