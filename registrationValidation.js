import joi from '@hapi/joi';

//register validation
export default function registrationValidation(data) {
    const schema = joi.object({
        name :joi.string().min(2).required(),
        email :joi.string().min().email(),
        password :joi.string().min(4).required()
    });
    return schema.validate(data);

};