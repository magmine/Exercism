class Matrix:
    def __init__(self, matrix_string):
        self.matrix_string = matrix_string
        self.rows = []
        self.cols = []
        rows_string = matrix_string.split("\n")
        self.rows = self.get_rows_from_string(rows_string)
        self.cols = self.get_columns_from_rows()



    def row(self, index):
        return self.rows[index - 1]

    def column(self, index):
        return self.cols[index - 1]

    def get_rows_from_string(self, rows_string : str) -> []:
        rows = []
        for row_string in rows_string:
            row_string = row_string.strip()
            row_string = row_string.split(" ")
            rows.append([int(num) for num in row_string])
        return rows

    def get_columns_from_rows(self):
        cols = []
        if len(self.rows) == 0:
            return cols
        for i in range(len(self.rows[0])):
            cols.append([row[i] for row in self.rows])
        return cols
