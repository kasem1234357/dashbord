const { Timestamp } = require("mongodb");
const { default: mongoose } = require("mongoose");
const mongooose = require("mongoose");
const ProductSchema = mongooose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      min: 0,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    barCode: {
      type: String,
    },
    profileImg: {
      type: Object,
      default: {},
    },
    otherImg: {
      type: Array,
      default: [],
    },
    coupon: {
      type: String,
    },
    couponPersent: {
      type: Number,
    },
    type: {
      type: String,
    },
    tags: {
      type: Array,
      default: [],
    },
    desc: {
      type: String,
      min: 30,
    },
    colors: {
      type: Array,
      default: [],
    },
    galleryName:{
      type:String,
    }
  },
  { timestamp: true }
);
module.exports = mongoose.model("Product", ProductSchema);
