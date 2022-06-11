export interface Education {
    degree: String,
    college: String,
    from: { type: String, required: true },
    to: { type: String },
    score: { type: String }
}