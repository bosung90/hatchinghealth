import React, {
	Component,
	View,
	Text,
	TouchableOpacity,
	Dimensions,
} from 'react-native'
let {width, height} = Dimensions.get('window')

export default class QuestionCard extends Component {
	constructor(props){
		super(props)
		this.state = {
			selection: 0
		}
	}
	_onSubmit(){

	}
	onSelection(selection){
		this.setState({selection: selection})
		this.props.onSelection(selection)
	}
	render(){
		return(
			<View style={{flex:1, height: 100, width: width, alignSelf: 'flex-start', paddingLeft: 12, paddingRight: 12, backgroundColor: this.props.bgColor}}>
				<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
					<Text style={{marginTop: 8}}>{this.props.question}</Text>
					<TouchableOpacity style={{width: 44, height: 44, justifyContent: 'center', alignItems: 'center'}}>
						<View style={{borderWidth: 1, width: 20, height: 20, borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}><Text style={{fontWeight: 'bold'}}>?</Text></View>
					</TouchableOpacity>
				</View>
				<View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between',  margin: 8, alignItems: 'center'}}>
						<TouchableOpacity style={{width: 100, height: 44, justifyContent: 'center', alignItems: 'center'}} onPress={this.onSelection.bind(this, -1)}>
							<Text style={this.state.selection === -1 ? {fontWeight: 'bold'} : {fontWeight: 'normal'}}>No</Text>
						</TouchableOpacity>
						<TouchableOpacity style={{width: 100, height: 44, justifyContent: 'center', alignItems: 'center'}} onPress={this.onSelection.bind(this, 1)}>
							<Text style={this.state.selection === 1 ? {fontWeight: 'bold'} : {fontWeight: 'normal'}}>Yes</Text>
						</TouchableOpacity>
				</View>
			</View>
		)
	}
}