class School:
    # How the hell to declare a map that supports int as keys and list of  strings as value
    def __init__(self):
        self.grades = {}

    def add_student(self, name, grade):
        self.grades.setdefault(grade, []).append(name)

    def roster(self):
        result = []
        sorted_grades = sorted(self.grades)
        for grade in sorted_grades:
            result.extend(sorted(self.grades[grade]))
        return result

    def grade(self, grade_number):
        return sorted(self.grades.get(grade_number, []))
