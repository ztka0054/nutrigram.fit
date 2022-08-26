export function rulesValidationAdults(values) {
    var errors = {};

    if (values.adults) {
        const adultArrayErrors = [];
        values.adults.forEach((adult, index) => {
            const adultsErrors = {};
            if (index == 0) {
                if (!adult || !adult.firstName) {
                    adultsErrors.firstName = "required";
                    adultArrayErrors[index] = adultsErrors;
                }
                if (!adult || !adult.lastName) {
                    adultsErrors.lastName = "required";
                    adultArrayErrors[index] = adultsErrors;
                }
                if (!adult || !adult.email) {
                    adultsErrors.email = "required";
                    adultArrayErrors[index] = adultsErrors;
                }
                if (
                    !adult.email ||
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                        adult.email
                    )
                ) {
                    adultsErrors.email = "format_email";
                    adultArrayErrors[index] = adultsErrors;
                }
            } else {
                if (
                    adult.email &&
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                        adult.email
                    )
                ) {
                    adultsErrors.email = "format_email";
                    adultArrayErrors[index] = adultsErrors;
                }
            }
            // if (!adult || !adult.phone) {
            // 	adultsErrors.phone = 'required'
            // 	adultArrayErrors[index] = adultsErrors
            // }
        });
        if (adultArrayErrors.length) {
            errors.adults = adultArrayErrors;
        }
    }

    return errors;
}
