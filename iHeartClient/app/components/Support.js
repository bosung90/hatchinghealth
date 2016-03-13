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
export default class Support extends Component {

	constructor(props){
		super(props)
		this.state= {

		}
	}

	submit(){
	}

	componentWillMount(){
		this.props.setNavBarVisibility(true)
	}

	render(){
		return(
			<View style={style.center}>
			
 				<TouchableOpacity onPress={this.submit}>
 				<Text>Submit</Text>
 				</TouchableOpacity>
			</View>
		)
	}
}