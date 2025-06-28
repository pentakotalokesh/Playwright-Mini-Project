export const schoolFilterData = {
  valid: [
    { syllabus: "CBSE", city: "Pune" },
    { syllabus: "ICSE", city: "Delhi" },
  ],
  invalid: [{ syllabus: "CBSE", city: "FakeCity" }],
};

export const collegeFilterData = {
  valid: [
    { branch: "Architecture", city: "Agra" },
    { branch: "Engineering & Technology", city: "Agra" },
  ],
  invalid: [{ branch: "Doctor", city: "Thai" }],
};

export const coursesFilterData = {
  valid: [{ branch: "Engineering & Technology" }, { branch: "Vocational" }],
};
