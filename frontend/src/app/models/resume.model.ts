import { Education } from "./education.model"
import { Experience } from "./experience.model"
import { Hobbies } from "./hobbies.model"
import { Skills } from "./skills.model"

export interface Resume {
    firstName: String,
    lastName: String,
    email: { type: String, required: true },
    designation: { type: String, required: true },
    phone: { type: Number, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    skills: Skills[],
    experience: Experience[],
    education: Education[],
    hobbies: Hobbies[]
}