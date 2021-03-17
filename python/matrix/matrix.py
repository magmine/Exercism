class Matrix:
    def __init__(self, matrix_string : str):
        self.rows = []
        self.cols = []
        rows_string = matrix_string.split("\n")
        self.get_rows_from_string(rows_string)
        self.get_columns_from_rows()



    def row(self, index : int) -> []:
        return self.rows[index - 1]

    def column(self, index : int) -> []:
        return self.cols[index - 1]

    def get_rows_from_string(self, rows_string : str):
        for row_string in rows_string:
            row_string = row_string.strip()
            row_string = row_string.split(" ")
            self.rows.append([int(num) for num in row_string])

    def get_columns_from_rows(self):
        if len(self.rows) == 0:
            return
        for i in range(len(self.rows[0])):
            self.cols.append([row[i] for row in self.rows])
