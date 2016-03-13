FlowRouter.route('/', {
	action(params, queryParams) {
		ReactLayout.render(LoginPage)
	}
})

FlowRouter.route('/main', {
	action(params, queryParams) {
		ReactLayout.render(MainPage)
	}
})

FlowRouter.route('/register', {
	action(params, queryParams) {
		ReactLayout.render(RegisterPage)
	}
})