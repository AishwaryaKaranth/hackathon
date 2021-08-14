import * as React from 'react';
import Header from '../components/header';
import Body from '../components/body';
import './styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';

export interface IAppProps { }

export interface IAppState { }

class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
        this.state = {}
    }

    public render() {
        return <>
            <Router>
                <Header />
                <Body />
            </Router>,
        </>;
    }
}

export default App;