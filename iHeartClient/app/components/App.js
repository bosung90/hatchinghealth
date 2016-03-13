import React, {
  Component,
  StyleSheet,
  Navigator,
  Platform,
  View,
  Text,
  BackAndroid,
  TouchableOpacity,
  PixelRatio,
  Image,
  InteractionManager,
} from 'react-native'
import style from './../style/style'
import Meteor, {connectMeteor, } from 'react-native-meteor'
import Main from './Main'
import Login from './Login'
import EnterData from './EnterData'
import Profile from './Profile'
import History from './History'
const Page = {Login, Main, EnterData, Profile, History}

@connectMeteor
export default class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			hideNavBar: true,
		}
	}
	renderPage(route, navigator) {
		if(route.className) {
			return React.createElement(Page[route.className], {route, navigator, setNavBarVisibility: this.setNavBarVisibility.bind(this)})
		} else {
			route.title = 'Login'
			return React.createElement(Page['Login'], {route, navigator, setNavBarVisibility: this.setNavBarVisibility.bind(this)})
		}
	}
  setNavBarVisibility(visible) {
    this.setState({hideNavBar: !visible})
  }
	_popToTop() {
		this.setState({hideNavBar: true})
		this.refs.navigator.popToTop()
	}
	_pop() {
		if(this.refs.navigator.getCurrentRoutes().length === 2) {
			this.setState({hideNavBar: true})
		}
		this.refs.navigator.pop()
	}
	componentDidMount() {
		// Override Android back button. Return false if you want to default back to original behaviour, which usually exits the app.
		BackAndroid.addEventListener('hardwareBackPress', ()=>{
			if(this.refs.navigator) {
				if(this.refs.navigator.getCurrentRoutes().length > 1) {
					// Override Android back button to pop() only if you have more than 1 item in navigator stack
					this.refs.navigator.pop()
					return true
				} else {
					return false
				}
			} else {
				return false
			}
		})

    const url = 'http://'+(this.props.serverUrl || '128.189.242.43')+':3003/websocket'
    Meteor.connect(url)

    Meteor.ddp.on('connected', function() {
      console.log('CONNECTED to meteor server')
    })
	}
	_renderNavigationView() {
		const NavigationBarRouteMapper = {
			LeftButton: (route, navigator, index, navState) => {
				return (
					<View style={styles.navLeftIconView}>
						<TouchableOpacity onPress={this._popToTop.bind(this)} style={styles.navButton}>
							<Image style={styles.navLeftIcon} source={require('./../img/navigation/home_icon.png')} />
						</TouchableOpacity>
          </View>
				)
			},
			RightButton: (route, navigator, index, navState) => {
				// Button on the right side of navigationView
				return (
					<View style={styles.navRightIconView}>
						<TouchableOpacity
							onPress={this._pop.bind(this)}
							style={styles.navButton}>
							<Image style={styles.navRightIcon} source={require('./../img/navigation/close_white.png')} />
						</TouchableOpacity>
          </View>
				)
			},
			Title: (route, navigator, index, navState) => {
				return (
					<View style={styles.navigationTitleView}>
						<Text style={styles.navigationTitleText}>
							{route.title}
						</Text>
					</View>
				)
			},
		}
		return (
			<Navigator initialRoute={{name: 'Login Page', index: 0}}
				ref='navigator'
				renderScene={this.renderPage.bind(this)}
				navigationBar={
					<Navigator.NavigationBar
						style={this.state.hideNavBar ? {height: 0} : styles.navigationBar}
						routeMapper={this.state.hideNavBar ? {LeftButton(){}, RightButton(){}, Title(){}} : NavigationBarRouteMapper} />
				}
			/>
		)
	}
	render() {
		return this._renderNavigationView()
	}
}

let styles = StyleSheet.create({
	navigationBar: {
		backgroundColor: '#373536',
	},
	navLeftIconView: {
		flex:1,
		justifyContent: 'center',
	},
	navRightIconView: {
		flex:1,
		justifyContent: 'center',
	},
	navButton: {
		height: 60,
		width: 60,
		alignItems: 'center',
		justifyContent: 'center',
	},
	navLeftIcon: {
		width: 30,
		height: 30,
		resizeMode: 'contain',
	},
	navRightIcon: {
		width: 24,
		height: 24,
		marginTop: 4,
		resizeMode: 'contain',
	},
	navigationTitleView: {
		flex:1,
		justifyContent: 'center',
	},
	navigationTitleText: {
		color: 'white',
		fontSize: 18,
		fontWeight: '500',
		alignSelf: 'flex-end',
	},
})