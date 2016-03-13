import React, {
	Component,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	AsyncStorage,
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
				console.log('logged')
				AsyncStorage.setItem('login', JSON.stringify({username: this.state.username, password: this.state.password}))
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
				<View style={{borderRadius: 100, borderWidth: 2, width: 150, height: 150, marginBottom: 70}}>
				</View>

				<View style={{width: 300, borderWidth: 2}}>
	 				<TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1,}}
	 					underlineColorAndroid ='transparent'
		 				onChangeText={(username) => this.setState({username})} 
		 				placeholder='Email or Care Card'
		 				value={this.state.username} />
 				</View>
 				<View style={{width: 300, borderWidth: 2, marginTop: 30,}}>
	 				<TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} 
	 					underlineColorAndroid ='transparent'
		 				onChangeText={(password) => this.setState({password})} 
		 				placeholder='Password'
		 				secureTextEntry={true}
		 				value={this.state.password} />
 				</View>
 				<View style={{borderWidth: 2, marginTop: 30,}}>
	 				<TouchableOpacity style={{width: 110, height: 44, alignItems: 'center', justifyContent: 'center',}} onPress={this.login.bind(this)}>
	 					<Text>Log In</Text>
	 				</TouchableOpacity>
 				</View>
 				<TouchableOpacity style={{marginTop: 16}}>
 					<Text style={{color: 'teal', textDecorationLine: 'underline'}}>I forgot my password</Text>
 				</TouchableOpacity>
			</View>
		)
	}
}
