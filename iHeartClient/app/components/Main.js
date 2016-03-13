import React, {
	Component,
	View,
	Text,
	TouchableOpacity,
} from 'react-native'
import style from './../style/style'

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

	profile(){
		this.props.navigator.push({className: 'Profile', title: 'Profile'})
	}

	render(){
		return(
			<View style={style.center}>
				<TouchableOpacity onPress={this.enterData.bind(this)}>
					<Text>Enter Data</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={this.history.bind(this)}>
					<Text>History</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={this.profile.bind(this)}>
					<Text>Profile</Text>
				</TouchableOpacity>				
			</View>
		)
	}
}