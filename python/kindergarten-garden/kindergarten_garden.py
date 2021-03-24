from itertools import compress

class Garden:
    symbol_to_plant = {
        'V': 'Violets',
        'R': 'Radishes',
        'C': 'Clover',
        'G': 'Grass'
    }
    students = ["Alice", "Bob", "Charlie", "David", "Eve", "Fred", "Ginny", "Harriet", "Ileana", "Joseph", "Kincaid", "Larry"]

    def __init__(self, diagram: str, students = []):
        self.diagram = diagram
        self.students = students if students else self.students
        self.students = sorted(self.students)

    def plants(self, student: str) -> []:
        student_plants = []
        student_pos = self.students.index(student)
        diagram_lines = self.diagram.split('\n')
        for diagram_line in diagram_lines:
            student_plants.extend(self.get_plants(student_pos, diagram_line))
        return student_plants

    def get_plants(self, position, diagram) -> []:
        symbols = self.get_student_plant_symbols(position, diagram)
        plants = [self.symbol_to_plant[symbol] for symbol in symbols]
        return plants

    def get_student_plant_symbols(self, position: int, diagram: str) -> []:
        return [diagram[2 * position], diagram[(2 * position) + 1]]
