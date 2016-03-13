import React, {
	Component,
	View,
	Text,
	TextInput,
} from 'react-native'
import style from './../style/style'

export default class App extends Component {
	render(){
		return(
			<View style={style.center}>
				<View style={style.span}>
					<Text>Hello World</Text>
					<TextInput />
				</View>
			</View>
		)
	}
}