import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

class Home extends React.Component {
	
	state = {
		name: '',
	};

	render() {
		return(

			<View>
				<Text style={styles.title}>
					Enter Your Name:	
				</Text>
				
				<TextInput
					style = {styles.nameInput}

					placeholder = 'Elon Musk'
					
					onChangeText = {(text) => {
						this.setState({
							name: text,
						});
					}}
					value = {this.state.name}
				/>

				<TouchableOpacity
					onPress = {() => {
						alert(this.state.name)
					}}
				>
					<Text style = {styles.buttonText}>
						Next
					</Text>
				</TouchableOpacity>
			</View>

		);
	}
}

var styles = StyleSheet.create({

	title: {
		marginTop: 20,
		marginLeft: 20,
		fontSize: 20,
	},
	nameInput: {
		height: 50,
		borderWidth: 2,
		borderColor: 'black',
		margin: 20,
		padding: 5,
	},
	buttonText: {
		marginLeft: 20,
		fontSize: 20,
	},
});

export default Home;