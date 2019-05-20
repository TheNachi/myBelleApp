export default class Validator {
    constructor(requestBody) {
        this.requestBody = requestBody;
        this.errors = {};
    }

    validate(rules) {
        this.errors = {};

        for (const name in rules) {
            const fieldRules = rules[name];

            const value = this.requestBody[name];

            const err = this._test(value, fieldRules);
            if (err !== true) {
                this.errors[name] = err;
            }
        }

        return Object.keys(this.errors).length == 0;
    }

    getErrors() {
        return this.errors;
    }

    /**
     * @param {object} value value to test against rules
     * @param {object} rules object in format {<rule 1>:<error message 1>,...,<rule n>:<error message n>}
     * @return {string} Returns a string if there is an error message or true if there is no error.
     */
    _test(value, rules) {
        if (rules.hasOwnProperty('optional') && rules.optional === true && !value) {
        return true;
        }

        for (const rule in rules) {
        let pass = true;

        if (rule == 'required' && !value) {
            pass = false;
        } else if (/^min_length\[(\d+)\]$/.test(rule)) {
            const expectedLength = /min_length\[(\d+)\]/.exec(rule)[1];
            if (value.length < expectedLength) {
                pass = false;
            }
        } else if (rule == 'valid_email' && !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
            pass = false;
        } else if (rule == 'valid_mobile' && !/^(\+?234|0)[0-9]{10}$/.test(value)) {
            pass = false;
        } else if (rule == 'integer' && /[^0-9]/.test(value)) {
            pass = false;
        } else if (rule == 'alpha' && /[^a-zA-Z]/.test(value)) {
            pass = false;
        } else if (rule == 'numeric' && this._isNumeric(value)) {
            pass = false;
        } else if (rule == 'latitude' && !(this._isNumeric(value) && value >= -90 && value <= 90)) {
            pass = false;
        } else if (rule == 'longitude' && !(this._isNumeric(value) && value >= -180 && value <= 180)) {
            pass = false;
        }

        if (!pass) {
            return rules[rule];
        }
        }

        return true;
    }

    _isNumeric(value) {
        return /[-+]?[0-9]+(\.[0-9]+)?/.test(value);
    }
}
