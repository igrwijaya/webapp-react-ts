import * as React from "react";
// @ts-ignore
import MetisMenu from 'react-metismenu';
import './Sidebar.css';

interface IProps {
    componentName?: string;
}

interface IState {
    isOpen: boolean;
}

export class Sidebar extends React.Component<IProps, IState> {

    constructor(props: IProps){
        super(props);

        this.state = {
            isOpen: false
        };
    }

    public render() {

        const content=[
            {
                icon: 'address-book',
                label: 'Label of Item',
                to: '#a-link',
            },
            {
                icon: 'address-book',
                label: 'Second Item',
                content: [
                    {
                        icon: 'address-book',
                        label: 'Sub Menu of Second Item',
                        to: '#another-link',
                    },
                ],
            },
        ];

        return (
            <div className="sidebar">
                <div className="sidebar-header">
                    <h4>Desa Sanur Kauh</h4>
                </div>
                <MetisMenu content={content} />
            </div>

        );
    }

}