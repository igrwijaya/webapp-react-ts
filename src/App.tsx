import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import {Layout} from "./component/layout/Layout";
import {Dashboard} from "./screen/dashboard/Dashboard";
import {Error404} from "./screen/error/Error404";

interface IProps {
    componentName?: string;
}

interface IState {
    isOpen: boolean;
}

class App extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    public render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact={true} path='/' component={Dashboard} />
                        <Route path='**' component={Error404} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }

}

export default App;
