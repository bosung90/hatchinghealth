MainPage = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			user: Meteor.user(),
		}
	},
	render() {
		return (
			<div>
				MainPage
			</div>
		)
	}
})