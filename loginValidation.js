import joi from '@hapi/joi';

//login validation
export default function loginValidation(data) {
    const schema = joi.object({
        email: joi.string(4).required().email(),
        password: joi.string(6).required()
    });
    return schema.validate(data);

}