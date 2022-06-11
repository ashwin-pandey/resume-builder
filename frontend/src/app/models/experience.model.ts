export interface Experience {
    company: { type: String, required: true },
    from: { type: String, required: true },
    to: { type: String },
    description: { type: String },
    designation: { type: String }
}