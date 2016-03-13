import React, {
	Component,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Platform,
	ScrollView,
	Dimensions,
} from 'react-native'
import style from './../style/style'
import QuestionCard from './QuestionCard'
import Meteor, {connectMeteor, } from 'react-native-meteor'
let {width, height} = Dimensions.get('window')

@connectMeteor
export default class EnterData extends Component {

	constructor(props){
		super(props)
		this.state= {

		}
	}

	componentWillMount(){
		this.props.setNavBarVisibility(true)
	}
	_renderQuestion(){

	}
	onSelection(index, selection) {
		alert(JSON.stringify({index, selection}))
	}
	render(){
		return(
			<ScrollView contentContainerStyle={styles.container}>
				<Text style={{fontSize: 20, marginTop: 16,}}>New Log</Text>
				{Platform.OS === 'ios' ? 
					<DatePickerIOS />
					:
					null
				}
				<Text style={{marginTop: 16, alignSelf: 'flex-start', marginLeft: 12, marginBottom: 12}}>Comapred to yesterday, I feel...</Text>
				<QuestionCard question='1. Short of breath when exerting.' bgColor='#ddd' onSelection={this.onSelection.bind(this, 1)}></QuestionCard>
				<QuestionCard question='2. Short of breadth at night.' onSelection={this.onSelection.bind(this, 2)}></QuestionCard>
				<QuestionCard question='3. My leg swollen.' bgColor='#ddd' onSelection={this.onSelection.bind(this, 3)}></QuestionCard>
				<QuestionCard question='4. Lightheaded.' onSelection={this.onSelection.bind(this, 4)}></QuestionCard>
	 				<TouchableOpacity style={{height: 44, backgroundColor: '#1e88e5', width, justifyContent: 'center', alignItems: 'center',}} onPress={this.submit}>
	 					<Text style={{color: 'white', fontSize: 19}}>Submit</Text>
	 				</TouchableOpacity>
			</ScrollView>
		)
	}
}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		marginTop: 54,
	},

})
