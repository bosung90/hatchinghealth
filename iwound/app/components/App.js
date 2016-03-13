import React, {
	Component,
	View,
	Text,
} from 'react-native'
import style from './../style/style'

export default class App extends Component {
	render(){
		return(
			<View style={style.center}>
				<Text>Hello World</Text>
			</View>
		)
	}
}