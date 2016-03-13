import React, {
	Component,
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native'
import style from './../style/style'

export default class Login extends Component {

	constructor(props){
		super(props)
		this.state= {
			username:'',
			password:'',
		}
	}

		login(){
			Meteor.loginWithPassword(this.state.username, this.state.password)
		}

	render(){
		return(
			<View style={style.center}>
 				<TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} 
 				onChangeText={(username) => this.setState({username})} 
 				placeholder='care card number'
 				value={this.state.username} />
 				<TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} 
 				onChangeText={(password) => this.setState({password})} 
 				placeholder='password'
 				value={this.state.password} />
 				<TouchableOpacity onPress={this.login}>
 				<Text>Login</Text>
 				</TouchableOpacity>
			</View>
		)
	}
}
