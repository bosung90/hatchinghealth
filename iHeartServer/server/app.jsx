Meteor.startup(()=>{
	let userId = Accounts.findUserByEmail('annie@example.com')
	if(!userId) {
		userId = Accounts.createUser({email: 'annie@example.com', password: '123'})
		Doctors.insert({userId, phoneNumber: '778-111-2222', name: 'Annie Chou'})
	}
	

	
})