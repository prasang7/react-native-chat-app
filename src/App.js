import React from 'react';

import Home from './components/Home';
import Chat from './components/Chat';

import {
	Router,
	Scene,
} from 'react-native-router-flux';


class App extends React.Components {
	render() {
		return(
			<Router>
				<Scene key='root'>
					<Scene key='home' component={Home} title='Home'/>
					<Scene key='home' component={Chat} title='Chat'/>
				</Scene>
			</Router>
		);
	}
}

export default App;