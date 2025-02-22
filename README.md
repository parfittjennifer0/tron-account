# TRON Account Scripts

This project contains scripts to create and query accounts on the TRON network using `tronweb`.

## Prerequisites

- Node.js and npm installed
- A running TRON node accessible at `http://127.0.0.1:8090`

## Setup

1. Clone this repository:
   ```sh
   git clone https://github.com/parfittjennifer0/tron-account.git
   cd tron-account
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Usage

### Create an Account

To create a new account, run:
```sh
npm run create-account
```

### Query an Account

To query an existing account, run:
```sh
npm run get-account
```

Ensure that the addresses in the scripts are valid and belong to your TRON network setup.