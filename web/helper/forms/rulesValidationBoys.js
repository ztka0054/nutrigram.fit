export function rulesValidationBoys( values ){

    var errors  = {} 

	if (values.boys) {
		const boysArrayErrors = []
		values.boys.forEach((boy, index) => {
            const boyErrors = {}
			if (!boy || !boy.firstName) {
				boyErrors.firstName = 'required'
				boysArrayErrors[index] = boyErrors
            }
            if (!boy || !boy.lastName) {
				boyErrors.lastName = 'required'
				boysArrayErrors[index] = boyErrors
            }
		})
		if (boysArrayErrors.length) {
			errors.boys = boysArrayErrors
		}
	}
	
	return errors
}