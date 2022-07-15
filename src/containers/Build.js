import {useState} from 'react';
import TopBar from '../components/TopBar';
import{Builder, Workspace, Panel, branch, item} from 'build-ui';
// import {CounterPanel, CounterTools, CounterView} from '../components/ui/counter';
import CounterPanel from '../components/ui/CounterPanel';
import CounterTools from '../components/ui/CounterTools';
import CounterView from '../components/ui/CounterView';

const MyBuild = () => {
    const view = {
        Counter: CounterView,

    };
    const panel = {
        Counter: CounterPanel,
    };
    const section = item({
        type: 'Section',
    })
    const tree = branch(section);
    
    return (
        <Builder initialTree={tree}>
            <TopBar/>
            <Workspace view={view}/>
            <Panel view={panel} />
            <CounterTools />
        </Builder>
    )
};

export default MyBuild;