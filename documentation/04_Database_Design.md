# Database Design

## Entities

### 1. User

| Field | Data Type |
|--------|-----------|
| id | Integer |
| full_name | String |
| email | String |
| password | String |
| role | String |
| date_joined | DateTime |
| is_active | Boolean |

---

### 2. Email

| Field | Data Type |
|--------|-----------|
| id | Integer |
| sender | Foreign Key |
| receiver | Foreign Key |
| subject | String |
| body | Text |
| category | String |
| spam | Boolean |
| priority | String |
| is_read | Boolean |
| sent_at | DateTime |
| is_starred | Boolean |
| is_deleted | Boolean |

---

## Relationship

One User can send many Emails.

One User can receive many Emails.