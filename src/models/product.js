import mongoose from "mongoose";

const Product = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre es requerido"],
    },
    price: {
      type: Number,
      required: [true, "El precio es requerido"],
    },
    stock: {
      type: Number,
      required: [true, "El stock es requerido"],
    },
    active: {
      type: Boolean,
      default: true,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "La categoria es requerida"],
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "El createdby es requerido"],
    },
  },
  { timestamps: true },
);

export default mongoose.model("Product", Product);
