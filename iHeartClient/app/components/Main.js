import React, {
	Component,
	View,
	Text,
	TouchableOpacity,
	StyleSheet
} from 'react-native'
import style from './../style/style'
import Meteor, {connectMeteor, } from 'react-native-meteor'

@connectMeteor
export default class Main extends Component {
	constructor(props){
		super(props)
	}

	enterData(){
		this.props.navigator.push({className: 'EnterData', title: 'Enter Data'})
	}

	history(){
		this.props.navigator.push({className: 'History', title: 'History'})
	}

	support(){
		this.props.navigator.push({className: 'Support', title: 'Support'})
	}

	componentWillMount(){
		this.props.setNavBarVisibility(true)
	}

	render(){
		return(
			<View style={style.center}>

				<View style={styles.button}>
					<TouchableOpacity onPress={this.enterData.bind(this)} style={styles.box}>
						<Text style={styles.text}>New Log</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.button}>
					<TouchableOpacity onPress={this.history.bind(this)} style={styles.box}>
						<Text style={styles.text}>Log History</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.button}>
					<TouchableOpacity onPress={this.support.bind(this)} style={styles.box}>
						<Text style={styles.text}>Support</Text>
					</TouchableOpacity>
				</View>				
			</View>
		)
	}
}

let styles = StyleSheet.create({
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
	}
})

