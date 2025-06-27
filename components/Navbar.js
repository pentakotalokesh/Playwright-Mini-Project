export class Navbar {
  constructor(page) {
    this.collegesLink = page.getByRole("link", {
      name: "Colleges",
      exact: true,
    });
    this.schoolsLink = page.getByRole("link", {
      name: "Schools",
      exact: true,
    });
    this.coursesLink = page.getByRole("link", { name: "Courses", exact: true });
    this.examsLink = page.getByRole("link", { name: "Exams", exact: true });
    this.universitiesLink = page.getByRole("link", {
      name: "Universities",
      exact: true,
    });
    this.searchLink = page.getByRole("link", { name: "Search", exact: true });
  }

  async goToSchools() {
    await this.schoolsLink.click();
  }
  async goToColleges() {
    await this.collegesLink.click();
  }
  async goToCourses() {
    await this.coursesLink.click();
  }
  async goToExams() {
    await this.examsLink.click();
  }
  async goToUniversities() {
    await this.universitiesLink.click();
  }
  async goToSearch() {
    await this.searchLink.click();
  }
}
