import React, {
	Component,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	AsyncStorage,
	StyleSheet,
	Dimensions,
} from 'react-native'
import style from './../style/style'
import Meteor, {connectMeteor, } from 'react-native-meteor'
let {width, height} = Dimensions.get('window')

@connectMeteor
export default class EnterDataNext extends Component {
	constructor(props){
		super(props)
		this.state= {
			weight:'45',
			systolic:'100',
			diastolic:'120',
			heartRate:'40'
		}
	}

	componentWillMount(){
		this.props.setNavBarVisibility(true)
	}

	send(){
		Meteor.call('addPatientRecord', {flag:'safe', weight:this.state.weight})
	}

	trigger(){
		Meteor.call('addPatientRecord', {flag:'flagged', weight:this.state.weight})
	}

	render(){
		return(

			<View style={styles.container}>
			<Text style={styles.text}>New Log (Cont'd)</Text>
			<Text style={{marginTop:20}}>Weight</Text>
				<View style={{width: 300, borderWidth: 2}}>
	 				<TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1,}}
	 					underlineColorAndroid ='transparent'
		 				onChangeText={(weight) => this.setState({weight})} 
		 				value={this.state.weight} />
 				</View>
			<Text style={{marginTop:20}}>Blood Pressure</Text>
			<View style={{flexDirection: 'row', justifyContent: 'space-between', width: 300}}>
				<View style={{flexDirection: 'column', alignItems:'center'}}>
					<View style={{width: 130, borderWidth: 2}}>
		 				<TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1,}}
		 					underlineColorAndroid ='transparent'
			 				onChangeText={(systolic) => this.setState({systolic})} 
			 				value={this.state.systolic} />
	 				</View>
	 				<Text>upper#</Text>
 				</View>
 				<View style={{flexDirection: 'column', alignItems:'center'}}>
 					<View style={{width: 130, borderWidth: 2}}>
		 				<TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1,}}
		 					underlineColorAndroid ='transparent'
			 				onChangeText={(diastolic) => this.setState({diastolic})} 
			 				value={this.state.diastolic} />
	 				</View>
 					<Text>lower#</Text>
 				</View>
			</View>
			<Text style={{marginTop:20}}>Heart Rate</Text>
 				<View style={{width: 300, borderWidth: 2}}>
	 				<TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} 
	 					underlineColorAndroid ='transparent'
		 				onChangeText={(heartRate) => this.setState({heartRate})} 
		 				value={this.state.heartRate} />
		 		</View>
				<View style={styles.button}>
			<TouchableOpacity style={styles.box} onPress={this.send.bind(this)}>
				<Text style={styles.text}>Send</Text>
			</TouchableOpacity>
			</View>
			<View style={[styles.button, {margin:5, backgroundColor:'red'}]}>
			<TouchableOpacity style={styles.box} onPress={this.trigger.bind(this)}>
				<Text style={styles.text}>Trigger</Text>
			</TouchableOpacity>
			</View>
			</View>

		)
	}
}

let styles= StyleSheet.create({
	container:{
		margin:75,
		alignItems:'center',
	},

	button:{
		margin: 20,
		backgroundColor:'#1e88e5'
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

