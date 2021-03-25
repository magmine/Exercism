def tally(rows):
    matches = get_matches(rows)
    data = {}

    for match in matches:
        result_team1 = [0, 0, 0, 0, 0];
        result_team2 = [0, 0, 0, 0, 0];
        
        if match[2] == "win":
            result_team1 = [1, 1, 0, 0, 3]
            result_team2 = [1, 0, 0, 1, 0]
        elif match[2] == "loss":
            result_team2 = [1, 1, 0, 0, 3]
            result_team1 = [1, 0, 0, 1, 0]
        else:
            result_team1 = [1, 0, 1, 0, 1]
            result_team2 = result_team1
        
        if len(data.get(match[0], [])) == 0:
            data.setdefault(match[0], result_team1)
            data.setdefault(match[1], result_team2)
        else:
            team1_current_result = data[match[0]]
            team2_current_result = data[match[1]]
            data[match[0]] = add_match_result(team1_current_result, result_team1)
            data[match[1]] = add_match_result(team2_current_result, result_team2)

    sorted_res = sort_dict(data)
    result_table = create_result_table(sorted_res)
    return result_table   
    

def get_matches(rows) -> []:
    matches = []
    for row in rows:
        matches.append(row.split(";"))
    return matches

def add_match_result(current_resutls: [], match_results: []) -> []:
    for i in range(len(current_resutls)):
        current_resutls[i] += match_results[i]
    return current_resutls

def sort_dict(dict_to_sort: {}):
    return dict(sorted(dict_to_sort, key=lambda x: (x[1][0], x[0])))

def create_result_table(dict: {}) -> []:
    result_table = []
    results_table_format = '{:31s}|{:^ 4d}|{:^ 4d}|{:^ 4d}|{:^ 4d}|{:>4d}'
    header_table_format = '{:31s}|{:^4s}|{:^4s}|{:^4s}|{:^4s}|{:>4s}'
    result_table.append(header_table_format.format("Team", "MP", "W", "D", "L", "P"))
    for team, results in dict.items():
        result_table.append(results_table_format.format(team, *results))
    
    return result_table