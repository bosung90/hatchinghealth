import React, {
	Component,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from 'react-native'
import style from './../style/style'
import Meteor, {connectMeteor, } from 'react-native-meteor'

@connectMeteor
export default class Support extends Component {

	constructor(props){
		super(props)
		this.state= {

		}
	}

	signOut(){
	}

	componentWillMount(){
		this.props.setNavBarVisibility(true)
	}

	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.text}>Support</Text>

				<View style={styles.info}>
				<Text style={styles.text}>Cardiologist Contact:</Text>
				<Text style={styles.text}>Dr. Annie Chou</Text>
				<Text style={styles.text}>Phone number: 778-923-0909</Text>
				<Text style={styles.text}>Email: annie@cardiology.com</Text>
				<Text style={styles.text}>Resources:</Text>
				<Text style={style.text}>http://www.ubccardio.com/</Text>
				</View>

				<View style={styles.button}>
 				<TouchableOpacity onPress={this.signOut.bind(this)} style={styles.box}>
 				<Text style={styles.text}>Sign Out</Text>
 				</TouchableOpacity>
 				</View>
			</View>
		)
	}
}

let styles = StyleSheet.create({
	container:{
		flex:1, 
		alignItems:'center',
		margin: 75
			},

	button:{
		borderWidth:2,
		borderColor:'black',
		margin: 20
	}, 

	text:{
		color:'black',
	},

	box:{
		height:45,
		width:200,
		alignItems: 'center',
		justifyContent: 'center',
	},

	info:{

	}
})