#! /usr/bin/env python3

import sys
import csv
import json

groups = {}
with open(sys.argv[1], newline='') as f:
    reader = csv.reader(f)
    for row in reader:
        id, description = row
        if id == 'group_id':
            continue
        groups[id] = {'description': description, 'nodes': [], 'links': []}

with open(sys.argv[2], newline='') as f:
    reader = csv.reader(f)
    for row in reader:
        group_id, source, _, target = row
        if group_id == 'group_id':
            continue
        source_node = {'name': source}
        target_node = {'name': target}
        for node in (source_node, target_node):
            if node not in groups[group_id]['nodes']:
                groups[group_id]['nodes'].append(node)
        groups[group_id]['links'].append(
            {'source': groups[group_id]['nodes'].index(source_node),
             'target': groups[group_id]['nodes'].index(target_node),
             'value': 1})

print(json.dumps(list(groups.values()), sort_keys=True, indent=2))
