Doctors = new Mongo.Collection('doctors')
Patients = new Mongo.Collection('patients')
PatientRecords = new Mongo.Collection('patientRecords')

Meteor.methods({
	addPatientRecord(patientRecordInfo) {
		let patientId = Meteor.userId()
		let measuredDate = Date.now()
    let {flag, weight} = patientRecordInfo
    PatientRecords.insert({patientId, weight, flag, measuredDate})
  },
})