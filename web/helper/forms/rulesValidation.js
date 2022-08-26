export function rulesValidation( fields, values ){

	var errors  = {} 

	fields.map( (field, i) => {

		if( field.required && !values[field.nameField] ){

			errors[field.nameField] = "required"

		}else if( values[field.nameField].length > field.maxLegth ){

			errors[field.nameField] = `length_max_${field.maxLegth}`

		}else if( values[field.nameField].length < field.minLegth ){

            errors[field.nameField] = `length_min_${field.minLegth}`
            
		}else if( field.formatMail && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( values[field.nameField] ) ){

            errors[field.nameField] = "format_email"
            
		}else if( field.formatUrl && !/^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i.test( values[field.nameField] ) ){

            errors[field.nameField] = "format_email"
            
		}else if( typeof ( field.compareField ) !== 'undefined' ){

			if( values[ field.compareField ] !== values[ field.nameField ] ){
				errors[field.nameField] = `repeat_${field.compareField}`
            }
            
		}

		return errors

	})

	return errors

}