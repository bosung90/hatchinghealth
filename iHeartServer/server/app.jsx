Meteor.startup(()=>{
	let doctorUserId = Accounts.findUserByEmail('annie@example.com')
	if(!doctorUserId) {
		doctorUserId = Accounts.createUser({email: 'annie@example.com', password: '123'})
		Doctors.insert({userId: doctorUserId, phoneNumber: '778-111-2222', name: 'Annie Chou'})
	}

	let patientUserId = Accounts.findUserByEmail('lisa@example.com')
	if(!patientUserId) {
		patientUserId = Accounts.createUser({email: 'lisa@example.com', password: '123'})
		Patients.insert({userId: patientUserId, doctorId: doctorUserId, phoneNumber: '778-333-4444', name: 'Lisa Wong', baseWeight: 60})

		let date = new Date();
		date.setDate(date.getDate() - 1);
		PatientRecords.insert({patientId: patientUserId, weight: '68', flag: true, measuredDate: date})

		date.setDate(date.getDate() - 1);
		PatientRecords.insert({patientId: patientUserId, weight: '66', flag: false, measuredDate: date})

		date.setDate(date.getDate() - 1);
		PatientRecords.insert({patientId: patientUserId, weight: '64', flag: false, measuredDate: date})

		date.setDate(date.getDate() - 1);
		PatientRecords.insert({patientId: patientUserId, weight: '62', flag: false, measuredDate: date})

		date.setDate(date.getDate() - 1);
		PatientRecords.insert({patientId: patientUserId, weight: '60', flag: false, measuredDate: date})
	}
	
})