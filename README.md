# Modern Walk API

This app aims to replicate the functionality of the mock REST API created for the Modern Walk app created during the Frontend Training program.

## Technolgies Used

- NodeJS + Express

## Architecture

### Entities

- Categories
- Products
- Tenants
- Users

### API Specification

- Base URL: `http://{ host }:{ port }/api`

#### Categories

| Method | Path                 | Description |
| -------| ---------------------| ----------- |
| CREATE | /v1/categories       | Create one new category |
| GET    | /v1/categories       | Find all categories |
| GET    | /v1/categories/{id}  | Find one category by id |
| PUT    | /v1/categories/{id}  | Update one category by id |
| DELETE | /v1/categories/{id}  | Delete one category by id |

#### Products

| Method | Path                 | Description |
| -------| ---------------------| ----------- |
| CREATE | /v1/products         | Create one new product |
| GET    | /v1/products         | Find all products |
| GET    | /v1/products/{id}    | Find one product by id |
| PUT    | /v1/products/{id}    | Update one product by id |
| DELETE | /v1/products/{id}    | Delete one product by id |

#### Tenants

| Method | Path                 | Description |
| -------| ---------------------| ----------- |
| CREATE | /v1/tenants          | Create one new tenant |
| GET    | /v1/tenants          | Find all tenants |
| GET    | /v1/tenants/{id}     | Find one tenant by id |
| PUT    | /v1/tenants/{id}     | Update one tenant by id |
| DELETE | /v1/tenants/{id}     | Delete one tenant by id |

#### Users

| Method | Path                 | Description |
| -------| ---------------------| ----------- |
| CREATE | /v1/users            | Create one new user |
| GET    | /v1/users            | Find all users |
| GET    | /v1/users/{id}       | Find one user by id |
| PUT    | /v1/users/{id}       | Update one user by id |
| DELETE | /v1/users/{id}       | Delete one user by id |
