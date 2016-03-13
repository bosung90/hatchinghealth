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
	render(){
		return(
			<View style={style.center}>
				<Text>Main</Text>
			</View>
		)
	}
}