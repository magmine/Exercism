from functools import cmp_to_key

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
            result_team2 = [1, 0, 1, 0, 1]
        
        if len(data.get(match[0], [])) == 0:
            data.setdefault(match[0], result_team1)
        else:
            team1_current_result = data[match[0]]
            data[match[0]] = add_match_result(team1_current_result, result_team1)
        
        if len(data.get(match[1], [])) == 0:
            data.setdefault(match[1], result_team2)
        else:
            team2_current_result = data[match[1]]
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

def compare_func(x, y):
    if x[1][4] < y[1][4]:
        return 1
    elif x[1][4] > y[1][4]:
        return -1

    if x[0] < y[0]:
        return -1
    else:
        return 1

def sort_dict(dict_to_sort: {}):
    # step_1 = dict(sorted(dict_to_sort.items(), key=lambda x: (x[1][4], x[0]), reverse=True))
    # return dict(sorted(step_1.items(), key=lambda x: (x[1][4], x[0])))
    return dict(sorted(dict_to_sort.items(), key=cmp_to_key(compare_func)))

def create_result_table(dict: {}) -> []:
    result_table = []
    results_table_format = '{:31s}|{:^ 4d}|{:^ 4d}|{:^ 4d}|{:^ 4d}|{:>3d}'
    result_table.append("Team                           | MP |  W |  D |  L |  P")
    for team, results in dict.items():
        result_table.append(results_table_format.format(team, *results))
    print(result_table)
    return result_table