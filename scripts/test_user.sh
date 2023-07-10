#!/bin/bash

API_URL="http://localhost:4000" 
USERNAME="teste_user 02"
PASSWORD="senha1234"
EMAIL="exemplo@example.com"

curl -X POST -H "Content-Type: application/json" -d '{
  "username": "'"$USERNAME"'",
  "password": "'"$PASSWORD"'",
  "email": "'"$EMAIL"'"
}' $API_URL/users

curl $API_URL/users
