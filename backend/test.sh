#!/bin/bash

BASE_URL="http://localhost:3000"

echo "=== 1. Create a user ==="
curl -s -X POST "$BASE_URL/users" \
  -H "Content-Type: application/json" \
  -d '{"username": "amine", "password": "secret123"}' | tee /tmp/user.json
echo -e "\n"

# Extract the new user's _id (requires jq: sudo apt install jq)
USER_ID=$(cat /tmp/user.json | grep -o '"_id":"[^"]*"' | head -1 | cut -d'"' -f4)
echo "Captured USER_ID=$USER_ID"
echo -e "\n"

echo "=== 2. Get all users ==="
curl -s -X GET "$BASE_URL/users"
echo -e "\n"

echo "=== 3. Get user by id ==="
curl -s -X GET "$BASE_URL/users/$USER_ID"
echo -e "\n"

echo "=== 4. Create a task for this user ==="
curl -s -X POST "$BASE_URL/users/$USER_ID/tasks" \
  -H "Content-Type: application/json" \
  -d '{"desc": "buy groceries"}' | tee /tmp/task.json
echo -e "\n"

TASK_ID=$(cat /tmp/task.json | grep -o '"_id":"[^"]*"' | head -1 | cut -d'"' -f4)
echo "Captured TASK_ID=$TASK_ID"
echo -e "\n"

echo "=== 5. Get all tasks for this user ==="
curl -s -X GET "$BASE_URL/users/$USER_ID/tasks"
echo -e "\n"

echo "=== 8. Try fetching a task with a wrong/fake user id (should 404) ==="
curl -s -X GET "$BASE_URL/users/64b7f000000000000000abcd/tasks/$TASK_ID"
echo -e "\n"

echo "=== 9. Delete the task ==="
curl -s -X DELETE "$BASE_URL/users/$USER_ID/tasks/$TASK_ID"
echo -e "\n"

echo "=== 10. Confirm it's gone (should 404) ==="
curl -s -X GET "$BASE_URL/users/$USER_ID/tasks/$TASK_ID"
echo -e "\n"
