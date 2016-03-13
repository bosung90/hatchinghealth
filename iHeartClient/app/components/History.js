import React, {
	Component,
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native'
import style from './../style/style'

export default class History extends Component {

	constructor(props){
		super(props)
		this.state= {

		}
	}

	submit(){
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