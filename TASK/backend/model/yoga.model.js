const {Schema, model} =  require("mongoose");

const YogaSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true, min: 18, max: 65},
    fee: {type: Number, default: 500, required: true},
    batch: {type: String, required: true},
    mobile: {type: String},
    address: {type: String}
});

const YogaModel = new model("yoga", YogaSchema);

module.exports = YogaModel;