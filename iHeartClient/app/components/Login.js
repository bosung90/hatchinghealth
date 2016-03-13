import React, {
	Component,
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native'
import style from './../style/style'
import Meteor, {connectMeteor, } from 'react-native-meteor'

@connectMeteor
export default class Login extends Component {
	constructor(props){
		super(props)
		this.state= {
			username:'lisa@example.com',
			password:'123',
		}
	}

	login(){
		Meteor.loginWithPassword(this.state.username, this.state.password, (err)=>{
			if(err) {
				alert(JSON.stringify(err))
			} else {
				AsyncStorage.set('login', {username: this.state.username, password: this.state.password})
				this.props.navigator.replace({className: 'Main', title: 'Main Page'})
			}
		})
	}

	componentWillMount(){
		this.props.setNavBarVisibility(false)
	}

	render(){
		return(
			<View style={style.center}>
 				<TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} 
	 				onChangeText={(username) => this.setState({username})} 
	 				placeholder='Email or Care Card Number'
	 				value={this.state.username} />
 				<TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} 
	 				onChangeText={(password) => this.setState({password})} 
	 				placeholder='Password'
	 				value={this.state.password} />
 				<TouchableOpacity onPress={this.login.bind(this)}>
 					<Text>Login</Text>
 				</TouchableOpacity>
			</View>
		)
	}
}
