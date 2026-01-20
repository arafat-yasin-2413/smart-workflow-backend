import { model, Schema } from "mongoose";

const stageSchema = new Schema({
    name: String,
    order: Number,
});

const workflowSchema = new Schema(
    {
        name: String,
        stages: [stageSchema],
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true },
);

export const Workflow = model("Workflow", workflowSchema);