import React, { Component } from 'react';
import {
  GiftedChat
} from 'react-native-gifted-chat';

class Chat extends React.Component {

	state = {
		messages: []
	};

	render() {
		return(

			<GiftedChat
				messages = {this.state.messages}
				onSend = {(message) => {
					// send to backend server
				}}
				user = {{
					_id: 1,
					name: this.props.name,
				}}
			/>

		);
	}
}

export default Chat;